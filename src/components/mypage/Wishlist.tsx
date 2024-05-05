import React, { useEffect, useState } from 'react';
import * as S from '../../styledComponent/styledMypage/StWishlist';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/configStore';
import {
  setSelectedProduct,
  setWishlistR,
} from '../../redux/modules/GoodsList/GoodsListSlice';
import { auth } from '../../firebase/config';
import Swal from 'sweetalert2';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null);

  const dispatch = useDispatch();
  const userInfo = useSelector(
    (state: RootState) => state.signUpSlice.userInfo,
  );
  const user = auth.currentUser;

  useEffect(() => {
    if (userInfo?.uid) {
      const storedItems = localStorage.getItem(`wishlist_${user?.uid}`);
      if (storedItems) {
        setWishlist(JSON.parse(storedItems));
        dispatch(setWishlistR(wishlist.length));
      }
    }
  }, [userInfo]);

  const handleDeleteConfirmation = (index: number) => {
    Swal.fire({
      title: '삭제하시겠습니까?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: '삭제',
      cancelButtonText: '취소',
    }).then((result) => {
      if (result.isConfirmed) {
        setDeleteIndex(index);
        dispatch(setWishlistR(wishlist.length - 1));
      }
    });
  };

  useEffect(() => {
    if (deleteIndex !== null) {
      const updatedWishlist = wishlist.filter(
        (item, index) => index !== deleteIndex,
      );
      setWishlist(updatedWishlist);
      localStorage.setItem(
        `wishlist_${user?.uid}`,
        JSON.stringify(updatedWishlist),
      );
      Swal.fire({
        icon: 'success',
        title: '항목이 삭제되었습니다.',
        confirmButtonText: '확인',
        confirmButtonColor: '#000',
      }).then(() => {
        setDeleteIndex(null);
      });
    }
  }, [deleteIndex]);

  return (
    <S.WishlistWrapper>
      <S.TitleWrapper>
        <div>
          <h3>위시리스트</h3>
        </div>
      </S.TitleWrapper>

      <S.RecentContainer>
        <S.RecentList>
          {wishlist.length > 0 ? (
            wishlist.map((list: any, index: number) => (
              <React.Fragment key={list.id}>
                <S.List>
                  <S.StyledLink
                    to={`/Detail/${list?.productId}`}
                    style={{ textDecoration: 'none', color: 'black' }}
                    onClick={() => {
                      dispatch(setSelectedProduct(list));
                    }}
                  >
                    <div>
                      <S.imgWrapper>
                        <S.Img src={list?.img} alt={`Slide ${index}`} />
                      </S.imgWrapper>
                      <S.ListInTextDiv>
                        <S.Artist>{list?.artist}</S.Artist>
                        <S.ProductTitle>{list?.title}</S.ProductTitle>
                        <S.ReleaseDate>
                          발매일&nbsp;&nbsp;
                          {list?.releaseDate || '2024-02-12'}
                        </S.ReleaseDate>
                        <S.Price>
                          {list?.salePrice ? (
                            <div>
                              <span>
                                {Math.floor(
                                  ((list?.price - list?.salePrice) /
                                    list?.price) *
                                    100,
                                )}
                                %
                              </span>
                              <h3>{list.salePrice.toLocaleString()}원</h3>
                              <p>{list.price.toLocaleString()}원</p>{' '}
                              {/* 변경 */}
                            </div>
                          ) : (
                            <p>{list?.price.toLocaleString()}원</p>
                          )}
                        </S.Price>
                      </S.ListInTextDiv>
                    </div>
                  </S.StyledLink>
                  <S.DeleteButton
                    onClick={() => handleDeleteConfirmation(index)}
                  >
                    위시리스트에서 삭제하기
                  </S.DeleteButton>
                </S.List>
              </React.Fragment>
            ))
          ) : (
            <S.WishiEmpty>
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.625 10C11.3094 10 7 14.0174 7 18.9728C7 27.9456 18.375 36.1027 24.5 38C30.625 36.1027 42 27.9456 42 18.9728C42 14.0174 37.6906 10 32.375 10C29.12 10 26.2412 11.5066 24.5 13.8126C23.6125 12.6341 22.4334 11.6723 21.0626 11.0086C19.6918 10.345 18.1696 9.99898 16.625 10Z"
                  stroke="var(--color-primary)"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <h2>
                추가된
                <span> 위시리스트 상품</span>이 없습니다
              </h2>
              <p>
                원하는 상품 페이지에서 상품들을 <br />
                위시리스트에 추가해보세요!
              </p>
              <S.ToGoodsListLink to={'/GoodsList/New'}>
                실시간 신상품 보러가기
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.00008 18.0001C8.99962 17.7664 9.081 17.54 9.23008 17.3601L13.7101 12.0001L9.39008 6.63006C9.30701 6.52778 9.24498 6.41008 9.20755 6.28374C9.17012 6.1574 9.15803 6.02491 9.17196 5.89388C9.1859 5.76285 9.2256 5.63587 9.28877 5.52024C9.35195 5.4046 9.43735 5.30259 9.54008 5.22006C9.64237 5.137 9.76006 5.07497 9.8864 5.03754C10.0127 5.0001 10.1452 4.98801 10.2763 5.00195C10.4073 5.01589 10.5343 5.05559 10.6499 5.11876C10.7655 5.18193 10.8676 5.26734 10.9501 5.37006L15.7801 11.3701C15.9272 11.549 16.0076 11.7734 16.0076 12.0051C16.0076 12.2367 15.9272 12.4611 15.7801 12.6401L10.7801 18.6401C10.6961 18.7413 10.593 18.825 10.4767 18.8864C10.3603 18.9477 10.233 18.9855 10.1021 18.9976C9.97107 19.0097 9.839 18.9958 9.7134 18.9568C9.58779 18.9177 9.47113 18.8543 9.37008 18.7701C9.25537 18.677 9.16269 18.5597 9.09872 18.4266C9.03474 18.2934 9.00106 18.1478 9.00008 18.0001Z"
                    fill="var(--color-primary)"
                  />
                </svg>
              </S.ToGoodsListLink>
            </S.WishiEmpty>
          )}
        </S.RecentList>
      </S.RecentContainer>
    </S.WishlistWrapper>
  );
};

export default Wishlist;
