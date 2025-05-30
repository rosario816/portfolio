"use client";

import { motion } from "framer-motion";
import { Megaphone } from "lucide-react";
import { Card, CardContent } from "@/components/Ui/card";

export default function MarketingPage() {
  return (
    <section className="py-20 px-4 bg-white">
      <motion.h2
        className="text-3xl font-bold text-gray-800 mb-10 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projetos de Marketing Digital
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        <Card>
          <CardContent className="p-6 space-y-3">
            <Megaphone className="w-6 h-6 text-red-500" />
            <h3 className="font-semibold text-lg">Campanha para E-commerce</h3>
            <p className="text-sm text-gray-700">
              Aumentamos o alcance em 300% com anúncios segmentados e gestão de redes.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* PROJETOS REALIZADOS */}
      <section className="py-16 px-4">
        <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">
          Projetos Realizados
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-xl shadow-md">
            <img
              src="/imagens/marketing1.jpg"
              alt="Campanha Instagram"
              className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="overflow-hidden rounded-xl shadow-md">
            <img
              src="/imagens/marketing2.jpg"
              alt="Design de Posts"
              className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>
    </section>
  );
}
