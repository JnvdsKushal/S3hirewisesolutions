import { Link } from "react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center gap-3 ${className}`}>
      {/* Logo Icon - Abstract H symbol */}
      <div className="relative w-10 h-10 flex items-center justify-center">
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Abstract H design with modern geometric style */}
          <rect x="8" y="8" width="6" height="24" rx="2" fill="#2E5EAA" />
          <rect x="26" y="8" width="6" height="24" rx="2" fill="#3B82F6" />
          <rect x="14" y="17" width="12" height="6" rx="2" fill="#4A90E2" />
          {/* Gradient overlay for modern touch */}
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2E5EAA" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Brand Name */}
      <span className="text-2xl font-bold tracking-tight" style={{ color: '#0A2647' }}>
        Hirewise
      </span>
    </Link>
  );
}