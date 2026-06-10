import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [ringPosition, setRingPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Hide cursor on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      return;
    }

    setIsVisible(true);

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleHoverStart = () => setIsHovered(true);
    const handleHoverEnd = () => setIsHovered(false);

    window.addEventListener('mousemove', handleMouseMove);

    const updateHoverListeners = () => {
      const hoverElements = document.querySelectorAll('a, button, .glass-card, [role="button"]');
      hoverElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
        el.addEventListener('mouseenter', handleHoverStart);
        el.addEventListener('mouseleave', handleHoverEnd);
      });
    };

    updateHoverListeners();

    // Re-bind listeners on DOM changes
    const observer = new MutationObserver(updateHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  // Smooth lerp effect for the outer ring follower
  useEffect(() => {
    let animationFrameId;
    const updateRing = () => {
      setRingPosition((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15
        };
      });
      animationFrameId = requestAnimationFrame(updateRing);
    };
    animationFrameId = requestAnimationFrame(updateRing);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);

  if (!isVisible) return null;

  return (
    <>
      {/* Inner Dot */}
      <div
        style={{
          position: 'fixed',
          top: position.y,
          left: position.x,
          width: isHovered ? '12px' : '6px',
          height: isHovered ? '12px' : '6px',
          borderRadius: '50%',
          backgroundColor: 'var(--primary)',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.15s, height 0.15s, background-color 0.15s',
          boxShadow: '0 0 10px var(--primary), 0 0 20px var(--primary)'
        }}
      />
      {/* Outer Ring */}
      <div
        style={{
          position: 'fixed',
          top: ringPosition.y,
          left: ringPosition.x,
          width: isHovered ? '48px' : '32px',
          height: isHovered ? '48px' : '32px',
          borderRadius: '50%',
          border: '1.5px solid var(--primary)',
          pointerEvents: 'none',
          zIndex: 9998,
          transform: 'translate(-50%, -50%)',
          opacity: isHovered ? 0.2 : 0.45,
          transition: 'width 0.2s, height 0.2s, opacity 0.2s, border-color 0.2s',
          boxShadow: isHovered ? '0 0 15px rgba(167, 139, 250, 0.15)' : 'none'
        }}
      />
    </>
  );
};

export default CustomCursor;
