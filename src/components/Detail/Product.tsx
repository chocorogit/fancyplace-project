import React, { useEffect, useState } from 'react';
import * as S from '../../styledComponent/styledDetail/StDetail';
import { typeProduct } from '../../Type/TypeInterface';
import ProductInfo from './ProductInfo';

interface ProductProps {
  product: typeProduct | null;
}

const Product: React.FC<ProductProps> = ({ product }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <S.ProductContainer>
      <S.ProductSection1>
        <S.ProductImgContainer>
          <S.ProductImgContainerSection1>
            <S.ProductImg src={`${product?.img}`} alt="대표이미지" />
            {/* 큰 대표이미지 */}
          </S.ProductImgContainerSection1>
          <S.ProductImgContainerSection2>
            <S.ProductSideImg src={`${product?.img}`} alt="대표이미지 작은거" />
            {/* 대표이미지 작은거 */}
          </S.ProductImgContainerSection2>
        </S.ProductImgContainer>
      </S.ProductSection1>
      {/* 모바일사이즈 일때만 나오는 인포  */}
      {isMobile && (
        <>
          <div style={{ marginTop: '20px' }}></div>
          <ProductInfo product={product} />
        </>
      )}
      <S.ProductSection2>
        <S.ProductTitle>
          <span>상세설명</span>
          <span style={{ border: 'none' }}>상품리뷰(0)</span>
        </S.ProductTitle>
        {/* 디테일 이미지1개는 무조건 들어가서 뒤에껏들은  있으면 나오게 해둿습니다*/}
        <S.ProductDetailImg src={`${product?.contentImg1}`} alt="상품이미지1" />
        {product?.contentImg2 && (
          <>
            <S.ProductDetailImg
              src={`${product?.contentImg2}`}
              alt="상품이미지2"
            />
            {product?.contentImg3 && (
              <S.ProductDetailImg
                src={`${product?.contentImg3}`}
                alt="상품이미지3"
              />
            )}
          </>
        )}
      </S.ProductSection2>
    </S.ProductContainer>
  );
};

export default Product;
