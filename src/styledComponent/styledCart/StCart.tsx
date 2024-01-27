import styled from 'styled-components';

export const CartContainer = styled.div`
  width: 100%;
  /* height: 0.433; */
  background: #f9f9f9;
  flex-shrink: 0;

  input[type='checkbox'] {
    display: none;
  }
  input[type='checkbox']:checked + label:before {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    content: url('img/common/checked.svg');
    width: 20px;
    height: 20px;
    border-radius: 2px;
  }

  label {
    width: 20px;
    height: 20px;
    border-radius: 2px;
    border: 1px solid #d9d9d9;
    position: relative;
  }
`;

export const Cart = styled.div`
  height: 900px;
  top: 112px;
  padding: 0 2.5rem 0 8.75rem;
  display: flex;
  flex-direction: column;
  .allArea {
    display: flex;
    gap: 10px;
    margin: 0 auto;
  }
`;
export const CartTitle = styled.div`
  width: 100%;
  max-width: 1070px;
  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 40px auto 20px;
  display: flex;
  justify-content: space-between;
`;
export const Process = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #999;
    font-size: 16px;
    font-weight: 400;
  }
  span:first-child {
    color: #000;
    font-size: 16px;
    font-weight: 600;
  }
`;
export const LeftArea = styled.div`
  width: 720px;
  height: 100%;
  border-radius: 10px;
  border: 1px solid #efefef;
  background: #fff;
  padding: 20px;

  .artistName {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 20px;
    padding-bottom: 20px;
  }

  .titleWrapper {
    display: flex;
    flex-direction: column;
  }
  .circleArea {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding-right: 56px;
  }
  .circle {
    width: 22px;
    height: 22px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .title {
    width: 360px;
    color: #333;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .productprice {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const RightArea = styled.div`
  width: 320px;
  min-height: 320px;
  padding: 20px;
  border-radius: 10px;
  background: #fff;
  padding: 20px;

  .paymentInfo {
    color: #333;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 20px;
  }
`;

export const PaymentInfo = styled.h2`
  font-size: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid #d9d9d9;
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  h3 {
    color: #999;
    font-weight: 500;
  }
  span {
    font-size: 16px;
    color: #333;
    font-weight: 500;
  }
  h2 {
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-size: 16px;
    color: #333;
    font-weight: 600;
    border-top: 1px solid #d9d9d9;
    padding: 20px 0 30px;
  }
  h2 span {
    font-size: 20px;
  }
`;
export const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px 0;
`;

export const PaymentButton = styled.button`
  width: 100%;
  height: 48px;
  text-align: center;
  flex-shrink: 0;
  border-radius: 28px;
  background: #000;
  color: #fff;
`;
export const CartList = styled.ul`
  gap: 20px;
  li:first-child {
    border-top: 1px solid #d9d9d9;
  }
  li {
    border-top: 1px solid #e9e9e9;
  }
`;

export const CartWrapper = styled.li`
  display: flex;
  padding: 20px 0;
`;
export const Image = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 5px;
  border: 1px solid #efefef;
  margin-left: 20px;
  margin-right: 20px;
  background:
    url(<path-to-image>),
    lightgray 50% / cover no-repeat;
`;

export const TotalAmount = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  .amount1 {
    /* display: flex;
    justify-content: space-between;
    padding: 20px; */
  }
`;
