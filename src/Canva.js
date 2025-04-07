import { useEffect, useRef } from "react";

export default function Transformador({ src }) {
  const canvasRef = useRef();

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "Anonymous"; // importante se for imagem externa
    img.src = src;

    img.onload = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const [r, g, b] = [data[i], data[i + 1], data[i + 2]];

        // Verde puro (ajuste conforme sua imagem)
        if (r === 34 && g === 177 && b === 76) {
          data[i] = 255;     // R
          data[i + 1] = 255; // G
          data[i + 2] = 0;   // B (amarelo)
        }
      }

      ctx.putImageData(imageData, 0, 0);
    };
  }, [src]);
  return <img src={src}></img>
  return <canvas ref={canvasRef} />;
}
