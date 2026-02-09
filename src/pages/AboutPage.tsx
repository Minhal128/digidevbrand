import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {
  CheckCircle,
  ArrowRight,
  Globe,
  Rocket,
  Heart,
  Lightbulb,
} from 'lucide-react';
import { useApp } from '@/context/AppContext';

const AboutPage: React.FC = () => {
  useTranslation();
  const { theme } = useApp();
  const isDark = theme === 'dark';

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Every project we undertake is fueled by our passion for creating exceptional digital experiences.',
    },
    {
      icon: Globe, // Replaced Users with Globe as a generic icon since Users was removed
      title: 'Collaboration',
      description: 'We work closely with our clients, treating their success as our own.',
    },
    {
      icon: CheckCircle,
      title: 'Excellence',
      description: 'We maintain the highest standards of quality in everything we do.',
    },
  ];


  return (
    <div className={`overflow-hidden ${isDark ? 'bg-[#1a1235]' : 'bg-white'}`}>
      {/* Hero Section */}
      <section className="relative w-full max-w-[1920px] mx-auto aspect-video overflow-hidden bg-gray-100">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/about.jpeg"
            alt="About Us"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className={`font-medium text-sm uppercase tracking-widest ${isDark ? 'text-violet-400' : 'text-violet-600'}`}>What Drives Us</span>
            <h2 className={`text-4xl md:text-5xl font-bold mt-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className={`h-full text-center p-8 rounded-2xl transition-all duration-300 ${isDark ? 'bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-violet-500/30' : 'bg-white border border-gray-200 hover:bg-gray-50 hover:border-violet-300 shadow-lg shadow-gray-100/50'}`}>
                  <div className="relative h-20 w-20 mx-auto mb-6">
                    <div className={`absolute inset-0 rounded-2xl transition-all duration-500 group-hover:scale-110 ${isDark ? 'bg-gradient-to-br from-violet-500/20 to-purple-500/20' : 'bg-gradient-to-br from-violet-100 to-purple-100'}`} style={{ transform: 'rotateX(20deg) rotateY(-10deg)', transformStyle: 'preserve-3d' }} />
                    <div className={`absolute inset-1 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-105 ${isDark ? 'bg-gradient-to-br from-violet-500/30 to-purple-600/30 shadow-lg shadow-violet-500/20' : 'bg-gradient-to-br from-violet-200 to-purple-200 shadow-lg shadow-violet-300/30'}`} style={{ transform: 'translateZ(10px)', transformStyle: 'preserve-3d' }}>
                      <value.icon className={`h-10 w-10 transition-all duration-300 group-hover:scale-110 ${isDark ? 'text-violet-400' : 'text-violet-600'}`} style={{ filter: isDark ? 'drop-shadow(0 4px 8px rgba(139, 92, 246, 0.4))' : 'drop-shadow(0 4px 8px rgba(139, 92, 246, 0.3))' }} />
                    </div>
                    <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-12 h-3 rounded-full blur-md transition-opacity duration-300 group-hover:opacity-60 ${isDark ? 'bg-violet-500/40' : 'bg-violet-400/40'}`} />
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{value.title}</h3>
                  <p className={isDark ? 'text-white/50' : 'text-gray-500'}>
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-28 bg-gradient-to-br from-violet-600 via-purple-600 to-violet-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className={`absolute bottom-0 right-1/4 w-96 h-96 ${isDark ? 'bg-purple-300/10' : 'bg-white/10'} rounded-full blur-3xl`} />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <Rocket className="h-16 w-16 mx-auto mb-6 text-white/80" />
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">Ready to Start Your Project?</h2>
            <p className="text-xl text-white/70 mb-10">
              Let's collaborate to bring your vision to life. Our team is ready to help you achieve digital excellence.
            </p>
            <Link to="/contact">
              <button className="px-10 py-4 bg-white text-violet-600 font-semibold rounded-full hover:bg-white/90 transition-all inline-flex items-center gap-2 shadow-xl shadow-black/20">
                Get In Touch
                <ArrowRight className="h-5 w-5" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
