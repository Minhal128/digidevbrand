import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '@/context/AppContext';

const LoadingScreen: React.FC = () => {
  const { isLoading, theme } = useApp();

  const isDark = theme === 'dark';

  const codeLines = [
    'const future = await DigiDevBrand.create();',
    'initializing_systems...',
    'loading_innovation();',
    'deploying_excellence...',
  ];
  
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={`fixed inset-0 z-[100] flex items-center justify-center ${
            isDark 
              ? 'bg-[#0a0a0f]' 
              : 'bg-[#0f0f1a]'
          }`}
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
            
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-px bg-gradient-to-b from-transparent via-violet-500/30 to-transparent"
                style={{
                  left: `${5 + i * 5}%`,
                  height: '100%',
                }}
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ 
                  opacity: [0, 0.5, 0],
                  scaleY: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px] bg-violet-600/20"
            />
          </div>

          <div className="relative flex flex-col items-center z-10">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative mb-8"
            >
              <svg width="160" height="160" viewBox="0 0 160 160" className="relative z-10">
                <motion.circle
                  cx="80"
                  cy="80"
                  r="70"
                  fill="none"
                  stroke="rgba(139,92,246,0.1)"
                  strokeWidth="1"
                />
                <motion.circle
                  cx="80"
                  cy="80"
                  r="70"
                  fill="none"
                  stroke="url(#gradient1)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="440"
                  strokeDashoffset="440"
                  animate={{ strokeDashoffset: [440, 0, 440] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.circle
                  cx="80"
                  cy="80"
                  r="55"
                  fill="none"
                  stroke="url(#gradient2)"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeDasharray="345"
                  animate={{ 
                    strokeDashoffset: [0, 345],
                    rotate: [0, 360]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: 'center' }}
                />
                
                <motion.path
                  d="M60 60 L80 50 L100 60 L100 100 L80 110 L60 100 Z"
                  fill="none"
                  stroke="url(#gradient1)"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.path
                  d="M80 50 L80 110 M60 60 L100 60 M60 100 L100 100"
                  fill="none"
                  stroke="rgba(139,92,246,0.3)"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.5, repeat: Infinity }}
                />

                {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                  <motion.circle
                    key={i}
                    cx={80 + 70 * Math.cos((angle * Math.PI) / 180)}
                    cy={80 + 70 * Math.sin((angle * Math.PI) / 180)}
                    r="3"
                    fill="#8b5cf6"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}

                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="50%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#7c3aed" />
                  </linearGradient>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
                    <stop offset="50%" stopColor="#8b5cf6" stopOpacity="1" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>

              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ 
                  textShadow: ['0 0 20px rgba(139,92,246,0.5)', '0 0 40px rgba(139,92,246,0.8)', '0 0 20px rgba(139,92,246,0.5)']
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-3xl font-bold text-white font-mono tracking-wider">DD</span>
              </motion.div>
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-3xl font-bold tracking-wider text-white"
            >
              <span className="text-white">DigiDev</span>
              <span className="text-violet-500">Brand</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 font-mono text-sm"
            >
              <div className="bg-black/50 border border-violet-500/20 rounded-lg p-4 min-w-[320px]">
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-violet-500/10">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-xs text-white/30">terminal</span>
                </div>
                
                {codeLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + i * 0.3 }}
                    className="flex items-center gap-2 text-xs mb-1"
                  >
                    <span className="text-violet-500">{'>'}</span>
                    <motion.span
                      className="text-green-400/80"
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                    >
                      {line}
                    </motion.span>
                  </motion.div>
                ))}
                
                <motion.div
                  className="flex items-center gap-2 text-xs mt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.9 }}
                >
                  <span className="text-violet-500">{'>'}</span>
                  <motion.span
                    className="inline-block w-2 h-4 bg-violet-500"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.6, duration: 0.3 }}
              className="mt-8 w-64 h-1 bg-white/5 rounded-full overflow-hidden"
            >
              <motion.div
                className="h-full bg-gradient-to-r from-violet-600 via-purple-500 to-violet-600 rounded-full"
                style={{ backgroundSize: '200% 100%' }}
                animate={{ 
                  backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'],
                  width: ['0%', '100%']
                }}
                transition={{ 
                  backgroundPosition: { duration: 2, repeat: Infinity, ease: "linear" },
                  width: { duration: 2.5, ease: "easeInOut" }
                }}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-4 text-xs text-white/30 tracking-[0.2em] uppercase"
            >
              Initializing Systems
            </motion.p>
          </div>

          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 30 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-violet-500/10 font-mono text-xs"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -200],
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                  ease: "linear",
                }}
              >
                {['0', '1', '<>', '//', '{}', '[]', '();'][Math.floor(Math.random() * 7)]}
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
