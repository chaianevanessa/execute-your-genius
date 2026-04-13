import { motion } from "framer-motion";

const CTAButton = ({ children }: { children: React.ReactNode }) => (
  <motion.a
    href="#"
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
    className="inline-block w-full max-w-lg bg-gradient-gold text-primary-foreground font-bold text-lg md:text-xl py-5 px-8 rounded-lg shadow-gold animate-pulse-gold text-center cursor-pointer"
  >
    {children}
  </motion.a>
);

export default CTAButton;
