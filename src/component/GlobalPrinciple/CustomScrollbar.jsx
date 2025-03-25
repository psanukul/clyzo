import React, { useRef, useState, useEffect } from 'react';

const HorizontalScrollbar = ({
    scrollPercentage,
    setScrollPercentage
}) => {
  const scrollTrackRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  
  // Add throttle timer ref
  const throttleTimerRef = useRef(null);

  const handleScroll = (percentage) => {
    setScrollPercentage(percentage);
  };

  // Handle scrollbar drag start
  const handleScrollbarMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.clientX - scrollTrackRef.current.getBoundingClientRect().left);
  };

  // Handle scrollbar drag
  const handleMouseMove = (e) => {
    if (!isDragging || !scrollTrackRef.current) return;

    const trackRect = scrollTrackRef.current.getBoundingClientRect();
    const mouseX = e.clientX - trackRect.left;
    const deltaX = mouseX - startX;
    const newPercentage = (deltaX / trackRect.width) + scrollPercentage;
    
    const clampedPercentage = Math.max(0, Math.min(1, newPercentage));
    handleScroll(clampedPercentage);
  };

  // Handle direct scrollbar track click (jump to position)
  const handleScrollbarClick = (e) => {
    if (!scrollTrackRef.current || isDragging) return;

    const trackRect = scrollTrackRef.current.getBoundingClientRect();
    const clickPosition = (e.clientX - trackRect.left) / trackRect.width;
    handleScroll(clickPosition);
  };

  useEffect(() => {
    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="mt-3 relative h-1 mx-4 ">
      <div
        ref={scrollTrackRef}
        className="absolute inset-0 bg-[#BBEADC] rounded-full"
        onClick={handleScrollbarClick}
      />
      <div
        className={`absolute top-1/2 -translate-y-1/2 h-4 w-12 bg-white border-2 border-[#22604A] rounded-full cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isDragging ? 'scale-110' : ''
        }`}
        style={{
          left: `${scrollPercentage * 100}%`,
          transform: `translateX(-50%) translateY(-50%) ${isDragging ? 'scale(1.1)' : 'scale(1)'}`,
          transitionProperty: isDragging ? 'none' : 'left, transform',
        }}
        onMouseDown={handleScrollbarMouseDown}
      />
    </div>
  );
};

export default React.memo(HorizontalScrollbar); 