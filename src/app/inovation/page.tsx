"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/Ui/card";
import { Sparkles } from "lucide-react";

export default function InovacaoPage() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-100">
      <motion.h2
        className="text-3xl font-bold text-gray-800 mb-10 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Projetos de Inovação
      </motion.h2>

      <p className="text-center max-w-3xl mx-auto text-gray-600 mb-16">
        Aqui mostramos ideias futuristas, projetos experimentais e soluções únicas que desafiam o padrão — desenvolvidas para impactar e transformar digitalmente.
      </p>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-6xl mx-auto">
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          whileHover={{ scale: 1.05, rotate: -1 }}
          className="hover:shadow-xl cursor-pointer"
        >
          <Card className="rounded-2xl shadow-md bg-white hover:bg-yellow-50 transition">
            <CardContent className="p-6 flex flex-col items-start space-y-4">
              <div className="bg-yellow-100 p-2 rounded-full">
                <Sparkles className="w-6 h-6 text-yellow-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Assistente Virtual de Negócios</h3>
              <p className="text-sm text-gray-700">
                Plataforma com IA que auxilia empreendedores na gestão e tomada de decisões em tempo real.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          whileHover={{ scale: 1.05, rotate: -1 }}
          className="hover:shadow-xl cursor-pointer"
        >
          <Card className="rounded-2xl shadow-md bg-white hover:bg-yellow-50 transition">
            <CardContent className="p-6 flex flex-col items-start space-y-4">
              <div className="bg-yellow-100 p-2 rounded-full">
                <Sparkles className="w-6 h-6 text-yellow-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Sistema de Diagnóstico Preventivo</h3>
              <p className="text-sm text-gray-700">
                Inteligência para prever falhas técnicas em computadores e redes antes que ocorram.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          whileHover={{ scale: 1.05, rotate: -1 }}
          className="hover:shadow-xl cursor-pointer"
        >
          <Card className="rounded-2xl shadow-md bg-white hover:bg-yellow-50 transition">
            <CardContent className="p-6 flex flex-col items-start space-y-4">
              <div className="bg-yellow-100 p-2 rounded-full">
                <Sparkles className="w-6 h-6 text-yellow-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Dashboard de Impacto Social</h3>
              <p className="text-sm text-gray-700">
                Ferramenta para ONGs e projetos sociais monitorarem o impacto das suas ações com dados em tempo real.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          whileHover={{ scale: 1.05, rotate: -1 }}
          className="hover:shadow-xl cursor-pointer"
        >
          <Card className="rounded-2xl shadow-md bg-white hover:bg-yellow-50 transition">
            <CardContent className="p-6 flex flex-col items-start space-y-4">
              <div className="bg-yellow-100 p-2 rounded-full">
                <Sparkles className="w-6 h-6 text-yellow-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Plataforma EduTech</h3>
              <p className="text-sm text-gray-700">
                Ambiente de ensino adaptativo com inteligência artificial para alunos e professores.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
