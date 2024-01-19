import React from 'react';
import { useLogout } from '../hooks/useLogout';
import { Link } from 'react-router-dom';
import * as S from 'styledComponent/styledLayout/StHeader';

const ProfileCard = () => {
  const { logout } = useLogout();
  return (
    <>
      <S.ProfileCard>
        <Link to={'/mypage'}>
          <svg
            id="auth"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <circle cx="16" cy="16" r="13" stroke="#585858" stroke-width="2" />
            <path
              d="M16 17.5715C18.2091 17.5715 20 15.7807 20 13.5715C20 11.3624 18.2091 9.57153 16 9.57153C13.7909 9.57153 12 11.3624 12 13.5715C12 15.7807 13.7909 17.5715 16 17.5715Z"
              stroke="#585858"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 25.7619C8 21.9523 11.0476 18.1428 16 18.1428C20.9524 18.1428 24 21.9523 24 25.7619"
              stroke="#585858"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Link>
        <S.LogoutButton onClick={logout}>로그아웃</S.LogoutButton>
      </S.ProfileCard>
    </>
  );
};

export default ProfileCard;
