
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const waitlistSchema = z.object({
  email: z.string().email("Enter a valid email."),
});

type WaitlistFormValues = z.infer<typeof waitlistSchema>;

export default function WaitlistForm() {
  const { register, handleSubmit, reset, formState } = useForm<WaitlistFormValues>({
    resolver: zodResolver(waitlistSchema),
  });
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = (data: WaitlistFormValues) => {
    setLoading(true);
    setTimeout(() => {
      toast({
        title: "You're on the waitlist!",
        description: "We'll reach out as soon as access is available.",
        variant: "default",
      });
      reset();
      setLoading(false);
    }, 1200);
  };

  return (
    <motion.form
      ref={formRef}
      onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 28 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-lg mx-auto glass-morphism px-10 py-12 rounded-2xl shadow-2xl border border-white/30 relative mb-2"
      style={{
        background: "linear-gradient(135deg, rgba(155,135,245,0.18) 0%, rgba(255,255,255,0.15) 100%)",
        boxShadow: "0 8px 60px 0 rgba(155,135,245,0.19)",
      }}
    >
      <div className="absolute -top-12 -right-12 w-36 h-36">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-80">
          <path fill="#9B87F5" d="M41.3,-68.5C54.4,-61.9,66.6,-52.7,75.4,-40.3C84.1,-27.8,89.4,-12.1,87.8,2.8C86.3,17.7,78,31.7,68.2,44.2C58.4,56.7,47.2,67.8,34,74.5C20.8,81.3,5.5,83.8,-8.9,81.5C-23.2,79.3,-36.7,72.3,-47.9,62.8C-59.2,53.3,-68.3,41.3,-73.2,27.8C-78.1,14.3,-78.8,-0.6,-75.2,-14.4C-71.7,-28.2,-63.9,-40.8,-53.1,-48.8C-42.2,-56.8,-28.2,-60.2,-15,-65.4C-1.9,-70.5,10.3,-77.4,22.9,-77.1C35.5,-76.7,48.4,-69.1,61.2,-61.5C74,-54,86.6,-46.7,88.9,-35.8C91.1,-24.8,83.1,-10.2,75,-1C67,8.2,58.8,12,51.9,17.8C45,23.6,39.5,31.4,32.3,36.6C25.2,41.9,16.6,44.7,7.7,47.4C-1.2,50,-10.5,52.6,-15.7,48.9C-20.9,45.3,-22,35.4,-21.7,26.5C-21.5,17.7,-19.8,9.8,-23.5,3C-27.2,-3.9,-36.2,-9.8,-36,-13.6C-35.8,-17.4,-26.4,-19.3,-19.3,-24.1C-12.2,-28.9,-7.4,-36.8,0.5,-37.7C8.4,-38.7,19.4,-32.8,29.5,-33.5C39.5,-34.2,48.5,-41.5,53.6,-48.9C58.6,-56.4,59.7,-63.9,55.9,-69.4C52.1,-74.8,43.4,-78,34.3,-77.1C25.3,-76.2,15.9,-71.2,5.7,-69.7C-4.5,-68.3,-15.5,-70.4,-26.3,-68.7C-37,-67,-47.5,-61.5,-57.3,-53.8C-67.1,-46.1,-76.3,-36.2,-80.8,-24.5C-85.3,-12.9,-85.1,0.6,-81.6,12.5C-78.2,24.4,-71.4,34.9,-62.6,42.8C-53.9,50.7,-43.1,56.2,-32,59.7C-20.9,63.2,-9.5,64.8,0.2,65.2C10,65.5,18,64.7,27.4,62.3C36.8,59.9,47.6,56,55.7,48.6C63.8,41.3,69.2,30.6,72.4,19.3C75.5,8,76.5,-3.9,74.8,-15.3C73.1,-26.8,68.7,-37.8,61,-46.1C53.3,-54.5,42.3,-60.1,30.8,-64.7C19.3,-69.3,7.3,-72.8,-3.8,-71.1C-14.9,-69.4,-25,-62.4,-35.8,-55.2C-46.5,-48,-57.9,-40.5,-64.9,-30.4C-71.9,-20.2,-74.3,-7.5,-74.3,4.9C-74.4,17.4,-72,29.4,-65.5,38.5C-58.9,47.6,-48.2,53.6,-37.3,56.6C-26.4,59.5,-15.4,59.3,-5.2,58.3C5.1,57.4,14.6,55.7,25.4,53C36.3,50.3,48.5,46.6,55.2,38.9C61.9,31.3,63,19.6,65.9,9.5C68.7,-0.6,73.3,-9.2,72.5,-17.3C71.7,-25.3,65.4,-32.9,59.2,-41.3C52.9,-49.7,46.6,-59.1,37.7,-63.9C28.7,-68.7,17.1,-69,4.5,-72.5C-8.1,-76.1,-21.6,-83,-31.5,-80.5C-41.3,-78,-47.4,-66.2,-53.2,-54.9C-59,-43.7,-64.5,-32.9,-68.3,-21.3C-72.2,-9.7,-74.3,2.7,-73.1,14.9C-71.8,27,-67.1,38.8,-58.7,47.2C-50.3,55.6,-38.3,60.7,-27,62.5C-15.6,64.3,-4.9,62.9,5.9,60.9C16.7,59,27.7,56.4,35.9,50.2C44.2,43.9,49.7,33.9,54.5,23.6C59.3,13.3,63.3,2.6,65,-8.9C66.7,-20.5,66.2,-32.8,61.5,-42.6C56.7,-52.4,47.8,-59.8,37.8,-64.1C27.9,-68.3,16.8,-69.5,5.9,-69.8C-5,-70.2,-15.7,-69.8,-25.7,-66.5C-35.7,-63.3,-44.9,-57.2,-51.8,-49.2C-58.6,-41.1,-63,-31.1,-67.2,-20.4C-71.4,-9.6,-75.3,1.9,-74.7,13C-74.1,24.2,-68.9,35,-61.4,43.5C-53.8,52,-43.7,58,-33.1,60.5C-22.5,63,-11.4,61.9,0,63C11.3,64,23,67,34,66.7C45,66.5,55.2,63,63.3,56.2C71.3,49.4,77.2,39.5,80.2,28.5C83.3,17.6,83.5,5.7,80.6,-4.7C77.7,-15.2,71.6,-24.1,64.7,-32.3C57.7,-40.5,49.7,-48,40.4,-53.7C31,-59.4,20.3,-63.2,9.4,-65.2C-1.5,-67.1,-12.6,-67.2,-23.3,-64.4C-33.9,-61.6,-44,-56,-52.1,-48C-60.3,-40,-66.4,-29.7,-70.2,-18.4C-74.1,-7.1,-75.7,5.1,-73.7,16.6C-71.7,28,-66.1,38.6,-58.4,47.3C-50.6,56,-40.8,62.9,-30,66.6C-19.2,70.4,-7.3,71.1,4.6,71.6C16.5,72.2,29.5,72.6,38.1,67.2C46.7,61.9,51,50.7,55.7,40.2C60.5,29.8,65.7,19.9,67.2,9.2C68.6,-1.5,66.3,-13,63.2,-24C60,-35,55.9,-45.6,48.7,-54C41.4,-62.5,31,-68.9,20.1,-71.7C9.2,-74.5,-2.2,-73.8,-12.5,-70.5C-22.8,-67.3,-31.9,-61.5,-40.6,-54.8C-49.2,-48.1,-57.4,-40.4,-62.3,-30.9C-67.3,-21.3,-69.1,-9.8,-69.9,1.6C-70.6,13,-70.2,24.5,-65.9,34.6C-61.6,44.7,-53.2,53.4,-43.3,59.1C-33.4,64.9,-21.9,67.6,-10.3,69.2C1.4,70.8,13.2,71.3,24.5,68.5C35.7,65.8,46.4,59.7,54.7,51.5C63.1,43.2,69.3,32.7,74.4,21.6C79.5,10.5,83.5,-1.2,83.1,-12.7C82.8,-24.2,78.2,-35.5,70.9,-44.8C63.6,-54,53.7,-61.1,42.6,-65.8C31.5,-70.5,19.2,-72.7,7.1,-73.9C-5,-75.1,-16.9,-75.2,-28.4,-72.7C-40,-70.2,-51.1,-65.1,-59.5,-57C-68,-48.9,-73.7,-37.9,-76.8,-26.5C-79.9,-15,-80.4,-3.2,-77.9,7.7C-75.5,18.6,-70.2,28.6,-62.9,37.1C-55.7,45.7,-46.6,52.8,-36.3,57.4C-26.1,62.1,-14.7,64.3,-3.5,65.2C7.8,66,18.8,65.5,29.7,62.5C40.6,59.6,51.3,54.3,59.4,46.5C67.4,38.8,72.7,28.7,75.8,17.9C78.8,7.1,79.5,-4.5,77.7,-15.5C75.9,-26.5,71.5,-37,64,-45.2C56.5,-53.4,45.9,-59.4,34.9,-62.3C23.9,-65.2,12.4,-65.1,1.1,-65.1C-10.1,-65.1,-21.1,-65.2,-31.3,-62.6C-41.6,-59.9,-51.1,-54.4,-58.4,-46.6C-65.7,-38.7,-70.9,-28.5,-73.8,-17.4C-76.7,-6.4,-77.3,5.6,-75.2,16.8C-73,28,-68,38.5,-60.5,46.9C-53.1,55.2,-43.1,61.4,-32.3,65.3C-21.6,69.1,-10.1,70.7,1.5,71.6C13,72.5,25.1,72.8,35.3,68.9C45.5,65.1,53.8,57,60.9,47.7C68,38.3,73.8,27.5,76.2,15.8C78.6,4.1,77.6,-8.5,74.4,-20C71.2,-31.6,65.9,-42,58,-50.6C50.1,-59.1,39.6,-65.7,28.4,-70C17.3,-74.3,5.5,-76.3,-5.8,-75.9C-17.1,-75.5,-27.8,-72.7,-37.6,-67.9C-47.5,-63.1,-56.5,-56.2,-63.3,-47.1C-70.2,-38,-75,-26.7,-76.9,-14.8C-78.8,-2.8,-77.7,9.9,-74.1,21.2C-70.5,32.5,-64.4,42.3,-55.9,50.2C-47.4,58,-36.5,63.9,-25.1,66.9C-13.7,69.9,-1.8,70.1,9.8,69.3C21.4,68.6,32.7,67,42,62C51.3,57,58.6,48.6,64.1,39.1C69.6,29.7,73.2,19.1,74.3,8.2C75.4,-2.8,74,-14.1,70.1,-24C66.2,-33.9,59.9,-42.3,51.9,-49.3C44,-56.2,34.5,-61.6,24.3,-64.6C14.2,-67.7,3.3,-68.5,-7.4,-68.2C-18.1,-68,-28.7,-66.8,-38.4,-62.9C-48.1,-59.1,-56.9,-52.6,-63.6,-44.2C-70.3,-35.9,-75,-25.7,-77,-14.7C-79.1,-3.8,-78.6,7.9,-74.8,18.1C-71,28.3,-63.9,37.1,-54.9,43.9C-46,50.7,-35.2,55.5,-24,58.4C-12.8,61.2,-1.2,62.1,9.7,61C20.7,59.8,31,56.7,40.4,51.5C49.9,46.3,58.6,39.1,64.6,30.2C70.5,21.3,73.8,10.8,74.6,-0.1C75.4,-11,73.7,-22.5,69.4,-32.6C65,-42.7,58,-51.5,49.1,-58.3C40.1,-65.2,29.2,-70.1,17.9,-73.8C6.7,-77.6,-4.8,-80.2,-15.9,-79.4C-26.9,-78.6,-37.5,-74.4,-46.1,-67.8C-54.7,-61.3,-61.4,-52.4,-65.8,-42.4C-70.2,-32.4,-72.4,-21.3,-73.4,-10C-74.5,1.3,-74.4,12.6,-71.3,23.1C-68.2,33.5,-62,43.1,-53.8,50.5C-45.5,58,-35,63.2,-24.1,66.5C-13.1,69.8,-1.6,71.2,9.8,70.2C21.1,69.2,32.3,65.9,42.1,60.6C51.9,55.2,60.4,47.8,66.4,38.9C72.5,30,76.1,19.6,77.6,9.1C79,- ━━━━━━━ 1% of 13368">
        </svg>
      </div>
      
      <label htmlFor="email" className="block text-2xl font-semibold mb-5 text-gradient-primary">
        Join the Force Waitlist
      </label>
      <Input
        id="email"
        type="email"
        autoComplete="email"
        placeholder="Your best email"
        {...register("email")}
        aria-invalid={!!formState.errors.email}
        className="mb-4 bg-white/70 border-gray-300 focus:border-primary/70 shadow-none transition placeholder-gray-400 text-lg"
        disabled={loading}
      />
      {formState.errors.email && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-xs mb-2">
          {formState.errors.email.message}
        </motion.div>
      )}
      <motion.div whileHover={{ scale: 1.04 }}>
        <Button
          type="submit"
          disabled={loading}
          className="w-full text-lg py-3 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-500 shadow-lg hover:shadow-2xl hover:-translate-y-[2px] transition-all"
        >
          {loading ? (
            <span className="inline-flex gap-2 items-center">
              <span className="animate-spin inline-block h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
              Joining...
            </span>
          ) : (
            "Join Waitlist"
          )}
        </Button>
      </motion.div>
      <div className="pt-5 text-center text-base text-gray-500 dark:text-gray-400">
        Private beta launches <strong>May 2025</strong>. Global rollout in Q3 2025.
      </div>
      
      {/* Add decorative elements */}
      <div className="absolute -z-10 -bottom-10 -left-10 w-24 h-24 bg-indigo-200/30 dark:bg-indigo-700/20 rounded-full blur-xl"></div>
      <div className="absolute -z-10 top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-40">
          <path d="M30 0L36.5 23.5L60 30L36.5 36.5L30 60L23.5 36.5L0 30L23.5 23.5L30 0Z" fill="url(#paint0_linear)" />
          <defs>
            <linearGradient id="paint0_linear" x1="0" y1="0" x2="60" y2="60" gradientUnits="userSpaceOnUse">
              <stop stopColor="#9B87F5" />
              <stop offset="1" stopColor="#6366F1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute -z-10 top-0 right-0 transform -translate-y-1/3 translate-x-1/3">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-40">
          <circle cx="20" cy="20" r="20" fill="url(#paint1_linear)" />
          <defs>
            <linearGradient id="paint1_linear" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#9B87F5" />
              <stop offset="1" stopColor="#6366F1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </motion.form>
  );
}
