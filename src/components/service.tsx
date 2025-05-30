"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/Ui/card";
import {
  ShieldCheck,
  Code2,
  Megaphone,
  Sparkles,
} from "lucide-react";

const services = [
  {
    title: "Programação",
    description: "Desenvolvemos sistemas, apps e sites sob medida.",
    icon: <Code2 className="w-6 h-6 text-blue-600" />,
    href: "/programation",
  },
  {
    title: "CCTV & Segurança",
    description: "Instalação de câmeras e suporte de segurança.",
    icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
    href: "/cctvsecurity",
  },
  {
    title: "Marketing Digital",
    description: "Campanhas e gestão de redes sociais profissionais.",
    icon: <Megaphone className="w-6 h-6 text-red-500" />,
    href: "/markting",
  },
  {
    title: "Inovação",
    description: "Tecnologia acessível com soluções criativas e ágeis.",
    icon: <Sparkles className="w-6 h-6 text-yellow-500" />,
    href: "/inovation",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 px-4 bg-gray-100">
      <motion.h2
        className="text-3xl font-bold text-gray-800 mb-10 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Nossos Serviços
      </motion.h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <Link href={service.href} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="hover:shadow-xl cursor-pointer"
            >
              <Card className="rounded-2xl shadow-md bg-white hover:bg-blue-50 transition">
                <CardContent className="p-6 flex flex-col items-start space-y-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-700">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
