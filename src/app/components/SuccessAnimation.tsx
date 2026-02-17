import React, { useEffect } from 'react';

interface SuccessAnimationProps {
  show: boolean;
  onComplete: () => void;
  message?: string;
}

export default function SuccessAnimation({ show, onComplete, message = 'Changes saved successfully!' }: SuccessAnimationProps) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onComplete, 2200);
      return () => clearTimeout(timer);
    }
  }, [show, onComplete]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
      <div className="bg-white rounded-2xl p-8 shadow-2xl flex flex-col items-center gap-4 animate-[scaleIn_0.3s_ease-out]">
        {/* Animated Checkmark */}
        <div className="w-20 h-20 rounded-full flex items-center justify-center relative">
          <svg className="w-20 h-20" viewBox="0 0 80 80">
            {/* Background circle */}
            <circle
              cx="40" cy="40" r="36"
              fill="none"
              stroke="#22c55e"
              strokeWidth="4"
              strokeDasharray="226"
              strokeDashoffset="226"
              className="animate-[circleDraw_0.6s_ease-out_0.1s_forwards]"
            />
            {/* Fill */}
            <circle
              cx="40" cy="40" r="34"
              fill="#22c55e"
              opacity="0"
              className="animate-[fadeIn_0.3s_ease-out_0.5s_forwards]"
            />
            {/* Checkmark */}
            <path
              d="M24 42 L35 53 L56 28"
              fill="none"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="50"
              strokeDashoffset="50"
              className="animate-[checkDraw_0.4s_ease-out_0.7s_forwards]"
            />
          </svg>
        </div>
        <p className="text-slate-800 font-semibold text-base animate-[fadeIn_0.3s_ease-out_0.9s_forwards] opacity-0">
          {message}
        </p>
      </div>

      <style>{`
        @keyframes scaleIn {
          from { transform: scale(0.7); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes circleDraw {
          to { stroke-dashoffset: 0; }
        }
        @keyframes fadeIn {
          to { opacity: 1; }
        }
        @keyframes checkDraw {
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </div>
  );
}
