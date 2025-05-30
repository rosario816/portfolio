"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/Ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 relative overflow-hidden py-20 bg-gradient-to-b from-white to-gray-100 text-center">
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold text-blue-700"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        IZI-TEC
      </motion.h1>
      <motion.p
        className="mt-4 text-xl md:text-2xl text-gray-800 font-medium"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Facilitando o Acesso à{" "}
        <span className="text-blue-600 underline underline-offset-4 decoration-2">
          Tecnologia
        </span>{" "}
        para Todos
      </motion.p>
      <motion.p
        className="mt-2 max-w-2xl text-gray-600 text-sm md:text-base"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Soluções em programação, manutenção, segurança eletrônica e marketing digital com inovação, qualidade e acessibilidade.
      </motion.p>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-8"
      >
        <Link href="/servicos">
          <Button className="bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-blue-800">
            Conheça nossos serviços
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}
