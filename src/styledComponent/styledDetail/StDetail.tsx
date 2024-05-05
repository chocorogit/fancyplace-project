import styled from 'styled-components';

export const DtailContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  overflow: auto;
  margin-top: 2.5rem;
  padding: 0 2.5rem 0 8.75rem;
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  @media (max-width: 1024px) {
    width: 100%;
    padding: 0 0.5rem 0 6.75rem;
  }

  @media (max-width: 768px) {
    padding: 2.5rem;
  }
  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`;

export const ProductSection1 = styled.section``;

export const ProductImg = styled.img`
  width: 100%;
  height: 100%;
  max-width: 500px;
  max-height: 500px;
  border-radius: 8px;
`;
export const ProductSideImg = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 4px;
`;
export const ProductImgContainer = styled.div``;
export const ProductImgContainerSection1 = styled.section``;
export const ProductImgContainerSection2 = styled.section`
  margin-top: 20px;
`;

export const ProductContainer = styled.div`
  width: 51.85%;
  max-width: 520px;
  height: 100%;
  margin-right: 30px;
  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    margin-right: 0;
  }
`;

export const ProductSection2 = styled.section`
  padding: 20px 0;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    padding: 0px;
  }
`;

export const DetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  background: var(--color-light-gray-f5);
  border-radius: 8px;
  margin: 40px 0 100px;
  padding: 24px;
  line-height: 1.6;
  font-size: 14px;
  text-align: left;
  color: var(--color-primary-medium-55);
`;
export const PWrapper = styled.div`
  p {
    color: var(--color-primary-medium-99);
    b {
      color: var(--color-primary-medium-55);
      font-weight: 500;
    }
  }
`;
export const ProductTitle = styled.h1`
  display: flex;
  gap: 20px;
  font-size: 30px;
  font-weight: normal;

  padding-top: 20px;
  font-size: 16px;
  border-bottom: 1px solid var(--color-light-gray-e9);
  margin-bottom: 30px;
  button {
    padding: 16px 20px;
    cursor: pointer;
    color: var(--color-primary-medium-77);
  }
`;

export const ProductDetailImg = styled.img`
  display: block;
  width: 100%;
  justify-content: center;
  margin: 0 auto;
`;

export const ProductInfoContainer = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  width: 39.89%;
  max-width: 440px;
  height: 100%;
  display: block;
  flex-direction: column;
  overflow: auto;
  @media (max-width: 768px) {
    position: none;
    width: 100%;
    height: auto;
    max-width: 100%;
  }
`;

export const ProductInfoSection1 = styled.section`
  width: 100%;
`;
export const ProductInfoSection1_1 = styled.section`
  color: var(--color-medium-gray-aa);
  padding: 0 0 10px 0;
  font-size: 12px;
  border-bottom: 1px solid var(--color-light-gray-e9);
`;
export const ProductInfoSection1_2 = styled.section`
  margin-top: 20px;
  h1 {
    font-size: 18px;
    line-height: 1.2;
    color: var(--color-primary);
  }
  h4 {
    font-size: 14px;
    line-height: 1.5;
    color: var(--color-medium-gray-aa);
    font-weight: normal;
  }
`;
export const ProductInfoSection1_3 = styled.section`
  margin-top: 24px;

  h3 {
    color: var(--color-primary-medium-33);
    font-size: 20px;
    font-weight: 700;
  }
  > div {
    display: flex;
    gap: 10px;
    align-items: baseline;
    span {
      color: #ff6565;
      font-size: 18px;
      font-weight: 600;
    }
    h3 {
      color: var(--color-primary-medium-33);
      font-size: 20px;
      font-weight: 700;
    }
    p {
      color: rgba(190, 190, 190, 0.93);
      font-size: 14px;
      font-weight: 400;
      text-decoration: line-through;
    }
  }
`;
export const ProductInfoSection2 = styled.section`
  padding-top: 24px;
  width: 100%;
`;
export const ProductInfoSection2_1 = styled.section`
  padding-bottom: 16px;
  ul {
    font-size: 14px;
    color: var(--color-primary-medium-77);
  }
  h1 {
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 4px;
    color: var(--color-primary-medium-77);
  }
  li {
    display: flex;
    padding-top: 8px;
    gap: 30px;
    font-weight: normal;
  }
  li > span {
    display: inline-block;
    min-width: 38px;
    color: var(--color-primary-medium-77);
  }
  li > span:last-child {
    color: var(--color-primary-medium-99);
  }
  span {
    line-height: normal;
  }
`;
export const ProductInfoSection2_2 = styled.section`
  padding-bottom: 16px;
`;
export const ProductInfoSection2_2CartBox = styled.div`
  background-color: var(--color-light-gray-f7);
  padding: 16px;
  border-radius: 10px;
`;
export const ProductInfoSection2_2CartBoxSection1 = styled.section`
  margin-bottom: 20px;
  line-height: 1.5;
  p {
    font-size: 14px;
    color: var(--color-primary-medium-99);
  }

  @media (max-width: 768px) {
  }
`;
export const ProductInfoSection2_2CartBoxSection2 = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-size: 14px;
    color: var(--color-primary);
  }
  p {
    color: var(--color-primary);
  }
`;

export const ProductInfoBtn = styled.button`
  border-radius: 70px;
  margin-left: 10px;
  border: 1px solid #dedddd;
  color: #dedddd;
  background-color: var(--color-white);
  text-align: center;
  width: 22px;
  height: 22px;
  &:first-child {
    margin-left: 0;
    margin-right: 10px;
  }
`;
export const ProductInfoSection2_3 = styled.section`
  justify-content: right;
  padding: 0 0 40px;
`;
export const ProductInfoSection3 = styled.section`
  width: 100%;
  height: 240px;
  display: flex;
  flex-direction: column;
  text-align: center;

  font-size: 16px;
  font-weight: 800;
  @media (max-width: 768px) {
    height: auto;
    margin-bottom: 40px;
  }
`;
export const ProductInfoSection3_1 = styled.section`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;
export const ProductInfoSection3Btn1 = styled.button`
  border-radius: 30px;
  width: 100%;
  height: 48px;
  margin: 0 auto;
  font-size: 16px;
  font-weight: normal;
  background-color: var(--color-primary-medium-33);
  color: var(--color-white);
  box-sizing: border-box;
  transition: all 200ms;
  &:hover {
    background-color: var(--color-primary-medium-33);
  }
  &:active {
    transform: scale(1.008);
  }
`;
export const ProductInfoSection3Btn2 = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 50%;
  height: 48px;
  border-radius: 30px;
  font-weight: normal;
  color: var(--color-primary);
  border: 1px solid var(--color-medium-gray-aa);
  background-color: var(--color-white);
  box-sizing: border-box;
  transition: all 200ms;
  &:hover {
    background: var(--color-medium-gray-ee);
  }
  &:active {
    transform: scale(1.008);
  }
  @media screen and (max-width: 1024px) {
    font-size: 14px;
  }
`;
export const ProductP = styled.div`
  display: flex;
  gap: 24px;
  justify-content: flex-end;
  text-align: right;
  align-items: baseline;
  span {
    color: var(--color-primary-medium-99);
    font-size: 14px;
  }
`;
export const ProductH1 = styled.h1`
  font-size: 18px;
  color: var(--color-primary);
`;
export const ProductInfoSection3Btn3 = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 50%;
  height: 48px;
  border-radius: 30px;
  font-weight: normal;
  color: var(--color-accent);
  border: 1px solid var(--color-accent);
  box-sizing: border-box;
  transition: all 200ms;
  &:hover {
    background: #f2f1ff;
  }
  &:active {
    transform: scale(1.008);
  }
  @media screen and (max-width: 1024px) {
    font-size: 14px;
  }
`;

export const DetailReviewContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 100px;
`;
export const DetailReviewInPut = styled.textarea`
  flex: 1;
  width: 100%;
  min-height: 160px;
  padding: 16px;
  color: var(--color-primary-medium-55);
  background: none;
  font-size: 14px;
  font-weight: normal;
  border-radius: 5px;
  border: 1px solid var(--color-medium-gray-dd);
  resize: none;
  outline: none;

  &:focus {
    border: 1px solid var(--color-accent);
  }
`;
export const DetailReviewRatingInput = styled.input`
  /* 라디오타입의 인풋박스 */
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid var(--color-primary-medium-99);
  padding: 20px;
  font-size: 16px;
  font-weight: 800;

  &:focus {
    outline: 1px solid var(--color-primary-medium-99);
  }
`;
export const DetailReviewRatingLabel = styled.label`
  color: #ccc;
  &:hover {
    color: #fc0;
  }
`;

export const DetailReviewBtn = styled.button`
  width: 100%;
  height: 48px;
  margin-top: 10px;
  border-radius: 24px;
  font-size: 14px;
  font-weight: normal;
  background-color: var(--color-primary);
  transition: all 0.2s;
  color: var(--color-white);
  &:hover {
    color: var(--color-white);
    background-color: var(--color-primary-medium-33);
  }
`;
export const DetailReviewRating = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const DetailReviewForm = styled.form`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  h2 {
    font-size: 1.125rem;
    margin: 10px 0;
  }
  p {
    font-size: 0.875rem;
  }
`;
export const DetailReviewFormSection1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 10px;
  margin-top: 24px;
  h4 {
    font-weight: normal;
    font-size: 14px;
    color: var(--color-primary-medium-77);
  }
`;
export const DetailReviewList = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 20px;
  padding: 20px;
  width: 100%;
  height: 100%;
`;

export const DetailReviewContent = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  padding: 20px;
  background-color: var(--color-light-gray-f7);
  border-radius: 8px;
  @media (max-width: 768px) {
    gap: 10px;
  }
`;
export const DetailReviewContentSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: calc(100% - 60px);
`;
export const DetailReviewContentSection1 = styled.div`
  display: flex;
  flex-direction: column;
`;
export const DetailReviewContentSection1_1 = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 8px;
  @media (max-width: 768px) {
    align-items: start;
  }
`;
export const DetailReviewContentSection1_2 = styled.div`
  display: flex;
  flex-direction: column;
`;
export const DetailReviewContentSection2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  & p {
    width: 100%;
    color: var(--color-primary-medium-55);
    line-height: 1.3;
    word-wrap: break-word;
    word-break: keep-all;
    white-space: pre-line;
  }
`;
export const DetailReviewImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

export const DetailReviewDeleteBtn = styled.button`
  width: 40px;
  height: 20px;
  border-radius: 30px;
  font-weight: normal;
  transition: all 0.2s;

  @media (max-width: 768px) {
    width: 30px;
  }
  @media (max-width: 480px) {
    width: 30px;
  }
`;
export const DetailReviewerNameH1 = styled.h1`
  width: 100%;
  font-size: 16px;
  text-align: left;
  font-weight: normal;

  @media (max-width: 1024px) {
    font-size: 14px;
  }
  @media (max-width: 768px) {
    width: 150px;
  }
  @media (max-width: 480px) {
    width: 60px;
  }
`;
export const DetailReviewercreatedAtP = styled.p`
  width: 100%;
  font-size: 12px;
  text-align: right;
  color: var(--color-primary-medium-99);
`;
