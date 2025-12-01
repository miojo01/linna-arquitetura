"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Dados originais
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
  
  const numItems = steps.length;
  const anglePerItem = 360 / numItems; // 45 graus
  const radius = 400; // Raio grande (Original)

  const nextSlide = () => setCurrIndex((prev) => prev + 1);
  const prevSlide = () => setCurrIndex((prev) => prev - 1);

  return (
    <section id="metodo" className="bg-cinza-escuro py-20 px-6 overflow-hidden">
      <div className="container mx-auto text-center h-[700px] flex flex-col justify-between">
        
        {/* === TÍTULO === */}
        <div className="mb-4 relative z-10 flex justify-center">
            <h3 className="text-3xl md:text-[2.5em] font-bold text-off-white flex items-center gap-4">
                Nosso Método
                {/* Flecha (>) */}
                <span className="inline-block w-3 h-3 border-t-[3px] border-r-[3px] border-areia-suave rotate-45 mt-1" />
            </h3>
        </div>

        {/* === CENA 3D === */}
        {/* Margin-top para afastar os cards do título */}
        <div className="relative w-full h-full flex items-center justify-center perspective-[1200px] mt-10">
          <motion.div
            // Tamanho fixo do container (igual ao card)
            className="relative w-[280px] h-[350px]"
            style={{ transformStyle: "preserve-3d" }}
            animate={{ rotateY: currIndex * -anglePerItem }}
            // A curva de animação exata do seu CSS original:
            transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
          >
            {steps.map((step, index) => {
              const angle = index * anglePerItem;
              
              // Lógica Simples de Opacidade (Original)
              const normalizedRotation = (currIndex * -anglePerItem) % 360;
              const effectiveAngle = (angle + normalizedRotation + 360) % 360;
              
              let opacity = 0.3; // Lateral
              if (effectiveAngle < 30 || effectiveAngle > 330) opacity = 1; // Frente
              if (effectiveAngle > 90 && effectiveAngle < 270) opacity = 0; // Fundo

              return (
                <div
                  key={index}
                  className="absolute inset-0 bg-cinza-medio border border-cinza-claro rounded-lg p-8 text-left backface-hidden"
                  style={{
                    // Sem scale, sem blur. Apenas posição 3D pura.
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

        {/* === CONTROLES === */}
        <div className="flex justify-center gap-6 mt-10 z-20">
          <button 
            onClick={prevSlide}
            className="w-14 h-14 rounded-full border-2 border-areia-suave text-areia-suave flex items-center justify-center hover:bg-areia-suave hover:text-black-arch transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft size={30} />
          </button>
          <button 
            onClick={nextSlide}
            className="w-14 h-14 rounded-full border-2 border-areia-suave text-areia-suave flex items-center justify-center hover:bg-areia-suave hover:text-black-arch transition-all duration-300 hover:scale-110"
          >
            <ChevronRight size={30} />
          </button>
        </div>

      </div>
    </section>
  );
}