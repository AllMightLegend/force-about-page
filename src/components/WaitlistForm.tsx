
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
        variant: "success",
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
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="w-full max-w-md mx-auto glass-morphism px-8 py-10 rounded-2xl shadow-2xl border border-white/30 relative"
      style={{
        background: "linear-gradient(135deg, rgba(155,135,245,0.18) 0%, rgba(255,255,255,0.15) 100%)",
        boxShadow: "0 8px 60px 0 rgba(155,135,245,0.19)",
      }}
    >
      <label htmlFor="email" className="block text-lg font-semibold mb-2 text-gradient-primary">
        Join the Force Waitlist
      </label>
      <Input
        id="email"
        type="email"
        autoComplete="email"
        placeholder="Your best email"
        {...register("email")}
        aria-invalid={!!formState.errors.email}
        className="mb-3 bg-white/70 border-gray-300 focus:border-primary/70 shadow-none transition placeholder-gray-400"
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
          className="w-full text-lg py-2 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-500 shadow-lg hover:shadow-2xl hover:-translate-y-[2px] transition-all"
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
      <div className="pt-3 text-center text-xs text-gray-500 dark:text-gray-400">
        Private beta launches <strong>May 2025</strong>. Global rollout in Q3 2025.
      </div>
    </motion.form>
  );
}
