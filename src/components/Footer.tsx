import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useApp } from '@/context/AppContext';
import {
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Globe,
  Shield,
  CheckCircle,
} from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useApp();
  const isDark = theme === 'dark';

  const quickLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.contact'), path: '/contact' },
    { name: t('nav.review'), path: '/review' },
  ];


  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61566042842637', label: 'Facebook', color: 'hover:text-blue-500' },
    { icon: Instagram, href: 'https://www.instagram.com/digidevbrand_llc/', label: 'Instagram', color: 'hover:text-pink-500' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/digidevbrand/?viewAsMember=true', label: 'LinkedIn', color: 'hover:text-blue-700' },
  ];

  return (
    <footer className={`relative overflow-hidden pt-16 md:pt-24 pb-0 transition-colors duration-300 text-white w-full m-0 ${isDark ? 'bg-gradient-to-b from-[#0a0a0f] to-[#000000]' : 'bg-gradient-to-b from-[#1a0b2e] to-[#0f0520]'}`}>
      {/* Advanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute -top-40 -left-40 w-60 md:w-80 h-60 md:h-80 rounded-full blur-[100px] md:blur-[130px] opacity-20 animate-pulse bg-purple-600" />
        <div className="absolute top-1/2 right-0 w-72 md:w-96 h-72 md:h-96 rounded-full blur-[100px] md:blur-[130px] opacity-15 animate-pulse bg-blue-600" style={{ animationDelay: '0.5s' }} />
        <div className="absolute -bottom-40 left-1/2 w-60 md:w-80 h-60 md:h-80 rounded-full blur-[100px] md:blur-[130px] opacity-20 bg-indigo-600" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent" style={{
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(99, 102, 241, 0.05) 25%, rgba(99, 102, 241, 0.05) 26%, transparent 27%, transparent 74%, rgba(99, 102, 241, 0.05) 75%, rgba(99, 102, 241, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(99, 102, 241, 0.05) 25%, rgba(99, 102, 241, 0.05) 26%, transparent 27%, transparent 74%, rgba(99, 102, 241, 0.05) 75%, rgba(99, 102, 241, 0.05) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Hero CTA Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 relative p-8 md:p-12 rounded-2xl md:rounded-3xl border overflow-hidden group bg-gradient-to-br from-indigo-900/40 to-purple-900/40 backdrop-blur-sm border-indigo-500/30 hover:border-indigo-400/50 transition-all"
          >
            {/* Inner glow on hover */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-900/0 to-amber-600/0 group-hover:from-purple-900/10 group-hover:to-amber-600/10 transition-all duration-500" />

            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black mb-3 md:mb-4 leading-tight tracking-tight">
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Transform</span><br />Your Digital Presence?
              </h2>
              <p className="text-sm md:text-base mb-6 md:mb-8 max-w-2xl leading-relaxed text-blue-100">
                Partner with us to create digital experiences that drive real business results and set you apart from the competition.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
                <Link to="/contact" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto px-5 md:px-7 py-2.5 md:py-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-sm md:text-base rounded-xl hover:shadow-[0_0_40px_rgba(99,102,241,0.5)] transition-all transform hover:scale-105 duration-300">
                    Start Your Project
                  </button>
                </Link>
                <a href="tel:+12095085566" className="w-full sm:w-auto px-5 md:px-7 py-2.5 md:py-3 border-2 border-blue-400 hover:bg-blue-400/20 text-blue-300 font-bold text-sm md:text-base rounded-xl transition-all flex items-center justify-center gap-2">
                  <Phone className="h-4 md:h-5 w-4 md:w-5" />
                  Call Us
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-6 md:p-8 rounded-2xl md:rounded-3xl border bg-gradient-to-br from-indigo-900/30 to-purple-900/30 backdrop-blur-lg border-indigo-500/30"
          >
            <div className="space-y-4 md:space-y-6">
              <div>
                <h4 className="text-xs uppercase tracking-[0.15em] font-bold text-blue-300 mb-4">Email</h4>
                <a href="mailto:info@digidevbrand.com" className="flex items-center gap-3 group text-sm font-medium transition-colors text-blue-200 hover:text-blue-100">
                  <Mail className="h-5 w-5" />
                  info@digidevbrand.com
                </a>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-[0.15em] font-bold text-blue-300 mb-4">Website</h4>
                <a href="https://www.digidevbrand.com" className="flex items-center gap-3 group text-sm font-medium transition-colors text-blue-200 hover:text-blue-100">
                  <Globe className="h-5 w-5" />
                  digidevbrand.com
                </a>
              </div>
              <div className="pt-4 border-t border-indigo-500/30">
                <h4 className="text-xs uppercase tracking-[0.15em] font-bold text-blue-300 mb-4">Follow Us</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className={`h-10 w-10 rounded-lg flex items-center justify-center border transition-all bg-indigo-500/20 border-indigo-400/40 hover:border-indigo-300/60 text-blue-200 ${social.color}`}
                      title={social.label}
                    >
                      <social.icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Main Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 py-12 md:py-16 border-t border-b border-indigo-500/20">
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6 md:mb-8">
              <img src="/logo.png" alt="DigiDevBrand" className="h-48 md:h-64 w-auto object-contain" />
            </div>
            <p className="text-xs md:text-sm leading-relaxed mb-4 md:mb-6 text-blue-200">
              Premium digital solutions crafted for modern businesses. Full-stack development, branding & strategic marketing.
            </p>
            {/* Trust Indicators */}
            <div className="flex gap-3 md:gap-4">
              <div className="h-8 md:h-10 w-8 md:w-10 rounded-lg flex items-center justify-center bg-indigo-500/20 text-blue-300">
                <Shield className="h-4 md:h-5 w-4 md:w-5" />
              </div>
              <div className="h-8 md:h-10 w-8 md:w-10 rounded-lg flex items-center justify-center bg-indigo-500/20 text-blue-300">
                <CheckCircle className="h-4 md:h-5 w-4 md:w-5" />
              </div>
              <div className="h-8 md:h-10 w-8 md:w-10 rounded-lg flex items-center justify-center bg-indigo-500/20 text-blue-300">
                <Globe className="h-4 md:h-5 w-4 md:w-5" />
              </div>
            </div>
          </div>

          <div className="space-y-4 md:space-y-5">
            <h4 className="font-bold text-base md:text-lg text-blue-300">Company</h4>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm transition-all hover:translate-x-1 flex items-center gap-2 group text-amber-200 hover:text-amber-300">
                    <span className="h-1 w-1 rounded-full bg-amber-400 group-hover:scale-150 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <h4 className="font-bold text-lg text-amber-300">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services/web-development" className="text-sm transition-all hover:translate-x-1 flex items-center gap-2 group text-amber-200 hover:text-amber-300">
                  <span className="h-1 w-1 rounded-full bg-purple-400 group-hover:scale-150 transition-transform" />
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services/branding" className="text-sm transition-all hover:translate-x-1 flex items-center gap-2 group text-amber-200 hover:text-amber-300">
                  <span className="h-1 w-1 rounded-full bg-purple-400 group-hover:scale-150 transition-transform" />
                  Brand Identity
                </Link>
              </li>
              <li>
                <Link to="/services/seo-geo" className="text-sm transition-all hover:translate-x-1 flex items-center gap-2 group text-amber-200 hover:text-amber-300">
                  <span className="h-1 w-1 rounded-full bg-purple-400 group-hover:scale-150 transition-transform" />
                  SEO & Marketing
                </Link>
              </li>
              <li>
                <Link to="/services/ecommerce" className="text-sm transition-all hover:translate-x-1 flex items-center gap-2 group text-amber-200 hover:text-amber-300">
                  <span className="h-1 w-1 rounded-full bg-purple-400 group-hover:scale-150 transition-transform" />
                  E-Commerce
                </Link>
              </li>
              <li>
                <Link to="/services/app-development" className="text-sm transition-all hover:translate-x-1 flex items-center gap-2 group text-amber-200 hover:text-amber-300">
                  <span className="h-1 w-1 rounded-full bg-purple-400 group-hover:scale-150 transition-transform" />
                  App Development
                </Link>
              </li>
              <li>
                <Link to="/services/game-development" className="text-sm transition-all hover:translate-x-1 flex items-center gap-2 group text-amber-200 hover:text-amber-300">
                  <span className="h-1 w-1 rounded-full bg-purple-400 group-hover:scale-150 transition-transform" />
                  Game Development
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-5">
            <h4 className={`font-bold text-lg flex items-center gap-2 ${isDark ? 'text-white' : 'text-amber-400'}`}>
              <div className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-400 to-amber-400" />
              Contact
            </h4>
            <div className={`text-sm leading-relaxed space-y-4 ${isDark ? 'text-white/60' : 'text-amber-300'}`}>
              <div>
                <p className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-amber-400'}`}>Headquarters</p>
                <p className="text-xs leading-relaxed">
                  5900 Balcones Drive<br />
                  STE 100, Austin, TX 78731<br />
                  United States
                </p>
              </div>
              <a href="mailto:info@digidevbrand.com" className={`flex items-center gap-2 font-semibold transition-colors ${isDark ? 'text-amber-400 hover:text-amber-300' : 'text-amber-400 hover:text-amber-300'}`}>
                <Mail className="h-4 w-4" />
                info@digidevbrand.com
              </a>
              <a href="tel:+12095085566" className={`flex items-center gap-2 font-semibold transition-colors ${isDark ? 'text-amber-400 hover:text-amber-300' : 'text-amber-400 hover:text-amber-300'}`}>
                <Phone className="h-4 w-4" />
                +1 209 508 5566
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 md:pt-12 pb-6 md:pb-8">
          <div className={`flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 pt-6 md:pt-8 ${isDark ? 'border-t border-white/5 text-white/30' : 'border-t border-amber-400/30 text-amber-300'}`}>
            <p className="text-xs font-medium text-center md:text-left">
              &copy; {new Date().getFullYear()} <span className="text-amber-400">DigiDevBrand LLC</span>. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 pb-0">
              {['Privacy Policy', 'Terms of Service', 'Cookies'].map(item => (
                <a key={item} href="#" className={`text-xs transition-colors hover:text-amber-300 ${isDark ? 'text-white/30' : 'text-amber-300/80'}`}>
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
