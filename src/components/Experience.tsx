import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      company: "Miftah Digital Solution",
      position: "UI/UX Designer",
      period: "2024 - Present",
      location: "Jakarta, Indonesia",
      description: "Designed user interfaces for SaaS products and mobile applications. Collaborated with cross-functional teams to deliver pixel-perfect designs.",
      color: '#f582ae'
    },
    {
      company: "LapOn.",
      position: "Junior Designer",
      period: "2023 - 2020",
      location: "Remote",
      description: "Created wireframes, prototypes, and high-fidelity mockups for web and mobile applications. Conducted user testing and gathered feedback.",
      color: '#8bd3dd'
    },
    {
      company: "Freelance",
      position: "Design UI",
      period: "2023 - Present",
      location: "Remote",
      description: "Assisted in creating user interfaces and conducting user research. Learned fundamental UX principles and design thinking methodologies.",
      color: '#f3d2c1'
    }
  ];

  return (
    <section ref={ref} className="relative py-32 bg-[#fef6e4] overflow-hidden">
      {/* Background Decoration */}
      <motion.div
        animate={{
          y: [0, 20, 0],
          transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute top-40 right-10 w-32 h-32 bg-[#f582ae] border-4 border-[#001858] rounded-full hidden lg:block"
        style={{ boxShadow: '8px 8px 0 #001858' }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block bg-[#f582ae] border-4 border-[#001858] p-8 mb-6"
            style={{ boxShadow: '12px 12px 0 #001858' }}>
            <h2 className="text-5xl md:text-7xl text-[#001858] uppercase">
              Experience
            </h2>
          </div>
          <div className="bg-white border-4 border-[#001858] p-6 max-w-3xl mx-auto"
            style={{ boxShadow: '8px 8px 0 #001858' }}>
            <p className="text-xl text-[#001858]">
              My journey through the design world - from intern to senior designer
            </p>
          </div>
        </motion.div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <motion.div
                whileHover={{ y: -8, x: index % 2 === 0 ? 8 : -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid md:grid-cols-3 gap-0">
                  {/* Left Side - Company Info */}
                  <div 
                    className="md:col-span-1 border-4 border-[#001858] p-6 flex flex-col justify-between"
                    style={{ 
                      backgroundColor: exp.color,
                      boxShadow: '8px 8px 0 #001858'
                    }}
                  >
                    <div>
                      <div className="bg-[#001858] border-4 border-[#001858] inline-block px-4 py-2 mb-4">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl text-[#001858] mb-2 uppercase">
                        {exp.company}
                      </h3>
                      <div className="text-lg text-[#001858]">
                        {exp.position}
                      </div>
                    </div>

                    <div className="space-y-2 mt-6">
                      <div className="flex items-center gap-2 text-[#001858]">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm uppercase">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#001858]">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm uppercase">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Description Only */}
                  <div 
                    className="md:col-span-2 bg-white border-4 border-[#001858] border-t-0 md:border-t-4 md:border-l-0 p-6"
                    style={{ boxShadow: '8px 8px 0 #001858' }}
                  >
                     <p className="text-[#001858] text-2xl leading-relaxed justify-center">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Timeline Connector Visual */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute left-1/2 top-32 bottom-32 w-1 bg-[#001858] hidden lg:block -z-10"
          style={{ transformOrigin: 'top' }}
        />
      </div>
    </section>
  );
}
