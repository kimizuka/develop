import { gsap } from 'gsap';
import { useEffect, useRef, useState } from 'react';

export default function IndecPage() {
  const sizeRef = useRef(100);
  const timerRef = useRef(-1);
  const [ size, setSize ] = useState(sizeRef.current);

  useEffect(() => {
    window.clearInterval(timerRef.current);
    timerRef.current = window.setInterval(changeSize, 1000);
  }, []);

  function changeSize() {
    gsap.to(sizeRef, {
      current: 100 + 200 * Math.random(),
      duration: 1,
      onUpdate: () => {
        setSize(sizeRef.current);
      }
    });
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          * {
            margin: 0;
          }

          section {
            display: flex;
            align-items: center;
            justify-content: center;
            position: fixed;
            top: 0; bottom: 0;
            left: 0; right: 0;
          }
          
          div {
            background: red;
          }
        `
      }} />
      <section>
        <div
          style={{
            width: `${ size }px`,
            height: `${ size }px`
          }}
        />
      </section>
    </>
  );
}
