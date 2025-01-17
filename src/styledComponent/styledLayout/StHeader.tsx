import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 49;
  width: 100%;
  height: 80px;
  transition: all 200ms;
  box-shadow: var(--box-shadow);
  @media (max-width: 768px) {
    background: var(--color-white);
    box-shadow: 0px 4px 8px 2px rgba(0, 0, 0, 0.02);
    border-bottom: 1px solid var(--color-medium-gray-ee);
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 1.5rem;
  .logo {
    width: 200px;
  }
  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  img {
    object-fit: cover;
  }
`;
export const BrandLogo = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
`;
export const HeaderButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;

  & > * {
    display: flex;
    justify-content: center;
    padding: 0.375rem;
    background: var(--color-white);
    border-radius: 4rem;
  }
  @media (max-width: 768px) {
    position: fixed;
    width: 100%;
    height: 64px;
    margin: 0 auto;
    right: 0;
    bottom: 0;
    background-color: var(--color-white);
    @media (max-width: 768px) {
      &::before {
        content: '';
        position: absolute;
        top: -10px;
        display: block;
        width: 100%;
        height: 10px;
        background: linear-gradient(
          to top,
          var(--color-light-gray-ef) 0%,
          transparent 80%
        );
        opacity: 0.5;
      }
    }
    gap: 0;
    & > * {
      width: 50%;
      padding: 0;
    }

    @media (max-width: 768px) {
      & > * {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2px;
      }
      svg {
        width: 28px;
        height: 28px;
      }
    }
  }

  @media (max-width: 480px) {
    /* 480px 이하 화면 크기에 대한 스타일 */
    position: fixed;
    width: 100%;
    margin: 0 auto;
  }
`;

export const LoginButton = styled(Link)`
  gap: 4px;
  font-size: 0.875rem;
`;

export const Exchange = styled.div`
  gap: 4px;
`;

export const ProfileCard = styled.div`
  gap: 4px;
  a {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 768px) {
  }
`;
export const LogoutButton = styled.button`
  font-size: 0.875rem;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MobileName = styled.p`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    font-size: 14px;
  }
`;

export const SearchDiv = styled.div`
  position: relative;
  z-index: 25;
  @media screen and (max-width: 768px) {
  }
`;
interface SearchProps {
  $setchClick: boolean;
}
export const Searchinput = styled.input<SearchProps>`
  display: flex;
  justify-content: center;
  padding: 0.375rem 1rem;
  background: var(--color-white);
  color: var(f--color-primary);
  border-radius: 4rem;
  position: absolute;
  border: 2px solid var(--color-medium-gray-dd);
  width: 220px;
  height: 40px;
  top: 50%;
  transform: translateY(-50%);
  left: -170px;
  outline: unset;
  visibility: ${(props) => (props.$setchClick ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.$setchClick ? 1 : 0)};
  @media screen and (max-width: 768px) {
    position: absolute;
    top: -60px;
    left: 0;
    width: 100vw;
    height: 56px;
    margin: 0;
    color: var(--color-primary-medium-33);
    font-size: 1rem;
    border-radius: 0;
    background: var(--color-light-gray-f7);
    border: none;
    box-shadow: var(--color-light-gray-ef) 3px -10px 12px -12px inset;
  }
`;

export const SearchinputButton1 = styled.button<SearchProps>`
  visibility: ${(props) => (props.$setchClick ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.$setchClick ? 1 : 0)};
  left: 0px;
  z-index: ${(props) => (props.$setchClick ? 1 : 0)};
  @media screen and (max-width: 768px) {
    position: absolute;
    z-index: 25;
    width: 100%;
    left: calc(100vw - 64px);
    top: -76px;
  }

  @media screen and (max-width: 480px) {
    left: 360px;
    top: -480px;
  }
  @media screen and (max-width: 430px) {
    left: 330px;
    top: -680px;
  }
  @media screen and (max-width: 414px) {
    left: 320px;
    top: -680px;
  }
  @media screen and (max-width: 411px) {
    left: 300px;
    top: -680px;
  }
  @media screen and (max-width: 375px) {
    left: 290px;
    top: -680px;
  }
`;

export const SearchinputButton2 = styled.button<SearchProps>`
  visibility: ${(props) => (props.$setchClick ? 'hidden' : 'visible')};
  z-index: 2;
  position: absolute;
  @media screen and (max-width: 768px) {
    visibility: visible;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    width: 100%;
  }
`;
export const Div = styled.div``;

export const SearchOverlay = styled(Div)<SearchProps>`
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: calc(100% - 64px);
    background-color: rgba(0, 0, 0, 0.4);
    transition: 0.5s;
    z-index: 24;
    cursor: pointer;
    opacity: ${(props) => (props?.$setchClick === false ? '0' : '1')};
    visibility: ${(props) =>
      props?.$setchClick === false ? 'hidden' : 'visible'};
  }
  border-radius: 0px;
`;
