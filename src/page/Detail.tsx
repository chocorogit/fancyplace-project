import React, { useEffect } from 'react';
import * as S from '../styledComponent/styledDetail/StDetail';
import Product from 'components/Detail/Product';
import ProductInfo from 'components/Detail/ProductInfo';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/configStore';
import { setProduct } from '../redux/modules/Detail/DetailSlice';
import { collection, getDocs } from 'firebase/firestore';
import Productlist from 'components/Detail/Productlist';
const Detail = () => {
  const dispatch = useDispatch();
  const selectedProduct = useSelector(
    (state: RootState) => state.goods.selectedProduct,
  );
  //새로고침할때마다 상품정보가 사라지는것을 방지하려고 세션스토리지에 저장합니다 !
  useEffect(() => {
    if (!selectedProduct) {
      const storedProduct = sessionStorage.getItem('selectedProduct');
      if (storedProduct) {
        dispatch(setProduct(JSON.parse(storedProduct)));
      }
    }
  }, [dispatch]);

  useEffect(() => {
    if (selectedProduct) {
      sessionStorage.setItem(
        'selectedProduct',
        JSON.stringify(selectedProduct),
      );
    }
  }, [selectedProduct]);

  return (
    <S.DtailContainer>
      <Product product={selectedProduct} />
      <ProductInfo product={selectedProduct} />
      {/* <Productlist product={selectedProduct} /> */}
    </S.DtailContainer>
  );
};

export default Detail;
