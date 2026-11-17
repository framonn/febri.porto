import React, { useEffect, useState } from 'react';

export const SpotlightCursor: React.FC = () => {
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: -500, y: -500 });
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // Check if device has coarse pointer (touch device)
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        background: `radial-gradient(650px circle at ${position.x}px ${position.y}px, rgba(37, 99, 235, 0.08), rgba(6, 182, 212, 0.03) 40%, transparent 80%)`,
      }}
    />
  );
};
