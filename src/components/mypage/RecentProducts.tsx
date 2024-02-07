import React, { useEffect, useState } from 'react';
import * as S from '../../styledComponent/styledMypage/StRecentProducts';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/configStore';
import { setSelectedProduct } from '../../redux/modules/GoodsList/GoodsListSlice';
const RecentProducts = () => {
  const [recentProducts, setRecentProducts] = useState([]);
  const dispatch = useDispatch();
  const userInfo = useSelector(
    (state: RootState) => state.signUpSlice.userInfo,
  );
  useEffect(() => {
    if (userInfo?.uid) {
      const storedItems = localStorage.getItem(`${userInfo.uid}`);
      if (storedItems) {
        setRecentProducts(JSON.parse(storedItems));
      }
    }
  }, [userInfo]);
  return (
    <S.RecentProductsWrapper>
      <S.TitleWrapper>
        <div>
          <h3>최근 본 상품</h3>
          <p>{userInfo?.displayName}님께서 최근 본 상품입니다.</p>
        </div>
      </S.TitleWrapper>

      <S.RecentContainer>
        <S.RecentList>
          {recentProducts.map((list: any, index: number) => (
            <>
              <S.List key={index}>
                <S.StyledLink
                  to={`/Detail/${list?.productId}`}
                  style={{ textDecoration: 'none', color: 'black' }}
                  onClick={() => {
                    dispatch(setSelectedProduct(list));
                  }}
                >
                  <S.imgWrapper>
                    <S.Img src={list?.img} alt={`Slide ${index}`} />
                  </S.imgWrapper>
                  <S.ListInTextDiv>
                    <S.Artist>{list?.artist}</S.Artist>
                    <S.ProductTitle> {list?.title}</S.ProductTitle>
                    <S.ReleaseDate>
                      발매일&nbsp;&nbsp;
                      {list?.releaseDate || '2024-02-12'}
                    </S.ReleaseDate>
                    <S.Price>
                      {list?.salePrice ? (
                        <div>
                          <span>
                            {Math.floor(
                              ((list?.price - list?.salePrice) / list?.price) *
                                100,
                            )}
                            %
                          </span>
                          <h3>{list.salePrice.toLocaleString()}원</h3>
                          <p>{list.price.toLocaleString()}원</p>
                        </div>
                      ) : (
                        <p>{list?.price.toLocaleString()}원</p>
                      )}
                    </S.Price>
                  </S.ListInTextDiv>
                </S.StyledLink>
              </S.List>
            </>
          ))}
        </S.RecentList>
      </S.RecentContainer>
    </S.RecentProductsWrapper>
  );
};

export default RecentProducts;
