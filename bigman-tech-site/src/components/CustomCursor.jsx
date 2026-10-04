import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e) => {
      const el = e.target;
      setHovering(
        el.tagName === 'A' || el.tagName === 'BUTTON' || !!el.closest('a') || !!el.closest('button')
      );
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
    };
  }, []);

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 24,
        height: 24,
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 100,
        mixBlendMode: 'difference',
      }}
      animate={{
        x: pos.x - 12,
        y: pos.y - 12,
        scale: hovering ? 2.5 : 1,
        backgroundColor: hovering ? '#ffffff' : '#000000',
      }}
      transition={{ type: 'tween', ease: 'backOut', duration: 0.1 }}
    />
  );
}
