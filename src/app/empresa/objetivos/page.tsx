"use client";
import React from "react";
import { motion } from "framer-motion";
export default function ObjetivosPage() {
  return (
    <main className="py-20 px-6 bg-white min-h-screen">
      <motion.h1
        className="text-4xl font-bold text-center text-blue-700 mb-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Nossos Objetivos
      </motion.h1>

      <div className="max-w-3xl mx-auto text-gray-700 text-lg space-y-6">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          A IZI-TEC tem como principal objetivo democratizar o acesso à tecnologia, oferecendo soluções acessíveis, inovadoras e eficazes para empresas e indivíduos, facilitando o acesso ao mundo digital.
        </motion.p>
        <motion.ul
          className="list-disc list-inside space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <li>Expandir o acesso à tecnologia em comunidades carentes</li>
          <li>Capacitar jovens em áreas de tecnologia e inovação</li>
          <li>Promover a digitalização de pequenas e médias empresas</li>
          <li>Desenvolver soluções sustentáveis e de alto impacto</li>
          <h1 className="text-center mt-18 "><strong>Responsablidades</strong></h1>
          <li><strong>Inovação</strong> – Buscamos sempre oferecer soluções modernas e eficientes.</li>
        <li><strong>Qualidade</strong> – Compromisso com excelência em todos os serviços prestados.</li>
        <li><strong>Acessibilidade</strong> – Tornar a tecnologia fácil e acessível para todos.</li>
        <li><strong>Ética</strong> – Transparência e responsabilidade em todas as nossas ações.</li>
        <li><strong>Compromisso</strong> – Atendimento personalizado e foco na satisfação do cliente.</li>
        </motion.ul>
      </div>
    </main>
  );
}
