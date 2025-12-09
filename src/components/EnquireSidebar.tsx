import { useState } from "react";
import { motion } from "framer-motion";
import { EnquiryFormSidebar } from "./EnquiryFormSidebar";

export const EnquireSidebar = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
      >
        <button
          onClick={() => setIsFormOpen(true)}
          className="bg-gold hover:bg-gold-dark text-primary-foreground px-3 py-6 flex items-center justify-center transition-colors duration-300"
          style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
          }}
        >
          <span className="text-sm font-medium tracking-wider">Enquire Now</span>
        </button>
      </motion.div>
      <EnquiryFormSidebar
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />
    </>
  );
};
