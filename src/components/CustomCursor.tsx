import { useState, useEffect } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [hoverText, setHoverText] = useState('');

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target;
      if (!(target instanceof HTMLElement)) return;
      
      // Detectar elementos con texto personalizado
      const hoverData = target.closest('[data-cursor-text]');
      
      // Detectar elementos interactivos genéricos
      const interactive = target.closest('a, button, input, textarea, [role="button"], .cursor-pointer');

      if (hoverData) {
        setIsHovering(true);
        setIsPointer(false);
        setHoverText(hoverData.getAttribute('data-cursor-text') || '');
      } else if (interactive) {
        setIsHovering(false);
        setIsPointer(true);
        setHoverText('');
      } else {
        setIsHovering(false);
        setIsPointer(false);
        setHoverText('');
      }
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleHover);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleHover);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-all duration-300 ease-out flex items-center justify-center rounded-full ${
        isHovering 
          ? 'w-32 h-32 bg-white/10 backdrop-blur-md border border-white/20 scale-100' 
          : isPointer
            ? 'w-12 h-12 bg-blue-500/20 border border-blue-500/50 scale-100'
            : 'w-4 h-4 bg-blue-500 scale-100 shadow-[0_0_15px_rgba(59,130,246,0.5)]'
      }`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
      }}
    >
      {isHovering && (
        <div className="text-center animate-in fade-in duration-300">
          <p className="text-white text-sm font-medium leading-tight">View</p>
          <p className="text-white/70 text-[10px] italic font-serif leading-tight">{hoverText}</p>
        </div>
      )}
      {isPointer && !isHovering && (
        <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
      )}
    </div>
  );
}
