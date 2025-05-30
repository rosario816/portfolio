"use client";

import { motion } from "framer-motion";

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
    whileTap: { scale: 0.95 }
};
export default function AboutSection() {
    return (
        <section className="py-20 px-4 bg-white">
            <motion.h2 className="text-3xl font-bold text-gray-800 mb-8 text-center" {...fadeUp}>
                Sobre a IZI-TEC
            </motion.h2>
            <motion.p
                className="max-w-3xl mx-auto text-gray-700 text-center"
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.2 }}
            >
                A IZI-TEC é especializada em soluções de tecnologia, desde programação personalizada até instalação de sistemas de segurança, manutenção de computadores e estratégias de marketing digital. Nosso objetivo é facilitar o acesso à tecnologia com qualidade, inovação e acessibilidade.
            </motion.p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto transition cursor-pointer">
                {["Empresa", "Visão", "Equipe", "Parceria"].map((item, i) => (
                    <motion.div
                        key={item}
                        className="p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition-all c"
                        {...fadeUp}
                        transition={{ delay: 0.3 + i * 0.2, duration: 0.6 }}
                    >
                        <h3 className="text-blue-600 font-semibold">{item}</h3>
                        <p className="text-sm text-gray-700 mt-2">
                            {item === "Empresa" &&
                                "Tornar a tecnologia acessível e prática, com soluções inovadoras para empresas e indivíduos."}
                            {item === "Visão" &&
                                "Ser referência em soluções tecnológicas acessíveis e inovadoras, impulsionando o avanço digital."}
                            {item === "Equipe" &&
                                "Inovação, qualidade, ética, acessibilidade e compromisso com nossos clientes."}
                            {item === "Parceria" &&
                                "Alavancamos contatos com entidades empresariais e pessoais para expandir nossos serviços."}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
