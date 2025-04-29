import React from "react";

const AnimatedBackground = () => (
  <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden">
    {/* SVG Gradient Blobs */}
    <svg width="100%" height="100%" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-fade-in">
      <defs>
        <radialGradient id="grad1" cx="50%" cy="50%" r="80%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="#a1c4fd" stopOpacity="0.7"/>
          <stop offset="100%" stopColor="#c2e9fb" stopOpacity="0.2"/>
        </radialGradient>
        <radialGradient id="grad2" cx="50%" cy="50%" r="80%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="#fbc2eb" stopOpacity="0.7"/>
          <stop offset="100%" stopColor="#fcb69f" stopOpacity="0.2"/>
        </radialGradient>
      </defs>
      <ellipse cx="400" cy="300" rx="500" ry="300" fill="url(#grad1)">
        <animate attributeName="cx" values="400;1040;400" dur="18s" repeatCount="indefinite" />
      </ellipse>
      <ellipse cx="1040" cy="500" rx="400" ry="250" fill="url(#grad2)">
        <animate attributeName="cx" values="1040;400;1040" dur="22s" repeatCount="indefinite" />
      </ellipse>
    </svg>
    {/* Subtle animated particles */}
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white/20 blur-lg animate-pulse"
          style={{
            width: `${Math.random() * 60 + 30}px`,
            height: `${Math.random() * 60 + 30}px`,
            left: `${Math.random() * 95}%`,
            top: `${Math.random() * 90}%`,
            animationDuration: `${Math.random() * 3 + 2}s`,
          }}
        />
      ))}
    </div>
  </div>
);

export default AnimatedBackground;
