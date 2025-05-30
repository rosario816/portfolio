"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/Ui/card";
import { Code2 } from "lucide-react";

export default function ProgramacaoPage() {
  return (
    <section className="py-20 px-4 bg-gray-100">
      <motion.h2
        className="text-3xl font-bold text-gray-800 mb-10 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Projetos de Programação
      </motion.h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-6xl mx-auto">
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          whileHover={{ scale: 1.05, rotate: -2 }}
          className="hover:shadow-xl cursor-pointer"
        >
          <Card className="rounded-2xl shadow-md bg-white hover:bg-blue-50 transition">
            <CardContent className="p-6 flex flex-col items-start space-y-4">
              <div className="bg-blue-100 p-2 rounded-full">
                <Code2 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Sistema de Gestão</h3>
              <p className="text-sm text-gray-700">
                Desenvolvimento de um sistema completo para gerenciamento de estoque e vendas.
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
          whileHover={{ scale: 1.05, rotate: -2 }}
          className="hover:shadow-xl cursor-pointer"
        >
          <Card className="rounded-2xl shadow-md bg-white hover:bg-blue-50 transition">
            <CardContent className="p-6 flex flex-col items-start space-y-4">
              <div className="bg-blue-100 p-2 rounded-full">
                <Code2 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Aplicativo Móvel</h3>
              <p className="text-sm text-gray-700">
                Criação de um aplicativo para agendamento de consultas médicas.
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
          whileHover={{ scale: 1.05, rotate: -2 }}
          className="hover:shadow-xl cursor-pointer"
        >
          <Card className="rounded-2xl shadow-md bg-white hover:bg-blue-50 transition">
            <CardContent className="p-6 flex flex-col items-start space-y-4">
              <div className="bg-blue-100 p-2 rounded-full">
                <Code2 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Website Institucional</h3>
              <p className="text-sm text-gray-700">
                Desenvolvimento de um site institucional para uma ONG local.
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
          whileHover={{ scale: 1.05, rotate: -2 }}
          className="hover:shadow-xl cursor-pointer"
        >
          <Card className="rounded-2xl shadow-md bg-white hover:bg-blue-50 transition">
            <CardContent className="p-6 flex flex-col items-start space-y-4">
              <div className="bg-blue-100 p-2 rounded-full">
                <Code2 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">E-commerce</h3>
              <p className="text-sm text-gray-700">
                Criação de uma plataforma de e-commerce para vendas de produtos artesanais.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
