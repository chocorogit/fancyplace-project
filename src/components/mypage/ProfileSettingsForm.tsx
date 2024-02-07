import { UserInfo } from '@firebase/auth';
import { InputLabel } from '@mui/material';
import { auth } from '../../firebase/config';
import { usePasswordUpdate } from 'hooks/usePasswordUpdate';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import * as S from 'styledComponent/styledMypage/StProfileSettings';
import { useProfileUpdate } from 'hooks/useProfileUpdate';
import { useAddressModal } from 'hooks/useAddressModal';
import AddressModal from 'components/AddressModal';

interface SignUpState {
  userInfo: UserInfo;
  phoneNumber: string;
  address: string;
  detailAddress: string;
}

interface ModalState {
  visible: boolean;
}
const ProfileSettingsForm = () => {
  let userData = useSelector(
    (state: { signUpSlice: SignUpState }) => state.signUpSlice,
  );
  const modal = useSelector(
    (state: { modalSlice: ModalState }) => state.modalSlice,
  );
  // react-hook-form
  const {
    handleSubmit,
    control,
    reset,
    getValues,
    formState: { isDirty },
  } = useForm({
    // 실시간 유효성 검사
    mode: 'onChange',
    defaultValues: {
      displayName: userData.userInfo?.displayName || '',
      phoneNumber: userData.phoneNumber || '',
      address: userData.address || '',
      detailAddress: userData.detailAddress || '',
      email: userData.userInfo?.email || '',
      password: '',
      passwordConfirmation: '',
    },
  });
  const { passwordUpdate } = usePasswordUpdate();
  const { profileUpdate } = useProfileUpdate();

  const [displayName, phoneNumber, detailAddress, email, password] = getValues([
    'displayName',
    'phoneNumber',
    'detailAddress',
    'email',
    'password',
  ]);
  const { address } = userData;

  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  const { openAddressModalHandler } = useAddressModal();

  const submitHandler = async (e: any) => {
    e.preventDefault();

    const user = auth.currentUser;
    if (password) {
      passwordUpdate(user, password);
    }

    profileUpdate(
      displayName,
      phoneNumber,
      address,
      detailAddress,
      email,
      password,
    );
  };

  const cancelHandler = () => {
    if (isDirty) {
      const confirmCancel = window.confirm(
        '저장되지 않은 수정이 있습니다. 취소하시겠습니까?',
      );
      if (confirmCancel) {
        reset();
        setIsEditMode(false);
      }
    } else {
      reset();
      setIsEditMode(false);
    }
  };
  return (
    <S.ProfileSettingsForm onSubmit={submitHandler}>
      <Controller
        name="displayName"
        control={control}
        defaultValue={userData.userInfo?.displayName || ''}
        rules={{
          required: '이름을 입력해주세요',
          pattern: {
            value: /^[가-힣]+$/u,
            message: '올바른 이름을 입력해주세요',
          },
        }}
        render={({ field, fieldState }) => (
          <div>
            <InputLabel>이름</InputLabel>
            <S.TextInputField
              disabled={!isEditMode}
              value={field.value}
              onChange={field.onChange}
              error={fieldState.error !== undefined}
              helperText={fieldState.error && fieldState.error.message}
              InputLabelProps={{ shrink: false }}
              InputProps={{
                // maxLength: 8,
                placeholder: '이름을 입력해주세요',
              }}
            />
          </div>
        )}
      />
      <Controller
        name="phoneNumber"
        control={control}
        defaultValue={userData.phoneNumber || ''}
        rules={{
          required: '전화번호를 입력해주세요!(숫자만)',
          pattern: {
            value: /^010[0-9]{8}$/,
            message: '올바른 전화번호를 입력해주세요',
          },
        }}
        render={({ field, fieldState }) => (
          <div>
            <InputLabel>전화번호</InputLabel>
            <S.TextInputField
              disabled={!isEditMode}
              value={field.value}
              onChange={field.onChange}
              error={fieldState.error !== undefined && fieldState.isDirty}
              helperText={
                fieldState.isDirty
                  ? fieldState.error && fieldState.error.message
                  : ''
              }
              InputLabelProps={{ shrink: false }}
              InputProps={{
                // maxLength: 11,
                placeholder: '01012345678',
              }}
            />
          </div>
        )}
      />
      {/* <DeliveryAddress onAddressChange={handleDetailAddressChange} /> */}

      <S.AddressBoxWrapper>
        <InputLabel>기본 배송지</InputLabel>

        <Controller
          name="address"
          control={control}
          defaultValue={userData.address || ''}
          render={() => (
            <div>
              <S.TextInputField
                className="address"
                value={userData.address}
                disabled={true}
              />
            </div>
          )}
        />

        {isEditMode && (
          <S.DeliveryAddressButton
            type="button"
            onClick={() => openAddressModalHandler(true)}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#9e9e9e"
                d="m29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29ZM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9"
              />
            </svg>
            우편번호 찾기
          </S.DeliveryAddressButton>
        )}

        <Controller
          name="detailAddress"
          control={control}
          defaultValue={userData.detailAddress || ''}
          rules={{
            required: '상세 주소를 입력해주세요',
          }}
          render={({ field, fieldState }) => (
            <S.TextInputField
              disabled={!isEditMode}
              className="detailAddress"
              autoComplete="detailAddress"
              value={field.value}
              onChange={field.onChange}
              // onBlur={blurHandler}
              error={fieldState.error !== undefined && fieldState.isDirty}
              helperText={
                fieldState.isDirty
                  ? fieldState.error && fieldState.error.message
                  : ''
              }
              InputLabelProps={{ shrink: false }}
              InputProps={{
                placeholder: '상세 주소 입력',
              }}
            />
          )}
        />
      </S.AddressBoxWrapper>
      {/* <Controller
        name="email"
        control={control}
        defaultValue={userData.userInfo?.email || ''}
        rules={{
          required: '이메일을 입력하세요.',
          pattern: {
            value:
              /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)/,
            message: '올바른 이메일 형식을 입력해주세요',
          },
        }}
        render={({ field, fieldState }) => (
          <div>
            <InputLabel>이메일</InputLabel>
            <S.TextInputField
              disabled={!isEditMode}
              value={field.value}
              onChange={field.onChange}
              error={fieldState.invalid}
              helperText={fieldState.invalid ? fieldState.error?.message : ''}
              InputLabelProps={{ shrink: false }}
              InputProps={{
                placeholder: 'fancyplace@gmail.com',
              }}
            />
          </div>
        )}
      /> */}
      {isEditMode && (
        <>
          <Controller
            name="password"
            control={control}
            defaultValue={''}
            rules={{
              required:
                '숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!',
              minLength: { value: 8, message: '최소 8자 입력해주세요.' },
              pattern: {
                value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/,
                message:
                  '숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!',
              },
            }}
            render={({ field, fieldState }) => (
              <div>
                <InputLabel>새 비밀번호</InputLabel>
                <S.TextInputField
                  disabled={!isEditMode}
                  type="password"
                  autoComplete="new-password"
                  value={field.value}
                  onChange={field.onChange}
                  error={fieldState.error !== undefined && fieldState.isDirty}
                  helperText={
                    fieldState.isDirty
                      ? fieldState.error && fieldState.error.message
                      : ''
                  }
                  InputLabelProps={{ shrink: false }}
                  InputProps={{
                    placeholder: '비밀번호를 입력해주세요!',
                  }}
                />
              </div>
            )}
          />
          <Controller
            name="passwordConfirmation"
            control={control}
            defaultValue={''}
            rules={{
              required: '비밀번호 확인이 일치하지 않습니다!',
              validate: (value) =>
                value === getValues('password') ||
                '비밀번호 확인이 일치하지 않습니다!',
            }}
            render={({ field, fieldState }) => (
              <div>
                <InputLabel>새 비밀번호 확인</InputLabel>
                <S.TextInputField
                  disabled={!isEditMode}
                  type="password"
                  autoComplete="new-password"
                  value={field.value}
                  onChange={field.onChange}
                  error={!!(fieldState.isDirty && fieldState.error)}
                  helperText={
                    fieldState.isDirty
                      ? fieldState.error && fieldState.error.message
                      : ''
                  }
                  InputLabelProps={{ shrink: false }}
                  InputProps={{
                    // maxLength: 12,
                    placeholder: '비밀번호 확인을 입력해주세요',
                  }}
                />
              </div>
            )}
          />
        </>
      )}

      {isEditMode ? (
        <S.EditButton
          // type="button"
          type="button"
          onClick={() => setIsEditMode(!isEditMode)}
        >
          수정완료
        </S.EditButton>
      ) : (
        <S.EditButton
          // type="button"
          type="submit"
          onClick={() => setIsEditMode(!isEditMode)}
        >
          수정하기
        </S.EditButton>
      )}

      {isEditMode && (
        <S.CancelButton type="button" onClick={cancelHandler}>
          취소
        </S.CancelButton>
      )}
      {modal.visible && <AddressModal  isDefaultAddress={true}/>}
    </S.ProfileSettingsForm>
  );
};

export default ProfileSettingsForm;
