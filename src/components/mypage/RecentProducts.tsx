import React, { useEffect, useState } from 'react';
import * as S from '../../styledComponent/styledMypage/StRecentProducts';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/configStore';
import * as St from '../../styledComponent/styledMain/StMainCarousel';
import { Link } from 'react-router-dom';
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
  console.log('recentProducts', recentProducts);
  return (
    <S.RecentProductsWrapper>
      <S.TitleWrapper>
        <div>
          <h3>최근 본 상품</h3>
          <p>{userInfo?.displayName}님께서 최근 본 상품입니다.</p>
        </div>
      </S.TitleWrapper>
      <St.SlideContainer>
        {recentProducts.map((list: any, index: number) => (
          <>
            <St.Slide key={index}>
              <Link
                to={`/Detail/${list.productId}`}
                style={{ textDecoration: 'none', color: 'black' }}
                onClick={() => {
                  dispatch(setSelectedProduct(list));
                }}
              >
                <St.Img src={list.img} alt={`Slide ${index}`} />
                <St.SlideInTextDiv>
                  <St.Artist>{list.artist}</St.Artist>
                  <St.ProductTitle> {list.title}</St.ProductTitle>
                  <St.ReleaseDate>발매일</St.ReleaseDate>
                  <St.Price>{list.price} 원</St.Price>
                </St.SlideInTextDiv>
              </Link>
            </St.Slide>
          </>
        ))}
      </St.SlideContainer>
    </S.RecentProductsWrapper>
  );
};

export default RecentProducts;
