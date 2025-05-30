"use client";

import React from "react";
import { motion } from "framer-motion";

export default function EmpresaPage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-20 px-4 bg-white text-gray-800"
    >
      <div className="max-w-4xl mx-auto space-y-8">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-blue-700 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Sobre a IZI-TEC
        </motion.h1>

        <motion.p
          className="text-lg text-gray-700 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          A <strong>IZI-TEC</strong> é uma empresa de soluções tecnológicas que oferece serviços em programação personalizada,
          montagem e manutenção de sistemas de CCTV, manutenção de computadores, marketing digital e gestão de redes sociais.
          Nosso objetivo é tornar o acesso à tecnologia mais fácil e eficiente para empresas e indivíduos,
          promovendo soluções inovadoras e de qualidade.
        </motion.p>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">
              1.2. Problemática
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Muitas empresas e profissionais enfrentam dificuldades para adotar soluções tecnológicas devido à falta de suporte adequado,
              altos custos e pouca capacitação. A crescente necessidade de digitalização exige serviços confiáveis e acessíveis para
              garantir eficiência e competitividade.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">
              1.3. Justificativa
            </h2>
            <p className="text-gray-700 leading-relaxed">
              A IZI-Tec surge para atender essa demanda, oferecendo serviços completos e de fácil implementação.
              Nosso compromisso é garantir que a tecnologia esteja ao alcance de todos, promovendo inovação e suporte contínuo
              para empresas e profissionais.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
    
  );
}
