import React, { useState, useRef, useEffect } from "react";
import "./Dvd.css";

export default function Dvd({ fullscreen, onClick }) {
  const [hue, setHue] = useState("");
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState({ x: 1, y: 1 });
  const logoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const calcHue = () => {
      return `hue-rotate(${Math.ceil(Math.random() * 360)}deg)`;
    };
    const animateLogo = () => {
      if (!logoRef.current || !containerRef.current) return;

      const logoRect = logoRef.current.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();

      let newX = position.x + direction.x * 2;
      let newY = position.y + direction.y * 2;

      if (newX + logoRect.width > containerRect.width) {
        newX = containerRect.width - logoRect.width;
        setHue(calcHue());
        setDirection((prev) => ({ ...prev, x: -1 }));
      } else if (newX < 0) {
        newX = 0;
        setHue(calcHue());
        setDirection((prev) => ({ ...prev, x: 1 }));
      }

      if (newY + logoRect.height > containerRect.height) {
        newY = containerRect.height - logoRect.height;
        setHue(calcHue());
        setDirection((prev) => ({ ...prev, y: -1 }));
      } else if (newY < 0) {
        newY = 0;
        setHue(calcHue());
        setDirection((prev) => ({ ...prev, y: 1 }));
      }

      setPosition({ x: newX, y: newY });
    };

    const animationFrame = requestAnimationFrame(animateLogo);

    return () => cancelAnimationFrame(animationFrame);
  }, [position]);

  return (
    <div
      ref={containerRef}
      className={`dvd-container ${fullscreen ? "fullscreen" : ""}`}
      onClick={onClick}
    >
      <img
        ref={logoRef}
        src="img/dvd-logo.png"
        alt="Логотип"
        className="dvd-logo"
        style={{
          left: position.x,
          top: position.y,
          filter: hue,
        }}
      />
    </div>
  );
}
