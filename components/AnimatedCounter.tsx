"use client";

import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedCounterProps {
  endValue: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  endValue=10,
  duration = 2000,
  prefix = "",
  suffix = "+",
}) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.5,  
  });
  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (inView) {
      startTimeRef.current = null; 
      setCount(0); 

      const animate = (currentTime: DOMHighResTimeStamp) => {
        if (!startTimeRef.current) startTimeRef.current = currentTime;
        const progress = (currentTime - startTimeRef.current) / duration;

        if (progress < 1) {
          setCount(Math.min(endValue, Math.floor(progress * endValue)));
          animationFrameRef.current = requestAnimationFrame(animate);
        } else {
          setCount(endValue); 
          cancelAnimationFrame(animationFrameRef.current as number);
        }
      };

      animationFrameRef.current = requestAnimationFrame(animate);
    } else {
         if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [endValue, duration, inView]); 

  return (
    <div ref={ref} className="flex flex-col items-center p-4">
      <div className="flex text-6xl md:text-7xl font-bold text-white mb-2"><p>Our Completed Projects : </p>
        {prefix}{count.toLocaleString()}{suffix} 
      </div>
        </div>
  );
};

export default AnimatedCounter;8