"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/Ui/card";

export default function CctvPage() {
    return (
        <section className="py-20 px-4 bg-white">
            <motion.h2
                className="text-3xl font-bold text-gray-800 mb-10 text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Projetos de Segurança Eletrônica
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                <Card>
                    <CardContent className="p-6 space-y-3">
                        <ShieldCheck className="w-6 h-6 text-blue-600" />
                        <h3 className="font-semibold text-lg">Instalação Residencial de Câmeras</h3>
                        <p className="text-sm text-gray-700">
                            Sistema completo de monitoramento com acesso remoto via app.
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
                            src="/imagens/cctv1.jpg"
                            alt="CCTV Instalação 1"
                            className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div className="overflow-hidden rounded-xl shadow-md">
                        <img
                            src="/imagens/cctv2.jpg"
                            alt="Central de Monitoramento"
                            className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"/>
                    </div>
                </div>
            </section>
        </section>
    );
}
