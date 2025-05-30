"use client";

import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const pacotes = [
  {
    nome: "Start",
    publico: "Empreendedores Iniciantes",
    itens: [
      "Criação de site institucional",
      "Instalação básica de CCTV",
      "Suporte técnico remoto",
    ],
  },
  {
    nome: "Business",
    publico: "Empresas em Crescimento",
    itens: [
      "Desenvolvimento de sistemas personalizados",
      "Gestão de redes sociais com campanhas",
      "Manutenção preventiva de computadores",
    ],
  },
  {
    nome: "Premium",
    publico: "Soluções Integradas",
    itens: [
      "Consultoria tecnológica completa",
      "Sistemas de segurança avançados (CCTV + monitoramento remoto)",
      "Treinamentos corporativos em TI e marketing",
    ],
  },
];

export default function ServicosPage() {
  return (
    <div className="px-6 py-16 bg-white min-h-screen">
      <motion.h1
        className="text-4xl font-bold text-blue-700 text-center mb-12"
        {...fadeUp}
      >
        Pacotes de Serviços
      </motion.h1>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto">
        {pacotes.map((pacote, i) => (
          <motion.div
            key={pacote.nome}
            className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition-all"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i, duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Pacote {pacote.nome}
            </h2>
            <p className="text-sm text-gray-600 mb-4">{pacote.publico}</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
              {pacote.itens.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
