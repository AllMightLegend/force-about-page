
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  index?: number;
  className?: string;
}

const FeatureCard = ({ 
  title, 
  description, 
  icon, 
  index = 0,
  className = ""
}: FeatureCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: "easeOut" 
      }}
      whileHover={{ 
        y: -5,
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.05)",
        transition: { duration: 0.2 }
      }}
      className={`bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:border-purple-200 transition-all duration-300 ${className}`}
    >
      {icon && <div className="text-purple-600 mb-4 text-2xl">{icon}</div>}
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
