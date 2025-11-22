import { motion } from 'motion/react';
import { Heart, Github, Linkedin, Mail, Twitter } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub', bg: '#ffd803' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', bg: '#f582ae' },
    { icon: Twitter, href: '#', label: 'Twitter', bg: '#8bd3dd' },
    { icon: Mail, href: '#', label: 'Email', bg: '#f3d2c1' }
  ];

  return (
    <footer className="relative bg-white border-t-4 border-[#001858] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-[#fef6e4] border-4 border-[#001858] px-6 py-3 flex items-center gap-2"
            style={{ boxShadow: '4px 4px 0 #001858' }}
          >
            <span className="text-[#001858] uppercase">Made with</span>
            <Heart className="w-4 h-4 text-[#f582ae] fill-[#f582ae]" />
            <span className="text-[#001858] uppercase">© 2025</span>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="w-12 h-12 flex items-center justify-center border-4 border-[#001858] transition-all"
                style={{ 
                  backgroundColor: social.bg,
                  boxShadow: '4px 4px 0 #001858'
                }}
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6 text-[#001858]" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Decorative Element */}
        <motion.div
          animate={{
            rotate: [0, 360],
            transition: { duration: 20, repeat: Infinity, ease: "linear" }
          }}
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#ffd803] border-4 border-[#001858]"
          style={{ boxShadow: '4px 4px 0 #001858' }}
        />
      </div>
    </footer>
  );
}
