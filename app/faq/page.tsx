"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsapp";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

// Perguntas e Respostas
const faqs = [
  {
    question: "Por que escolher a Linna Arquitetura?",
    answer: "Criamos espaços contemporâneos para marcas autênticas. Se você busca um escritório que prioriza excelência, estratégia e funcionalidade, a Linna é para você. Unimos estética e negócios em jornadas especiais."
  },
  {
    question: "Vocês fazem somente projetos comerciais?",
    answer: "Nosso foco principal é a arquitetura comercial e corporativa, mas também realizamos projetos residenciais de alto padrão que busquem essa mesma essência de sofisticação e funcionalidade."
  },
  {
    question: "Em que cidades vocês atendem? Realizam projetos à distância?",
    answer: "Estamos sediados em Santa Catarina, mas atendemos projetos em todo o Brasil. Nossa metodologia de trabalho permite um acompanhamento remoto eficiente e preciso."
  },
  {
    question: "Como funciona o processo de atendimento?",
    answer: "Tudo começa com um briefing profundo. Passamos pela concepção criativa, apresentação visual, detalhamento técnico e acompanhamento da obra. Você participa ativamente de todas as aprovações."
  },
  {
    question: "Quanto tempo antes devo entrar em contato?",
    answer: "O ideal é entrar em contato assim que tiver o imóvel ou terreno em vista. Quanto antes começarmos o planejamento, mais otimizada e econômica será a sua obra."
  }
];

export default function FAQ() {
  return (
    <main className="min-h-screen bg-black-arch text-off-white">
      <Header />

      <div className="pt-[150px] pb-24 px-6">
        <div className="container mx-auto max-w-[800px]">
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-off-white mb-12 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            FAQ
          </motion.h1>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} faq={faq} index={index} />
            ))}
          </div>

        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

// Componente Individual do Acordeão
function AccordionItem({ faq, index }: { faq: any, index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      className="border-b border-cinza-claro"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className={`text-lg md:text-xl font-medium transition-colors duration-300 ${isOpen ? "text-areia-suave" : "text-off-white group-hover:text-areia-suave"}`}>
          {faq.question}
        </span>
        <span className="text-areia-suave ml-4 shrink-0">
          {isOpen ? <Minus size={24} /> : <Plus size={24} />}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-off-white/80 leading-relaxed text-base">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}