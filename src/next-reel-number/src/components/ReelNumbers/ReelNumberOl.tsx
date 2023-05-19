
import styled from 'styled-components';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export type typeDirection = '' | 'up' | 'down';

export function ReelNumberOl({
  number,
  fps,
  direction = '',
}: {
  number: number;
  fps: number;
  direction?: typeDirection;
}) {
  const lastNumberRef = useRef<number>(-1);
  const isInitRef = useRef<boolean>(true);
  const scrollRef = useRef<HTMLOListElement>(null);

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
        duration: direction === '' ? 0 : 1 / fps,
        ease: 'linear',
        onUpdate: () => {
          if (scrollRef.current) {
            scrollRef.current.style.transform = `translateY(${ getNewY(direction, number, progress.current) }%)`;
          }
        }
      });
    }

    lastNumberRef.current = number;

    function getNewY(direction: typeDirection, newNumber: number, progress: number) {
      switch (direction) {
        case 'up':
          newNumber = !newNumber ? 10 : newNumber;

          return -100 / 11 * (newNumber - 1) - 100 / 11 * progress;
        case 'down':
          return -100 / 11 * (newNumber + 1) + 100 / 11 * progress;
        default:
          return -100 / 11 * newNumber;
      }
    }
  }, [number]);

  return (
    <Wrapper
      ref={ scrollRef }
      className="reel-number-ol"
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
  text-align: center;
`;