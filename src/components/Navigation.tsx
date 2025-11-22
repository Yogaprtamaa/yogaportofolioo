import { motion, useScroll, useTransform } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const borderWidth = useTransform(scrollY, [0, 100], [0, 4]);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-[#fef6e4]"
        style={{
          borderBottom: `${borderWidth}px solid #001858`,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-[#001858] border-4 border-[#001858] px-6 py-3"
              style={{ boxShadow: '4px 4px 0 #ffd803' }}
            >
              <span className="text-2xl text-white uppercase">
                Designer
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="hidden md:flex items-center gap-6"
            >
              {['About', 'Experience', 'Projects', 'Contact'].map((item, index) => (
  <motion.a
    key={item}
    href={`#${item.toLowerCase()}`}
    onClick={(e) => {
      e.preventDefault();
      const section = document.getElementById(item.toLowerCase());
      section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }}
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ y: -2 }}
    className="text-[#001858] uppercase border-b-4 border-transparent hover:border-[#001858] transition-all pb-1"
  >
    {item}
  </motion.a>
))}

              <Button
                size="sm"
                className="bg-[#f582ae] border-4 border-[#001858] text-[#001858] hover:bg-[#ffd803] uppercase transition-all"
                style={{ boxShadow: '4px 4px 0 #001858' }}
              >
                Hire Me
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden bg-[#001858] border-4 border-[#001858] p-2"
              style={{ boxShadow: '3px 3px 0 #ffd803' }}
            >
              {isOpen ? 
                <X className="w-6 h-6 text-white" /> : 
                <Menu className="w-6 h-6 text-white" />
              }
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ type: 'tween', duration: 0.3 }}
        className="fixed top-0 right-0 bottom-0 w-64 bg-white border-l-4 border-[#001858] z-40 md:hidden"
        style={{ boxShadow: '-8px 0 0 #001858' }}
      >
        <div className="flex flex-col gap-4 p-8 pt-20">
          {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-xl text-[#001858] uppercase border-b-4 border-transparent hover:border-[#001858] transition-all pb-2"
            >
              {item}
            </a>
          ))}
          <Button
            className="bg-[#ffd803] border-4 border-[#001858] text-[#001858] hover:bg-[#f582ae] uppercase mt-4"
            style={{ boxShadow: '4px 4px 0 #001858' }}
          >
            Hire Me
          </Button>
        </div>
      </motion.div>
    </>
  );
}
