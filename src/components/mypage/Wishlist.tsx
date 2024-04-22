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
                원하는 상품 페이지에서 상품을 <br />
                위시리스트에 추가해보세요!
              </p>
            </S.WishiEmpty>
          )}
        </S.RecentList>
      </S.RecentContainer>
    </S.WishlistWrapper>
  );
};

export default Wishlist;
