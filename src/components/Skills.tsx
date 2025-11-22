import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: "Figma", level: 95, color: '#ffd803' },
    { name: "Adobe XD", level: 90, color: '#f582ae' },
    { name: "Sketch", level: 85, color: '#8bd3dd' },
    { name: "Prototyping", level: 92, color: '#f3d2c1' },
    { name: "User Research", level: 88, color: '#ffd803' },
    { name: "Wireframing", level: 93, color: '#f582ae' },
    { name: "Design Systems", level: 90, color: '#8bd3dd' },
    { name: "Interaction Design", level: 87, color: '#f3d2c1' }
  ];

  return (
    <section ref={ref} className="relative py-32 bg-white overflow-hidden">
      {/* Background Shapes */}
      <motion.div
        animate={{
          rotate: [0, 360],
          transition: { duration: 30, repeat: Infinity, ease: "linear" }
        }}
        className="absolute -top-32 -right-32 w-96 h-96 bg-[#ffd803] border-4 border-[#001858] rounded-full opacity-20"
        style={{ boxShadow: '16px 16px 0 #001858' }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block bg-[#8bd3dd] border-4 border-[#001858] p-8 mb-6"
            style={{ boxShadow: '12px 12px 0 #001858' }}>
            <h2 className="text-5xl md:text-7xl text-[#001858] uppercase">
              Skills
            </h2>
          </div>
          <div className="bg-[#fef6e4] border-4 border-[#001858] p-6 max-w-3xl mx-auto"
            style={{ boxShadow: '8px 8px 0 #001858' }}>
            <p className="text-xl text-[#001858]">
              Proficient in industry-standard tools and methodologies
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white border-4 border-[#001858] p-6"
                style={{ boxShadow: '8px 8px 0 #001858' }}>
                <div className="mb-4 flex justify-between items-center">
                  <span className="text-[#001858] uppercase">{skill.name}</span>
                  <div className="bg-[#001858] border-4 border-[#001858] px-3 py-1">
                    <span className="text-white">{skill.level}%</span>
                  </div>
                </div>
                
                <div className="relative h-8 bg-[#fef6e4] border-4 border-[#001858]">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                    className="absolute inset-0 border-r-4 border-[#001858]"
                    style={{ 
                      backgroundColor: skill.color,
                      boxShadow: 'inset 0 0 0 4px #001858'
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative Elements */}
        <motion.div
          animate={{
            rotate: [0, 90, 180, 270, 360],
            transition: { duration: 20, repeat: Infinity, ease: "linear" }
          }}
          className="absolute bottom-20 right-20 w-24 h-24 bg-[#f582ae] border-4 border-[#001858] hidden lg:block"
          style={{ boxShadow: '6px 6px 0 #001858' }}
        />
      </div>
    </section>
  );
}
