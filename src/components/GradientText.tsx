
import { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  from?: string;
  to?: string;
  className?: string;
}

const GradientText = ({ 
  children, 
  from = "from-purple-600", 
  to = "to-indigo-600", 
  className = "" 
}: GradientTextProps) => {
  return (
    <span className={`bg-gradient-to-r ${from} ${to} bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
};

export default GradientText;
