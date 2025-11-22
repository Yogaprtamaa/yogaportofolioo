import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Badge } from './ui/badge';

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    
    {
      title: "UMKM",
      category: "MarketPlace System",
      description: "Comprehensive design system with 200+ components for modern web applications",
      image: "img/UMKM.png",
      tags: ["Figma", "UI Design", "Component Library"],
      accentColor: '#ffd803'
    },
    {
      title: "Spa Pijat  ",
      category: "Booking System",
      description: "Intuitive banking experience with focus on accessibility and user experience",
      image: "img/Spa pijat.png",
      tags: ["Mobile", "Finance", "UX Research"],
      accentColor: '#f582ae'
    },
    {
      title: "Logistic Tracking Dashboard",
      category: "Web Application",
      description: "Real-time data visualization dashboard with complex data relationships",
      image: "img/Garment.png",
      tags: ["Dashboard", "Data Viz", "Enterprise"],
      accentColor: '#8bd3dd'
    },
    {
      title: "Workspace Redesign",
      category: "Product Design",
      description: "Complete redesign of productivity tool focusing on minimalism and efficiency",
      image: "img/Cover.png",
      tags: ["Productivity", "SaaS", "Redesign"],
      accentColor: '#f3d2c1'
    },
     {
      title: "Workspace Redesign",
      category: "Product Design",
      description: "Complete redesign of productivity tool focusing on minimalism and efficiency",
      image: "img/Cover.png",
      tags: ["Productivity", "SaaS", "Redesign"],
      accentColor: '#f3d2c1'
    },
     {
      title: "Workspace Redesign",
      category: "Product Design",
      description: "Complete redesign of productivity tool focusing on minimalism and efficiency",
      image: "img/Cover.png",
      tags: ["Productivity", "SaaS", "Redesign"],
      accentColor: '#f3d2c1'
    },
    {
      title: "Logistic Tracking Dashboard",
      category: "Web Application",
      description: "Real-time data visualization dashboard with complex data relationships",
      image: "img/Garment.png",
      tags: ["Dashboard", "Data Viz", "Enterprise"],
      accentColor: '#8bd3dd'
    },
    {
      title: "Workspace Redesign",
      category: "Product Design",
      description: "Complete redesign of productivity tool focusing on minimalism and efficiency",
      image: "img/Cover.png",
      tags: ["Productivity", "SaaS", "Redesign"],
      accentColor: '#f3d2c1'
    }
    
  ];

  return (
    <section ref={ref} className="relative py-32 bg-[#fef6e4]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block bg-[#f582ae] border-4 border-[#001858] p-8 mb-6"
            style={{ boxShadow: '12px 12px 0 #001858' }}>
            <h2 className="text-5xl md:text-7xl text-[#001858] uppercase">
              Projects
            </h2>
          </div>
          <div className="bg-white border-4 border-[#001858] p-6 max-w-3xl mx-auto"
            style={{ boxShadow: '8px 8px 0 #001858' }}>
            <p className="text-xl text-[#001858]">
              A selection of my recent work showcasing different aspects of UI/UX design
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.div
                whileHover={{ y: -8 }}
                className="h-full"
              >
                {/* Card */}
                <div 
                  className="bg-white border-4 border-[#001858] overflow-hidden"
                  style={{ boxShadow: '12px 12px 0 #001858' }}
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden border-b-4 border-[#001858]">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Overlay */}
                    <motion.div
                      animate={{
                        opacity: hoveredIndex === index ? 1 : 0
                      }}
                      className="absolute inset-0 flex items-center justify-center"
                      style={{ backgroundColor: project.accentColor }}
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{
                          scale: hoveredIndex === index ? 1 : 0
                        }}
                        className="bg-[#001858] border-4 border-[#001858] p-6"
                        style={{ boxShadow: '6px 6px 0 #001858' }}
                      >
                        <ExternalLink className="w-10 h-10 text-white" />
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6" style={{ backgroundColor: project.accentColor }}>
                    <div className="bg-[#001858] border-4 border-[#001858] px-4 py-2 inline-block mb-4">
                      <span className="text-sm text-white uppercase">{project.category}</span>
                    </div>
                    <h3 className="text-2xl text-[#001858] mb-3 uppercase">{project.title}</h3>
                    <p className="text-[#001858] mb-6">{project.description}</p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <Badge 
                          key={tag} 
                          className="border-4 border-[#001858] bg-white text-[#001858] hover:bg-[#001858] hover:text-white uppercase"
                          style={{ boxShadow: '2px 2px 0 #001858' }}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Link */}
                    <div className="flex items-center gap-2 text-[#001858] uppercase">
                      <span>View Project</span>
                      <motion.div
                        animate={{
                          x: hoveredIndex === index ? 5 : 0
                        }}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Shape */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute top-20 left-10 w-32 h-32 bg-[#8bd3dd] border-4 border-[#001858] rounded-full hidden lg:block"
        style={{ boxShadow: '8px 8px 0 #001858' }}
      />
    </section>
  );
}
