
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const VisionSection = () => (
  <section id="vision" className="relative py-24 md:py-32 bg-gradient-to-br from-white via-purple-50 to-indigo-50 dark:from-gray-950 dark:via-gray-900 dark:to-black overflow-hidden">
    <div className="container mx-auto px-4">
      <SectionHeading
        title="Our Vision"
        subtitle="We're reimagining how technology can enhance human consciousness."
        useGradient={true}
      />
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="prose prose-lg max-w-2xl mx-auto text-center"
      >
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
          Force is reimagining personal growth through powerful AI-driven analysis of multi-modal content.
          We're building a comprehensive ecosystem that transforms how you capture, organize, and leverage your thoughts to enhance consciousness, creativity, and personal development.
        </p>
      </motion.div>
    </div>
    {/* Animated floaters */}
    <motion.div
      className="absolute -top-12 right-0 w-40 h-40 rounded-full bg-primary/10 blur-2xl"
      animate={{ scale: [1, 1.15, 1], x: [15, 0, 15] }}
      transition={{ duration: 14, repeat: Infinity }}
      style={{ zIndex: 0 }}
    />
    <motion.div
      className="absolute bottom-0 left-[8%] w-56 h-56 rounded-full bg-indigo-300/20 dark:bg-indigo-800/20 blur-3xl"
      animate={{ y: [0, -10, 0], scale: [0.95, 1.05, 1] }}
      transition={{ duration: 16, repeat: Infinity }}
      style={{ zIndex: 0 }}
    />
  </section>
);

export default VisionSection;
