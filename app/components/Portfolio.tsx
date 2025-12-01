"use client";

import { motion } from "framer-motion";
import Image from "next/image"; // Componente otimizado do Next.js
import Link from "next/link";

// Dados dos projetos (Substitua pelos nomes reais depois)
const projetos = [
  {
    id: 1,
    title: "Projeto Exemplo 1",
    image: "/assets/img/projetos/projeto1.jpg", // Certifique-se que estas imagens existem
    category: "Residencial"
  },
  {
    id: 2,
    title: "RF House",
    image: "/assets/img/projetos/projeto2.jpg",
    category: "Comercial"
  },
  {
    id: 3,
    title: "Projeto Exemplo 3",
    image: "/assets/img/projetos/projeto3.jpg",
    category: "Interiores"
  },
  {
    id: 4,
    title: "Projeto Exemplo 4",
    image: "/assets/img/projetos/projeto4.jpg",
    category: "Corporativo"
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-black-arch py-20 px-6">
      <div className="container mx-auto max-w-[1100px]">
        
        {/* === CABEÇALHO DA SEÇÃO (Alinhado à Esquerda) === */}
        <div className="text-left mb-12">
          
          {/* Container Título + Linha */}
          <div className="flex items-center gap-6 mb-3"> {/* mb-3 deixa o subtítulo perto */}
            <motion.h3 
              className="text-3xl md:text-4xl font-bold text-off-white shrink-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Portfólio
            </motion.h3>

            {/* Linha Animada (Cresce para a direita) */}
            <motion.div 
              className="h-[2px] bg-areia-suave w-full max-w-[100px] md:max-w-[200px]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              style={{ transformOrigin: "left" }}
            />
          </div>

          {/* Subtítulo */}
          <motion.p 
            className="text-off-white/70 text-lg max-w-2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Projetos que inspiram e transformam. Veja alguns de nossos trabalhos mais recentes.
          </motion.p>
        </div>

        {/* === GRID DE PROJETOS (Cinematic Reveal) === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {projetos.map((projeto, index) => (
            <motion.div
              key={projeto.id}
              className="group relative h-[350px] w-full rounded-lg overflow-hidden cursor-pointer"
              // Animação de Entrada dos Cards
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {/* Imagem de Fundo (Next/Image para performance) */}
              <Image 
                src={projeto.image}
                alt={projeto.title}
                fill // Ocupa todo o espaço do pai
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Overlay Escuro + Texto */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                
                {/* Texto subindo */}
                <h4 className="text-2xl font-bold text-off-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75 uppercase tracking-wider">
                  {projeto.title}
                </h4>
                
                {/* Categoria (Opcional, detalhe chique) */}
                <span className="text-areia-suave text-sm mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  {projeto.category}
                </span>
                
              </div>
            </motion.div>
          ))}
        </div>

        {/* === BOTÃO "VER TODOS" === */}
        <div className="text-center">
          <Link href="/portfolio-completo">
            <motion.button
              className="px-8 py-3 border border-areia-suave text-areia-suave uppercase tracking-widest text-sm font-semibold hover:bg-areia-suave hover:text-black-arch transition-all duration-300 rounded-[4px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver todos os projetos
            </motion.button>
          </Link>
        </div>

      </div>
    </section>
  );
}