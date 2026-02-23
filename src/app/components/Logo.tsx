import { Link } from "react-router";
import logo from "@/assets/logo.jpeg";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center gap-3 ${className}`}>
      
      {/* Logo Image */}
      <img 
        src={logo} 
        alt="Hirewise Logo" 
        className="h-10 w-auto object-contain"
      />

      {/* Brand Name */}
      <span className="text-2xl font-bold tracking-tight text-[#0A2647]">
        S3HireWiseSolutions
      </span>

    </Link>
  );
}