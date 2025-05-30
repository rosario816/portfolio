"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
};

export default function ContactSection() {
    return (
        <section className="py-20 px-4 bg-white">
            <motion.h2
                className="text-3xl font-bold text-gray-800 mb-6 text-center"
                {...fadeUp}
            >
                Contato e Redes
            </motion.h2>
            <motion.div
                className="flex flex-col items-center space-y-4 text-gray-700"
                {...fadeUp}
                transition={{ delay: 0.3 }}
            >
                <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <a href="tel:+244936493318" className="hover:underline">
                        +244 936493318 / 947926440 / 950853989
                    </a>
                </div>
                <div className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-red-500" />
                    <a
                        href="mailto:izitecnologia2025@gmail.com"
                        className="hover:underline"
                    >
                        izitecnologia2025@gmail.com
                    </a>
                </div>
                <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-black" />
                    <span>Luanda, Kilamba Kiaxi</span>
                </div>
                <a
                    href="https://facebook.com/izitec" // só meti pra ficar numa
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm mt-4"
                >
                    Facebook: Izi Tec
                </a>
            </motion.div>
        </section>
    );
}
