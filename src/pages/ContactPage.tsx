import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  CheckCircle,
  Globe,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  MessageCircle,
} from 'lucide-react';
import { useApp } from '@/context/AppContext';

const ContactPage: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useApp();
  const isDark = theme === 'dark';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone & WhatsApp',
      value: '+1 209 508 5566',
      link: 'tel:+12095085566',
    },
    {
      icon: Send,
      title: 'Project Enquiry',
      value: 'sales@digidevbrand.com',
      link: 'mailto:sales@digidevbrand.com',
    },
    {
      icon: Mail,
      title: 'General Enquiry',
      value: 'info@digidevbrand.com',
      link: 'mailto:info@digidevbrand.com',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Mon - Fri: 9:00 AM - 6:00 PM EST',
      link: null,
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61566042842637', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/digi.devbrand', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <div className={`overflow-hidden ${isDark ? 'bg-[#1a1235]' : 'bg-white'}`}>
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-b from-violet-500/10 via-transparent to-transparent' : 'bg-gradient-to-b from-violet-100/50 via-transparent to-transparent'}`} />
          <div className={`absolute inset-0 ${isDark ? 'bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)]' : 'bg-[linear-gradient(rgba(139,92,246,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.08)_1px,transparent_1px)]'} bg-[size:40px_40px] md:bg-[size:50px_50px]`} />
        </div>
        <div className={`absolute top-20 left-1/4 w-64 md:w-96 h-64 md:h-96 ${isDark ? 'bg-violet-500/20' : 'bg-violet-300/30'} rounded-full blur-[100px] md:blur-[120px]`} />
        <div className={`absolute bottom-0 right-1/4 w-56 md:w-80 h-56 md:h-80 ${isDark ? 'bg-purple-500/15' : 'bg-purple-300/25'} rounded-full blur-[80px] md:blur-[100px]`} />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className={`inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full ${isDark ? 'bg-violet-500/10 border-violet-500/20 text-violet-400' : 'bg-violet-100 border-violet-200 text-violet-600'} border text-xs md:text-sm font-medium mb-4 md:mb-6`}>
              <MessageSquare className="h-3 md:h-4 w-3 md:w-4" />
              {t('contact.subtitle')}
            </span>
            <h1 className={`text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {t('contact.title')}
            </h1>
            <p className={`text-base md:text-xl leading-relaxed max-w-2xl mx-auto ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
              {t('contact.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-6 md:py-8 relative z-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 -mt-12 md:-mt-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`h-full p-6 rounded-2xl backdrop-blur-sm transition-all duration-300 ${isDark ? 'bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.05] hover:border-violet-500/30' : 'bg-white border border-gray-200 hover:bg-gray-50 hover:border-violet-300 shadow-xl shadow-gray-100/50'}`}>
                  <div className="text-center">
                    <div className={`h-14 w-14 rounded-xl flex items-center justify-center mx-auto mb-4 ${isDark ? 'bg-violet-500/10 border border-violet-500/20' : 'bg-violet-100 border border-violet-200'}`}>
                      <info.icon className={`h-7 w-7 ${isDark ? 'text-violet-400' : 'text-violet-600'}`} />
                    </div>
                    <h3 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{info.title}</h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className={`transition-colors ${isDark ? 'text-white/60 hover:text-violet-400' : 'text-gray-600 hover:text-violet-600'}`}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className={`text-sm ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact Buttons */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 justify-center">
            <a
              href="tel:+12095085566"
              className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-violet-500 hover:bg-violet-600 text-white font-medium text-sm md:text-base rounded-full transition-all inline-flex items-center justify-center gap-2"
            >
              <Phone className="h-4 md:h-5 w-4 md:w-5" />
              Call Us Now
            </a>
            <a
              href="https://wa.me/12095085566"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-green-500 hover:bg-green-600 text-white font-medium text-sm md:text-base rounded-full transition-all inline-flex items-center justify-center gap-2"
            >
              <MessageCircle className="h-4 md:h-5 w-4 md:w-5" />
              WhatsApp Us
            </a>
            <a
              href="mailto:sales@digidevbrand.com"
              className={`w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 font-medium text-sm md:text-base rounded-full transition-all inline-flex items-center justify-center gap-2 ${isDark ? 'bg-white/[0.05] border border-white/[0.1] hover:bg-white/[0.1] text-white' : 'bg-gray-100 border border-gray-200 hover:bg-gray-200 text-gray-900'}`}
            >
              <Mail className="h-4 md:h-5 w-4 md:w-5" />
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className={`p-8 md:p-10 rounded-2xl ${isDark ? 'bg-white/[0.02] border border-white/[0.06]' : 'bg-white border border-gray-200 shadow-xl shadow-gray-100/50'}`}>
                <h2 className={`text-2xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>Send Us a Message</h2>

                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-500/10 border border-green-500/20 text-green-400 rounded-xl flex items-center gap-3"
                  >
                    <CheckCircle className="h-5 w-5" />
                    Thank you! Your message has been sent successfully.
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-white/70' : 'text-gray-700'}`}>
                        {t('contact.name')} *
                      </label>
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className={`w-full px-4 py-3 rounded-xl transition-colors focus:outline-none ${isDark ? 'bg-white/[0.03] border border-white/[0.08] text-white placeholder:text-white/30 focus:border-violet-500/50' : 'bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-violet-500'}`}
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-white/70' : 'text-gray-700'}`}>
                        {t('contact.email')} *
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className={`w-full px-4 py-3 rounded-xl transition-colors focus:outline-none ${isDark ? 'bg-white/[0.03] border border-white/[0.08] text-white placeholder:text-white/30 focus:border-violet-500/50' : 'bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-violet-500'}`}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-white/70' : 'text-gray-700'}`}>
                        {t('contact.phone')}
                      </label>
                      <input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 234 567 8900"
                        className={`w-full px-4 py-3 rounded-xl transition-colors focus:outline-none ${isDark ? 'bg-white/[0.03] border border-white/[0.08] text-white placeholder:text-white/30 focus:border-violet-500/50' : 'bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-violet-500'}`}
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-white/70' : 'text-gray-700'}`}>
                        Subject *
                      </label>
                      <input
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="Project Inquiry"
                        className={`w-full px-4 py-3 rounded-xl transition-colors focus:outline-none ${isDark ? 'bg-white/[0.03] border border-white/[0.08] text-white placeholder:text-white/30 focus:border-violet-500/50' : 'bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-violet-500'}`}
                      />
                    </div>
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-white/70' : 'text-gray-700'}`}>
                      {t('contact.message')} *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your project..."
                      rows={5}
                      className={`w-full px-4 py-3 rounded-xl transition-colors focus:outline-none resize-none ${isDark ? 'bg-white/[0.03] border border-white/[0.08] text-white placeholder:text-white/30 focus:border-violet-500/50' : 'bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-violet-500'}`}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-violet-500 hover:bg-violet-600 disabled:bg-violet-500/50 text-white font-semibold rounded-xl transition-colors inline-flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin">⏳</span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        {t('contact.send')}
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Right Side Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Location Card */}
              <div className={`p-8 rounded-2xl ${isDark ? 'bg-gradient-to-br from-violet-500/10 to-purple-500/5 border border-violet-500/20' : 'bg-gradient-to-br from-violet-100 to-purple-50 border border-violet-200'}`}>
                <div className="flex items-start gap-4">
                  <div className={`h-12 w-12 rounded-xl flex items-center justify-center flex-shrink-0 ${isDark ? 'bg-violet-500/20' : 'bg-violet-200'}`}>
                    <MapPin className={`h-6 w-6 ${isDark ? 'text-violet-400' : 'text-violet-600'}`} />
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Our Location</h3>
                    <p className={isDark ? 'text-white/60' : 'text-gray-600'}>
                      Austin, TX, USA
                    </p>
                    <p className={`text-sm mt-1 ${isDark ? 'text-white/40' : 'text-gray-500'}`}>
                      Serving clients worldwide
                    </p>
                  </div>
                </div>
              </div>

              {/* Connect With Us */}
              <div className={`p-8 rounded-2xl ${isDark ? 'bg-white/[0.02] border border-white/[0.06]' : 'bg-white border border-gray-200 shadow-lg shadow-gray-100/50'}`}>
                <h3 className={`text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Connect With Us</h3>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className={`h-12 w-12 rounded-xl flex items-center justify-center transition-all duration-300 ${isDark ? 'bg-white/[0.05] border border-white/[0.08] hover:bg-violet-500/20 hover:border-violet-500/30' : 'bg-gray-100 border border-gray-200 hover:bg-violet-100 hover:border-violet-300'}`}
                      aria-label={social.label}
                    >
                      <social.icon className={`h-5 w-5 ${isDark ? 'text-white/70' : 'text-gray-600'}`} />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className={`rounded-2xl overflow-hidden border ${isDark ? 'border-white/[0.06]' : 'border-gray-200 shadow-lg shadow-gray-100/50'}`}>
                <div className={`aspect-video relative ${isDark ? 'bg-white/[0.02]' : 'bg-gray-100'}`}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.0444444444!2d-97.75!3d30.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDIxJzAwLjAiTiA5N8KwNDUnMDAuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: isDark ? 'invert(90%) hue-rotate(180deg)' : 'none' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  />
                </div>
              </div>

              {/* Working Hours */}
              <div className={`p-8 rounded-2xl ${isDark ? 'bg-white/[0.02] border border-white/[0.06]' : 'bg-white border border-gray-200 shadow-lg shadow-gray-100/50'}`}>
                <div className="flex items-start gap-4">
                  <div className={`h-12 w-12 rounded-xl flex items-center justify-center flex-shrink-0 ${isDark ? 'bg-violet-500/10 border border-violet-500/20' : 'bg-violet-100 border border-violet-200'}`}>
                    <Globe className={`h-6 w-6 ${isDark ? 'text-violet-400' : 'text-violet-600'}`} />
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Global Service</h3>
                    <p className={`text-sm ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                      We work with clients from USA, Canada, UAE, and beyond. No matter your timezone, we're here to help.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Hubs */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">Global Hubs</span></h2>
            <p className={`text-lg mt-4 ${isDark ? 'text-white/60' : 'text-gray-600'}`}>Strategic locations to serve you better, worldwide.</p>
          </div>
          <div className="grid grid-cols-1 gap-8 max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`p-10 rounded-[2.5rem] border transition-all duration-500 group ${isDark ? 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]' : 'bg-white border-gray-100 hover:shadow-2xl shadow-gray-100/50'}`}
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="h-16 w-16 rounded-2xl bg-violet-500 flex items-center justify-center shadow-lg shadow-violet-500/20">
                  <span className="text-2xl">🇺🇸</span>
                </div>
                <div>
                  <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>USA Headquarters</h3>
                  <p className="text-violet-500 font-medium">Strategic Operations</p>
                </div>
              </div>
              <p className={`text-lg leading-relaxed mb-6 ${isDark ? 'text-white/70' : 'text-gray-600'}`}>
                5900 Balcones Drive STE 100,<br />
                Austin, TX 78731, United States
              </p>
              <div className="flex items-center gap-2 text-violet-500 font-bold">
                <Phone className="h-5 w-5" />
                +1 209 508 5566
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-gradient-to-br from-violet-600 via-purple-600 to-violet-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">Ready to Get Started?</h2>
            <p className="text-xl text-white/70 mb-10">
              Our team is standing by to help bring your vision to life. Let's create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+12095085566">
                <button className="px-10 py-4 bg-white text-violet-600 font-semibold rounded-full hover:bg-white/90 transition-all inline-flex items-center gap-2 shadow-xl shadow-black/20">
                  <Phone className="h-5 w-5" />
                  Call Now
                </button>
              </a>
              <a href="mailto:sales@digidevbrand.com">
                <button className="px-10 py-4 border-2 border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-all inline-flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Email Us
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
