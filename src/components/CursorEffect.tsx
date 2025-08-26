import React, { useEffect, useRef, useState } from 'react';

interface TrailPoint {
  x: number;
  y: number;
  id: number;
}

const CursorEffect = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [trailPoints, setTrailPoints] = useState<TrailPoint[]>([]);
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const trailIdRef = useRef(0);
  const rippleIdRef = useRef(0);
  const lastMoveTimeRef = useRef(0);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      const cursor = cursorRef.current;
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }

      const now = Date.now();
      
      // Add trail points (throttled)
      if (now - lastMoveTimeRef.current > 50) {
        setTrailPoints(prev => {
          const newPoint = {
            x: e.clientX,
            y: e.clientY,
            id: trailIdRef.current++
          };
          return [...prev, newPoint].slice(-8); // Keep only last 8 points
        });
        lastMoveTimeRef.current = now;
      }
    };

    const createRipple = (e: MouseEvent) => {
      const newRipple = {
        x: e.clientX,
        y: e.clientY,
        id: rippleIdRef.current++
      };

      setRipples(prev => [...prev, newRipple]);

      // Remove ripple after animation completes
      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== newRipple.id));
      }, 1000);
    };

    const handleMouseMove = (e: MouseEvent) => {
      updateCursor(e);
      
      // Create ripple occasionally on movement
      if (Math.random() > 0.95) {
        createRipple(e);
      }
    };

    const handleClick = (e: MouseEvent) => {
      createRipple(e);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleClick);

    // Clean up trail points periodically
    const trailCleanup = setInterval(() => {
      setTrailPoints(prev => prev.slice(-4));
    }, 200);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleClick);
      clearInterval(trailCleanup);
    };
  }, []);

  return (
    <>
      {/* Custom cursor */}
      <div ref={cursorRef} className="cursor" />
      
      {/* Trail points */}
      {trailPoints.map((point, index) => (
        <div
          key={point.id}
          className="cursor-trail"
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
            opacity: (index + 1) / trailPoints.length * 0.6,
            transform: `translate(-50%, -50%) scale(${(index + 1) / trailPoints.length})`,
            transition: 'opacity 0.3s ease-out, transform 0.3s ease-out',
          }}
        />
      ))}
      
      {/* Wave ripples */}
      {ripples.map(ripple => (
        <div
          key={ripple.id}
          className="wave-ripple"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
          }}
        />
      ))}
    </>
  );
};

export default CursorEffect;