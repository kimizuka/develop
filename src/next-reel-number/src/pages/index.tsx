import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { ReelNumbers } from '@/components/ReelNumbers';

const initNow = Date.now();

export default function IndexPage() {
  const [ countup, setCountUp ] = useState(0);
  const [ countdown, setCountDown ] = useState(100);
  const [ fps ] = useState(8);

  return (
    <Wrapper>
      <dl
        style={{
          cursor: 'pointer',
          userSelect: 'none'
        }}
        onClick={ () => setCountUp(countup + 1) }
      >
        <dt>countup - click</dt>
        <dd>
          <ReelNumbers
            currentNumber={ countup }
            minDigits={ 3 }
            fps={ fps }
          />
        </dd>
      </dl>
      <dl
        style={{
          cursor: 'pointer',
          userSelect: 'none'
        }}
        onClick={ () => setCountDown(countdown - 1) }
      >
        <dt>countdown - click</dt>
        <dd>
          <ReelNumbers
            currentNumber={ countdown }
            minDigits={ 3 }
            fps={ fps }
          />
        </dd>
      </dl>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  dl {
    margin: 8px;
    padding: 8px;
    border: solid 1px black;
  }

  dt {
    font-size: 16px;
    text-align: center;
  }

  dd {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 8px;
    font-size: 32px;
  }
`;