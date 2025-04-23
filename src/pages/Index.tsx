import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedText from "@/components/AnimatedText";
import SectionHeading from "@/components/SectionHeading";
import FeatureCard from "@/components/FeatureCard";
import EcosystemCard from "@/components/EcosystemCard";
import BenefitCard from "@/components/BenefitCard";
import GradientText from "@/components/GradientText";
import ParallaxSection from "@/components/ParallaxSection";
import CallToAction from "@/components/CallToAction";
import Timeline from "@/components/Timeline";
import { BookOpen, Brain, Users, Compass, Edit, Layers, Heart, Sparkles, Star, Zap } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import VisionSection from "@/components/VisionSection";
import BenefitsSection from "@/components/BenefitsSection";
import EcosystemSection from "@/components/EcosystemSection";

const Index = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 overflow-x-hidden">
      {/* Add About CTA as hero banner overlay */}
      <div className="fixed bottom-6 right-6 z-30">
        <motion.a
          href="/about"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 70, delay: 1.2 }}
          whileHover={{
            scale: 1.07,
            boxShadow:
              "0 4px 20px 0 rgba(153,97,255,0.19), 0 1.5px 25px 0 rgba(90,100,255,0.14)",
          }}
          whileTap={{ scale: 0.97 }}
          className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 shadow-xl text-white font-semibold px-9 py-4 rounded-full text-xl flex items-center gap-3 border-2 border-white/10 ring-1 ring-indigo-300/40 drop-shadow-md transition-all"
          style={{ filter: "drop-shadow(0 4px 18px #cabffd70)" }}
        >
          <span aria-label="About Force" className="flex items-center">
            <span className="mr-2 text-2xl">✨</span> About Force
          </span>
        </motion.a>
      </div>
      
      {/* Add floating decorative elements */}
      <div className="fixed top-10 left-10 opacity-30 dark:opacity-40 pointer-events-none z-0">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            y: [0, 15, 0],
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            y: { duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
          }}
        >
          <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" stroke="url(#purpleGradient)" strokeWidth="3" strokeDasharray="10 5" />
            <defs>
              <linearGradient id="purpleGradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                <stop stopColor="#9B87F5" />
                <stop offset="1" stopColor="#6366F1" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </div>
      
      <div className="fixed bottom-20 right-10 opacity-30 dark:opacity-40 pointer-events-none z-0">
        <motion.div
          animate={{ 
            rotate: [0, -360],
            x: [0, -10, 0],
          }}
          transition={{ 
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            x: { duration: 7, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
          }}
        >
          <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 0L61 39H100L69 63L80 100L50 77L20 100L31 63L0 39H39L50 0Z" fill="url(#starGradient)" opacity="0.7" />
            <defs>
              <linearGradient id="starGradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                <stop stopColor="#9B87F5" />
                <stop offset="1" stopColor="#6366F1" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </div>
      
      <HeroSection />
      <VisionSection />
      
      {/* Problem Section */}
      <ParallaxSection className="py-24 md:py-32" bgColor="bg-gradient-secondary dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-950">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="What We're Solving"
            subtitle="Addressing the fundamental challenges of scattered thoughts and limited self-awareness."
          />
          
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="prose prose-lg max-w-none bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl"
            >
              <p className="text-gray-600 dark:text-gray-300 text-center">
                In today's fast-paced world, our thoughts, ideas, and experiences are our most valuable 
                assets—yet they often remain scattered, unorganized, and underutilized. Most people lack 
                awareness of their own thought patterns and mental tendencies, preventing them from achieving 
                higher consciousness and exercising true control over their minds and lives.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-6 text-center">
                Force addresses this fundamental challenge by creating a seamless system that not only captures 
                your thinking across multiple formats but also analyzes patterns, surfaces connections, and 
                generates actionable insights that fuel your journey toward greater self-awareness and personal 
                transformation.
              </p>
            </motion.div>
          </div>
        </div>
      </ParallaxSection>
      
      {/* Approach Section */}
      <section id="approach" className="py-24 md:py-32 relative">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Approach"
            subtitle="Innovative technology that adapts to your unique thought patterns."
            useGradient={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <FeatureCard
              title="Smart Multi-Modal Journaling"
              description="Force goes beyond simple text notes by supporting multiple content formats including text entries, audio recordings, images, and video entries."
              icon={<Edit className="animate-pulse" />}
              index={0}
            />
            <FeatureCard
              title="AI-Powered Analysis"
              description="Our platform's intelligence transforms raw thoughts into structured knowledge through pattern recognition, connection mapping, and sentiment analysis."
              icon={<Brain />}
              index={1}
            />
            <FeatureCard
              title="Generative UI & Personalization"
              description="Force features a revolutionary adaptive interface that evolves with you, creating personalized experiences unique to each user."
              icon={<Layers />}
              index={2}
            />
            <FeatureCard
              title="Curated Experiences"
              description="Connect with like-minded members in unique venues across global cities, led by local Force ambassadors."
              icon={<Compass />}
              index={3}
            />
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-b from-purple-100/30 to-transparent dark:from-purple-900/10 dark:to-transparent rounded-bl-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-gradient-to-t from-indigo-100/30 to-transparent dark:from-indigo-900/10 dark:to-transparent rounded-tr-full blur-3xl -z-10" />
      </section>
      
      <EcosystemSection />
      <BenefitsSection />
      
      {/* Story Section */}
      <ParallaxSection bgColor="bg-gradient-secondary dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-950" className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Story"
            subtitle="The journey behind Force's creation and vision."
          />
          
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="prose prose-lg max-w-none bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl"
            >
              <p className="text-gray-600 dark:text-gray-300">
                Force emerged from our founder's extensive research and personal journey. After five months 
                of user interviews conducted in San Francisco (June-October 2024), she recognized a universal 
                need: people seeking greater consciousness and control over their minds require tools to 
                understand their thought patterns and observe themselves objectively.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-6">
                The founder assembled a team of two interns in November 2024, and together they've been 
                engaged in rigorous R&D to create a platform that helps users analyze their patterns and 
                track progress in their personal development journeys.
              </p>
            </motion.div>
          </div>
        </div>
      </ParallaxSection>

      {/* Roadmap Section */}
      <section className="py-24 md:py-32 relative">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Journey"
            subtitle="Where we've been and where we're going."
            useGradient={true}
          />
          
          <div className="mt-16">
            <Timeline 
              items={[
                {
                  date: "Jun-Oct 2024",
                  title: "User Research Phase",
                  description: "Five months of user interviews conducted in San Francisco."
                },
                {
                  date: "November 2024",
                  title: "Team Formation",
                  description: "Founder assembles a team of two interns to begin development."
                },
                {
                  date: "May 2025",
                  title: "Private Beta Launch",
                  description: "Private beta with rolling access begins."
                },
                {
                  date: "Q3 2025",
                  title: "Global Expansion",
                  description: "Worldwide launch and continued platform development."
                }
              ]} 
            />
          </div>
        </div>
        
        {/* Animated background gradients */}
        <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
          <motion.div
            className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-purple-200/30 dark:bg-purple-900/30 blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.2, 0.3] }}
            transition={{ duration: 15, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-indigo-200/20 dark:bg-indigo-900/20 blur-3xl"
            animate={{ scale: [1, 0.8, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <CallToAction
              title="Join Our Journey"
              subtitle="Be among the first to experience Force and transform your relationship with your mind."
              buttonText="Join Waitlist"
            />
          </motion.div>
        </div>
        
        {/* Enhanced background animation */}
        <motion.div
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="cta-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(124, 58, 237, 0.05)" />
                <stop offset="100%" stopColor="rgba(99, 102, 241, 0.05)" />
              </linearGradient>
              <pattern id="pattern-circles" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                <circle cx="25" cy="25" r="1" fill="rgba(124, 58, 237, 0.2)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-gradient)" />
            <rect width="100%" height="100%" fill="url(#pattern-circles)" />
            
            {Array.from({ length: 30 }).map((_, i) => (
              <motion.circle
                key={i}
                cx={Math.random() * 100 + "%"}
                cy={Math.random() * 100 + "%"}
                r={Math.random() * 3 + 1}
                fill="rgba(124, 58, 237, 0.3)"
                initial={{ opacity: 0.1 }}
                animate={{ 
                  opacity: [0.1, 0.3, 0.1],
                  r: [Math.random() * 3 + 1, Math.random() * 5 + 3, Math.random() * 3 + 1]
                }}
                transition={{ 
                  duration: Math.random() * 5 + 5, 
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            ))}
          </svg>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-950 py-16 border-t border-gray-100 dark:border-gray-800 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-2">
                <GradientText animate={true}>Force</GradientText>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mb-6">Elevating consciousness through technology.</p>
              <p className="text-sm text-gray-400 dark:text-gray-500">
                Currently in development by a team based in India with plans for global expansion in Q3 2025.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-10 flex justify-center space-x-6"
            >
              <motion.a href="#" whileHover={{ y: -3 }} className="text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </motion.a>
              <motion.a href="#" whileHover={{ y: -3 }} className="text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </motion.a>
              <motion.a href="#" whileHover={{ y: -3 }} className="text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363-.416-2.427-.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.045-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                </svg>
              </motion.a>
            </motion.div>
          </div>
        </div>
        
        {/* Background glow effect */}
        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-3/4 h-40 bg-gradient-to-t from-purple-500/5 to-transparent dark:from-purple-500/10 dark:to-transparent rounded-full blur-3xl"></div>
      </footer>

      {/* Add floating geometric shapes */}
      <div className="fixed top-1/4 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <motion.div 
          className="absolute w-20 h-20 opacity-20"
          style={{
            top: "30%",
            left: "5%",
            background: "linear-gradient(135deg, #9B87F5 0%, #6366F1 100%)",
            borderRadius: "38% 62% 63% 37% / 41% 44% 56% 59%",
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180],
            borderRadius: ["38% 62% 63% 37% / 41% 44% 56% 59%", "45% 55% 67% 33% / 63% 46% 54% 37%"]
          }}
          transition={{
            y: { duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            borderRadius: { duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
          }}
        />
        
        <motion.div 
          className="absolute w-16 h-16 opacity-15"
          style={{
            top: "60%",
            right: "10%",
            background: "linear-gradient(135deg, #6366F1 0%, #9B87F5 100%)",
            borderRadius: "40% 60% 70% 30% / 40% 50% 50% 60%",
          }}
          animate={{
            y: [0, 40, 0],
            rotate: [0, -180],
            borderRadius: ["40% 60% 70% 30% / 40% 50% 50% 60%", "50% 50% 40% 60% / 30% 60% 40% 70%"]
          }}
          transition={{
            y: { duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            borderRadius: { duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
          }}
        />
      </div>
    </div>
  );
};

export default Index;
