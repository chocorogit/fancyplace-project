import styled from 'styled-components';

export const Div = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
`;

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  flex-grow: 20;
  margin-bottom: 40px;
`;
export const CarouselWrapper = styled.div`
  position: relative;
`;

export const Slide = styled.div`
  position: relative;
  width: 25%;
  margin: 0 1rem;
  margin-top: 40px;
`;

export const SlideContainer = styled.div`
  display: flex;
  /* overflow: hidden; */
  flex-grow: 20;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-bottom: 40px;
  width: 100%;
`;
export const Title = styled.h2`
  color: #333;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px; /* 125% */
  letter-spacing: -0.96px;
  margin-bottom: 10px;
  height: 40px;
  background: lightgray 50% / cover no-repeat;
  width: 100px;
`;
export const TitleText = styled.p`
  color: #555;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  height: 24px;
  background: lightgray 50% / cover no-repeat;
  width: 50px;
`;
export const Img = styled.div`
  width: 270px;
  height: 270px;
  border-radius: 8px;
  background: lightgray 50% / cover no-repeat;
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.08);
`;

export const SlideInTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;
export const Artist = styled.p`
  width: 50px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 171.429% */
  background: lightgray 50% / cover no-repeat;
  height: 24px;
  margin-bottom: 10px;
`;

export const ProductTitle = styled.h1`
  color: #333;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  margin-bottom: 10px;
  width: 250px;
  height: 24px;
  background: lightgray 50% / cover no-repeat;
`;

export const ReleaseDate = styled.p`
  color: #555;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px; /* 100% */
  margin-bottom: 20px;
  width: 100px;
  height: 14px;
  background: lightgray 50% / cover no-repeat;
`;
//가격
export const Price = styled.p`
  color: #333;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 133.333% */
  width: 100px;
  height: 24px;
  background: lightgray 50% / cover no-repeat;
`;

export const CarouselRange = styled.input`
  width: 100%;
  -webkit-appearance: none;
  background: #b4b4b4;
  margin: 0 auto;
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
  }

  &::-webkit-slider-thumb {
    border: 1px solid #000000;
    width: 100px;

    background: #000000;
    cursor: pointer;
    box-shadow:
      1px 1px 1px #000000,
      0px 0px 1px #0d0d0d;
    transition:
      background 0.5s ease-in-out,
      border 0.5s ease-in-out,
      left 0.5s ease-in-out;
    -webkit-appearance: none;
  }
`;

export const ButtonPrev = styled.button`
  width: 50px;
  height: 50px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.06);
  background-color: #000;
  border-radius: 50%;
  position: absolute;
  top: 150px;
  left: -10px;
  z-index: 1;
`;
export const ButtonNext = styled.button`
  width: 50px;
  height: 50px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.06);
  background-color: #000;
  border-radius: 50%;
  position: absolute;
  top: 150px;
  right: -10px;
  z-index: 1;
`;
export const BtnImg = styled.img`
  display: block;
  margin: auto;
  width: 32px;
  height: 32px;
`;