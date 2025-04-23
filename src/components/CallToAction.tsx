
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import WaitlistForm from "@/components/WaitlistForm";

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
    <div className="relative overflow-hidden backdrop-blur-sm bg-white/30 dark:bg-black/20 border border-purple-100 dark:border-purple-900/30 rounded-2xl p-10 md:p-12 shadow-2xl">
      <div className="relative z-10">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4 text-gradient"
        >
          {title}
        </motion.h3>
        
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8"
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
          <Dialog>
            <DialogTrigger asChild>
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.5)"
                }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg hover:shadow-xl transition-all"
                aria-label={buttonText}
              >
                {buttonText}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </motion.button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md md:max-w-lg bg-transparent border-none shadow-none">
              <WaitlistForm />
            </DialogContent>
          </Dialog>
        </motion.div>
      </div>
      
      <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-300 to-indigo-300 dark:from-purple-700 dark:to-indigo-800 rounded-full opacity-50 blur-2xl"></div>
      <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-indigo-300 to-purple-300 dark:from-indigo-700 dark:to-purple-800 rounded-full opacity-50 blur-2xl"></div>
    </div>
  );
};

export default CallToAction;
