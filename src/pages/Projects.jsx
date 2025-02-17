import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "A cool project I built.",
    image: "#",
    link: "#",
  },
  {
    id: 2,
    title: "Project 2",
    description: "Another awesome project.",
    image: "#",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Animated Gradient */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'mirror' }}
          className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900"
        ></motion.div>

        {/* Animated Grid Pattern */}
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 5, repeat: Infinity, repeatType: 'mirror' }}
          className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20"
        ></motion.div>

        {/* Animated Sparkles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: 'mirror' }}
          className="absolute inset-0 bg-[url('/sparkles.svg')]"
        ></motion.div>
      </div>

      {/* Projects Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12 text-white"
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="text-blue-500 hover:underline"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;