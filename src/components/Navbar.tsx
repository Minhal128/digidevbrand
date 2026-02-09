import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useApp } from '@/context/AppContext';
import { Switch } from '@/components/ui/Switch';
import ReactCountryFlag from "react-country-flag";
import {
  Menu,
  X,
  Sun,
  Moon,
  Globe,
  ChevronDown,
  ArrowRight,
} from 'lucide-react';

const countries = [
  { name: 'USA', code: 'US' },
  { name: 'UK', code: 'GB' },
  { name: 'UAE', code: 'AE' },
  { name: 'Saudi Arabia', code: 'SA' },
  { name: 'Canada', code: 'CA' },
  { name: 'Germany', code: 'DE' },
  { name: 'France', code: 'FR' },
  { name: 'Australia', code: 'AU' },
];

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const { theme, toggleTheme, language, setLanguage } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const location = useLocation();

  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

const navLinks = [
      { name: t('nav.home'), path: '/' },
      { name: t('nav.about'), path: '/about' },
      { name: t('nav.services'), path: '/services' },
      { name: t('nav.contact'), path: '/contact' },
      { name: t('nav.review'), path: '/review' },
    ];

  const toggleLanguage = (lang: 'en' | 'ar') => {
    setLanguage(lang);
    setIsLangDropdownOpen(false);
  };

  return (
    <>
      {/* Main Navbar - Centered Style */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? isDark
            ? 'bg-[#1a1235] border-b border-white/10 py-3 shadow-lg'
            : 'bg-white border-b border-[#462878]/10 py-3 shadow-lg'
          : isDark
            ? 'bg-[#1a1235] py-4'
            : 'bg-white py-4'
          }`}
      >
        <nav className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center ml-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center"
              >
                <img
                  src="/logo.png"
                  alt="DigiDevBrand Logo"
                  className="h-24 w-auto object-contain drop-shadow-[0_0_10px_rgba(70,40,120,0.3)]"
                />
              </motion.div>
            </Link>

            {/* Center Navigation */}
            <div className="hidden lg:flex items-center">
              <div className={`flex items-center gap-1 px-2 py-1.5 rounded-full backdrop-blur-md border shadow-inner ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-[#462878]/20'}`}>
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative px-5 py-2 text-sm font-bold rounded-full transition-all duration-300 ${location.pathname === link.path
                      ? 'text-[#D6B166] bg-[#4B2F7D] shadow-lg shadow-black/20'
                      : isDark ? 'text-white/80 hover:text-white hover:bg-white/10' : 'text-[#281E5A] hover:text-[#4B2F7D] hover:bg-[#4B2F7D]/10'
                      }`}
                  >
                    {link.name}
                    {location.pathname === link.path && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full border border-[#D6B166]/30"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Side Controls */}
            <div className="flex items-center gap-3">
              {/* Country Dropdown */}
              <div className="relative hidden md:block">
                <button
                  onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                  className={`flex items-center gap-2 h-10 px-3 rounded-full border transition-all text-sm font-bold shadow-sm ${isDark ? 'border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10' : 'border-[#462878]/30 bg-white/80 text-[#462878] hover:border-[#462878] hover:bg-white'}`}
                >
                  <ReactCountryFlag
                    countryCode={selectedCountry.code}
                    svg
                    style={{
                      width: '1.5em',
                      height: '1.5em',
                      borderRadius: '4px',
                      objectFit: 'cover'
                    }}
                    title={selectedCountry.name}
                  />
                  <span className="uppercase">{selectedCountry.code}</span>
                  <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${isCountryDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isCountryDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className={`absolute right-0 mt-3 w-56 rounded-2xl shadow-2xl border overflow-hidden z-[60] ${isDark ? 'border-white/10 bg-[#1a1235]/95 backdrop-blur-xl' : 'border-[#462878]/20 bg-white/95 backdrop-blur-xl'}`}
                    >
                      <div className="p-2 grid grid-cols-1 gap-1 max-h-80 overflow-y-auto">
                        {countries.map((country) => (
                          <button
                            key={country.code}
                            onClick={() => {
                              setSelectedCountry(country);
                              setIsCountryDropdownOpen(false);
                            }}
                            className={`flex items-center gap-3 w-full px-4 py-2.5 text-left text-sm rounded-xl transition-all ${selectedCountry.code === country.code
                              ? 'bg-[#4B2F7D] text-[#D6B166] font-bold'
                              : isDark ? 'text-white/70 hover:bg-white/5 hover:text-white' : 'text-[#4B2F7D]/80 hover:bg-[#4B2F7D]/5 hover:text-[#4B2F7D]'
                              }`}
                          >
                            <ReactCountryFlag
                              countryCode={country.code}
                              svg
                              style={{
                                width: '1.2em',
                                height: '1.2em',
                                borderRadius: '2px',
                                objectFit: 'cover'
                              }}
                            />
                            <span className="flex-1">{country.name}</span>
                            {selectedCountry.code === country.code && (
                              <div className="h-1.5 w-1.5 rounded-full bg-[#D6B166]" />
                            )}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`hidden md:flex items-center justify-center h-10 w-10 rounded-full border transition-all shadow-sm ${isDark ? 'border-white/20 bg-white/5 text-white hover:text-yellow-400 hover:bg-white/10' : 'border-[#462878]/30 bg-white/80 text-[#462878] hover:text-[#281E5A] hover:bg-white'}`}
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>

              {/* Language Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                  className={`hidden md:flex items-center gap-2 h-10 px-4 rounded-full border transition-all text-sm font-bold shadow-sm ${isDark ? 'border-white/20 bg-white/5 text-white hover:text-white hover:bg-white/10' : 'border-[#462878]/30 bg-white/80 text-[#462878] hover:text-[#281E5A] hover:bg-white'}`}
                >
                  <Globe className="h-4 w-4" />
                  <span className="uppercase">{language}</span>
                  <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isLangDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className={`absolute right-0 mt-3 w-40 rounded-2xl shadow-2xl border overflow-hidden z-[60] ${isDark ? 'border-white/10 bg-[#1a1235]/95 backdrop-blur-xl' : 'border-[#462878]/20 bg-white/95 backdrop-blur-xl'}`}
                    >
                      <div className="p-2 space-y-1">
                        <button
                          onClick={() => toggleLanguage('en')}
                          className={`flex items-center justify-between w-full px-4 py-3 text-sm rounded-xl transition-all ${language === 'en'
                            ? 'bg-[#462878] text-[#D2AA50] font-bold'
                            : isDark ? 'text-white/70 hover:bg-white/5 hover:text-white' : 'text-[#462878]/80 hover:bg-[#462878]/5 hover:text-[#462878]'
                            }`}
                        >
                          <div className="flex items-center gap-2">
                            <ReactCountryFlag countryCode="US" svg />
                            <span>English</span>
                          </div>
                          {language === 'en' && <div className="h-1.5 w-1.5 rounded-full bg-[#D2AA50]" />}
                        </button>
                        <button
                          onClick={() => toggleLanguage('ar')}
                          className={`flex items-center justify-between w-full px-4 py-3 text-sm rounded-xl transition-all ${language === 'ar'
                            ? 'bg-[#462878] text-[#D2AA50] font-bold'
                            : isDark ? 'text-white/70 hover:bg-white/5 hover:text-white' : 'text-[#462878]/80 hover:bg-[#462878]/5 hover:text-[#462878]'
                            }`}
                        >
                          <div className="flex items-center gap-2">
                            <ReactCountryFlag countryCode="SA" svg />
                            <span>العربية</span>
                          </div>
                          {language === 'ar' && <div className="h-1.5 w-1.5 rounded-full bg-[#D2AA50]" />}
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* CTA Button */}
              <Link to="/contact" className="hidden md:block">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(70, 40, 120, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-[#4B2F7D] to-[#281E5A] rounded-full shadow-lg transition-all border border-white/10"
                >
                  {t('nav.getProposal')}
                </motion.button>
              </Link>

              {/* Mobile Menu Button */}
              <button
                className={`lg:hidden h-10 w-10 rounded-full border flex items-center justify-center transition-all shadow-sm ${isDark ? 'border-white/20 bg-white/5 text-white' : 'border-[#462878]/30 bg-white/80 text-[#462878]'}`}
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </nav>
      </motion.header >

      {/* Mobile Menu */}
      <AnimatePresence>
        {
          isMobileMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 backdrop-blur-md z-[100] lg:hidden bg-black/60"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className={`fixed top-0 right-0 h-full w-[85%] max-w-sm backdrop-blur-2xl border-l shadow-2xl z-[101] lg:hidden ${isDark ? 'bg-[#1a1235]/98 border-white/10' : 'bg-white/98 border-[#462878]/20'}`}
              >
                <div className="flex flex-col h-full">
                  <div className={`flex items-center justify-between p-6 border-b ${isDark ? 'border-white/10' : 'border-[#462878]/10'}`}>
                    <div className="flex items-center gap-3">
                      <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
                      <span className={`text-xl font-black tracking-tight ${isDark ? 'text-white' : 'text-[#281E5A]'}`}>MENU</span>
                    </div>
                    <button
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`h-10 w-10 rounded-full border flex items-center justify-center transition-all ${isDark ? 'border-white/20 bg-white/5 text-white' : 'border-[#462878]/20 bg-[#462878]/5 text-[#462878]'}`}
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="flex-1 overflow-y-auto py-6 px-4">
                    <div className="space-y-2">
                      {navLinks.map((link, index) => (
                        <motion.div
                          key={link.path}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Link
                            to={link.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`flex items-center justify-between px-5 py-4 text-lg font-bold rounded-2xl transition-all ${location.pathname === link.path
                              ? 'text-[#D6B166] bg-[#4B2F7D] border-r-4 border-[#D6B166]'
                              : isDark ? 'text-white/80 hover:text-white hover:bg-white/5' : 'text-[#4B2F7D]/80 hover:text-[#4B2F7D] hover:bg-[#4B2F7D]/5'
                              }`}
                          >
                            {link.name}
                            <ArrowRight className={`h-4 w-4 opacity-50 ${location.pathname === link.path ? 'opacity-100' : ''}`} />
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className={`p-6 border-t space-y-6 ${isDark ? 'border-white/10' : 'border-[#462878]/10'}`}>
                    <div className={`flex items-center justify-between p-4 rounded-2xl ${isDark ? 'bg-white/5' : 'bg-black/5'}`}>
                      <div className="flex items-center gap-3">
                        {theme === 'dark' ? <Moon className={`h-5 w-5 ${isDark ? 'text-white' : 'text-[#462878]'}`} /> : <Sun className={`h-5 w-5 ${isDark ? 'text-white' : 'text-[#462878]'}`} />}
                        <span className={`text-sm font-bold ${isDark ? 'text-white' : 'text-[#281E5A]'}`}>Dark Mode</span>
                      </div>
                      <Switch
                        checked={theme === 'dark'}
                        onCheckedChange={toggleTheme}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={() => toggleLanguage('en')}
                        className={`flex items-center justify-center gap-2 py-3.5 text-sm font-bold rounded-2xl transition-all border ${language === 'en'
                          ? 'bg-[#4B2F7D] text-[#D6B166] border-[#D6B166]/50'
                          : isDark ? 'bg-white/5 text-white/60 border-white/10' : 'bg-black/5 text-[#4B2F7D]/60 border-black/5'
                          }`}
                      >
                        <ReactCountryFlag countryCode="US" svg />
                        EN
                      </button>
                      <button
                        onClick={() => toggleLanguage('ar')}
                        className={`flex items-center justify-center gap-2 py-3.5 text-sm font-bold rounded-2xl transition-all border ${language === 'ar'
                          ? 'bg-[#462878] text-[#D2AA50] border-[#D2AA50]/50'
                          : isDark ? 'bg-white/5 text-white/60 border-white/10' : 'bg-black/5 text-[#462878]/60 border-black/5'
                          }`}
                      >
                        <ReactCountryFlag countryCode="SA" svg />
                        AR
                      </button>
                    </div>

                    <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                      <button className="w-full py-4 text-base font-black text-white bg-gradient-to-r from-[#4B2F7D] via-[#281E5A] to-[#D6B166] rounded-2xl shadow-xl shadow-[#4B2F7D]/30">
                        {t('nav.getProposal')}
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </>
          )
        }
      </AnimatePresence >
    </>
  );
};

export default Navbar;

