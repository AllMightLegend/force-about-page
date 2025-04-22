
import { motion } from "framer-motion";
import GradientText from "./GradientText";

interface CallToActionProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  buttonLink?: string;
}

const CallToAction = ({
  title,
  subtitle,
  buttonText,
  buttonLink = "#",
}: CallToActionProps) => {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-indigo-50 py-16 rounded-3xl">
      <div className="max-w-4xl mx-auto text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          <GradientText>{title}</GradientText>
        </motion.h2>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-600 mb-8"
          >
            {subtitle}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href={buttonLink}
            className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
          >
            {buttonText}
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default CallToAction;
