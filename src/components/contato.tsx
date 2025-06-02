"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Facebook } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const contacts = [
  {
    icon: <Phone className="text-blue-600 w-5 h-5" />,
    label: "Telefone",
    content: "+244 936493318 / 947926440 / 950853989",
    href: "tel:+244936493318",
  },
  {
    icon: <Mail className="text-red-500 w-5 h-5" />,
    label: "Email",
    content: "izitecnologia2025@gmail.com",
    href: "mailto:izitecnologia2025@gmail.com",
  },
  {
    icon: <MapPin className="text-green-600 w-5 h-5" />,
    label: "Endereço",
    content: "Luanda, Kilamba Kiaxi",
  },
];

const socialLinks = [
  {
    icon: <Facebook className="text-blue-700 w-5 h-5" />,
    label: "Facebook",
    content: "Izi Tec",
    href: "https://facebook.com/izitec",
  },
  // Você pode adicionar mais redes aqui
];

export default function ContactSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <motion.h2
        className="text-4xl font-bold text-gray-800 text-center mb-12"
        {...fadeUp}
      >
        Contato e Redes
      </motion.h2>

     { <motion.div
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12"
        {...fadeUp}
        transition={{ delay: 0.3 }}
      >
        {/* Contatos */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Informações de Contato
          </h3>
          {contacts.map((item, idx) => (
            <ContactItem key={idx} {...item} />
          ))}
        </div>

        {/* Redes sociais */}
        {<div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Redes Sociais
          </h3>
          {socialLinks.map((item, idx) => (
            <ContactItem key={idx} {...item} />
          ))}
        </div>}
      </motion.div>}
    </section>
  );
}

function ContactItem({
  icon,
  label,
  content,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  content: string;
  href?: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div>{icon}</div>
      <div>
        <div className="text-sm text-gray-500">{label}</div>
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base text-gray-800 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {content}
          </a>
        ) : (
          <div className="text-base text-gray-800">{content}</div>
        )}
      </div>
    </div>
  );
}
