'use client';

import { motion } from 'framer-motion';

export default function ParceriasPage() {
  return (
    <main className="py-20 px-6 bg-white min-h-screen">
      <motion.h1
        className="text-4xl font-bold text-center text-blue-700 mb-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Parcerias e Colaborações
      </motion.h1>

      <motion.p
        className="max-w-3xl mx-auto text-center text-gray-700 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        A IZI-TEC acredita no poder da colaboração. Trabalhamos com instituições de ensino, empresas locais e parceiros tecnológicos para ampliar nosso impacto e entregar soluções mais completas aos nossos clientes.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {["Universidades locais", "Startups", "Fornecedores de hardware", "Agências de marketing"].map((nome, i) => (
          <motion.div
            key={nome}
            className="p-6 bg-gray-50 shadow-md rounded-xl"
            whileHover={{ scale: 1.03 }}
            transition={{ delay: i * 0.1 }}
          >
            <h2 className="text-xl font-semibold text-blue-600 mb-2">{nome}</h2>
            <p className="text-gray-600 text-sm">
              Parceria ativa para desenvolvimento de soluções, capacitação e inovação.
            </p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
