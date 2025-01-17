import styled from 'styled-components';
import { useState, useEffect } from 'react';

const StarRate = ({ rating, setRating }: any) => {
  const STAR_IDX_ARR = ['first', 'second', 'third', 'fourth', 'last'];
  const [ratesResArr, setRatesResArr] = useState([0, 0, 0, 0, 0]);
  const calcStarRates = () => {
    let tempStarRatesArr = [0, 0, 0, 0, 0];
    for (let i = 0; i < rating; i++) {
      tempStarRatesArr[i] = 1;
    }
    return tempStarRatesArr;
  };
  useEffect(() => {
    setRatesResArr(calcStarRates);
  }, [rating]);

  return (
    <StarRateWrap>
      {STAR_IDX_ARR.map((item, idx) => {
        return (
          <span
            className="star_icon"
            key={`${item}_${idx}`}
            onClick={() => {
              setRating(idx + 1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 14 13"
              fill={
                ratesResArr[idx] === 1
                  ? 'var(--color-accent)'
                  : 'var(--color-medium-gray-dd)'
              }
            >
              <clipPath id={`${item}StarClip`}>
                <rect width={`${ratesResArr[idx]}`} height="39" />
              </clipPath>
              <path
                id={`${item}Star`}
                d="M9,2l2.163,4.279L16,6.969,12.5,10.3l.826,4.7L9,12.779,4.674,15,5.5,10.3,2,6.969l4.837-.69Z"
                transform="translate(-2 -2)"
              />
            </svg>
          </span>
        );
      })}
    </StarRateWrap>
  );
};

export default StarRate;

const StarRateWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  .star_icon {
    display: inline-flex;
    margin-right: 5px;
  }
`;
