import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Function to generate random positions
const getRandomPosition = () => ({
  cx: `${Math.random() * 100}%`,
  cy: `${Math.random() * 100}%`,
});

// Sparkle component with random movement
const Sparkle = ({ cx, cy, r }) => {
  const randomPosition = getRandomPosition();

  return (
    <motion.circle
      cx={cx}
      cy={cy}
      r={r}
      fill="#FFFFFF"
      initial={{ cx, cy }}
      animate={{ cx: randomPosition.cx, cy: randomPosition.cy }}
      transition={{
        duration: Math.random() * 5 + 5, // Random duration between 5 and 10 seconds
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'linear',
      }}
    />
  );
};

const Home = () => {
  const sparkles = [
    { cx: '5%', cy: '15%', r: 4 },
    { cx: '20%', cy: '40%', r: 5 },
    { cx: '35%', cy: '10%', r: 4 },
    { cx: '50%', cy: '70%', r: 5 },
    { cx: '65%', cy: '30%', r: 4 },
    { cx: '80%', cy: '60%', r: 5 },
    { cx: '95%', cy: '20%', r: 4 },
    { cx: '10%', cy: '25%', r: 2 },
    { cx: '25%', cy: '55%', r: 3 },
    { cx: '40%', cy: '5%', r: 2 },
    { cx: '55%', cy: '80%', r: 3 },
    { cx: '70%', cy: '35%', r: 2 },
    { cx: '85%', cy: '65%', r: 3 },
    { cx: '100%', cy: '10%', r: 2 },
  ];

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Animated Gradient */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'mirror' }}
          className="absolute inset-0 bg-gradient-to-r from-blue-900 to-green-900"
        ></motion.div>

        {/* Animated Grid Pattern */}
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 5, repeat: Infinity, repeatType: 'mirror' }}
          className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20"
        ></motion.div>

        {/* Animated Sparkles */}
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          {sparkles.map((sparkle, index) => (
            <Sparkle key={index} cx={sparkle.cx} cy={sparkle.cy} r={sparkle.r} />
          ))}
        </svg>
      </div>

      {/* Rest of the content */}
      <div className="w-full md:w-1/2 flex items-center justify-center order-2 md:order-none z-10 mx-4 md:mx-8">
        <motion.img
          src="image.gif" // Path to your GIF
          alt="Profile"
          className="w-64 h-64 rounded-full border-4 border-white shadow-lg"
          whileHover={{ scale: 1.1 }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 text-center md:text-left p-4 order-1 md:order-none z-10 mx-4 md:mx-8"
      >
        <h1 className="text-6xl font-bold text-white mb-4">
          Hi, I'm <span className="text-yellow-300">Shadrack</span>.
        </h1>
        <p className="text-xl text-white mb-8">
          A passionate software developer building amazing web experiences.
        </p>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link
            to="/projects"
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold"
          >
            View My Work
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;