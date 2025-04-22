
import { motion } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
import SectionHeading from "@/components/SectionHeading";
import FeatureCard from "@/components/FeatureCard";
import EcosystemCard from "@/components/EcosystemCard";
import BenefitCard from "@/components/BenefitCard";
import GradientText from "@/components/GradientText";
import ParallaxSection from "@/components/ParallaxSection";
import CallToAction from "@/components/CallToAction";
import Timeline from "@/components/Timeline";
import { BookOpen, Brain, Users, Compass, Edit, Layers, Heart } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6 p-3 bg-secondary rounded-2xl"
            >
              <span className="text-primary font-medium">Elevate your consciousness</span>
            </motion.div>
            
            <div className="mb-8">
              <AnimatedText 
                text="About Force" 
                className="text-5xl md:text-7xl font-bold mb-4 text-balance" 
              />
              <AnimatedText 
                text="Reimagining personal growth through AI-driven analysis of your thoughts and experiences."
                className="text-xl text-gray-600 leading-relaxed text-balance"
                delay={3}
              />
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex justify-center space-x-4 mt-8"
            >
              <a 
                href="#vision" 
                className="bg-gradient-primary text-white px-6 py-3 rounded-lg hover-lift hover-glow"
              >
                Our Vision
              </a>
              <a 
                href="#approach" 
                className="bg-white text-primary border border-purple-200 px-6 py-3 rounded-lg hover-lift hover-glow"
              >
                Our Approach
              </a>
            </motion.div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-purple-100 mix-blend-multiply blur-3xl"
          />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="absolute top-1/4 -left-10 w-96 h-96 rounded-full bg-indigo-100 mix-blend-multiply blur-3xl"
          />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-purple-200 mix-blend-multiply blur-3xl"
          />
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Vision"
            subtitle="We're reimagining how technology can enhance human consciousness."
          />
          
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg max-w-none text-center"
            >
              <p className="text-xl text-gray-600 leading-relaxed">
                Force is reimagining personal growth through powerful AI-driven analysis of multi-modal content. 
                We're building a comprehensive ecosystem that transforms how you capture, organize, and 
                leverage your thoughts to enhance consciousness, creativity, and personal development.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <ParallaxSection className="py-16 md:py-24" bgColor="bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="What We're Solving"
            subtitle="Addressing the fundamental challenges of scattered thoughts and limited self-awareness."
          />
          
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg max-w-none"
            >
              <p className="text-gray-600 text-center">
                In today's fast-paced world, our thoughts, ideas, and experiences are our most valuable 
                assets—yet they often remain scattered, unorganized, and underutilized. Most people lack 
                awareness of their own thought patterns and mental tendencies, preventing them from achieving 
                higher consciousness and exercising true control over their minds and lives.
              </p>
              <p className="text-gray-600 mt-4 text-center">
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
      <section id="approach" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Approach"
            subtitle="Innovative technology that adapts to your unique thought patterns."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <FeatureCard
              title="Smart Multi-Modal Journaling"
              description="Force goes beyond simple text notes by supporting multiple content formats including text entries, audio recordings, images, and video entries."
              icon={<Edit />}
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
      </section>

      {/* Ecosystem Section */}
      <ParallaxSection bgColor="bg-gradient-secondary" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="The Force Ecosystem"
            subtitle="A comprehensive array of digital and physical offerings."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <EcosystemCard
              title="Force Core Platform"
              description="Our flagship journaling and consciousness platform with AI-powered insights."
              icon={<Brain />}
              index={0}
              color="purple"
            />
            <EcosystemCard
              title="Force Apothecary"
              description="Physical wellness products including body balms, aromatherapy sprays, and oils that complement your digital journey."
              icon={<Heart />}
              index={1}
              color="pink"
            />
            <EcosystemCard
              title="Force Experiences"
              description="Curated in-person events connecting like-minded members in unique venues across global cities."
              icon={<Users />}
              index={2}
              color="blue"
            />
            <EcosystemCard
              title="Force Integrations"
              description="Seamless connections with health and wellness devices to provide a comprehensive view of your physical and mental state."
              icon={<Layers />}
              index={3}
              color="green"
            />
          </div>
        </div>
      </ParallaxSection>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="How Force Benefits You"
            subtitle="Tailored solutions for various personal and professional needs."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <BenefitCard
              title="For Personal Growth Seekers"
              description={[
                "Understand your thought patterns to achieve higher consciousness",
                "Identify mental tendencies that limit your potential",
                "Track your progress toward greater self-awareness",
                "Connect with like-minded individuals on similar journeys"
              ]}
              icon={<Brain />}
              index={0}
            />
            <BenefitCard
              title="For Knowledge Workers & Professionals"
              description={[
                "Organize complex ideas with intelligent structure",
                "Surface valuable connections between disparate information",
                "Track and optimize decision-making patterns",
                "Capture and refine professional insights over time"
              ]}
              icon={<Brain />}
              index={1}
            />
            <BenefitCard
              title="For Creative Thinkers"
              description={[
                "Document creative processes and inspiration sources",
                "Develop ideas through guided reflection and analysis",
                "Discover unexpected connections that spark innovation",
                "Build a searchable archive of creative concepts"
              ]}
              icon={<BookOpen />}
              index={2}
            />
          </div>
        </div>
      </section>

      {/* Story Section */}
      <ParallaxSection bgColor="bg-gradient-secondary" className="py-16 md:py-24">
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
              transition={{ duration: 0.6 }}
              className="prose prose-lg max-w-none"
            >
              <p className="text-gray-600">
                Force emerged from our founder's extensive research and personal journey. After five months 
                of user interviews conducted in San Francisco (June-October 2024), she recognized a universal 
                need: people seeking greater consciousness and control over their minds require tools to 
                understand their thought patterns and observe themselves objectively.
              </p>
              <p className="text-gray-600 mt-4">
                The founder assembled a team of two interns in November 2024, and together they've been 
                engaged in rigorous R&D to create a platform that helps users analyze their patterns and 
                track progress in their personal development journeys.
              </p>
            </motion.div>
          </div>
        </div>
      </ParallaxSection>

      {/* Roadmap Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Journey"
            subtitle="Where we've been and where we're going."
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
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <CallToAction
            title="Join Our Journey"
            subtitle="Be among the first to experience Force and transform your relationship with your mind."
            buttonText="Join Waitlist"
            buttonLink="#"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2"><GradientText>Force</GradientText></h2>
            <p className="text-gray-500 mb-6">Elevating consciousness through technology.</p>
            <p className="text-sm text-gray-400">
              Currently in development by a team based in India with plans for global expansion in Q3 2025.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
