
import SectionHeading from "@/components/SectionHeading";
import EcosystemCard from "@/components/EcosystemCard";
import { Brain, Heart, Users, Layers } from "lucide-react";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Force Core Platform",
    description: "Our flagship journaling and consciousness platform with AI-powered insights.",
    icon: <Brain />,
    color: "purple" as const
  },
  {
    title: "Force Apothecary",
    description: "Physical wellness products including body balms, aromatherapy sprays, and oils that complement your digital journey.",
    icon: <Heart />,
    color: "pink" as const
  },
  {
    title: "Force Experiences",
    description: "Curated in-person events connecting like-minded members in unique venues across global cities.",
    icon: <Users />,
    color: "blue" as const
  },
  {
    title: "Force Integrations",
    description: "Seamless connections with health and wellness devices to provide a comprehensive view of your physical and mental state.",
    icon: <Layers />,
    color: "green" as const
  }
];

const EcosystemSection = () => (
  <section className="relative py-24 md:py-32 bg-gradient-to-br from-white via-indigo-50 to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-black overflow-hidden">
    <div className="container mx-auto px-4">
      <SectionHeading
        title="The Force Ecosystem"
        subtitle="A comprehensive array of digital and physical offerings."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-16 relative z-10">
        {cards.map((props, i) => (
          <motion.div
            key={props.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 + (i * 0.13), delay: i * 0.1, ease: "easeOut" }}
            whileHover={{ scale: 1.04, transition: { duration: 0.22 } }}
          >
            <EcosystemCard {...props} index={i} />
          </motion.div>
        ))}
      </div>
    </div>
    {/* Decorative blobs */}
    <motion.div
      className="absolute -bottom-16 -left-8 w-60 h-60 rounded-full bg-purple-200/30 dark:bg-purple-900/30 blur-3xl pointer-events-none"
      animate={{ scale: [1, 1.12, 1], rotate: [0, 45, 0] }}
      transition={{ duration: 16, repeat: Infinity }}
    />
    <motion.div
      className="absolute top-12 right-8 w-44 h-44 rounded-full bg-indigo-200/20 dark:bg-indigo-900/20 blur-2xl pointer-events-none"
      animate={{ scale: [1, 0.98, 1], rotate: [0, -30, 0] }}
      transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
    />
  </section>
);

export default EcosystemSection;
