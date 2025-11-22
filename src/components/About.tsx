import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Sparkles, Palette, Code, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Palette,
      title: "Creative Design",
      description: "Transforming ideas into visually stunning interfaces",
      bg: '#ffd803'
    },
    {
      icon: Code,
      title: "User-Centered",
      description: "Designs backed by research and user testing",
      bg: '#f582ae'
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working seamlessly with developers and stakeholders",
      bg: '#8bd3dd'
    },
    {
      icon: Sparkles,
      title: "Innovation",
      description: "Staying ahead with latest design trends and tools",
      bg: '#f3d2c1'
    }
  ];

  return (
    <section ref={ref} className="relative py-32 bg-white">
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          {/* Title */}
          <div className="text-center mb-12">
            <div className="inline-block bg-[#001858] border-4 border-[#001858] p-8 mb-6"
              style={{ boxShadow: '12px 12px 0 #ffd803' }}>
              <h2 className="text-5xl md:text-7xl text-[#fef6e4] uppercase">
                About Me
              </h2>
            </div>
          </div>

          {/* Profile Section with Photo */}
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto mb-12">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div 
                  className="w-80 h-96 border-4 border-[#001858] overflow-hidden bg-[#f582ae]"
                  style={{ boxShadow: '16px 16px 0 #ffd803' }}
                >
                  <ImageWithFallback
                    src="img/yoga4.png"
                    alt="Designer Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Corner accent */}
                <div 
                  className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#8bd3dd] border-4 border-[#001858]"
                  style={{ boxShadow: '6px 6px 0 #001858' }}
                />
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bg-[#fef6e4] border-4 border-[#001858] p-8"
                style={{ boxShadow: '12px 12px 0 #001858' }}>
                <p className="text-xl text-[#001858] mb-6">
                 Sebagai seorang UI/UX Designer dan Web Developer, saya memiliki dedikasi kuat dalam menciptakan pengalaman digital yang menarik dan fungsional. Saya berpengalaman dalam merancang antarmuka yang intuitif serta mengembangkan situs web yang responsif dan efisien. Dengan latar belakang di bidang teknologi dan desain, saya terus berinovasi untuk memberikan solusi yang sesuai dengan kebutuhan klien.
                </p>
                <p className="text-lg text-[#001858]">
                 Saya percaya bahwa desain yang baik mampu menciptakan dampak besar pada bisnis dan interaksi pengguna. Dengan keahlian saya, saya siap membantu Anda mengembangkan produk yang tidak hanya terlihat profesional tetapi juga mudah digunakan.
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-[#ffd803] border-4 border-[#001858] p-4 text-center"
                    style={{ boxShadow: '4px 4px 0 #001858' }}>
                    <div className="text-3xl text-[#001858]">2+</div>
                    <div className="text-sm text-[#001858] uppercase">Years Exp</div>
                  </div>
                  <div className="bg-[#f582ae] border-4 border-[#001858] p-4 text-center"
                    style={{ boxShadow: '4px 4px 0 #001858' }}>
                    <div className="text-3xl text-[#001858]">20+</div>
                    <div className="text-sm text-[#001858] uppercase">Projects</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.2 }
                }}
                className="h-full"
              >
                <div 
                  className="border-4 border-[#001858] p-6 h-full"
                  style={{ 
                    backgroundColor: feature.bg,
                    boxShadow: '8px 8px 0 #001858'
                  }}
                >
                  <div className="bg-[#001858] border-4 border-[#001858] w-16 h-16 flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-[#ffd803]" />
                  </div>
                  <h3 className="text-xl text-[#001858] mb-3 uppercase">{feature.title}</h3>
                  <p className="text-[#001858]">{feature.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Decorative Shapes */}
        <motion.div
          animate={{
            rotate: [0, 360],
            transition: { duration: 20, repeat: Infinity, ease: "linear" }
          }}
          className="absolute -top-10 right-10 w-20 h-20 bg-[#f582ae] border-4 border-[#001858] hidden lg:block"
          style={{ boxShadow: '6px 6px 0 #001858' }}
        />
      </div>
    </section>
  );
}
