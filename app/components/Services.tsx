"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

const servicos = [
  {
    title: "Projeto Arquitetônico",
    description: "Criação do design completo de um novo edifício comercial, desde a concepção até a documentação técnica.",
  },
  {
    title: "Projeto de Interiores",
    description: "Planejamento e design de ambientes internos, otimizando o espaço para funcionalidade e estética.",
  },
  {
    title: "Projeto de Fachada",
    description: "Renovação e criação de fachadas que valorizam a identidade visual da sua empresa.",
  },
];

// Sub-componente do Card com Spotlight
function SpotlightCard({ title, description, index }: { title: string, description: string, index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      className="group relative border border-white/10 bg-cinza-medio px-8 py-10 rounded-xl overflow-hidden"
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
    >
      {/* O Efeito de Luz (Spotlight) */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(213, 209, 200, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Conteúdo */}
      <div className="relative h-full">
        <h4 className="text-xl font-bold text-off-white mb-4 group-hover:text-white transition-colors">
            {title}
        </h4>
        <p className="text-areia-suave leading-relaxed text-[0.95rem] group-hover:text-off-white/90 transition-colors">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="servicos" className="bg-cinza-escuro py-24 px-6">
      <div className="container mx-auto max-w-[1100px] text-center">
        
        {/* Título */}
        <div className="flex items-center justify-center gap-5 mb-16">
          <motion.div 
            className="h-[1px] bg-white/20 flex-grow max-w-[250px]"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ transformOrigin: "right" }}
          />
          <motion.h3 
            className="text-3xl md:text-4xl font-bold text-off-white tracking-tight"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Nossos Serviços
          </motion.h3>
          <motion.div 
            className="h-[1px] bg-white/20 flex-grow max-w-[250px]"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
          />
        </div>

        {/* Grid com Spotlight */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {servicos.map((item, index) => (
            <SpotlightCard key={index} {...item} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}