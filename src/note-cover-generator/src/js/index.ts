(() => {

  const canvas: HTMLCanvasElement = document.createElement('canvas');
  const subCanvas: HTMLCanvasElement = document.createElement('canvas');
  const img: HTMLImageElement = document.getElementById('img') as HTMLImageElement;
  const txt: HTMLImageElement = document.getElementById('txt') as HTMLImageElement;
  const btns: HTMLElement = document.getElementById('btns');

  let width: number = 1280;
  let height: number = 670;
  let fontSize: number = 64;
  let fontFamily: string = 'Noto Sans JP';

  if (!canvas) {
    return;
  }

  const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
  const subCtx: CanvasRenderingContext2D = subCanvas.getContext('2d');

  canvas.width = subCanvas.width = width;
  canvas.height = subCanvas.height = height;

  let gradient: CanvasGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);

  buildGradient(gradient);

  draw();

  if (btns) {
    btns.addEventListener('click', (evt: MouseEvent) => {
      const text = (evt.target as HTMLElement).innerText;

      switch (text) {
        case 'color':
          gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);

          buildGradient(gradient);
          break;
        case '-':
          fontSize = Math.max(fontSize - 8, 8);
          break;
        case '+':
          fontSize = Math.min(fontSize + 8, 240);
          break;
      }
    });
  }

  function buildGradient(gradient: CanvasGradient) {
    gradient.addColorStop(0, `rgb(${getColorLevel()}, ${getColorLevel()}, ${getColorLevel()}`);
    gradient.addColorStop(1, `rgb(${getColorLevel()}, ${getColorLevel()}, ${getColorLevel()}`);
  }

  function draw(): void {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.save();
      ctx.fillStyle = '#fafafa';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.restore();

    // subCtx.save();
    //   subCtx.fillStyle = gradient;
    //   subCtx.fillRect(0, 0, canvas.width, canvas.height);
    // subCtx.restore();

    subCtx.save();
      subCtx.clearRect(0, 0, canvas.width, canvas.height);
      // subCtx.globalCompositeOperation = 'destination-in';
      // subCtx.fillStyle = '#000';
      subCtx.textAlign = 'center';
      subCtx.textBaseline = 'middle';
      subCtx.font = `bold ${fontSize}px ${fontFamily}`;
      subCtx.fillText(`${txt.innerText}`, canvas.width / 2, canvas.height / 2);
    subCtx.restore();

    ctx.save();
      ctx.drawImage(subCanvas, 0, 0);
    ctx.restore();

    img.src = canvas.toDataURL('image/png');

    requestAnimationFrame(draw);
  }

  function getColorLevel(): number {
    return Math.round(Math.random() * 255);
  }

})();