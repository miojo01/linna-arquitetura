"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  
  // Efeito para rolar para o topo ao carregar a página (F5)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      // Animação de Entrada e Saída da PÁGINA inteira
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}