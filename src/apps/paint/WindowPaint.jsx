import { memo, useRef, useEffect, useState } from "react";
import Window from "#main/windows/Window";
import "./WindowPaint.css";
import { WINDOW_TITLE } from "./shared";

function Paint() {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lastPos, setLastPos] = useState({ x: 0, y: 0 });
  const [color, setColor] = useState("#000000");
  const [brushSize, setBrushSize] = useState(3);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
  }, []);

  const handleMouseDown = (e) => {
    setIsDrawing(true);
    setLastPos(getMousePosition(e));
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  const handleMouseMove = (e) => {
    if (!isDrawing) return;

    const newPos = getMousePosition(e);
    draw(lastPos, newPos);
    setLastPos(newPos);
  };

  const getMousePosition = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const draw = (start, end) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = brushSize;
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();
    ctx.closePath();
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleBrushSizeChange = (e) => {
    setBrushSize(parseInt(e.target.value));
  };

  return (
    <div className="paint-container">
      <canvas
        ref={canvasRef}
        width={600}
        height={400}
        style={{ border: "1px solid #000" }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseOut={handleMouseUp}
      />
      <div className="controls">
        <button onClick={clearCanvas}>Очистить</button>
        <input type="color" value={color} onChange={handleColorChange} />
        <input
          type="range"
          min="1"
          max="20"
          value={brushSize}
          onChange={handleBrushSizeChange}
        />
      </div>
    </div>
  );
}

export default memo(function WindowPaint({ data }) {
  return <Window data={data} title={WINDOW_TITLE} content={<Paint />} />;
});
