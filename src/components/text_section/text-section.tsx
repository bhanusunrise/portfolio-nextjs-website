'use client';

import { useState, useEffect, useRef } from 'react';
import './text-section.css';

interface TextSectionProps {
  title: string;
  subtitle: string;
}

export default function TextSection({ title, subtitle }: TextSectionProps) {
  const [glitterStyle, setGlitterStyle] = useState({});
  const [isHovered, setIsHovered] = useState(false);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (subtitleRef.current) {
        const rect = subtitleRef.current.getBoundingClientRect();
        setGlitterStyle({
          left: `${e.clientX - rect.left}px`,
          top: `${e.clientY - rect.top}px`,
        });
      }
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const subtitleElement = subtitleRef.current;
    if (subtitleElement) {
      subtitleElement.addEventListener('mousemove', handleMouseMove);
      subtitleElement.addEventListener('mouseenter', handleMouseEnter);
      subtitleElement.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (subtitleElement) {
        subtitleElement.removeEventListener('mousemove', handleMouseMove);
        subtitleElement.removeEventListener('mouseenter', handleMouseEnter);
        subtitleElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <>
      <h1 className="text-4xl text-gray-50">{title}</h1>
      <br />
      <div className="relative">
        <p ref={subtitleRef} className="text-2xl text-gray-400 text-justify glitter-effect">
          {subtitle}
        </p>
        {isHovered && <div className="glitter-circle" style={glitterStyle}></div>}
      </div>
    </>
  );
}