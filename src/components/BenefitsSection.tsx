
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import BenefitCard from "@/components/BenefitCard";
import { Brain, Sparkles, Star } from "lucide-react";

const cardVariants = {
  rest: { y: 0, boxShadow: "0 2px 12px rgba(124, 58, 237, 0.10)" },
  hover: { y: -12, boxShadow: "0 6px 28px 0 rgba(124, 58, 237, 0.16)" }
};

const BenefitsSection = () => (
  <section className="relative py-24 md:py-32 bg-gradient-to-br from-indigo-50 to-white dark:from-gray-950 dark:to-black overflow-hidden z-10">
    <div className="container mx-auto px-4">
      <SectionHeading
        title="How Force Benefits You"
        subtitle="Tailored solutions for various personal and professional needs."
        useGradient={true}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 relative z-10">
        {[{
          title: "For Personal Growth Seekers",
          icon: <Brain />,
          description: [
            "Understand your thought patterns to achieve higher consciousness",
            "Identify mental tendencies that limit your potential",
            "Track your progress toward greater self-awareness",
            "Connect with like-minded individuals on similar journeys"
          ]
        }, {
          title: "For Knowledge Workers & Professionals",
          icon: <Sparkles />,
          description: [
            "Organize complex ideas with intelligent structure",
            "Surface valuable connections between disparate information",
            "Track and optimize decision-making patterns",
            "Capture and refine professional insights over time"
          ]
        }, {
          title: "For Creative Thinkers",
          icon: <Star />,
          description: [
            "Document creative processes and inspiration sources",
            "Develop ideas through guided reflection and analysis",
            "Discover unexpected connections that spark innovation",
            "Build a searchable archive of creative concepts"
          ]
        }].map((props, i) => (
          <motion.div
            variants={cardVariants}
            initial="rest"
            whileHover="hover"
            transition={{ type: "spring", stiffness: 260, damping: 12 }}
            key={props.title}
          >
            <BenefitCard
              title={props.title}
              description={props.description}
              icon={props.icon}
              index={i}
            />
          </motion.div>
        ))}
      </div>
    </div>
    {/* Animated orbs/particles */}
    <motion.div
      className="absolute top-0 left-2 w-52 h-52 rounded-full bg-gradient-to-tr from-primary/20 to-indigo-400/5 blur-3xl"
      animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.22, 0.3] }}
      transition={{ duration: 18, repeat: Infinity }}
      style={{ zIndex: 0 }}
    />
    <motion.div
      className="absolute bottom-0 right-4 w-60 h-60 rounded-full bg-gradient-to-r from-primary/20 to-white/5 blur-2xl"
      animate={{ scale: [0.94, 1.09, 0.94], opacity: [0.25, 0.1, 0.25] }}
      transition={{ duration: 14, repeat: Infinity, repeatType: "reverse" }}
      style={{ zIndex: 0 }}
    />
  </section>
);

export default BenefitsSection;
