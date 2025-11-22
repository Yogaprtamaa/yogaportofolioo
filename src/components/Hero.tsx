import { motion } from 'motion/react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#fef6e4]">

      {/* Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: [0, 5, 0, -5, 0], transition: { duration: 8, repeat: Infinity, ease: "linear" } }}
          className="absolute top-20 left-10 w-64 h-64 bg-[#ffd803] border-4 border-[#001858]"
          style={{ boxShadow: '12px 12px 0 #001858' }}
        />

        <motion.div
          animate={{ rotate: [0, -10, 0, 10, 0], transition: { duration: 10, repeat: Infinity, ease: "linear" } }}
          className="absolute bottom-20 right-10 w-80 h-80 bg-[#f582ae] border-4 border-[#001858] rounded-full"
          style={{ boxShadow: '16px 16px 0 #001858' }}
        />

        <motion.div
          animate={{ y: [0, -20, 0], transition: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
          className="absolute top-1/3 right-1/4 w-32 h-32 bg-[#8bd3dd] border-4 border-[#001858]"
          style={{ boxShadow: '8px 8px 0 #001858' }}
        />

        <motion.div
          animate={{ y: [0, 30, 0], transition: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
          className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-[#f3d2c1] border-4 border-[#001858] rounded-full"
          style={{ boxShadow: '6px 6px 0 #001858' }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        {/* Title */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ duration: 0.4, delay: 0.2 }} className="mb-8">

            {/* UI/UX Block */}
            <div className="inline-block bg-[#001858] border-4 border-[#001858] p-8 mb-6" style={{ boxShadow: '16px 16px 0 #f582ae' }}>
              <motion.h1
                className="relative text-6xl md:text-8xl lg:text-9xl uppercase tracking-tight cursor-pointer font-extrabold overflow-hidden"
                whileHover="hover"
                initial="rest"
                animate="rest"
              >
                <motion.span
                  variants={{ rest: { y: 0 }, hover: { y: -5, color: '#f582ae' } }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                  className="block text-[#ffd803] relative z-10"
                >
                  UI/UX
                </motion.span>

                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#001858] to-[#8bd3dd]"
                  variants={{ rest: { y: '100%' }, hover: { y: '0%' } }}
                  transition={{ duration: 0.4 }}
                  style={{ mixBlendMode: 'overlay' }}
                />
              </motion.h1>
            </div>

            {/* Designer Block */}
            <div className="inline-block bg-[#ffd803] border-4 border-[#001858] p-8" style={{ boxShadow: '16px 16px 0 #8bd3dd' }}>
              <motion.h1
                className="relative text-6xl md:text-8xl lg:text-9xl uppercase tracking-tight cursor-pointer font-extrabold overflow-hidden"
                whileHover="hover"
                initial="rest"
                animate="rest"
              >
                <motion.span
                  variants={{ rest: { y: 0 }, hover: { y: -5, color: '#f582ae' } }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                  className="block text-[#0307FFFF] relative z-10"
                >
                  Designer
                </motion.span>

                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#001858] to-[#8bd3dd]"
                  variants={{ rest: { y: '100%' }, hover: { y: '0%' } }}
                  transition={{ duration: 0.4 }}
                  style={{ mixBlendMode: 'overlay' }}
                />
              </motion.h1>
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-white border-4 border-[#001858] p-6 mb-8 inline-block"
            style={{ boxShadow: '8px 8px 0 #001858' }}
          >
            <p className="text-xl md:text-2xl text-[#001858] max-w-3xl">
              Crafting bold & beautiful digital experiences with personality!
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }} className="flex gap-4 justify-center items-center mb-12 flex-wrap">

            <Button size="lg" className="bg-[#f582ae] border-4 border-[#001858] text-[#001858] hover:bg-[#ffd803] transition-all uppercase" style={{ boxShadow: '6px 6px 0 #001858' }}>
              View My Work
            </Button>

            {/* WhatsApp */}
            <a href="https://wa.me/6281386969362?text=Halo,%20saya%20tertarik%20dengan%20portfolio%20Anda" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-[#8bd3dd] border-4 border-[#001858] text-[#001858] hover:bg-[#f3d2c1] transition-all uppercase" style={{ boxShadow: '6px 6px 0 #001858' }}>
                Contact Me
              </Button>
            </a>

          </motion.div>

          {/* Social Icons */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.6 }} className="flex gap-4 justify-center">

            {/* Github */}
            <motion.a
              whileHover={{ y: -4 }}
              href="https://github.com/Yogaprtamaa"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center bg-[#ffd803] border-4 border-[#001858]"
              style={{ boxShadow: '4px 4px 0 #001858' }}
            >
              <Github className="w-6 h-6 text-[#001858]" />
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              whileHover={{ y: -4 }}
              href="https://www.linkedin.com/in/yoga-pratama-770a1b2b8/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center bg-[#8bd3dd] border-4 border-[#001858]"
              style={{ boxShadow: '4px 4px 0 #001858' }}
            >
              <Linkedin className="w-6 h-6 text-[#001858]" />
            </motion.a>

            {/* Email */}
            <motion.a
              whileHover={{ y: -4 }}
              href="prtmyog17@gmail.com"
              className="w-14 h-14 flex items-center justify-center bg-[#f582ae] border-4 border-[#001858]"
              style={{ boxShadow: '4px 4px 0 #001858' }}
            >
              <Mail className="w-6 h-6 text-[#001858]" />
            </motion.a>

          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0], transition: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-[#001858] border-4 border-[#001858] w-12 h-12 flex items-center justify-center"
        style={{ boxShadow: '4px 4px 0 #ffd803' }}
      >
        <ArrowDown className="w-6 h-6 text-[#ffd803]" />
      </motion.div>

    </section>
  );
}
  