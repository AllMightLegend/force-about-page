
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import BackgroundParticles from "@/components/BackgroundParticles";
import { Brain, Sparkles } from "lucide-react";

const VisionSection = () => (
  <section id="vision" className="relative py-24 md:py-32 bg-gradient-to-br from-white via-purple-50 to-indigo-50 dark:from-gray-950 dark:via-gray-900 dark:to-black overflow-hidden">
    <BackgroundParticles count={12} variant="subtle" />
    
    <div className="container mx-auto px-4 relative z-10">
      <SectionHeading
        title="Our Vision"
        subtitle="We're reimagining how technology can enhance human consciousness."
        useGradient={true}
      />
      
      <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="relative z-10 glass-morphism bg-white/30 dark:bg-black/20 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-xl border border-purple-100/50 dark:border-purple-900/30">
            <div className="absolute -top-6 -left-6 bg-gradient-to-br from-purple-400/30 to-indigo-400/30 dark:from-purple-700/30 dark:to-indigo-700/20 w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Brain className="h-7 w-7 text-purple-600 dark:text-purple-400" />
            </div>
            
            <h3 className="text-xl md:text-2xl font-bold mb-4 mt-2 pl-5 text-gradient">Our Philosophy</h3>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Force is reimagining personal growth through powerful AI-driven analysis of multi-modal content.
              We believe consciousness can be expanded through intentional reflection and pattern recognition.
            </p>
          </div>
          
          {/* Decorative element */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-tr from-indigo-300/20 to-purple-300/10 dark:from-indigo-700/30 dark:to-purple-700/10 blur-2xl"></div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative"
        >
          <div className="relative z-10 glass-morphism bg-white/30 dark:bg-black/20 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-xl border border-purple-100/50 dark:border-purple-900/30">
            <div className="absolute -top-6 -right-6 bg-gradient-to-br from-indigo-400/30 to-blue-400/30 dark:from-indigo-700/30 dark:to-blue-700/20 w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Sparkles className="h-7 w-7 text-indigo-600 dark:text-indigo-400" />
            </div>
            
            <h3 className="text-xl md:text-2xl font-bold mb-4 mt-2 pr-5 text-right text-gradient">Our Mission</h3>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              We're building a comprehensive ecosystem that transforms how you capture, organize, and leverage your thoughts to enhance consciousness, creativity, and personal development.
            </p>
          </div>
          
          {/* Decorative element */}
          <div className="absolute -top-10 -left-10 w-36 h-36 rounded-full bg-gradient-to-br from-purple-300/20 to-indigo-300/10 dark:from-purple-700/30 dark:to-indigo-700/10 blur-2xl"></div>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="mt-16"
      >
        <div className="relative z-10 max-w-3xl mx-auto glass-morphism bg-white/40 dark:bg-black/30 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-xl border border-white/30 dark:border-white/5">
          <blockquote className="text-xl md:text-2xl italic text-center text-gray-700 dark:text-gray-200">
            "The future of personal growth lies in the intersection of technology and consciousness."
            <footer className="mt-4 text-sm text-gray-500 dark:text-gray-400 not-italic">— Founder, Force</footer>
          </blockquote>
        </div>
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
