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
  Twitter,
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
    { icon: Instagram, href: 'https://www.instagram.com/digi.devbrand', label: 'Instagram', color: 'hover:text-pink-500' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-700' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-sky-400' },
  ];

  return (
    <footer className={`relative overflow-hidden pt-24 pb-12 transition-colors duration-300 ${isDark ? 'bg-[#210a3d]' : 'bg-[#62109F]'} text-white`}>
      {/* Advanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full blur-[130px] opacity-15 animate-pulse bg-amber-300" />
        <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full blur-[130px] opacity-10 animate-pulse bg-amber-200" style={{ animationDelay: '0.5s' }} />
        <div className="absolute -bottom-40 left-1/2 w-80 h-80 rounded-full blur-[130px] opacity-15 bg-purple-200" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent" style={{
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(147, 51, 234, 0.05) 25%, rgba(147, 51, 234, 0.05) 26%, transparent 27%, transparent 74%, rgba(147, 51, 234, 0.05) 75%, rgba(147, 51, 234, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(147, 51, 234, 0.05) 25%, rgba(147, 51, 234, 0.05) 26%, transparent 27%, transparent 74%, rgba(147, 51, 234, 0.05) 75%, rgba(147, 51, 234, 0.05) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Hero CTA Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 relative p-12 rounded-3xl border overflow-hidden group bg-white/10 border-amber-400/40 hover:border-amber-400/60 transition-all"
          >
            {/* Inner glow on hover */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-900/0 to-amber-600/0 group-hover:from-purple-900/10 group-hover:to-amber-600/10 transition-all duration-500" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 leading-tight tracking-tight">
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-purple-500 to-amber-400">Transform</span><br />Your Digital Presence?
              </h2>
              <p className="text-base mb-8 max-w-2xl leading-relaxed text-amber-100">
                Partner with us to create digital experiences that drive real business results and set you apart from the competition.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <button className="px-7 py-3 bg-gradient-to-r from-purple-700 via-purple-600 to-amber-500 text-white font-bold rounded-xl hover:shadow-[0_0_40px_rgba(147,51,234,0.5)] transition-all transform hover:scale-105 duration-300">
                    Start Your Project
                  </button>
                </Link>
                <a href="tel:+12095085566" className="px-7 py-3 border-2 border-amber-400 hover:bg-amber-400/20 text-amber-400 font-bold rounded-xl transition-all flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call Us
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-8 rounded-3xl border bg-white/5 border-amber-400/30 backdrop-blur-lg"
          >
            <div className="space-y-6">
              <div>
                <h4 className="text-xs uppercase tracking-[0.15em] font-bold text-amber-300 mb-4">Email</h4>
                <a href="mailto:info@digidevbrand.com" className="flex items-center gap-3 group text-sm font-medium transition-colors text-amber-300 hover:text-amber-200">
                  <Mail className="h-5 w-5" />
                  info@digidevbrand.com
                </a>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-[0.15em] font-bold text-amber-300 mb-4">Website</h4>
                <a href="https://www.digidevbrand.com" className="flex items-center gap-3 group text-sm font-medium transition-colors text-amber-300 hover:text-amber-200">
                  <Globe className="h-5 w-5" />
                  digidevbrand.com
                </a>
              </div>
              <div className="pt-4 border-t border-amber-400/30">
                <h4 className="text-xs uppercase tracking-[0.15em] font-bold text-amber-300 mb-4">Follow Us</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className={`h-10 w-10 rounded-lg flex items-center justify-center border transition-all bg-amber-400/20 border-amber-400/40 hover:border-amber-300/60 text-amber-300 ${social.color}`}
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 border-t border-b border-amber-400/20">
          <div className="lg:col-span-1">
            <div className="flex items-center mb-8">
              <img src="/logo.png" alt="DigiDevBrand" className="h-64 w-auto object-contain" />
            </div>
            <p className="text-sm leading-relaxed mb-6 text-amber-200">
              Premium digital solutions crafted for modern businesses. Full-stack development, branding & strategic marketing.
            </p>
            {/* Trust Indicators */}
            <div className="flex gap-4">
              <div className="h-10 w-10 rounded-lg flex items-center justify-center bg-amber-400/20 text-amber-200">
                <Shield className="h-5 w-5" />
              </div>
              <div className="h-10 w-10 rounded-lg flex items-center justify-center bg-amber-400/20 text-amber-200">
                <CheckCircle className="h-5 w-5" />
              </div>
              <div className="h-10 w-10 rounded-lg flex items-center justify-center bg-amber-400/20 text-amber-200">
                <Globe className="h-5 w-5" />
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <h4 className="font-bold text-lg text-amber-300">Company</h4>
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
        <div className="pt-12">


          {/* <div className="bg-[#62109F] -mx-6 px-6 py-8 mb-8">
            <CountryMarquee />
          </div> */}

          <div className={`flex flex-col md:flex-row justify-between items-center gap-6 pt-8 ${isDark ? 'border-t border-white/5 text-white/30' : 'border-t border-amber-400/30 text-amber-300'}`}>
            <p className="text-xs font-medium">
              &copy; {new Date().getFullYear()} <span className="text-amber-400">DigiDevBrand LLC</span>. All rights reserved.
            </p>
            <div className="flex gap-6">
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
