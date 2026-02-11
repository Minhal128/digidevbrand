import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { useApp } from '@/context/AppContext';

const ServicesPage: React.FC = () => {
  useTranslation();
  const { theme } = useApp();
  const isDark = theme === 'dark';
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const serviceImages = ['/service1.png', '/service2.jpeg', '/service3.jpeg'];

  // Auto-advance slider every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % serviceImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [serviceImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % serviceImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + serviceImages.length) % serviceImages.length);
  };

  const graphicPackages = [
    {
      name: 'Template Brochures Design',
      price: '$60',
      features: [
        'Template Base Design',
        'Up-to 3 Revisions',
        '72 Hours TAT',
        'All Files (PNG, JPG)',
        '100% Satisfaction Guarantee'
      ],
      popular: false,
    },
    {
      name: 'Basic Custom Brochures Design',
      price: '$80',
      features: [
        'Basic Custom Design',
        'Up-to 5 Revisions',
        '72 Hours TAT',
        'All Files (Ai, PNG, JPG, TIFF)',
        '100% Satisfaction Guarantee'
      ],
      popular: true,
    },
    {
      name: 'Custom Brochures Design',
      price: '$80',
      features: [
        'Custom Design',
        'Up-to 7 Revisions',
        '72 Hours TAT',
        'All Files (Ai, PNG, JPG, TIFF)',
        '100% Satisfaction Guarantee'
      ],
      popular: false,
    },
  ];

  const businessCardPackages = [
    {
      name: 'Template Card Design',
      price: '$60',
      features: [
        'Template Base Design',
        'Up-to 3 Revisions',
        '72 Hours TAT',
        'All Files (PNG, JPG)',
        '100% Satisfaction Guarantee'
      ],
      popular: false,
    },
    {
      name: 'Basic Custom Card Design',
      price: '$80',
      features: [
        'Basic Custom Design',
        'Up-to 5 Revisions',
        '72 Hours TAT',
        'All Files (Ai, PNG, JPG, TIFF)',
        '100% Satisfaction Guarantee'
      ],
      popular: true,
    },
    {
      name: 'Custom Card Design',
      price: '$80',
      features: [
        'Custom Design',
        'Up-to 7 Revisions',
        '72 Hours TAT',
        'All Files (Ai, PNG, JPG, TIFF)',
        '100% Satisfaction Guarantee'
      ],
      popular: false,
    },
  ];

  const letterheadPackages = [
    {
      name: 'Template Letterhead Design',
      price: '$60',
      features: [
        'Template Base Design',
        'Up-to 3 Revisions',
        '72 Hours TAT',
        'All Files (PNG, JPG)',
        '100% Satisfaction Guarantee'
      ],
      popular: false,
    },
    {
      name: 'Basic Custom Letterhead Design',
      price: '$80',
      features: [
        'Basic Custom Design',
        'Up-to 5 Revisions',
        '72 Hours TAT',
        'All Files (Ai, PNG, JPG, TIFF)',
        '100% Satisfaction Guarantee'
      ],
      popular: true,
    },
    {
      name: 'Custom Letterhead Design',
      price: '$80',
      features: [
        'Custom Design',
        'Up-to 7 Revisions',
        '72 Hours TAT',
        'All Files (Ai, PNG, JPG, TIFF)',
        '100% Satisfaction Guarantee'
      ],
      popular: false,
    },
  ];

  const logoPackages = [
    {
      name: 'BASIC LOGO DESIGN',
      price: '$60',
      features: [
        '3 Custom Logo Designs',
        'Professional Design',
        '3 Revisions',
        '48 TO 72 Hours TAT',
        'All Files (PNG, JPG)',
        '100% Satisfaction Guarantee',
        '100% Money Back Guarantee'
      ],
      popular: false,
    },
    {
      name: 'Mid-Tier Logo Package',
      price: '$90',
      features: [
        '6 Custom Logo Designs',
        'Professional Design',
        'Upto 6 Revisions',
        '48 TO 72 Hours TAT',
        'All Files (PNG, JPG)',
        '100% Satisfaction Guarantee',
        '100% Money Back Guarantee'
      ],
      popular: true,
    },
    {
      name: 'Elite Logo Design',
      price: '$120',
      features: [
        '9 Custom Logo Designs',
        'Professional Design',
        'Upto 9 Revisions',
        '48 TO 72 Hours TAT',
        'All Files (PNG, JPG)',
        '100% Satisfaction Guarantee',
        '100% Money Back Guarantee'
      ],
      popular: false,
    },
    {
      name: 'PREMIUM LOGO PACKAGE',
      price: '$600',
      features: [
        'UNLIMITED 3D Logo Design Concepts',
        'FREE Business Card',
        'Unlimited Revisions',
        '2 Stock Photos',
        '2 Banner Designs',
        '2 Stationary Design Sets',
        'FREE MS Word Letterhead',
        '48 TO 72 Hours TAT',
        'All Files (PNG, JPG)',
        '100% Satisfaction Guarantee'
      ],
      popular: false,
    },
  ];

  const webPackages = [
    {
      name: 'BASIC TIER ECOMMERCE WEBSITE',
      price: '$1250',
      features: [
        'Custom Home Page Design',
        'Multiple Website',
        '3 Stock Photos',
        'Up-to 100 Products',
        'Content Management System (CMS)',
        'Shopping Cart Integration',
        'Easy Product Search',
        'Payment Merchant Integration',
        'Hover Effects',
        'Social Media Integration',
        '1 Unique Banner Designs',
        '1 jQuery Slider Banner',
        'Dedicated designer & developer',
        'Unlimited Revisions',
        '100% Satisfaction Guarantee',
        '100% Unique Design Guarantee'
      ],
      popular: false,
    },
    {
      name: 'MID TIER ECOMMERCE WEBSITE',
      price: '$1450',
      features: [
        'Custom Home Page Design',
        'Multiple Page Website',
        '5 Stock Photos',
        '2-3 Stock Videos',
        'Up-to 300 Products',
        'Content Management System (CMS)',
        'Shopping Cart Integration',
        'Easy Product Search',
        'Payment Merchant Integration',
        'Hover Effects',
        'Social Media Integration',
        '3 Unique Banner Designs',
        '3 jQuery Slider Banner',
        'Dedicated designer & developer',
        'Unlimited Revisions',
        '100% Satisfaction Guarantee',
        '100% Unique Design Guarantee'
      ],
      popular: true,
    },
    {
      name: 'ELITE TIER ECOMMECE WEBSITE',
      price: '$1650',
      features: [
        'Highly Dynamic CUSTOM WEBSITE',
        'Custom Home Page Design',
        'Multiple Page Website',
        'Multiple Stock Photos',
        'Multiple Stock Videos',
        'Up-to 500 Products',
        'Content Management System (CMS)',
        'Shopping Cart Integration',
        'Easy Product Search',
        'Payment Merchant Integration',
        'Hover Effects',
        'Social Media Integration',
        '5 Unique Banner Designs',
        '5 jQuery Slider Banner',
        'Social Media Integration',
        'Dedicated designer & developer',
        'Unlimited Revisions',
        '100% Satisfaction Guarantee',
        '100% Unique Design Guarantee'
      ],
      popular: false,
    },
  ];



  const faqs = [
    {
      question: 'How long does it take to build a website?',
      answer: 'Project timelines vary based on complexity. A basic website typically takes 1-2 weeks, while complex projects may take 4-8 weeks. We provide detailed timelines during our initial consultation.',
    },
    {
      question: 'Do you offer maintenance services?',
      answer: 'Yes, we offer comprehensive maintenance packages including security updates, content changes, performance optimization, and 24/7 technical support.',
    },
    {
      question: 'What is your payment process?',
      answer: 'We typically require a 50% deposit to begin work, with the remaining 50% due upon project completion. We accept major credit cards, bank transfers, and PayPal.',
    },
    {
      question: 'Can you help with an existing website?',
      answer: 'Absolutely! We can redesign, optimize, or add new features to your existing website. We start with a thorough audit to understand your current setup and goals.',
    },
    {
      question: 'Do you provide content writing services?',
      answer: 'Yes, our team includes professional content writers who can create compelling copy for your website, blog posts, and marketing materials.',
    },
  ];

  return (
    <div className={`overflow-x-hidden ${isDark ? 'bg-[#0a0a0f]' : 'bg-white'}`}>
      {/* Hero Section with Full-Width Image Slider */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Full-Width Image Slider Background */}
        <div className="absolute inset-0 w-full h-full">
          <motion.div
            key={currentSlide}
            className="relative w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              backgroundImage: `url('${serviceImages[currentSlide]}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group"
        >
          <ChevronLeft className="h-6 w-6 md:h-8 md:w-8 group-hover:scale-110 transition-transform" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group"
        >
          <ChevronRight className="h-6 w-6 md:h-8 md:w-8 group-hover:scale-110 transition-transform" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {serviceImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white/40 hover:bg-white/60'
                }`}
            />
          ))}
        </div>
      </section>



      {/* Logo Design Packages */}
      <section className="py-24 relative bg-[#0d0d1a]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(214,177,102,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(214,177,102,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-medium text-sm uppercase tracking-widest text-[#D6B166]">Creative Solutions</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4 text-white">Logo Design <span className="text-[#D6B166]">Packages</span></h2>
            <p className="max-w-2xl mx-auto text-white/50">
              Professional logo designs that represent your brand identity with creativity and precision.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 pt-10">
            {logoPackages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative group ${pkg.popular ? 'lg:-mt-6 lg:mb-6' : ''}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <span className="px-6 py-2 bg-[#D6B166] text-[#1a1440] text-sm font-bold rounded-full shadow-lg whitespace-nowrap">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className={`relative h-full rounded-2xl ${pkg.popular ? 'border-2 border-[#D6B166]' : 'border border-[#D6B166]/20'}`}>
                  {!pkg.popular && (
                    <div className="absolute -top-7 left-1/2 -translate-x-1/2 z-10">
                      <div className="w-14 h-14 rounded-full border-2 border-[#3d5a80] bg-[#1a1440] flex items-center justify-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5e9ed0" strokeWidth="1.5">
                          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                      </div>
                    </div>
                  )}

                  <div className={`relative p-6 pt-10 rounded-t-2xl`} style={{
                    background: 'linear-gradient(135deg, #2d2470 0%, #1a1440 50%, #0d2942 100%)'
                  }}>
                    <div className="flex justify-center mb-4">
                      <span className="px-6 py-2 rounded-full border border-[#D6B166]/50 text-white text-sm font-semibold uppercase tracking-wider">
                        {pkg.name}
                      </span>
                    </div>

                    <div className="text-center mb-4">
                      <span className="text-5xl md:text-6xl font-bold text-[#D6B166]">{pkg.price}</span>
                    </div>

                    <div className="text-center">
                      <span className="text-[#D6B166] text-sm font-medium">Plan Includes:</span>
                    </div>
                  </div>

                  <div className="bg-[#1a1440] p-6 rounded-b-2xl">
                    <ul className="space-y-3">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-white/80">
                          <div className="w-5 h-5 rounded-full bg-[#D6B166]/20 flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="h-3.5 w-3.5 text-[#D6B166]" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link to="/contact" className="block mt-6">
                      <button className={`w-full py-4 rounded-lg font-bold transition-all duration-300 ${pkg.popular
                        ? 'bg-[#D6B166] text-[#1a1440] hover:bg-[#E6C882] hover:shadow-lg hover:shadow-[#D6B166]/30'
                        : 'bg-transparent border border-[#D6B166]/50 text-white hover:bg-[#D6B166] hover:text-[#1a1440]'
                        }`}>
                        Get Started
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Web Development Packages */}
      <section className="py-24 relative bg-[#0d0d1a]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(214,177,102,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(214,177,102,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-medium text-sm uppercase tracking-widest text-[#D6B166]">Digital Solutions</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4 text-white">Web Development <span className="text-[#D6B166]">Packages</span></h2>
            <p className="max-w-2xl mx-auto text-white/50">
              Complete ecommerce solutions designed to drive sales and enhance your online presence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 pt-10">
            {webPackages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative group ${pkg.popular ? 'lg:-mt-6 lg:mb-6' : ''}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <span className="px-6 py-2 bg-[#D6B166] text-[#1a1440] text-sm font-bold rounded-full shadow-lg whitespace-nowrap">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className={`relative h-full rounded-2xl ${pkg.popular ? 'border-2 border-[#D6B166]' : 'border border-[#D6B166]/20'}`}>
                  {!pkg.popular && (
                    <div className="absolute -top-7 left-1/2 -translate-x-1/2 z-10">
                      <div className="w-14 h-14 rounded-full border-2 border-[#3d5a80] bg-[#1a1440] flex items-center justify-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5e9ed0" strokeWidth="1.5">
                          <circle cx="12" cy="12" r="3" />
                          <path d="M12 1v6m0 6v6" />
                          <path d="m21 12-6-3-6 3-6-3" />
                        </svg>
                      </div>
                    </div>
                  )}

                  <div className={`relative p-6 pt-10 rounded-t-2xl`} style={{
                    background: 'linear-gradient(135deg, #2d2470 0%, #1a1440 50%, #0d2942 100%)'
                  }}>
                    <div className="flex justify-center mb-4">
                      <span className="px-4 py-2 rounded-full border border-[#D6B166]/50 text-white text-xs font-semibold uppercase tracking-wider text-center">
                        {pkg.name}
                      </span>
                    </div>

                    <div className="text-center mb-4">
                      <span className="text-4xl md:text-5xl font-bold text-[#D6B166]">{pkg.price}</span>
                    </div>

                    <div className="text-center">
                      <span className="text-[#D6B166] text-sm font-medium">Plan Includes:</span>
                    </div>
                  </div>

                  <div className="bg-[#1a1440] p-6 rounded-b-2xl">
                    <ul className="space-y-2 max-h-80 overflow-y-auto">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-xs text-white/80">
                          <div className="w-4 h-4 rounded-full bg-[#D6B166]/20 flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="h-3 w-3 text-[#D6B166]" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link to="/contact" className="block mt-6">
                      <button className={`w-full py-4 rounded-lg font-bold transition-all duration-300 ${pkg.popular
                        ? 'bg-[#D6B166] text-[#1a1440] hover:bg-[#E6C882] hover:shadow-lg hover:shadow-[#D6B166]/30'
                        : 'bg-transparent border border-[#D6B166]/50 text-white hover:bg-[#D6B166] hover:text-[#1a1440]'
                        }`}>
                        Get Started
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Graphic Design Packages */}
      <section className="py-24 relative bg-[#0d0d1a]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(214,177,102,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(214,177,102,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-medium text-sm uppercase tracking-widest text-[#D6B166]">Creative Design</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4 text-white">Graphic Design <span className="text-[#D6B166]">Packages</span></h2>
            <p className="max-w-2xl mx-auto text-white/50">
              Professional brochure designs that communicate your message with visual impact and clarity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 pt-10">
            {graphicPackages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative group ${pkg.popular ? 'lg:-mt-6 lg:mb-6' : ''}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <span className="px-6 py-2 bg-[#D6B166] text-[#1a1440] text-sm font-bold rounded-full shadow-lg whitespace-nowrap">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className={`relative h-full rounded-2xl ${pkg.popular ? 'border-2 border-[#D6B166]' : 'border border-[#D6B166]/20'}`}>
                  {!pkg.popular && (
                    <div className="absolute -top-7 left-1/2 -translate-x-1/2 z-10">
                      <div className="w-14 h-14 rounded-full border-2 border-[#3d5a80] bg-[#1a1440] flex items-center justify-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5e9ed0" strokeWidth="1.5">
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                          <path d="M9 9h6v6H9z" />
                        </svg>
                      </div>
                    </div>
                  )}

                  <div className={`relative p-6 pt-10 rounded-t-2xl`} style={{
                    background: 'linear-gradient(135deg, #2d2470 0%, #1a1440 50%, #0d2942 100%)'
                  }}>
                    <div className="flex justify-center mb-4">
                      <span className="px-4 py-2 rounded-full border border-[#D6B166]/50 text-white text-sm font-semibold uppercase tracking-wider text-center">
                        {pkg.name}
                      </span>
                    </div>

                    <div className="text-center mb-4">
                      <span className="text-5xl md:text-6xl font-bold text-[#D6B166]">{pkg.price}</span>
                    </div>

                    <div className="text-center">
                      <span className="text-[#D6B166] text-sm font-medium">Plan Includes:</span>
                    </div>
                  </div>

                  <div className="bg-[#1a1440] p-6 rounded-b-2xl">
                    <ul className="space-y-3">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-white/80">
                          <div className="w-5 h-5 rounded-full bg-[#D6B166]/20 flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="h-3.5 w-3.5 text-[#D6B166]" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link to="/contact" className="block mt-6">
                      <button className={`w-full py-4 rounded-lg font-bold transition-all duration-300 ${pkg.popular
                        ? 'bg-[#D6B166] text-[#1a1440] hover:bg-[#E6C882] hover:shadow-lg hover:shadow-[#D6B166]/30'
                        : 'bg-transparent border border-[#D6B166]/50 text-white hover:bg-[#D6B166] hover:text-[#1a1440]'
                        }`}>
                        Get Started
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Card Design Packages */}
      <section className="py-24 relative bg-[#0d0d1a]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(214,177,102,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(214,177,102,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-medium text-sm uppercase tracking-widest text-[#D6B166]">Professional Identity</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4 text-white">Business Card <span className="text-[#D6B166]">Packages</span></h2>
            <p className="max-w-2xl mx-auto text-white/50">
              Make a lasting first impression with professionally designed business cards that reflect your brand.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 pt-10">
            {businessCardPackages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative group ${pkg.popular ? 'lg:-mt-6 lg:mb-6' : ''}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <span className="px-6 py-2 bg-[#D6B166] text-[#1a1440] text-sm font-bold rounded-full shadow-lg whitespace-nowrap">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className={`relative h-full rounded-2xl ${pkg.popular ? 'border-2 border-[#D6B166]' : 'border border-[#D6B166]/20'}`}>
                  {!pkg.popular && (
                    <div className="absolute -top-7 left-1/2 -translate-x-1/2 z-10">
                      <div className="w-14 h-14 rounded-full border-2 border-[#3d5a80] bg-[#1a1440] flex items-center justify-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5e9ed0" strokeWidth="1.5">
                          <rect x="2" y="6" width="20" height="12" rx="2" />
                          <path d="M6 10h4" />
                          <path d="M6 14h2" />
                        </svg>
                      </div>
                    </div>
                  )}

                  <div className={`relative p-6 pt-10 rounded-t-2xl`} style={{
                    background: 'linear-gradient(135deg, #2d2470 0%, #1a1440 50%, #0d2942 100%)'
                  }}>
                    <div className="flex justify-center mb-4">
                      <span className="px-4 py-2 rounded-full border border-[#D6B166]/50 text-white text-sm font-semibold uppercase tracking-wider text-center">
                        {pkg.name}
                      </span>
                    </div>

                    <div className="text-center mb-4">
                      <span className="text-5xl md:text-6xl font-bold text-[#D6B166]">{pkg.price}</span>
                    </div>

                    <div className="text-center">
                      <span className="text-[#D6B166] text-sm font-medium">Plan Includes:</span>
                    </div>
                  </div>

                  <div className="bg-[#1a1440] p-6 rounded-b-2xl">
                    <ul className="space-y-3">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-white/80">
                          <div className="w-5 h-5 rounded-full bg-[#D6B166]/20 flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="h-3.5 w-3.5 text-[#D6B166]" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link to="/contact" className="block mt-6">
                      <button className={`w-full py-4 rounded-lg font-bold transition-all duration-300 ${pkg.popular
                        ? 'bg-[#D6B166] text-[#1a1440] hover:bg-[#E6C882] hover:shadow-lg hover:shadow-[#D6B166]/30'
                        : 'bg-transparent border border-[#D6B166]/50 text-white hover:bg-[#D6B166] hover:text-[#1a1440]'
                        }`}>
                        Get Started
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Letterhead Design Packages */}
      <section className="py-24 relative bg-[#0d0d1a]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(214,177,102,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(214,177,102,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-medium text-sm uppercase tracking-widest text-[#D6B166]">Corporate Stationery</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4 text-white">Letterhead Design <span className="text-[#D6B166]">Packages</span></h2>
            <p className="max-w-2xl mx-auto text-white/50">
              Professional letterhead designs that enhance your corporate communications and brand consistency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 pt-10">
            {letterheadPackages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative group ${pkg.popular ? 'lg:-mt-6 lg:mb-6' : ''}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <span className="px-6 py-2 bg-[#D6B166] text-[#1a1440] text-sm font-bold rounded-full shadow-lg whitespace-nowrap">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className={`relative h-full rounded-2xl ${pkg.popular ? 'border-2 border-[#D6B166]' : 'border border-[#D6B166]/20'}`}>
                  {!pkg.popular && (
                    <div className="absolute -top-7 left-1/2 -translate-x-1/2 z-10">
                      <div className="w-14 h-14 rounded-full border-2 border-[#3d5a80] bg-[#1a1440] flex items-center justify-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5e9ed0" strokeWidth="1.5">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <polyline points="14,2 14,8 20,8" />
                          <line x1="16" y1="13" x2="8" y2="13" />
                          <line x1="16" y1="17" x2="8" y2="17" />
                        </svg>
                      </div>
                    </div>
                  )}

                  <div className={`relative p-6 pt-10 rounded-t-2xl`} style={{
                    background: 'linear-gradient(135deg, #2d2470 0%, #1a1440 50%, #0d2942 100%)'
                  }}>
                    <div className="flex justify-center mb-4">
                      <span className="px-4 py-2 rounded-full border border-[#D6B166]/50 text-white text-sm font-semibold uppercase tracking-wider text-center">
                        {pkg.name}
                      </span>
                    </div>

                    <div className="text-center mb-4">
                      <span className="text-5xl md:text-6xl font-bold text-[#D6B166]">{pkg.price}</span>
                    </div>

                    <div className="text-center">
                      <span className="text-[#D6B166] text-sm font-medium">Plan Includes:</span>
                    </div>
                  </div>

                  <div className="bg-[#1a1440] p-6 rounded-b-2xl">
                    <ul className="space-y-3">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-white/80">
                          <div className="w-5 h-5 rounded-full bg-[#D6B166]/20 flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="h-3.5 w-3.5 text-[#D6B166]" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link to="/contact" className="block mt-6">
                      <button className={`w-full py-4 rounded-lg font-bold transition-all duration-300 ${pkg.popular
                        ? 'bg-[#D6B166] text-[#1a1440] hover:bg-[#E6C882] hover:shadow-lg hover:shadow-[#D6B166]/30'
                        : 'bg-transparent border border-[#D6B166]/50 text-white hover:bg-[#D6B166] hover:text-[#1a1440]'
                        }`}>
                        Get Started
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects Portfolio */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className={`font-medium text-sm uppercase tracking-widest ${isDark ? 'text-violet-400' : 'text-violet-600'}`}>Our Work</span>
            <h2 className={`text-4xl md:text-5xl font-bold mt-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Recent Projects</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'E-Commerce Platform', category: 'Web Development', image: '/1.jpeg' },
              { title: 'Brand Identity Design', category: 'Branding', image: '/2.jpeg' },
              { title: 'Mobile App UI', category: 'UI/UX Design', image: '/3.jpeg' },
              { title: 'Corporate Website', category: 'Web Development', image: '/4.jpeg' },
              { title: 'Social Media Campaign', category: 'Marketing', image: '/5.jpeg' },
              { title: 'Logo Collection', category: 'Design', image: '/6.jpeg' },
              { title: 'Business Cards Design', category: 'Print Design', image: '/7.jpeg' },
              { title: 'Letterhead Design', category: 'Corporate Identity', image: '/8.jpeg' },
              { title: 'Graphic Design Portfolio', category: 'Creative Design', image: '/9.jpeg' },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer relative"
              >
                <div className={`relative overflow-hidden rounded-2xl border ${isDark ? 'border-white/[0.06]' : 'border-gray-200 shadow-lg shadow-gray-100/50'}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/50 to-transparent' : 'bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent'} opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end`}>
                    <div className="p-6 text-white">
                      <span className="text-sm text-violet-400">{project.category}</span>
                      <h3 className="text-xl font-bold">{project.title}</h3>
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Logo Portfolio */}
      <section className={`py-24 relative ${isDark ? 'bg-[#0d0d1a]' : 'bg-gray-50'}`}>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(214,177,102,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(214,177,102,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-medium text-sm uppercase tracking-widest text-[#D6B166]">Our Identity Work</span>
            <h2 className={`text-4xl md:text-5xl font-bold mt-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Logo <span className="text-[#D6B166]">Portfolio</span></h2>
            <p className={`max-w-2xl mx-auto mt-4 ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
              Explore our collection of professionally crafted logos that define brand excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num, index) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white p-8 aspect-square flex items-center justify-center border border-white/10 hover:border-[#D6B166]/30 transition-all duration-300 shadow-xl shadow-black/5 group-hover:shadow-[#D6B166]/10">
                  <img
                    src={`/LOGO/${num}.jpg`}
                    alt={`Logo ${num}`}
                    className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#D6B166]/0 group-hover:bg-[#D6B166]/5 transition-colors duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`py-24 ${isDark ? 'bg-gradient-to-b from-transparent via-violet-500/5 to-transparent' : 'bg-gradient-to-b from-transparent via-violet-50 to-transparent'}`}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className={`font-medium text-sm uppercase tracking-widest ${isDark ? 'text-violet-400' : 'text-violet-600'}`}>Got Questions?</span>
            <h2 className={`text-4xl md:text-5xl font-bold mt-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Frequently Asked Questions</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className={`w-full p-6 rounded-xl transition-all text-left ${isDark ? 'bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04]' : 'bg-white border border-gray-200 hover:bg-gray-50 shadow-lg shadow-gray-100/50'}`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className={`font-semibold pr-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{faq.question}</h3>
                    <ChevronDown className={`h-5 w-5 transition-transform flex-shrink-0 ${isDark ? 'text-violet-400' : 'text-violet-600'} ${openFaq === index ? 'rotate-180' : ''}`} />
                  </div>
                  {openFaq === index && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className={`mt-4 ${isDark ? 'text-white/60' : 'text-gray-600'}`}
                    >
                      {faq.answer}
                    </motion.p>
                  )}
                </button>
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
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">Ready to Start Your Project?</h2>
            <p className="text-xl text-white/70 mb-10">
              Let's discuss your requirements and create a custom solution that drives results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <button className="px-10 py-4 bg-white text-violet-600 font-semibold rounded-full hover:bg-white/90 transition-all inline-flex items-center gap-2 shadow-xl shadow-black/20">
                  Get a Free Quote
                  <ArrowRight className="h-5 w-5" />
                </button>
              </Link>
              <a href="tel:+12095085566">
                <button className="px-10 py-4 border-2 border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-all">
                  Call: +1 209 508 5566
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;