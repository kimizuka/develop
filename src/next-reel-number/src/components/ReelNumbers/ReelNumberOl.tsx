
import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export function ReelNumberOl({
  number,
  fps,
  isStop = true
}: {
  number: number;
  fps: number;
  isStop?: boolean;
}) {
  const [ isAnim, setIsAnim ] = useState(false);
  const lastNumberRef = useRef<number>(-1);
  const isInitRef = useRef<boolean>(true);
  const scrollRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    if (isInitRef.current) {
      setIsAnim(!isStop);
    }
  }, [isStop]);

  useEffect(() => {
    if (scrollRef.current) {
      if (0 < lastNumberRef.current && lastNumberRef.current !== number) {
        isInitRef.current = false;
      }

      const progress = {
        current: 0
      };

      gsap.to(progress, {
        current: 1,
        duration: 1 / fps,
        ease: 'linear',
        onUpdate: () => {
          if (scrollRef.current) {
            scrollRef.current.style.transform = `translateY(${ getNewY(number, progress.current) }%)`;
          }
        }
      });
    }

    lastNumberRef.current = number;

    function getNewY(newNumber: number, progress: number) {
      newNumber = !newNumber ? 10 : newNumber;

      return -100 / 11 * (newNumber - 1) - 100 / 11 * progress;
    }
  }, [number]);

  return (
    <Wrapper
      ref={ scrollRef }
      data-is-stop={ String(!isAnim) }
    >
      {[...new Array(10)].map((_, i) => {
        return (
          <li key={ i }>{ i }</li>
        );
      })}
      <li>0</li>
    </Wrapper>
  );
}

const Wrapper = styled.ol`
  &[data-is-stop='true'] {
    transform: translateY(0) !important;
  }
`;