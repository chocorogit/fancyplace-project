import * as S from '../../src/styledComponent/styledPayment/stPayment';
import PaymentInfo from 'components/Cart/PaymentInfo';
import TossApi from 'components/payment/TossApi';
import useCartList from 'hooks/useCartList';
import ProgressIndicator from 'components/Cart/ProgressIndicator';
import CartListInfo from 'components/Cart/CartListInfo';
import { TypeCart } from 'Type/TypeInterface';

const getTotalPrice = (cartList: TypeCart[]) => {
  let totalPrice = 0;
  for (let i = 0; i < cartList.length; i++) {
    totalPrice += cartList[i].price * cartList[i].quantity;
  }
  return totalPrice;
};

const PaymentPage = () => {
  const title = '주문결제';
  //아래부분 수정예정
  const { cartList, setCartList } = useCartList();
  const totalPrice = getTotalPrice(cartList);
  if (cartList.length === 0) return null;

  //주문금액이 5만원이하면 배송비 3000원붙음
  const shippingCost = totalPrice <= 50000 ? 3000 : 0;
  const totalPayment = totalPrice + shippingCost;

  //윗부분 수정예정
  return (
    <>
      <S.PaymentContainer>
        <S.Payment>
          <ProgressIndicator title={title} />
          <S.Wrapper>
            <CartListInfo
              cartList={cartList}
              setCartList={setCartList}
              totalPrice={totalPrice}
              shippingCost={shippingCost}
              totalPayment={totalPayment}
              hasCheckbox={false}
            />
            <S.PaymentSection>
              <S.Address>
                <h3>배송지</h3>
                <S.InfoWrapper>
                  <h4>이름</h4>
                  <span>전화번호</span>
                  <p>주소</p>
                </S.InfoWrapper>
              </S.Address>
              <S.ApiWrapper>
                <TossApi />
              </S.ApiWrapper>
            </S.PaymentSection>
            <PaymentInfo
              cartList={cartList}
              totalPrice={totalPrice}
              shippingCost={shippingCost}
              totalPayment={totalPayment}
            />
          </S.Wrapper>
        </S.Payment>
      </S.PaymentContainer>
    </>
  );
};

export default PaymentPage;
