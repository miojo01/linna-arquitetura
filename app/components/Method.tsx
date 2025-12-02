"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const steps = [
  { number: "01", title: "Briefing", text: "Conversamos sobre a identidade da sua marca, estilos, necessidades funcionais e o resultado que você espera." },
  { number: "02", title: "Concepção", text: "Começamos a desenhar as ideias para retratar o conceito da sua marca, criando um ambiente bonito e funcional." },
  { number: "03", title: "Apresentação", text: "Mostramos o seu projeto por meio de imagens, plantas e referências visuais." },
  { number: "04", title: "Revisão", text: "Ouvimos suas observações para adaptar o projeto, garantindo que ele corresponda às suas expectativas." },
  { number: "05", title: "Projeto Executivo", text: "Com a proposta aprovada, desenvolvemos os desenhos técnicos que asseguram a execução correta." },
  { number: "06", title: "Orçamentos", text: "Auxiliamos na definição de materiais e fornecedores, equilibrando qualidade, custo e prazo." },
  { number: "07", title: "Obra", text: "Estamos presentes em todas as etapas da execução para garantir qualidade e soluções quando necessário." },
  { number: "08", title: "Inauguração", text: "O processo se encerra com a obra finalizada e o seu espaço pronto para impulsionar o negócio." },
];

export default function Method() {
  const [currIndex, setCurrIndex] = useState(0);
  
  // Configuração 3D
  const numItems = steps.length;
  const anglePerItem = 360 / numItems; 
  const radius = 400; 

  const nextSlide = () => {
    setCurrIndex((prev) => (prev + 1));
  };
  const prevSlide = () => {
    setCurrIndex((prev) => (prev - 1));
  };

  // Função para garantir que o índice do mobile (2D) fique entre 0 e 7
  const getMobileIndex = (idx: number) => {
    // Matemática para transformar índices negativos ou gigantes em 0..7
    return ((idx % numItems) + numItems) % numItems;
  };

  const mobileStep = steps[getMobileIndex(currIndex)];

  return (
    // Reduzi o padding vertical no mobile (py-12) e mantive grande no desktop (md:py-20)
    <section id="metodo" className="bg-cinza-escuro py-12 md:py-20 px-6 overflow-hidden">
      
      {/* Altura ajustada: h-auto no mobile, h-[700px] no desktop */}
      <div className="container mx-auto text-center h-auto md:h-[700px] flex flex-col justify-between">
        
        {/* TÍTULO */}
        <div className="mb-8 md:mb-4 relative z-10 flex justify-center">
            <h3 className="text-2xl md:text-[2.5em] font-bold text-off-white flex items-center gap-4">
                Nosso Método
                <span className="inline-block w-2 h-2 md:w-3 md:h-3 border-t-[3px] border-r-[3px] border-areia-suave rotate-45 mt-1" />
            </h3>
        </div>

        {/* === VERSÃO DESKTOP (3D CAROUSEL) === */}
        <div className="hidden md:flex relative w-full h-full items-center justify-center perspective-[1200px] mt-10">
          <motion.div
            className="relative w-[280px] h-[350px]"
            style={{ transformStyle: "preserve-3d" }}
            animate={{ rotateY: currIndex * -anglePerItem }}
            transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
          >
            {steps.map((step, index) => {
              const angle = index * anglePerItem;
              const normalizedRotation = (currIndex * -anglePerItem) % 360;
              const effectiveAngle = (angle + normalizedRotation + 360) % 360;
              
              let opacity = 0.3;
              if (effectiveAngle < 30 || effectiveAngle > 330) opacity = 1;
              if (effectiveAngle > 90 && effectiveAngle < 270) opacity = 0;

              return (
                <div
                  key={index}
                  className="absolute inset-0 bg-cinza-medio border border-cinza-claro rounded-lg p-8 text-left backface-hidden"
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                    opacity: opacity,
                    transition: "opacity 0.5s ease" 
                  }}
                >
                  <span className="block text-4xl font-bold text-areia-suave mb-4">{step.number}</span>
                  <h4 className="text-xl font-semibold text-off-white mb-4">{step.title}</h4>
                  <p className="text-areia-suave/80 text-sm leading-relaxed">
                    {step.text}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* === VERSÃO MOBILE (CARD 2D SIMPLES) === */}
        <div className="md:hidden w-full h-[300px] relative flex items-center justify-center">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currIndex} // A chave muda, forçando a re-renderização com animação
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-cinza-medio border border-cinza-claro rounded-lg p-6 text-left w-full max-w-[320px] shadow-lg"
                >
                    <span className="block text-3xl font-bold text-areia-suave mb-3">{mobileStep.number}</span>
                    <h4 className="text-lg font-semibold text-off-white mb-3">{mobileStep.title}</h4>
                    <p className="text-areia-suave/80 text-sm leading-relaxed">
                        {mobileStep.text}
                    </p>
                </motion.div>
            </AnimatePresence>
        </div>

        {/* CONTROLES (COMPARTILHADOS) */}
        <div className="flex justify-center gap-6 mt-8 md:mt-10 z-20">
          <button 
            onClick={prevSlide}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-areia-suave text-areia-suave flex items-center justify-center hover:bg-areia-suave hover:text-black-arch transition-all duration-300 hover:scale-110 active:scale-95"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextSlide}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-areia-suave text-areia-suave flex items-center justify-center hover:bg-areia-suave hover:text-black-arch transition-all duration-300 hover:scale-110 active:scale-95"
          >
            <ChevronRight size={24} />
          </button>
        </div>

      </div>
    </section>
  );
}