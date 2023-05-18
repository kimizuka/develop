
import styled from 'styled-components';
import { createRef, RefObject, useEffect, useRef, useState } from 'react';
import { reverse } from 'lodash';
import { ReelNumberOl } from './ReelNumberOl';

export function ReelNumbers({
  currentNumber,
  initNumber = 0,
  minDigits = 0,
  fps
}: {
  currentNumber: number;
  initNumber?: number;
  minDigits?: number;
  fps: number;
}) {
  const [ currentNumberList, setCurrentNumberList ] = useState<string[]>([]);
  const olRefList = useRef<RefObject<HTMLOListElement>[]>([]);

  useEffect(() => {
    setCurrentNumberList(reverse([ ...String(currentNumber).padStart(minDigits, '0') ]));

    olRefList.current.forEach((olRef) => {
      if (olRef.current) {
        const progress = {
          current: 0
        };
        const newNumber = Number(olRef.current?.dataset.scrollNumber || 0);

        gsap.to(progress, {
          current: 1,
          duration: 1,
          ease: 'linear',
          onUpdate: () => {
            if (olRef.current) {
              olRef.current.style.transform = `translateY(${ getNewY(newNumber, progress.current) }%)`;
            }
          }
        });
      }
  
      function getNewY(newNumber: number, progress: number) {
        newNumber = !newNumber ? 10 : newNumber;

        return -100 / 11 * (newNumber - 1) - 100 / 11 * progress;
      }
    });
  }, [currentNumber]);

  useEffect(() => {
    currentNumberList.forEach((_, i) => {
      olRefList.current[i] = createRef<HTMLOListElement>();
    });
  }, [currentNumberList]);

  return (
    <Wrapper>
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
              isStop={ currentNumber === initNumber }
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

  [data-scroll-number] {
    display: block;
    position: relative;
    top: 0;
  }

  [data-is-anim='false'] {
    transform: translateY(0) !important;
  }
`;