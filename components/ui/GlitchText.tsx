import React from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: React.ElementType;
}

export const GlitchText: React.FC<GlitchTextProps> = ({ text, className = "", as: Component = "h2" }) => {
  return (
    <div className="relative inline-flex flex-col gap-4 group">
      <div className="relative">
        {/* Layer 1: The Stroke Shadow (Static Offset) */}
        <Component 
          className={`absolute top-[4px] left-[4px] z-0 select-none opacity-60 ${className}`}
          style={{ 
            WebkitTextStroke: '1px #FF3D00', 
            color: 'transparent' 
          }}
          aria-hidden="true"
        >
          {text}
        </Component>

        {/* Layer 2: Main Text */}
        <Component 
          className={`relative z-10 text-white drop-shadow-xl ${className}`}
        >
          {text}
        </Component>
      </div>

      {/* Layer 3: Structural Underline */}
      <div className="relative h-[2px] w-full bg-white/10 overflow-hidden">
        <div className="absolute top-0 left-0 h-full w-12 bg-los-orange" />
        <div className="absolute top-0 left-16 h-full w-2 bg-los-orange/50" />
      </div>
    </div>
  );
};