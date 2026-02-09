import React from 'react';
import { motion } from 'framer-motion';
import ReactCountryFlag from 'react-country-flag';
import { useApp } from '@/context/AppContext';

const countries = [
  { name: 'Canada', code: 'CA', displayCode: 'CA' },
  { name: 'United Arab Emirates', code: 'AE', displayCode: 'AE' },
  { name: 'United States of America', code: 'US', displayCode: 'USA' },
  { name: 'United Kingdom', code: 'GB', displayCode: 'GB' },
];

const CountryMarquee: React.FC = () => {
  const { theme } = useApp();
  const isDark = theme === 'dark';

  const CountryItem = () => (
    <>
      {countries.map((country) => (
        <div key={country.code} className="flex items-center gap-6 px-12 group shrink-0">
          {/* Professional Flag Container */}
          <div className="relative">
            <div className="w-16 h-12 rounded-lg overflow-hidden shadow-lg border-2 border-white/20 group-hover:border-violet-500/50 transition-all duration-500 transform group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-violet-500/20 bg-white">
              <ReactCountryFlag
                countryCode={country.code}
                svg
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                title={country.name}
              />
            </div>
            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-violet-500/0 via-violet-500/20 to-fuchsia-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
          </div>

          {/* Country Name */}
          <div className="flex flex-col">
            <span className={`text-2xl font-black uppercase tracking-[0.15em] ${isDark ? 'text-white' : 'text-black'} transition-all duration-500`}>
              {country.name}
            </span>
            <span className={`text-xs font-bold uppercase tracking-[0.2em] mt-1 ${isDark ? 'text-white/40 group-hover:text-violet-400' : 'text-gray-400 group-hover:text-violet-600'} transition-all duration-500`}>
              {country.displayCode}
            </span>
          </div>
        </div>
      ))}
    </>
  );

  return (
    <div className={`py-4 overflow-hidden border-t border-b ${isDark ? 'bg-[#050508] border-white/5' : 'bg-gray-50 border-gray-100'}`}>
      <div className="flex">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: '-100%' }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="flex flex-shrink-0"
        >
          <CountryItem />
        </motion.div>

        <motion.div
          initial={{ x: 0 }}
          animate={{ x: '-100%' }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="flex flex-shrink-0"
        >
          <CountryItem />
        </motion.div>
      </div>
    </div>
  );
};

export default CountryMarquee;
