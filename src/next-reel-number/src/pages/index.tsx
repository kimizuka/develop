import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { ReelNumbers } from '@/components/ReelNumbers';

const initNow = Date.now();

export default function IndexPage() {
  const [ count, setCount ] = useState(0);
  const [ now, setNow ] = useState(initNow);
  const [ clickCount, setClickCount ] = useState(0);
  const [ fps ] = useState(8);

  useEffect(() => {
    setTimeout(() => {
      setCount((count + 1) % 10);
      setNow(Date.now());
    }, 1000 / fps);
  }, [count]);

  return (
    <Wrapper>
      <dl>
        <dt>Date.now</dt>
        <dd>
          <ReelNumbers
            currentNumber={ now }
            initNumber={ initNow }
            fps={ fps }
          />
        </dd>
      </dl>
      <dl>
        <dt>loop</dt>
        <dd>
          <ReelNumbers
            currentNumber={ count }
            initNumber={ 0 }
            minDigits={ 1 }
            fps={ fps }
          />
        </dd>
      </dl>
      <dl
        style={{
          cursor: 'pointer',
          userSelect: 'none'
        }}
        onClick={ () => setClickCount(clickCount + 1) }
      >
        <dt>click</dt>
        <dd>
          <ReelNumbers
            currentNumber={ clickCount }
            initNumber={ 0 }
            minDigits={ 1 }
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