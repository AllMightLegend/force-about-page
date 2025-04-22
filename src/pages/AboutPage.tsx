
import { motion } from "framer-motion";
import SocialLinks from "@/components/SocialLinks";
import WaitlistForm from "@/components/WaitlistForm";
import { Sparkles } from "lucide-react";

const Section = ({ children, ...rest }: React.HTMLAttributes<HTMLDivElement>) => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.75 }}
    className="relative px-5 max-w-4xl mx-auto mb-20"
    {...rest}
  >
    {children}
  </motion.section>
);

const AboutPage = () => (
  <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#f6f3ff] via-[#fdfcff] to-[#e7e0fd] dark:from-[#1a1f2c] dark:via-gray-900 dark:to-black text-gray-800 dark:text-gray-100">
    {/* Hero */}
    <div className="relative flex flex-col items-center justify-center text-center py-32 overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, scale: 0.93, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-5 bg-gradient-to-br from-purple-600 via-indigo-500 to-blue-600 bg-clip-text text-transparent drop-shadow-xl"
      >
        About Force
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="max-w-xl mx-auto text-lg md:text-xl text-balance"
      >
        <span className="inline-block relative bg-gradient-to-r from-white/60 via-purple-100/80 to-indigo-100/70 px-4 py-2 rounded-xl shadow-md border border-white/30 backdrop-blur-md mb-2">
          <Sparkles className="text-purple-400 inline-block mr-1 animate-pulse" />
          Elevating consciousness through technology.
        </span>
        <p className="mt-5 font-medium text-gray-700 dark:text-gray-300">
          Force is reimagining personal growth using AI-driven multi-modal analysis, building a premium ecosystem to enhance creativity, awareness & well-being.
        </p>
      </motion.div>
      <motion.div
        className="absolute -right-[14vw] top-10 w-[350px] h-[350px] rounded-full bg-gradient-to-br from-purple-300/50 to-indigo-300/30 blur-3xl"
        animate={{ scale: [1, 1.08, 1], y: [0, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        style={{ zIndex: 0 }}
      />
      <motion.div
        className="absolute -left-[7vw] -bottom-16 w-[280px] h-[230px] rounded-full bg-gradient-to-br from-[#8c8fff66] to-[#fff0] blur-3xl"
        animate={{ scale: [1, 1.03, 1], x: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
        style={{ zIndex: 0 }}
      />
    </div>
    {/* Vision */}
    <Section>
      <h2 className="text-4xl font-bold mb-4 text-gradient">Our Vision</h2>
      <p className="text-xl mb-2 text-gray-700 dark:text-gray-300">
        Force is reimagining personal growth through powerful AI-driven analysis of multi-modal content. We're building a comprehensive ecosystem that transforms how you capture, organize, and leverage your thoughts to enhance consciousness, creativity, and personal development.
      </p>
    </Section>
    {/* What We're Solving */}
    <Section>
      <h2 className="text-3xl font-bold mb-3">What We're Solving</h2>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.11 }}
        className="prose prose-lg text-gray-600 dark:text-gray-300 bg-white/80 dark:bg-gray-900/60 px-6 py-4 rounded-xl shadow-lg"
      >
        <p>
          In today's fast-paced world, thoughts and experiences are our greatest assets—yet they remain scattered and underutilized. Most people lack awareness of their thought patterns, limiting self-mastery and growth.
        </p>
        <p>
          Force creates a seamless system that not only captures your thinking across formats, but also analyzes patterns, surfaces key connections, and generates insights to fuel your personal growth journey.
        </p>
      </motion.div>
    </Section>
    {/* Our Approach */}
    <Section>
      <h2 className="text-3xl font-bold mb-5 text-gradient">Our Approach</h2>
      {/* Feature grid */}
      <div className="grid gap-7 md:grid-cols-2">
        <motion.div
          whileHover={{ y: -6, scale: 1.03 }}
          className="p-6 rounded-2xl bg-gradient-to-br from-white/80 via-purple-50 to-indigo-100 dark:from-gray-900/80 dark:to-black/70 shadow-md border border-white/30 transition-all"
        >
          <h3 className="font-semibold mb-2 text-purple-700 dark:text-purple-300">Smart Multi-Modal Journaling</h3>
          <ul className="list-disc pl-6 text-sm text-gray-700 dark:text-gray-300 space-y-1">
            <li>Text entries for detailed thoughts and reflections</li>
            <li>Audio recordings for on-the-go idea capture</li>
            <li>Images &amp; visuals for inspiration</li>
            <li>Video entries for dynamic expression</li>
          </ul>
        </motion.div>
        <motion.div
          whileHover={{ y: -6, scale: 1.03 }}
          className="p-6 rounded-2xl bg-gradient-to-br from-white/80 via-purple-50 to-indigo-100 dark:from-gray-900/80 dark:to-black/70 shadow-md border border-white/30 transition-all"
        >
          <h3 className="font-semibold mb-2 text-indigo-600 dark:text-indigo-300">AI-Powered Analysis</h3>
          <ul className="list-disc pl-6 text-sm text-gray-700 dark:text-gray-300 space-y-1">
            <li>Pattern recognition of thoughts</li>
            <li>Connection mapping between ideas</li>
            <li>Sentiment &amp; brain wave analysis</li>
            <li>Personalized recommendations</li>
          </ul>
        </motion.div>
        <motion.div
          whileHover={{ y: -6, scale: 1.03 }}
          className="p-6 rounded-2xl bg-gradient-to-br from-white/80 via-indigo-50 to-purple-100 dark:from-gray-900/80 dark:to-black/70 shadow-md border border-white/30 transition-all"
        >
          <h3 className="font-semibold mb-2 text-pink-600 dark:text-pink-300">Generative UI & Personalization</h3>
          <ul className="list-disc pl-6 text-sm text-gray-700 dark:text-gray-300 space-y-1">
            <li>Adaptive, evolving UI</li>
            <li>Custom organization systems for your mind</li>
            <li>Prompts that inspire deeper thinking</li>
            <li>Growth-oriented insights &amp; nudges</li>
          </ul>
        </motion.div>
      </div>
    </Section>
    {/* The Force Ecosystem */}
    <Section>
      <h2 className="text-3xl font-bold mb-5 text-gradient">The Force Ecosystem</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <motion.div whileHover={{ y: -7, scale: 1.05 }} className="p-6 flex flex-col items-center rounded-2xl bg-gradient-to-br from-purple-200/50 to-white dark:from-purple-900/50 dark:to-black/70 shadow-lg border border-white/30">
          <span className="text-2xl font-bold mb-1 text-purple-700">Force Core Platform</span>
          <p className="text-xs text-gray-600 text-center dark:text-gray-400">Flagship journaling and consciousness platform with AI-powered insights</p>
        </motion.div>
        <motion.div whileHover={{ y: -7, scale: 1.05 }} className="p-6 flex flex-col items-center rounded-2xl bg-gradient-to-br from-pink-200/50 to-white dark:from-pink-900/40 dark:to-black/70 shadow-lg border border-white/30">
          <span className="text-2xl font-bold mb-1 text-pink-700">Force Apothecary</span>
          <p className="text-xs text-gray-600 text-center dark:text-gray-400">Wellness products to complement your digital journey</p>
        </motion.div>
        <motion.div whileHover={{ y: -7, scale: 1.05 }} className="p-6 flex flex-col items-center rounded-2xl bg-gradient-to-br from-blue-200/50 to-white dark:from-blue-900/40 dark:to-black/70 shadow-lg border border-white/30">
          <span className="text-2xl font-bold mb-1 text-blue-700">Force Experiences</span>
          <p className="text-xs text-gray-600 text-center dark:text-gray-400">Curated in-person events for like-minded growth seekers</p>
        </motion.div>
        <motion.div whileHover={{ y: -7, scale: 1.05 }} className="p-6 flex flex-col items-center rounded-2xl bg-gradient-to-br from-green-200/50 to-white dark:from-green-900/40 dark:to-black/70 shadow-lg border border-white/30">
          <span className="text-2xl font-bold mb-1 text-green-700">Force Integrations</span>
          <p className="text-xs text-gray-600 text-center dark:text-gray-400">Connects with Oura, Muse, Ultrahuman, Strava, etc.</p>
        </motion.div>
      </div>
    </Section>
    {/* Benefits */}
    <Section>
      <h2 className="text-3xl font-bold mb-8 text-gradient">How Force Benefits You</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <motion.div whileHover={{ scale: 1.05 }} className="rounded-2xl p-7 bg-white/70 dark:bg-gray-900/60 shadow-lg border border-gray-200/40 dark:border-gray-700/60">
          <span className="font-semibold text-lg text-purple-700">Personal Growth Seekers</span>
          <ul className="mt-3 text-sm text-gray-700 dark:text-gray-300 space-y-2">
            <li>Understand your thought patterns</li>
            <li>Identify mental tendencies</li>
            <li>Connect with like-minded people</li>
            <li>Track conscious growth</li>
          </ul>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="rounded-2xl p-7 bg-white/70 dark:bg-gray-900/60 shadow-lg border border-gray-200/40 dark:border-gray-700/60">
          <span className="font-semibold text-lg text-blue-700">Knowledge Workers</span>
          <ul className="mt-3 text-sm text-gray-700 dark:text-gray-300 space-y-2">
            <li>Organize complex ideas</li>
            <li>Surface valuable connections</li>
            <li>Optimize decision-making</li>
            <li>Capture professional insights</li>
          </ul>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="rounded-2xl p-7 bg-white/70 dark:bg-gray-900/60 shadow-lg border border-gray-200/40 dark:border-gray-700/60">
          <span className="font-semibold text-lg text-pink-700">Creative Thinkers</span>
          <ul className="mt-3 text-sm text-gray-700 dark:text-gray-300 space-y-2">
            <li>Document creative inspiration</li>
            <li>Develop ideas with AI guidance</li>
            <li>Discover unexpected connections</li>
            <li>Build a searchable archive</li>
          </ul>
        </motion.div>
      </div>
    </Section>
    {/* Story */}
    <Section>
      <h2 className="text-3xl font-bold mb-5 text-gradient">Our Story</h2>
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75, delay: 0.11 }}
        className="prose prose-lg text-gray-700 dark:text-gray-300 bg-white/80 dark:bg-gray-900/60 px-7 py-5 rounded-2xl shadow-md"
      >
        <p>
          Force was born from founder research and a personal quest. After 5 months of user interviews (San Francisco, 2024), a universal need was identified for tools empowering self-awareness and mastery.
        </p>
        <p>
          The founding team formed in Nov 2024 and has driven R&D, aiming to empower thousands on their journey toward greater consciousness and growth.
        </p>
      </motion.div>
    </Section>
    {/* Waitlist Signup */}
    <Section>
      <WaitlistForm />
    </Section>
    {/* Social Links */}
    <Section>
      <h3 className="text-xl font-semibold text-gradient mb-2 text-center">Let’s connect</h3>
      <SocialLinks />
      <div className="mt-6 text-sm text-center text-gray-500 dark:text-gray-400">
        Team in India &mdash; Global launch Q3 2025.
      </div>
    </Section>
  </div>
);

export default AboutPage;
