export const IconAI = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <svg
          width="400"
          height="400"
          viewBox="0 0 400 400"
          className="drop-shadow-2xl"
        >
          {/* Gradient Definitions */}
          <defs>
            {/* Large star gradient */}
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff6b6b" />
              <stop offset="50%" stopColor="#4ecdc4" />
              <stop offset="100%" stopColor="#45b7d1" />
            </linearGradient>

            {/* Medium star gradient */}
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#667eea" />
              <stop offset="50%" stopColor="#764ba2" />
              <stop offset="100%" stopColor="#f093fb" />
            </linearGradient>

            {/* Small star gradient */}
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffecd2" />
              <stop offset="50%" stopColor="#fcb69f" />
              <stop offset="100%" stopColor="#ff8a80" />
            </linearGradient>

            {/* Glow filter */}
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Large Star - Slowest rotation */}
          <g
            className="origin-center animate-spin-slow"
            style={{
              animation: "spin-slow 8s linear infinite",
              transformOrigin: "200px 200px",
            }}
          >
            <path
              d="M 200 50 L 260 140 L 350 200 L 260 260 L 200 350 L 140 260 L 50 200 L 140 140 Z"
              fill="url(#gradient1)"
              filter="url(#glow)"
              opacity="0.9"
            />
          </g>

          {/* Medium Star - Medium rotation */}
          <g
            className="origin-center"
            style={{
              animation: "spin-medium 6s linear infinite reverse",
              transformOrigin: "200px 200px",
            }}
          >
            <path
              d="M 200 80 L 240 160 L 320 200 L 240 240 L 200 320 L 160 240 L 80 200 L 160 160 Z"
              fill="url(#gradient2)"
              filter="url(#glow)"
              opacity="0.8"
            />
          </g>

          {/* Small Star - Fastest rotation */}
          <g
            className="origin-center"
            style={{
              animation: "spin-fast 4s linear infinite",
              transformOrigin: "200px 200px",
            }}
          >
            <path
              d="M 200 120 L 220 180 L 280 200 L 220 220 L 200 280 L 180 220 L 120 200 L 180 180 Z"
              fill="url(#gradient3)"
              filter="url(#glow)"
              opacity="0.9"
            />
          </g>

          {/* Center glow effect */}
          <circle
            cx="200"
            cy="200"
            r="15"
            fill="url(#gradient3)"
            filter="url(#glow)"
            opacity="0.6"
          />
        </svg>

        {/* Additional decorative elements */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse opacity-80"></div>
        </div>
      </div>

    </div>
  );
};
