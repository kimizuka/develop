import { useEffect, useRef } from 'react';

export default function Canvas() {
  let count = 0;
  const timerRef = useRef(-1);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');

      if (ctx) {
        timerRef.current = window.setInterval(() => {
          if (canvasRef.current) {
            count += .1;

            const width = canvasRef.current.width;
            const height = canvasRef.current.height;
            const per = Math.sin(count);
            const size = 40;

            ctx.clearRect(0, 0, width, height);
            ctx.fillRect(width / 2 - (per * (width - size) / 2) - size / 2, (height - size) / 2, size, size);
          }
        }, 1000 / 24);
      }
    }

    return () => clearInterval(timerRef.current);
  }, []);

  return (
      <canvas style={{ border: 'solid 1px' }} ref={ canvasRef } />
  );
}