/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Check } from "lucide-react";

export default function App() {
  const links = [
    {
      id: "privacy",
      title: "Privacy",
      icon: (
        <div className="w-16 h-16 rounded-full overflow-hidden bg-[#F5EDE0]">
          <img src="/privacy-logo.png" alt="Privacy" className="w-full h-full object-cover scale-125" />
        </div>
      ),
      url: "https://privacymariaa.site",
    },
    {
      id: "telegram",
      title: "Telegram Grátis 🎁",
      icon: (
        <div className="w-16 h-16 rounded-full overflow-hidden">
          <img src="/telegram-logo.png" alt="Telegram" className="w-full h-full object-cover" />
        </div>
      ),
      url: "https://serverflow.dad/l/5e31a204?shk=614dxsy0",
    },
  ];

  return (
    <div className="min-h-screen bg-[#D6CDE9] font-sans selection:bg-purple-200 flex flex-col">
      <div className="flex-grow w-full max-w-md mx-auto px-6 pt-16 pb-20 flex flex-col items-center">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center mb-16"
          id="header-section"
        >
          <div className="relative mb-6" id="avatar-container">
            <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)]">
              <img
                src="/maria-luiza.jpg"
                alt="Maria Luiza"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
              className="absolute top-2 right-2 bg-[#0095f6] rounded-full p-1 border-2 border-white shadow-sm"
              id="verify-badge"
            >
              <Check className="text-white" size={20} strokeWidth={5} />
            </motion.div>
          </div>

          <h1 className="text-4xl font-black mb-2 text-black text-center tracking-tight" id="profile-name">
            Maria Luiza
          </h1>
          <p className="text-base font-bold text-black/60 italic" id="profile-handle">
            @maluzinhaofc.69
          </p>
        </motion.div>

        {/* Links Section */}
        <div className="w-full space-y-6" id="links-container">
          {links.map((link, index) => (
            <motion.a
              key={link.id}
              href={link.url}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + 0.1 * index }}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="group block w-full bg-white rounded-full p-2 pr-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white/20 flex items-center transition-all hover:shadow-xl"
              id={`link-${link.id}`}
            >
              <div className="flex-shrink-0" id={`icon-${link.id}`}>
                {link.icon}
              </div>
              <div className="flex-grow text-center" id={`text-${link.id}`}>
                <span className="text-2xl md:text-3xl font-extrabold text-[#1a1a1a] tracking-tight">
                  {link.title}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="w-full bg-[#BBA8DA] py-12 px-8 text-center"
        id="footer-section"
      >
        <div className="max-w-md mx-auto">
          <p className="text-[14px] leading-[1.6] font-bold text-black/80">
            Todos os direitos reservados a Maria Luiza,
            <br />
            qualquer vazamento de imagens pessoais é considerado
            <br />
            crime sob
            <br />
            Código Penal (Decreto-Lei 2.848, de 1940).
          </p>
        </div>
      </motion.footer>
    </div>
  );
}
