import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useApp } from '@/context/AppContext';
import {
  ArrowRight,
  Palette,
  Code,
  TrendingUp,
  Zap,
  Target,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

// Swiper imports for Blog section
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// MUI Timeline imports
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';

// Shuffle component for animated text
import Shuffle from '@/components/ui/Shuffle';

import LatestProjects from '@/components/LatestProjects';

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useApp();
  const isDark = theme === 'dark';



  const testimonials = [
    {
      name: 'Mark Crawl',
      role: 'CEO, TechStart Inc.',
      content: 'DigiDevBrand developed a website for my business that functions flawlessly. The graphics are incredibly interactive. I am truly impressed with their work and dedication.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      rating: 5,
    },
    {
      name: 'Joshua Nathan',
      role: 'Founder, AppVenture',
      content: 'The team was exceptionally professional and dedicated. They developed a mobile application enriched with top-notch features. The app runs perfectly on all devices.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      rating: 5,
    },
    {
      name: 'Maria K. Brown',
      role: 'Director, BrandCo',
      content: 'I am impressed with their work and can confidently say they are website development and maintenance experts. They continue to provide excellent maintenance services.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
      rating: 5,
    },
  ];

  const blogPosts = [
    {
      title: 'Architecting for Resilience: Our 2025 Security Protocol',
      excerpt: 'In an era of AI-driven threats, we implement a multi-layered defense system that protects your data and your brand reputation.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=500&fit=crop',
      category: 'Cyber Security',
      date: 'Dec 27, 2024',
    },
    {
      title: 'The Narrative Shift: Why Content is Your Strongest Salesman',
      excerpt: 'Static feature lists are dead. We build storytelling ecosystems that convert visitors into loyal brand advocates.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop',
      category: 'Marketing',
      date: 'Dec 25, 2024',
    },
    {
      title: 'GEO: The Evolution of Search in the Age of Generative AI',
      excerpt: 'Beyond keywords: how we optimize your digital presence for theLLMs and AI agents that now drive consumer discovery.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
      category: 'SEO/GEO',
      date: 'Dec 22, 2024',
    },
    {
      title: 'Full-Stack Synergy: The Technical Edge of Integrated Design',
      excerpt: 'When design, dev, and strategy talk to each other, the result is a visceral experience that scales effortlessly.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
      category: 'Development',
      date: 'Dec 19, 2024',
    },
    {
      title: 'Visceral Brand Identities for the Digital-Native Era',
      excerpt: 'We craft visual languages that aren’t just seen, but felt. Discover our process for building meaningful brand connections.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop',
      category: 'Branding',
      date: 'Dec 15, 2024',
    },
    {
      title: 'Scale Without Friction: Enterprise E-Commerce Frameworks',
      excerpt: 'Building Shopify and custom headless solutions that eliminate the bottlenecks to global market dominance.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop',
      category: 'E-Commerce',
      date: 'Dec 10, 2024',
    },
  ];

  const processSteps = [
    { icon: Target, title: 'Discovery', description: 'We dive deep into your business goals and target audience.' },
    { icon: Palette, title: 'Design', description: 'Our creative team crafts stunning, user-centric designs.' },
    { icon: Code, title: 'Development', description: 'We build robust, scalable solutions using latest tech.' },
    { icon: TrendingUp, title: 'Launch & Grow', description: 'We deploy, optimize, and help you scale success.' },
  ];

  return (
    <div className={`overflow-hidden ${isDark ? 'bg-[#110B2E]' : 'bg-white'}`}>
      {/* Hero Section with Slider */}
      <section className="relative h-[calc(100vh-7rem)] overflow-hidden pt-28">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center top' }}
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay for ambient feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-[#110B2E]/30 to-[#110B2E]/60 z-10" />
      </section>

      {/* Trust Bar / Service Boxes */}
      <section className={`py-12 md:py-20 ${isDark ? 'bg-[#110B2E]' : 'bg-[#f0f0f5]'}`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4"
            >
              {[
                { title: "Graphic Designing", subtitle: "Creative Visuals" },
                { title: "Web Development", subtitle: "Modern Tech" },
                { title: "SEO", subtitle: "Rank Higher" },
                { title: "App Development", subtitle: "iOS & Android" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="relative group rounded-3xl h-48 overflow-hidden transition-all duration-500 hover:-translate-y-3"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: [0.8, 1.07, 0.97, 1.03, 1] }}
                  animate={{
                    y: [0, -15, 0],
                    scale: [1, 1.08, 1],
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    delay: index * 0.15,
                    duration: 0.8,
                    ease: "easeOut",
                    y: {
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2
                    },
                    scale: {
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2
                    }
                  }}
                >
                  {/* Animated Glow Behind Box */}
                  <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute -inset-10 bg-[#4B2F7D] blur-[80px] animate-pulse opacity-60" />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#4B2F7D] to-[#281E5A] blur-[40px] opacity-40" />
                  </div>

                  {/* Shiny Border Effect */}
                  <div className="absolute -inset-[2px] rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 z-10 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D6B166] to-transparent w-[200%] -translate-x-full group-hover:animate-[shimmer_2s_infinite] opacity-50" />
                  </div>

                  {/* Main Card Content */}
                  <div
                    className={`relative z-20 h-full w-full rounded-[22px] p-6 flex flex-col justify-center items-center text-center border-2 transition-all duration-500 overflow-hidden ${isDark
                      ? 'bg-[#1a1040]/90 backdrop-blur-xl border-[#D6B166]/30 group-hover:border-[#D6B166]/70'
                      : 'bg-white border-[#4B2F7D]/10 group-hover:border-[#4B2F7D]/30'
                      }`}
                    style={{
                      boxShadow: isDark
                        ? '0 10px 40px -10px rgba(0,0,0,0.6), 0 0 30px rgba(214,177,102,0.08), inset 0 1px 0 rgba(214,177,102,0.1)'
                        : '0 15px 35px -5px rgba(75, 47, 125, 0.1), inset 0 0 15px rgba(75, 47, 125, 0.02)',
                    }}
                  >
                    {/* Interactive Background Elements */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#D6B166]/10 rounded-full blur-2xl -translate-y-12 translate-x-12 group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-700" />
                    <div className="absolute bottom-0 left-0 w-20 h-20 bg-[#D6B166]/8 rounded-full blur-xl translate-y-10 -translate-x-10 group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-700 delay-100" />

                    <div className="relative z-30">
                      <motion.div
                        className={`mb-3 md:mb-4 inline-flex p-3 md:p-4 rounded-xl md:rounded-2xl ${isDark ? 'bg-gradient-to-br from-[#D6B166]/20 to-[#4B2F7D]/30 ring-1 ring-[#D6B166]/20' : 'bg-[#4B2F7D]/5'}`}
                        whileHover={{ rotate: 15, scale: 1.1 }}
                      >
                        {index === 0 && <Palette className={`h-6 md:h-7 w-6 md:w-7 ${isDark ? 'text-[#F5C542]' : 'text-[#4B2F7D]'}`} />}
                        {index === 1 && <Code className={`h-6 md:h-7 w-6 md:w-7 ${isDark ? 'text-[#F5C542]' : 'text-[#4B2F7D]'}`} />}
                        {index === 2 && <TrendingUp className={`h-6 md:h-7 w-6 md:w-7 ${isDark ? 'text-[#F5C542]' : 'text-[#4B2F7D]'}`} />}
                        {index === 3 && <Zap className={`h-6 md:h-7 w-6 md:w-7 ${isDark ? 'text-[#F5C542]' : 'text-[#4B2F7D]'}`} />}
                      </motion.div>
                      <h3 className={`text-base md:text-xl font-bold mb-1 md:mb-2 leading-tight group-hover:text-[#F5C542] transition-colors ${isDark ? 'text-white' : 'text-[#4B2F7D]'}`}>{item.title}</h3>
                      <p className={`text-xs md:text-sm font-medium tracking-wide uppercase transition-colors ${isDark ? 'text-[#D6B166]/80 group-hover:text-[#F5C542]' : 'text-[#4B2F7D]/50 group-hover:text-[#4B2F7D]/80'}`}>{item.subtitle}</p>
                    </div>

                    {/* Hover Decorative Line */}
                    <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-0 group-hover:w-1/2 transition-all duration-500 rounded-full ${isDark ? 'bg-gradient-to-r from-transparent via-[#D6B166] to-transparent' : 'bg-gradient-to-r from-transparent via-[#4B2F7D] to-transparent'}`} />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Latest Projects Section */}
      <LatestProjects />

      {/* Process Section - Modern MUI Timeline - Royal Purple & Gold */}
      <section className={`py-16 md:py-28 relative overflow-hidden ${isDark ? 'bg-gradient-to-b from-[#110B2E] via-[#1a1040] to-[#110B2E]' : 'bg-gradient-to-b from-[#f0f0f5] via-white to-[#f0f0f5]'}`}>
        {/* Background decorative elements */}
        <div className={`absolute top-0 left-1/4 w-64 md:w-96 h-64 md:h-96 rounded-full blur-3xl ${isDark ? 'bg-[#D6B166]/10' : 'bg-[#D6B166]/20'}`} />
        <div className={`absolute bottom-0 right-1/4 w-64 md:w-96 h-64 md:h-96 rounded-full blur-3xl ${isDark ? 'bg-[#E6C882]/5' : 'bg-[#E6C882]/15'}`} />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 ${isDark
              ? 'bg-[#D6B166]/20 border border-[#D6B166]/30 text-[#E6C882]'
              : 'bg-[#4B2F7D]/10 border border-[#4B2F7D]/20 text-[#4B2F7D]'
              }`}>
              <Zap className="h-4 w-4" />
              How We Work
            </span>
            <h2 className={`text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 ${isDark ? 'text-white' : 'text-[#281E5A]'}`}>Our Process</h2>
            <p className={`max-w-2xl mx-auto text-base md:text-lg ${isDark ? 'text-gray-300' : 'text-[#462878]/70'}`}>
              A streamlined approach to delivering exceptional results
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <Timeline position="alternate">
              {processSteps.map((step, index) => (
                <TimelineItem key={step.title}>
                  <TimelineOppositeContent
                    sx={{ m: 'auto 0', flex: 0.3 }}
                    align={index % 2 === 0 ? 'right' : 'left'}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 }}
                    >
                      <span className={`inline-flex items-center justify-center h-12 w-12 rounded-xl text-lg font-bold ${isDark
                        ? 'bg-gradient-to-br from-[#D6B166] to-[#A0823C] text-[#281E5A] shadow-lg shadow-[#D6B166]/30'
                        : 'bg-gradient-to-br from-[#D6B166] to-[#E6C882] text-[#281E5A] shadow-lg shadow-[#D6B166]/25'
                        }`}>
                        {index + 1}
                      </span>
                    </motion.div>
                  </TimelineOppositeContent>

                  <TimelineSeparator>
                    <TimelineConnector sx={{
                      background: isDark
                        ? 'linear-gradient(180deg, rgba(214,177,102,0.3) 0%, rgba(230,200,130,0.5) 100%)'
                        : 'linear-gradient(180deg, rgba(75,47,125,0.2) 0%, rgba(214,177,102,0.4) 100%)',
                      width: '3px'
                    }} />
                    <TimelineDot
                      sx={{
                        background: isDark
                          ? 'linear-gradient(135deg, #D6B166 0%, #E6C882 100%)'
                          : 'linear-gradient(135deg, #4B2F7D 0%, #D6B166 100%)',
                        boxShadow: isDark
                          ? '0 0 20px rgba(214,177,102,0.5), 0 0 40px rgba(214,177,102,0.2)'
                          : '0 0 20px rgba(75,47,125,0.4), 0 0 40px rgba(75,47,125,0.15)',
                        padding: '16px',
                        border: 'none',
                      }}
                    >
                      <step.icon className={`h-7 w-7 ${isDark ? 'text-[#281E5A]' : 'text-white'}`} />
                    </TimelineDot>
                    <TimelineConnector sx={{
                      background: isDark
                        ? 'linear-gradient(180deg, rgba(230,200,130,0.5) 0%, rgba(214,177,102,0.3) 100%)'
                        : 'linear-gradient(180deg, rgba(214,177,102,0.4) 0%, rgba(75,47,125,0.2) 100%)',
                      width: '3px'
                    }} />
                  </TimelineSeparator>

                  <TimelineContent sx={{ py: '24px', px: 3, flex: 0.7 }}>
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.1 }}
                      className="group"
                    >
                      <div className={`p-6 rounded-2xl transition-all duration-500 hover:-translate-y-1 ${isDark
                        ? 'bg-[#1a1040]/80 backdrop-blur-xl border border-[#D6B166]/20 hover:border-[#D6B166]/50 shadow-xl shadow-black/20'
                        : 'bg-white/80 backdrop-blur-xl border border-[#4B2F7D]/20 hover:border-[#D6B166]/50 shadow-xl shadow-[#4B2F7D]/10 hover:shadow-[#4B2F7D]/20'
                        }`}>
                        <h3 className={`text-xl font-bold mb-2 transition-colors group-hover:text-[#F5C542] ${isDark ? 'text-white' : 'text-[#281E5A]'
                          }`}>
                          {step.title}
                        </h3>
                        <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-[#4B2F7D]/70'
                          }`}>
                          {step.description}
                        </p>
                        <div className="h-1 w-16 mt-4 rounded-full bg-gradient-to-r from-[#D6B166] to-[#E6C882] opacity-60 group-hover:opacity-100 group-hover:w-24 transition-all duration-300" />
                      </div>
                    </motion.div>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section - Modern Carousel */}
      <section className={`py-16 md:py-28 overflow-hidden ${isDark ? 'bg-[#0d0820]' : 'bg-gradient-to-b from-[#f0f0f5] to-white'}`}>
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Shuffle
              text={t('testimonials.title')}
              tag="h2"
              className={`text-3xl md:text-4xl lg:text-5xl font-bold ${isDark ? 'text-white' : 'text-[#281E5A]'}`}
              shuffleDirection="right"
              duration={0.4}
              animationMode="evenodd"
              shuffleTimes={1}
              ease="power3.out"
              stagger={0.02}
              threshold={0.2}
              triggerOnce={true}
              triggerOnHover={true}
            />
          </motion.div>

          <style>{`
              .testimonial-carousel {
                width: 100%;
                padding: 40px 0 60px 0 !important;
              }
              .testimonial-carousel .swiper-slide {
                opacity: 0.4;
                transform: scale(0.9);
                transition: all 0.3s ease;
              }
              .testimonial-carousel .swiper-slide-active {
                opacity: 1;
                transform: scale(1);
              }
              .testimonial-carousel .swiper-pagination-bullet {
                width: 10px;
                height: 10px;
                background-color: ${isDark ? 'rgba(230,200,130,0.3)' : 'rgba(75,47,125,0.2)'} !important;
                transition: all 0.3s ease;
              }
              .testimonial-carousel .swiper-pagination-bullet-active {
                width: 28px;
                border-radius: 5px;
                background-color: ${isDark ? '#D6B166' : '#4B2F7D'} !important;
              }
            `}</style>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative max-w-5xl mx-auto"
          >
            <div className="testimonial-nav-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 z-10 cursor-pointer">
              <div className={`h-12 w-12 rounded-full flex items-center justify-center transition-all duration-300 ${isDark
                ? 'bg-[#4B2F7D]/30 border border-[#4B2F7D]/50 hover:bg-[#4B2F7D]/50 hover:border-[#D6B166]/30'
                : 'bg-[#E6E6E6] border border-[#4B2F7D]/20 hover:bg-[#4B2F7D]/10 hover:border-[#4B2F7D]/40'
                }`}>
                <ChevronLeft className={`h-5 w-5 ${isDark ? 'text-[#E6C882]/60' : 'text-[#4B2F7D]'}`} />
              </div>
            </div>
            <div className="testimonial-nav-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 z-10 cursor-pointer">
              <div className={`h-12 w-12 rounded-full flex items-center justify-center transition-all duration-300 ${isDark
                ? 'bg-[#D6B166]/20 border border-[#D6B166]/30 hover:bg-[#D6B166]/30'
                : 'bg-[#D6B166]/20 border border-[#D6B166]/40 hover:bg-[#D6B166]/30'
                }`}>
                <ChevronRight className={`h-5 w-5 ${isDark ? 'text-[#E6C882]' : 'text-[#4B2F7D]'}`} />
              </div>
            </div>

            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: true,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={{
                nextEl: '.testimonial-nav-next',
                prevEl: '.testimonial-nav-prev',
              }}
              className="testimonial-carousel"
              modules={[Autoplay, Pagination, Navigation]}
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.name}>
                  <div className="text-center px-4 md:px-8 lg:px-12">
                    <div className="flex justify-center mb-6 md:mb-8">
                      <div className={`text-4xl md:text-6xl font-serif leading-none ${isDark ? 'text-[#D6B166]/40' : 'text-[#4B2F7D]/30'}`}>
                        "
                      </div>
                    </div>

                    <p className={`text-base md:text-lg lg:text-xl leading-relaxed mb-8 md:mb-10 max-w-3xl mx-auto ${isDark ? 'text-gray-200' : 'text-[#281E5A]/80'
                      }`}>
                      {testimonial.content}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
                      <span className={`font-semibold text-sm md:text-base ${isDark ? 'text-white' : 'text-[#281E5A]'}`}>
                        {testimonial.name}
                      </span>
                      <span className={`hidden sm:block w-px h-4 ${isDark ? 'bg-[#D6B166]/30' : 'bg-[#4B2F7D]/30'}`} />
                      <span className={`text-xs md:text-sm ${isDark ? 'text-[#D6B166]' : 'text-[#4B2F7D]'}`}>
                        {testimonial.role}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </section>

      {/* Blog Section with Swiper Carousel */}
      <section className={`py-16 md:py-28 overflow-hidden ${isDark ? 'bg-gradient-to-b from-[#110B2E] via-[#1a1040] to-[#110B2E]' : 'bg-[#f0f0f5]'}`}>
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className={`font-medium text-xs md:text-sm uppercase tracking-widest ${isDark ? 'text-[#D6B166]' : 'text-[#4B2F7D]'}`}>{t('blog.subtitle')}</span>
            <h2 className={`text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mt-3 md:mt-4 ${isDark ? 'text-white' : 'text-[#281E5A]'}`}>{t('blog.title')}</h2>
          </motion.div>

          <style>{`
            .blog-carousel {
              width: 100%;
              height: 420px;
              padding-bottom: 60px !important;
            }
            .blog-carousel .swiper-slide {
              background-position: center;
              background-size: cover;
              width: 320px;
            }
            .blog-carousel .swiper-pagination-bullet {
              background-color: ${isDark ? '#D2AA50' : '#462878'} !important;
            }
            .blog-carousel .swiper-pagination-bullet-active {
              background-color: ${isDark ? '#E6C882' : '#281E5A'} !important;
            }
          `}</style>

          <motion.div
            initial={{ opacity: 0, translateY: 20 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative w-full max-w-6xl mx-auto"
          >
            <Swiper
              spaceBetween={0}
              effect="coverflow"
              grabCursor={true}
              slidesPerView="auto"
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: true,
              }}
              coverflowEffect={{
                rotate: 35,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={{
                nextEl: '.blog-swiper-next',
                prevEl: '.blog-swiper-prev',
              }}
              className="blog-carousel"
              modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
            >
              {blogPosts.map((post) => (
                <SwiperSlide key={post.title}>
                  <div className={`h-full rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer group ${isDark
                    ? 'bg-gradient-to-b from-[#1a1040] to-[#110B2E] border border-[#D6B166]/30'
                    : 'bg-white border border-[#4B2F7D]/20 shadow-lg shadow-[#4B2F7D]/10'
                    }`}>
                    <div className="relative overflow-hidden h-44">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-[#281E5A]' : 'from-white/70'} to-transparent`} />
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 bg-[#4B2F7D]/90 text-white text-xs font-medium rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <p className={`text-xs mb-2 ${isDark ? 'text-[#E6C882]/60' : 'text-[#4B2F7D]/60'}`}>
                        {post.date}
                      </p>
                      <h3 className={`text-base font-semibold mb-2 group-hover:text-[#F5C542] transition-colors line-clamp-2 ${isDark ? 'text-white' : 'text-[#281E5A]'
                        }`}>
                        {post.title}
                      </h3>
                      <p className={`text-sm line-clamp-2 ${isDark ? 'text-gray-300' : 'text-[#4B2F7D]/70'}`}>
                        {post.excerpt}
                      </p>
                      <button className={`mt-4 text-sm font-medium inline-flex items-center gap-1 group/btn hover:gap-2 transition-all ${isDark ? 'text-[#D6B166]' : 'text-[#4B2F7D]'}`}>
                        {t('common.readMore')}
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="blog-swiper-next absolute right-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer">
                <div className={`h-10 w-10 rounded-full flex items-center justify-center transition-all ${isDark ? 'bg-[#D6B166]/20 hover:bg-[#D6B166]/30' : 'bg-[#4B2F7D]/10 hover:bg-[#4B2F7D]/20'
                  }`}>
                  <ChevronRight className={`h-5 w-5 ${isDark ? 'text-[#E6C882]' : 'text-[#4B2F7D]'}`} />
                </div>
              </div>
              <div className="blog-swiper-prev absolute left-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer">
                <div className={`h-10 w-10 rounded-full flex items-center justify-center transition-all ${isDark ? 'bg-[#4B2F7D]/30 hover:bg-[#4B2F7D]/50' : 'bg-[#4B2F7D]/10 hover:bg-[#4B2F7D]/20'
                  }`}>
                  <ChevronLeft className={`h-5 w-5 ${isDark ? 'text-[#E6C882]' : 'text-[#4B2F7D]'}`} />
                </div>
              </div>
            </Swiper>
          </motion.div>
        </div>
      </section>
    </div >
  );
};

export default HomePage;
