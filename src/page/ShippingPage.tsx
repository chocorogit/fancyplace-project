import MyPageLayout from 'components/layout/MyPageLayout';
import React, { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import * as S from 'styledComponent/styledMypage/StShipping';
import { User } from '@firebase/auth';
import { useModal } from 'hooks/useModal';
import ShippingRegisterModal from 'components/mypage/ShippingRegisterModal';
import { RootState } from 'redux/configStore';
import { deleteDoc, doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import Swal from 'sweetalert2';
import { useGetAddresses } from 'hooks/useGetAddresses';
import { setAddresses } from '../redux/modules/shipping/shippingSlice';

interface ModalState {
  visible: boolean;
  shippingModalVisible: boolean;
}
interface Address {
  addressName: string;
  recipient: string;
  phoneNumber: string;
  address: string;
  detailAddress: string;
}
const ShippingPage = () => {
  const { openModalHandler } = useModal();
  const { getAddresses } = useGetAddresses();
  const dispatch = useDispatch(); // useDispatch 추가
  const userData = useSelector((state: RootState) => state.signUpSlice);

  // const [addressesData, setAddressesData] = useState<string[]>([]);
  const { addresses } = useSelector(
    (state: RootState) => state.shippingSlice,
    shallowEqual,
  );
  // console.log('addresses 값은?', addresses);
  useEffect(() => {
    getAddresses();
  }, [addresses]);

  const addHyphenHannddler = (phoneNumber: string | null) => {
    if (phoneNumber) {
      return phoneNumber.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
    } else {
      return '';
    }
  };
  const hyphenDefaultPhoneNumber = addHyphenHannddler(userData.phoneNumber);

  const modal = useSelector(
    (state: { modalSlice: ModalState }) => state.modalSlice,
  );

  const deleteAddressHandler = async (docId: string) => {
    console.log('docId', docId);
    if (docId) {
      const confirmDelete = await Swal.fire({
        title: '배송지를 삭제하시겠습니까?',
        icon: 'warning',
        showCancelButton: true,
        cancelButtonText: '취소하기',
        confirmButtonText: '삭제하기',
      });

      if (confirmDelete.isConfirmed) {
        const addressRef = doc(db, 'addresses', docId);
        await deleteDoc(addressRef);
        // 주소 삭제 후 addresses를 다시 가져옴
        getAddresses().then((data) => {
          dispatch(setAddresses(data));
        });
        Swal.fire({
          icon: 'success',
          title: '배송지가 삭제 되었습니다!',
          confirmButtonText: '확인',
          confirmButtonColor: '#000',
        });
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: '배송지 삭제 중 오류가 발생했습니다.',
        confirmButtonText: '확인',
        confirmButtonColor: '#000',
      });
    }
  };
  return (
    <MyPageLayout>
      <S.ShippingWrapper>
        <S.ShippingList>
          <S.TitleWrapper>
            <div>
              <h3>배송지 관리</h3>
            </div>

            <S.AddButton onClick={() => openModalHandler(true)}>
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.46628 2.56664C7.46628 2.44287 7.41711 2.32418 7.32959 2.23666C7.24208 2.14914 7.12338 2.09998 6.99961 2.09998C6.87584 2.09998 6.75714 2.14914 6.66963 2.23666C6.58211 2.32418 6.53294 2.44287 6.53294 2.56664V6.53331H2.56628C2.44251 6.53331 2.32381 6.58248 2.23629 6.66999C2.14878 6.75751 2.09961 6.87621 2.09961 6.99998C2.09961 7.12374 2.14878 7.24244 2.23629 7.32996C2.32381 7.41748 2.44251 7.46664 2.56628 7.46664H6.53294V11.4333C6.53294 11.5571 6.58211 11.6758 6.66963 11.7633C6.75714 11.8508 6.87584 11.9 6.99961 11.9C7.12338 11.9 7.24208 11.8508 7.32959 11.7633C7.41711 11.6758 7.46628 11.5571 7.46628 11.4333V7.46664H11.4329C11.5567 7.46664 11.6754 7.41748 11.7629 7.32996C11.8504 7.24244 11.8996 7.12374 11.8996 6.99998C11.8996 6.87621 11.8504 6.75751 11.7629 6.66999C11.6754 6.58248 11.5567 6.53331 11.4329 6.53331H7.46628V2.56664Z"
                  fill="var(--color-white)"
                />
              </svg> */}
              배송지 추가하기
            </S.AddButton>
          </S.TitleWrapper>
          <S.GuideLetter>
            📢 기본 배송지는 정보 수정에서 수정 가능합니다!
          </S.GuideLetter>
          <S.TableWrapper>
            <S.TableHead>
              <ul>
                <li>배송지</li>
                <li>받는 분</li>
                <li>주소</li>
                <li>연락처</li>
                <li>삭제</li>
              </ul>
            </S.TableHead>
            <S.TableBody>
              <S.MobileAddButton onClick={() => openModalHandler(true)}>
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.46628 2.56664C7.46628 2.44287 7.41711 2.32418 7.32959 2.23666C7.24208 2.14914 7.12338 2.09998 6.99961 2.09998C6.87584 2.09998 6.75714 2.14914 6.66963 2.23666C6.58211 2.32418 6.53294 2.44287 6.53294 2.56664V6.53331H2.56628C2.44251 6.53331 2.32381 6.58248 2.23629 6.66999C2.14878 6.75751 2.09961 6.87621 2.09961 6.99998C2.09961 7.12374 2.14878 7.24244 2.23629 7.32996C2.32381 7.41748 2.44251 7.46664 2.56628 7.46664H6.53294V11.4333C6.53294 11.5571 6.58211 11.6758 6.66963 11.7633C6.75714 11.8508 6.87584 11.9 6.99961 11.9C7.12338 11.9 7.24208 11.8508 7.32959 11.7633C7.41711 11.6758 7.46628 11.5571 7.46628 11.4333V7.46664H11.4329C11.5567 7.46664 11.6754 7.41748 11.7629 7.32996C11.8504 7.24244 11.8996 7.12374 11.8996 6.99998C11.8996 6.87621 11.8504 6.75751 11.7629 6.66999C11.6754 6.58248 11.5567 6.53331 11.4329 6.53331H7.46628V2.56664Z"
                    fill="#333"
                  />
                </svg> */}
                배송지 추가하기
              </S.MobileAddButton>

              {userData.address || addresses ? (
                <S.AddressList>
                  <S.DefaultAddressBox>
                    <h4>
                      <S.MobileSvg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M8.00001 1C6.54184 1.00172 5.1439 1.58174 4.11282 2.61281C3.08174 3.64389 2.50173 5.04184 2.50001 6.5C2.49826 7.69161 2.8875 8.85089 3.60801 9.8C3.60801 9.8 3.75801 9.9975 3.78251 10.026L8.00001 15L12.2195 10.0235C12.2415 9.997 12.392 9.8 12.392 9.8L12.3925 9.7985C13.1127 8.84981 13.5017 7.69107 13.5 6.5C13.4983 5.04184 12.9183 3.64389 11.8872 2.61281C10.8561 1.58174 9.45817 1.00172 8.00001 1ZM9.80001 9L8.00001 7.8545L6.20001 9L6.50001 6.963L5.00001 5.5865L7.10001 5.333L8.00001 3.5L8.95601 5.3335L11 5.5865L9.50001 6.963L9.80001 9Z"
                          fill="#8F86FF"
                        />
                      </S.MobileSvg>
                      기본 배송지
                    </h4>
                    <S.Recipient>
                      {userData.userInfo ? userData.userInfo.displayName : ''}
                      <S.Line></S.Line>
                      <S.MobilePhoneNumber>
                        {hyphenDefaultPhoneNumber}
                      </S.MobilePhoneNumber>
                    </S.Recipient>
                    <S.Address>
                      {userData.address}
                      {userData.detailAddress}
                    </S.Address>
                    <S.PhoneNumber>{hyphenDefaultPhoneNumber}</S.PhoneNumber>
                    <S.buttonWrapper>
                      <p>정보수정에서 수정 가능합니다</p>
                    </S.buttonWrapper>
                  </S.DefaultAddressBox>
                  {addresses?.map((address: Address | any, index: number) => (
                    <S.AddressBox key={index}>
                      <h4>
                        <S.MobileSvg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M8.00001 1C6.54184 1.00172 5.1439 1.58174 4.11282 2.61281C3.08174 3.64389 2.50173 5.04184 2.50001 6.5C2.49826 7.69161 2.8875 8.85089 3.60801 9.8C3.60801 9.8 3.75801 9.9975 3.78251 10.026L8.00001 15L12.2195 10.0235C12.2415 9.997 12.392 9.8 12.392 9.8L12.3925 9.7985C13.1127 8.84981 13.5017 7.69107 13.5 6.5C13.4983 5.04184 12.9183 3.64389 11.8872 2.61281C10.8561 1.58174 9.45817 1.00172 8.00001 1ZM9.80001 9L8.00001 7.8545L6.20001 9L6.50001 6.963L5.00001 5.5865L7.10001 5.333L8.00001 3.5L8.95601 5.3335L11 5.5865L9.50001 6.963L9.80001 9Z"
                            fill="#8F86FF"
                          />
                        </S.MobileSvg>
                        {address?.addressName}
                      </h4>
                      <S.Recipient>
                        {address?.recipient ? address?.recipient : ''}
                        <S.MobilePhoneNumber>
                          | {addHyphenHannddler(address?.phoneNumber)}
                        </S.MobilePhoneNumber>
                      </S.Recipient>
                      <S.Address>
                        {address?.address}&nbsp;&nbsp;
                        {address?.detailAddress}
                      </S.Address>
                      <S.PhoneNumber>
                        {addHyphenHannddler(address?.phoneNumber)}
                      </S.PhoneNumber>
                      <S.buttonWrapper>
                        <S.DeleteButton
                          onClick={() => deleteAddressHandler(address.docId)}
                        >
                          삭제
                        </S.DeleteButton>
                      </S.buttonWrapper>
                    </S.AddressBox>
                  ))}
                </S.AddressList>
              ) : (
                <S.GuideEmpty>등록된 배송지가 없습니다.</S.GuideEmpty>
              )}
            </S.TableBody>
          </S.TableWrapper>
        </S.ShippingList>
      </S.ShippingWrapper>

      {modal.shippingModalVisible && <ShippingRegisterModal />}
    </MyPageLayout>
  );
};

export default ShippingPage;
