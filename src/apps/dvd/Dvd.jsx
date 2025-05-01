import React, { useRef, useEffect } from "react";
import "./Dvd.css";

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default function Dvd({ fullscreen, onClick }) {
  const logoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const position = {
      x: 0,
      y: 0
    };
    let direction = { 
      x: 1, 
      y: 1 
    };
    let hue = "";
    let animationFrame;

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
        hue = calcHue();
        direction = { ...direction, x: -1 };
      } else if (newX < 0) {
        newX = 0;
        hue = calcHue();
        direction = { ...direction, x: 1 };
      }

      if (newY + logoRect.height > containerRect.height) {
        newY = containerRect.height - logoRect.height;
        hue = calcHue();
        direction = { ...direction, y: -1 };
      } else if (newY < 0) {
        newY = 0;
        hue = calcHue();
        direction = { ...direction, y: 1 };
      }

      position.x = newX;
      position.y = newY;
      updateStyle();
      animationFrame = requestAnimationFrame(animateLogo);
    };

    const initialStyle = () => {
      if (!logoRef.current || !containerRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      position.x = randomInt(0, containerRect.width);
      position.y = randomInt(0, containerRect.height);
      hue = calcHue();
      updateStyle();
    }

    const updateStyle = () => {
      logoRef.current.style.filter = hue;
      logoRef.current.style.left = `${position.x}px`;
      logoRef.current.style.top = `${position.y}px`;
    }

    initialStyle();
    animationFrame =requestAnimationFrame(animateLogo);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

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
      />
    </div>
  );
}
