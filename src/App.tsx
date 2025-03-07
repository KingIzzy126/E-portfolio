import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Calendar, GraduationCap, ChevronDown, Award, Code } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const projectsRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createStars = () => {
      const container = projectsRef.current;
      if (!container) return;

      container.innerHTML = '';
      const numStars = 100;

      for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 2 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.setProperty('--duration', `${Math.random() * 3 + 1}s`);
        star.style.opacity = `${Math.random()}`;
        container.appendChild(star);
      }
    };

    const createStarTrails = () => {
      const container = timelineRef.current;
      if (!container) return;

      container.innerHTML = '<div class="black-hole"></div>';
      const numTrails = 150;

      for (let i = 0; i < numTrails; i++) {
        const trail = document.createElement('div');
        trail.className = 'star-trail';
        trail.style.left = `${Math.random() * 100}%`;
        trail.style.top = `${Math.random() * 100}%`;
        trail.style.animationDelay = `${Math.random() * 3}s`;
        container.appendChild(trail);
      }
    };

    createStars();
    createStarTrails();
    
    window.addEventListener('resize', () => {
      createStars();
      createStarTrails();
    });
    
    return () => {
      window.removeEventListener('resize', createStars);
      window.removeEventListener('resize', createStarTrails);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const socialVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  const bioVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const timelineVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: backgroundY }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/20 via-purple-500/10 to-transparent opacity-30" />
        </motion.div>
        
        <motion.div 
          style={{ opacity }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center"
          >
            <motion.div
              variants={itemVariants}
              className="mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="https://i.imgur.com/vXZwdxp.jpg"
                alt="Profile"
                className="w-40 h-40 rounded-full border-2 border-purple-500/30 shadow-2xl shadow-purple-500/20"
              />
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-5xl lg:text-6xl font-bold mb-4 gradient-text tracking-tight"
            >
              Ismail Villojan Alashqar
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-xl text-zinc-400 mb-8"
            >
              Student, Cybersecurity, Responsive Web Design
            </motion.h2>
            
            <motion.div 
              variants={containerVariants}
              className="flex gap-6 mb-12"
            >
              {[
                { icon: Github, href: "https://github.com/KingIzzy126", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/ismailalashqar/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:rahhalstudent@gmail.com", label: "Email" },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={socialVariants}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 glass-panel rounded-full"
                  aria-label={item.label}
                >
                  <item.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown className="w-8 h-8 text-zinc-500" />
          </motion.div>
        </motion.div>
      </section>

      {/* Bio Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center gradient-text"
          >
            About Me
          </motion.h2>
          
          <motion.div
            variants={bioVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bio-card glass-panel p-8 rounded-2xl"
          >
            <motion.div 
              className="prose prose-invert max-w-none relative z-10"
            >
              <p className="mb-4 text-lg text-zinc-300">
                Hello! I'm Ismail Alashqar, an enthusiastic technologist with a keen interest in rhetoric, technology, and prompt engineering. I'm currently honing my rhetorical skills at Harvard Summer School and plan to explore the field of prompt engineering more extensively soon.
              </p>
              <p className="mb-4 text-lg text-zinc-300">
                A proud graduate of Dwight School Dubai's Class of 2023, I took a gap year to further my tech journey at 42 Abu Dhabi, where I specialized in Algorithms & AI, Network and System Administration, and Unix Graphics. Additionally, I accumulated 30 credits from Sophia Learning, focusing on business and technology courses.
              </p>
              <p className="text-lg text-zinc-300">
                Looking ahead, I intend to pursue a Bachelor of Science in Computer Science with a focus on Cybersecurity. I am passionate about developing innovative software solutions to protect people from cyber threats and dedicated to empowering the next generation with the knowledge and tools to navigate the digital world safely and successfully.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-32 relative overflow-hidden">
        <div ref={projectsRef} className="absolute inset-0 pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-16 text-center gradient-text"
          >
            Notable Projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div 
              variants={projectVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-panel p-6 rounded-2xl"
            >
              <h3 className="text-2xl font-semibold mb-4">MYP Personal Project: Seatedcise</h3>
              <p className="text-zinc-400">
                I developed Seatedcise, an innovative prototype aimed at promoting physical activity for individuals with limited mobility. This project merges exercise with everyday sitting activities, offering a practical and inclusive approach to fitness that enhances overall health and well-being.
              </p>
            </motion.div>

            <motion.div 
              variants={projectVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-panel p-6 rounded-2xl"
            >
              <h3 className="text-2xl font-semibold mb-4">IB Design Technology Project</h3>
              <p className="text-zinc-400">
                As part of my Design Technology coursework, I created and designed a prototype for a game board to improve hand-eye coordination for children. This interactive game is both fun and educational, helping kids develop crucial motor skills through engaging play.
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {[
              {
                title: "Pushswap",
                description: "Stack-based sorting algorithm implementation focusing on optimization and efficiency.",
                link: "https://github.com/KingIzzy126/PushSwap"
              },
              {
                title: "Fractol",
                description: "Interactive fractal rendering program showcasing complex mathematical visualizations.",
                link: "https://github.com/KingIzzy126/Fractol"
              },
              {
                title: "Minishell",
                description: "Custom Unix shell implementation with comprehensive process handling capabilities.",
                link: "https://github.com/KingIzzy126/Minishell"
              },
              {
                title: "Philosophers",
                description: "Advanced concurrency and resource management simulation solving the dining philosophers problem.",
                link: "https://github.com/KingIzzy126/Philosophers"
              }
            ].map((project, index) => (
              <motion.div 
                key={index}
                variants={projectVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="glass-panel rounded-2xl overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-zinc-400 mb-4">{project.description}</p>
                  <motion.a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    View Project <ExternalLink className="w-4 h-4 ml-1" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section with Black Hole */}
      <section className="py-32 relative overflow-hidden">
        <div ref={timelineRef} className="absolute inset-0 pointer-events-none star-field">
          <div className="black-hole" style={{ left: '50%', top: '50%' }} />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-16 text-center gradient-text"
          >
            Certifications & Events
          </motion.h2>
          
          <div className="max-w-3xl mx-auto">
            {[
              {
                date: "December 2020",
                title: "FreeCodeCamp – 300 Hours Responsive Web Design Certificate",
                icon: Code
              },
              {
                date: "February 2021",
                title: "Tatawwar Programme – Regional Semifinalist",
                description: "HSBC Entrepreneurship Competition",
                icon: Award
              },
              {
                date: "February 2021",
                title: "Harvard CS50 – Understanding Technology Certificate",
                icon: GraduationCap
              },
              {
                date: "March 2024",
                title: "CTF Dubai Police",
                description: "Cybersecurity Challenge",
                icon: Award
              },
              {
                date: "November 2024",
                title: "3rd Place Winner – CUD Innovation Showcase",
                description: "Business & Innovation Competition",
                icon: Award
              },
              {
                date: "February 2025",
                title: "3rd Place Winner – 42 Battle of the Houses",
                description: "Competitive Coding Challenge",
                icon: Code
              }
            ].map((item, index, array) => (
              <motion.div 
                key={index}
                variants={timelineVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative pl-8 pb-16 last:pb-0"
              >
                <div className="timeline-dot" />
                {index !== array.length - 1 && <div className="timeline-line" />}
                <motion.div 
                  className="glass-panel p-6 rounded-2xl backdrop-blur-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="mb-2 flex items-center text-sm text-zinc-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    {item.date}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  {item.description && (
                    <p className="text-zinc-400">{item.description}</p>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 glass-panel mt-32">
        <div className="container mx-auto px-4 text-center text-zinc-400">
          <p>© 2024 Ismail Alashqar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;