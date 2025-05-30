"use client";

import { motion } from 'framer-motion';

const equipe = [
  { nome: 'Lopes Raimundo Cristovão', cargo: 'Diretor Executivo', imagem: '/Lopes.jpg' },
  { nome: 'Rosário Pedro António', cargo: 'Desenvolvedora Frontend', imagem: '/Rosário.jpg' },
  { nome: 'Luís Fernando', cargo: 'Especialista em Segurança', imagem: '/luis.jpg' },
  { nome: 'Júnior João André', cargo: 'Especialista em Segurança', imagem: '/Júnior.jpg' },
];

export default function EquipePage() {
  return (
    <main className="py-20 px-6 bg-white min-h-screen">
      <motion.h1
        className="text-4xl font-bold text-center text-blue-700 mb-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Nossa Equipe
      </motion.h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {equipe.map((membro, index) => (
          <motion.div
            key={membro.nome}
            className="bg-gray-100 rounded-xl shadow-md p-6 text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ delay: index * 0.1 }}
          >
            <img
              src={membro.imagem}
              alt={membro.nome}
              className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-lg font-semibold text-blue-700">{membro.nome}</h3>
            <p className="text-gray-600 text-sm">{membro.cargo}</p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
