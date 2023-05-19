import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import { reverse } from 'lodash';
import { typeDirection, ReelNumberOl } from './ReelNumberOl';

export function ReelNumbers({
  currentNumber,
  fps,
  minDigits = 0
}: {
  currentNumber: number;
  fps: number;
  minDigits?: number;
}) {
  const [ currentNumberList, setCurrentNumberList ] = useState<string[]>([]);
  const [ direction, setDirection ] = useState<typeDirection>('');
  const lastNumberRef = useRef<number>(0);

  useEffect(() => {
    currentNumber = Math.max(currentNumber, 0);
    setDirection(getDirection(currentNumber, lastNumberRef.current));
    setCurrentNumberList(reverse([ ...String(currentNumber).padStart(minDigits, '0') ]));
    lastNumberRef.current = currentNumber;
  }, [currentNumber]);

  function getDirection(newNumber: number, oldNumber: number): typeDirection {
    if (newNumber === oldNumber) {
      return '';
    }

    return newNumber < oldNumber ? 'down' : 'up';
  }

  return (
    <Wrapper className="reel-numbers">
      <ol className="transparent-number">
        {currentNumberList.map((number, i) => {
          return <li key={ i }>{ number }</li>
        })}
      </ol>
      <div className="scroll-numbers">
        {currentNumberList.map((num, i) => {
          return (
            <ReelNumberOl
              key={ i }
              number={ Number(num) }
              fps={ fps }
              direction={ direction }
            />
          );
        })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;

  .transparent-number {
    display: flex;
    color: transparent;
  }

  .scroll-numbers {
    display: flex;
    justify-content: flex-end;
    flex-direction: row-reverse;
    position: absolute;
    top: 0; right: 0;
  }
`;