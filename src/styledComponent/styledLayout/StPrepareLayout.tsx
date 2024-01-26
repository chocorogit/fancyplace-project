import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PrepareWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  min-height: 80vh;
  h2 {
    margin-top: 1.25rem;
    font-size: 1.5rem;
    font-weight: normal;

    span {
      font-weight: bold;
    }
  }
  p {
    color: #999;
    text-align: center;
    line-height: 1.5;
  }
`;

// 404 Not Found

export const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  min-height: 80vh;
  padding: 0 2.5rem 0 8.75rem;
  h2 {
    margin-top: 1.25rem;
    font-size: 1.5rem;
    font-weight: normal;

    span {
      font-weight: bold;
    }
  }
  p {
    color: #999;
    text-align: center;
    line-height: 1.5;
  }
`;

export const ToHomeLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  max-width: 200px;
  width: 100%;
  height: 48px;
  text-align: center;
  border: 1px solid #000;
  border-radius: 5px;
`;
