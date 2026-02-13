import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '@/context/AppContext';
import { Play, X, ChevronLeft, ChevronRight } from 'lucide-react';

const LatestProjects = () => {
    const { theme } = useApp();
    const isDark = theme === 'dark';
    const [activeCategory, setActiveCategory] = useState('Websites');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState<number | null>(null);
    const [animatingCard, setAnimatingCard] = useState<number | null>(null);
    const [animationPhase, setAnimationPhase] = useState<'idle' | 'lift' | 'flip' | 'settle'>('idle');
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
    const [videoSliderIndex, setVideoSliderIndex] = useState(0);
    const [graphicalSliderIndex, setGraphicalSliderIndex] = useState(0);
    const videoSliderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = windowWidth < 768;

    const allProjects = [
        // Website Projects (expanded from ServicesPage)
        { title: 'E-Commerce Platform', category: 'Websites', image: '/1.png' },
        { title: 'Restaurant Website', category: 'Websites', image: '/2.png' },
        { title: 'MID TIER ECOMMERCE WEBSITE', category: 'Websites', image: '/3.png' },
        { title: 'Real Estate Portal', category: 'Websites', image: '/6.png' },
        { title: 'Educational Platform', category: 'Websites', image: '/7.png' },
        { title: 'Healthcare Website', category: 'Websites', image: '/8.png' },
        { title: 'ELITE TIER ECOMMECE WEBSITE', category: 'Websites', image: '/9.png' },




        // Logo Design Projects (from ServicesPage)
        { title: 'Logo 1', category: 'Logo Design', image: '/LOGO/1.jpg' },
        { title: 'Logo 2', category: 'Logo Design', image: '/LOGO/2.jpg' },
        { title: 'Logo 3', category: 'Logo Design', image: '/LOGO/3.jpg' },
        { title: 'Logo 4', category: 'Logo Design', image: '/LOGO/4.jpg' },
        { title: 'Logo 5', category: 'Logo Design', image: '/LOGO/5.jpg' },
        { title: 'Logo 6', category: 'Logo Design', image: '/LOGO/6.jpg' },
        { title: 'Logo 7', category: 'Logo Design', image: '/LOGO/7.jpg' },
        { title: 'Logo 8', category: 'Logo Design', image: '/LOGO/8.jpg' },
        { title: 'Logo 9', category: 'Logo Design', image: '/LOGO/9.jpg' },
        { title: 'Logo 10', category: 'Logo Design', image: '/LOGO/10.jpg' },
        { title: 'Logo 11', category: 'Logo Design', image: '/LOGO/11.jpg' },
        { title: 'Logo 12', category: 'Logo Design', image: '/LOGO/12.jpg' },
        { title: 'Basic Survival Gear Logo', category: 'Logo Design', image: '/LOGO/BASICSURVIVALGEAR%20LOGO/Final/Logo-01.jpg' },

        // Graphical Work Projects (original)
        { title: 'Graphic Design 1', category: 'Graphical Work', image: '/graphics/1.png' },
        { title: 'Graphic Design 2', category: 'Graphical Work', image: '/graphics/2.png' },
        { title: 'Graphic Design 3', category: 'Graphical Work', image: '/graphics/3.png' },
        { title: 'Graphic Design 4', category: 'Graphical Work', image: '/graphics/4.png' },
        { title: 'Card Outline 1', category: 'Graphical Work', image: '/graphics/card%20outline.ai/1.png' },
        { title: 'Card Outline 2', category: 'Graphical Work', image: '/graphics/card%20outline.ai/2.png' },
        // Graphical Work Projects (new)
        { title: 'Business Card Design', category: 'Graphical Work', image: '/graphics/1.jpeg' },
        { title: 'Brochure Design', category: 'Graphical Work', image: '/graphics/2.jpeg' },
        { title: 'Flyer Design', category: 'Graphical Work', image: '/graphics/3.jpeg' },
        { title: 'Social Media Design', category: 'Graphical Work', image: '/graphics/4.jpeg' },
        { title: 'Banner Design', category: 'Graphical Work', image: '/graphics/5.jpeg' },
        { title: 'Poster Design', category: 'Graphical Work', image: '/graphics/6.jpeg' },
        { title: 'Packaging Design', category: 'Graphical Work', image: '/graphics/7.jpeg' },
    ];

    const projectsData = allProjects;

    // Filter projects based on active category
    const filteredProjects = allProjects.filter(project => project.category === activeCategory);

    // Reset index when category changes
    useEffect(() => {
        setCurrentIndex(0);
        setGraphicalSliderIndex(0);
        setVideoSliderIndex(0);
    }, [activeCategory]);

    const categories = [
        { id: 'Websites', label: 'Websites' },
        { id: 'Logo Design', label: 'Logo Design' },
        { id: 'Graphical Work', label: 'Graphical Work' },
        { id: 'Video Animation', label: 'Video Animation' }
    ];

    const animationVideos = [
        { id: 1, url: 'https://www.youtube.com/embed/WuEsJ7u8X-c' },
        { id: 2, url: 'https://www.youtube.com/embed/Abh_G7Kp69c' },
        { id: 3, url: 'https://www.youtube.com/embed/NAt8Rnowxjw' },
        { id: 4, url: 'https://www.youtube.com/embed/BALvV-DkY8k' },
        { id: 5, url: 'https://www.youtube.com/embed/0jRfcZPTYIs' },
        { id: 6, url: 'https://www.youtube.com/embed/aRddGrPq_GM' },
        { id: 7, url: 'https://www.youtube.com/embed/HWadnxZk7hg' },
        { id: 8, url: 'https://www.youtube.com/embed/j-85ryY5bg8' },
        { id: 9, url: 'https://www.youtube.com/embed/Zm4u9BbER0E' },
    ];

    const getVisibleIndices = useCallback(() => {
        if (filteredProjects.length === 0) return [];
        const total = filteredProjects.length;
        const indices = [];
        // Center the view: show 1 card on left, active in center, 1 on right
        for (let i = -1; i <= 1; i++) {
            indices.push({
                index: (currentIndex + i + total) % total,
                position: i
            });
        }
        return indices;
    }, [filteredProjects.length, currentIndex]);

    const goToNext = useCallback(() => {
        if (animationPhase !== 'idle' || filteredProjects.length === 0) return;

        const nextIndex = (currentIndex + 1) % filteredProjects.length;
        const oldIndex = currentIndex;

        setAnimatingCard(nextIndex);
        setPrevIndex(oldIndex);
        setCurrentIndex(nextIndex); // Move the queue immediately for smoothness
        setAnimationPhase('lift');

        setTimeout(() => {
            setAnimationPhase('flip');
        }, 600);

        setTimeout(() => {
            setAnimationPhase('settle');
        }, 1400);

        setTimeout(() => {
            setAnimationPhase('idle');
            setAnimatingCard(null);
            setPrevIndex(null);
        }, 2000);
    }, [animationPhase, projectsData.length, currentIndex]);


    useEffect(() => {
        const interval = setInterval(() => {
            if (animationPhase === 'idle') {
                goToNext();
            }
        }, 10000);
        return () => clearInterval(interval);
    }, [goToNext, animationPhase]);

    const visibleIndices = getVisibleIndices();

    const getCardTransform = (position: number, cardIndex: number) => {
        const isAnimating = animatingCard === cardIndex;
        const isExiting = prevIndex === cardIndex;

        const xOffset = isMobile ? 320 : 500;
        const rotationY = isMobile ? 15 : 25;
        const scaleDecay = 0.08;

        if (isAnimating) {
            if (animationPhase === 'lift') {
                return {
                    x: 0,
                    y: -120,
                    scale: 1.2,
                    rotateY: 0,
                    zIndex: 100,
                    opacity: 1,
                };
            }
            if (animationPhase === 'flip') {
                return {
                    x: 0,
                    y: -60,
                    scale: 1.3,
                    rotateY: 180,
                    zIndex: 100,
                    opacity: 0.3,
                };
            }
            if (animationPhase === 'settle') {
                return {
                    x: 0,
                    y: 0,
                    scale: 1,
                    rotateY: 0,
                    zIndex: 50,
                    opacity: 1,
                };
            }
        }

        if (isExiting && animationPhase !== 'idle') {
            return {
                x: position * xOffset,
                y: 0,
                scale: 1 - Math.abs(position) * scaleDecay,
                rotateY: -position * rotationY,
                zIndex: 10,
                opacity: 0.2, // Fade out the old card even more during transition
            };
        }

        return {
            x: position * xOffset,
            y: 0,
            scale: 1 - Math.abs(position) * scaleDecay,
            rotateY: -position * rotationY,
            zIndex: 20 - Math.abs(position),
            opacity: 1 - Math.abs(position) * 0.3,
        };
    };

    return (
        <section className={`py-28 relative overflow-hidden ${isDark ? 'bg-[#281E5A]' : 'bg-white'}`}>
            <div className={`absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20`}>
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#4B2F7D] rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#D6B166] rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-6 border ${isDark ? 'bg-[#4B2F7D]/30 border-[#D6B166]/30 text-[#E6C882]' : 'bg-[#4B2F7D]/5 border-[#4B2F7D]/20 text-[#4B2F7D]'}`}
                    >
                        <Play className="h-4 w-4 fill-current" />
                        Our Portfolio
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`text-4xl md:text-6xl font-black mb-8 uppercase tracking-tight leading-tight ${isDark ? 'text-[#E6C882]' : 'text-[#281E5A]'}`}
                    >
                        Latest Insights
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className={`text-lg md:text-xl leading-relaxed max-w-3xl mx-auto ${isDark ? 'text-white/60' : 'text-[#462878]/70'}`}
                    >
                        Explore our elite portfolio of digital masterpieces, where every pixel is crafted with precision and purpose.
                    </motion.p>
                </div>

                <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-4 md:px-8 py-2.5 md:py-3.5 rounded-2xl text-sm md:text-base font-bold transition-all duration-500 border-2 ${activeCategory === category.id
                                ? isDark
                                    ? 'bg-[#D6B166] border-[#D6B166] text-[#281E5A] shadow-xl shadow-[#D6B166]/20 scale-105'
                                    : 'bg-[#4B2F7D] border-[#4B2F7D] text-white shadow-xl shadow-[#4B2F7D]/20 scale-105'
                                : isDark
                                    ? 'bg-[#4B2F7D]/30 text-white/60 border-[#4B2F7D]/40 hover:border-[#D6B166]/50 hover:text-white'
                                    : 'bg-white text-[#4B2F7D]/60 border-[#4B2F7D]/10 hover:border-[#4B2F7D]/40 hover:text-[#4B2F7D]'
                                }`}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                {activeCategory === 'Graphical Work' ? (
                    <div className="relative max-w-7xl mx-auto">
                        {/* Left Arrow */}
                        <button
                            onClick={() => setGraphicalSliderIndex((prev) => Math.max(prev - 1, 0))}
                            disabled={graphicalSliderIndex === 0}
                            className={`absolute -left-2 md:-left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-300 ${isDark
                                ? 'bg-[#4B2F7D]/60 backdrop-blur-md border border-[#D6B166]/30 text-[#D6B166] hover:bg-[#D6B166]/20'
                                : 'bg-white/80 backdrop-blur-md border border-[#4B2F7D]/20 text-[#4B2F7D] hover:bg-[#4B2F7D]/10'
                            } shadow-lg disabled:opacity-30 disabled:cursor-not-allowed`}
                        >
                            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
                        </button>

                        {/* Right Arrow */}
                        <button
                            onClick={() => setGraphicalSliderIndex((prev) => {
                                const maxIndex = Math.max(0, filteredProjects.length - (isMobile ? 1 : 2));
                                return Math.min(prev + 1, maxIndex);
                            })}
                            disabled={graphicalSliderIndex >= Math.max(0, filteredProjects.length - (isMobile ? 1 : 2))}
                            className={`absolute -right-2 md:-right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-300 ${isDark
                                ? 'bg-[#4B2F7D]/60 backdrop-blur-md border border-[#D6B166]/30 text-[#D6B166] hover:bg-[#D6B166]/20'
                                : 'bg-white/80 backdrop-blur-md border border-[#4B2F7D]/20 text-[#4B2F7D] hover:bg-[#4B2F7D]/10'
                            } shadow-lg disabled:opacity-30 disabled:cursor-not-allowed`}
                        >
                            <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
                        </button>

                        {/* Slider Track */}
                        <div className="overflow-hidden mx-6 md:mx-10">
                            <motion.div
                                className="flex"
                                style={{ gap: isMobile ? '0px' : '24px' }}
                                animate={{ x: isMobile
                                    ? `-${graphicalSliderIndex * 100}%`
                                    : `calc(-${graphicalSliderIndex} * (50% + 12px))`
                                }}
                                transition={{ type: 'spring', stiffness: 200, damping: 30 }}
                            >
                                {filteredProjects.map((project, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex-shrink-0 group relative"
                                        style={{ width: isMobile ? '100%' : 'calc(50% - 12px)' }}
                                        whileHover={{ scale: 1.02, y: -5 }}
                                    >
                                        <div className={`relative overflow-hidden rounded-2xl md:rounded-3xl border-2 transition-all duration-500 shadow-2xl ${isDark
                                            ? 'bg-[#1a1235] border-[#4B2F7D]/40 hover:border-[#D6B166]/60 shadow-[#D6B166]/5 hover:shadow-[#D6B166]/20'
                                            : 'bg-white border-[#4B2F7D]/10 hover:border-[#4B2F7D]/40 shadow-black/5 hover:shadow-[#4B2F7D]/20'
                                            }`}>
                                            <div className="relative z-10 overflow-hidden rounded-2xl md:rounded-3xl">
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                                />
                                                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${isDark
                                                    ? 'bg-gradient-to-t from-[#281E5A]/80 via-transparent to-transparent'
                                                    : 'bg-gradient-to-t from-[#4B2F7D]/60 via-transparent to-transparent'
                                                    }`} />

                                                <div
                                                    className="absolute bottom-0 left-0 right-0 p-4 md:p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                                                >
                                                    <h3 className="text-base md:text-xl font-bold text-white drop-shadow-lg">
                                                        {project.title}
                                                    </h3>
                                                    <div className="h-1 w-12 rounded-full bg-[#D6B166] mt-2" />
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Dot indicators */}
                        <div className="flex justify-center gap-2 mt-6">
                            {Array.from({ length: Math.max(1, filteredProjects.length - (isMobile ? 0 : 1)) }).map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setGraphicalSliderIndex(idx)}
                                    className={`h-2.5 rounded-full transition-all duration-300 ${graphicalSliderIndex === idx
                                        ? `w-8 ${isDark ? 'bg-[#D6B166]' : 'bg-[#4B2F7D]'}`
                                        : `w-2.5 ${isDark ? 'bg-[#4B2F7D]' : 'bg-[#281E5A]/30'} hover:bg-[#D6B166]/50`}`}
                                />
                            ))}
                        </div>
                    </div>
                ) : activeCategory === 'Video Animation' ? (
                    <div className="relative max-w-7xl mx-auto">
                        {/* Left Arrow */}
                        <button
                            onClick={() => setVideoSliderIndex((prev) => Math.max(prev - 1, 0))}
                            disabled={videoSliderIndex === 0}
                            className={`absolute -left-2 md:-left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-300 ${isDark
                                ? 'bg-[#4B2F7D]/60 backdrop-blur-md border border-[#D6B166]/30 text-[#D6B166] hover:bg-[#D6B166]/20'
                                : 'bg-white/80 backdrop-blur-md border border-[#4B2F7D]/20 text-[#4B2F7D] hover:bg-[#4B2F7D]/10'
                            } shadow-lg disabled:opacity-30 disabled:cursor-not-allowed`}
                        >
                            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
                        </button>

                        {/* Right Arrow */}
                        <button
                            onClick={() => setVideoSliderIndex((prev) => Math.min(prev + 1, animationVideos.length - (isMobile ? 1 : 3)))}
                            disabled={videoSliderIndex >= animationVideos.length - (isMobile ? 1 : 3)}
                            className={`absolute -right-2 md:-right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-300 ${isDark
                                ? 'bg-[#4B2F7D]/60 backdrop-blur-md border border-[#D6B166]/30 text-[#D6B166] hover:bg-[#D6B166]/20'
                                : 'bg-white/80 backdrop-blur-md border border-[#4B2F7D]/20 text-[#4B2F7D] hover:bg-[#4B2F7D]/10'
                            } shadow-lg disabled:opacity-30 disabled:cursor-not-allowed`}
                        >
                            <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
                        </button>

                        {/* Slider Track */}
                        <div className="overflow-hidden mx-6 md:mx-10" ref={videoSliderRef}>
                            <motion.div
                                className="flex"
                                style={{ gap: isMobile ? '0px' : '24px' }}
                                animate={{ x: isMobile
                                    ? `-${videoSliderIndex * 100}%`
                                    : `calc(-${videoSliderIndex} * (33.333% + 8px))`
                                }}
                                transition={{ type: 'spring', stiffness: 200, damping: 30 }}
                            >
                                {animationVideos.map((video) => {
                                    const videoId = video.url.split('/embed/')[1];
                                    return (
                                        <motion.div
                                            key={video.id}
                                            className={`rounded-xl md:rounded-2xl overflow-hidden shadow-xl border-2 cursor-pointer group flex-shrink-0 ${isDark ? 'border-[#4B2F7D]/40 bg-[#1a1235]' : 'border-[#4B2F7D]/10 bg-white'}`}
                                            style={{ width: isMobile ? '100%' : 'calc(33.333% - 16px)' }}
                                            onClick={() => setSelectedVideo(video.url + '?autoplay=1')}
                                            whileHover={{ scale: 1.02 }}
                                        >
                                            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                                                <img
                                                    src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                                                    alt={`Animation Video ${video.id}`}
                                                    className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors duration-300">
                                                    <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center ${isDark ? 'bg-[#D6B166]' : 'bg-[#4B2F7D]'} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                                        <Play className="w-5 h-5 md:w-7 md:h-7 text-white fill-white ml-0.5" />
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        </div>

                        {/* Dot indicators */}
                        <div className="flex justify-center gap-2 mt-6">
                            {Array.from({ length: animationVideos.length - (isMobile ? 0 : 2) }).map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setVideoSliderIndex(idx)}
                                    className={`h-2.5 rounded-full transition-all duration-300 ${videoSliderIndex === idx
                                        ? `w-8 ${isDark ? 'bg-[#D6B166]' : 'bg-[#4B2F7D]'}`
                                        : `w-2.5 ${isDark ? 'bg-[#4B2F7D]' : 'bg-[#281E5A]/30'} hover:bg-[#D6B166]/50`}`}
                                />
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="relative max-w-7xl mx-auto" style={{ perspective: '2000px' }}>
                        {/* Navigation Arrows */}
                        <button
                            onClick={() => {
                                if (animationPhase === 'idle') {
                                    const prev = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
                                    setCurrentIndex(prev);
                                }
                            }}
                            className={`absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-300 ${isDark
                                ? 'bg-[#4B2F7D]/60 backdrop-blur-md border border-[#D6B166]/30 text-[#D6B166] hover:bg-[#D6B166]/20'
                                : 'bg-white/80 backdrop-blur-md border border-[#4B2F7D]/20 text-[#4B2F7D] hover:bg-[#4B2F7D]/10'
                                } shadow-lg`}
                        >
                            <Play className="h-6 w-6 rotate-180" />
                        </button>
                        <button
                            onClick={goToNext}
                            className={`absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-300 ${isDark
                                ? 'bg-[#4B2F7D]/60 backdrop-blur-md border border-[#D6B166]/30 text-[#D6B166] hover:bg-[#D6B166]/20'
                                : 'bg-white/80 backdrop-blur-md border border-[#4B2F7D]/20 text-[#4B2F7D] hover:bg-[#4B2F7D]/10'
                                } shadow-lg`}
                        >
                            <Play className="h-6 w-6" />
                        </button>

                        <div className={`relative ${activeCategory === 'Logo Design' ? 'h-[400px] md:h-[550px]' : 'h-[650px] md:h-[750px]'} flex items-center justify-center overflow-visible`}>
                            <div className="relative w-full flex justify-center items-center" style={{ transformStyle: 'preserve-3d' }}>
                                {visibleIndices.map(({ index: projectIndex, position }) => {
                                    const project = filteredProjects[projectIndex];
                                    if (!project) return null;

                                    const transform = getCardTransform(position, projectIndex);
                                    const isLogo = activeCategory === 'Logo Design';

                                    return (
                                        <motion.div
                                            key={`${activeCategory}-${projectIndex}`}
                                            className={`absolute ${isLogo ? 'w-[280px] md:w-[420px] h-[280px] md:h-[420px]' : 'w-[320px] md:w-[480px] h-[600px]'}`}
                                            initial={false}
                                            animate={{
                                                x: transform.x,
                                                y: transform.y,
                                                scale: transform.scale,
                                                rotateY: transform.rotateY,
                                                zIndex: transform.zIndex,
                                                opacity: transform.opacity,
                                            }}
                                            transition={{
                                                type: 'spring',
                                                stiffness: 70,
                                                damping: 15,
                                                mass: 0.8,
                                                opacity: { duration: 0.6 }
                                            }}
                                            style={{
                                                transformStyle: 'preserve-3d',
                                                left: '50%',
                                                marginLeft: isLogo ? (isMobile ? '-140px' : '-210px') : (isMobile ? '-160px' : '-240px'),
                                            }}
                                        >
                                            <div
                                                className={`w-full h-full rounded-3xl overflow-hidden shadow-2xl border-2 ${position === 0 && animatingCard !== projectIndex ? 'border-[#D6B166]/50' : 'border-transparent'} ${isDark ? 'bg-[#1a1235]' : 'bg-white'}`}
                                                style={{
                                                    backfaceVisibility: 'hidden',
                                                    transformStyle: 'preserve-3d',
                                                }}
                                            >
                                                <div className={`relative h-full overflow-hidden ${!isLogo ? 'slow-scroll-card' : ''}`}>
                                                    <img
                                                        src={project.image}
                                                        alt={project.title}
                                                        className={`w-full ${isLogo ? 'h-full object-contain p-8' : 'slow-scroll-img'}`}
                                                    />
                                                </div>
                                            </div>

                                            {/* Back Face */}
                                            <div
                                                className={`absolute inset-0 w-full h-full rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center ${isDark ? 'bg-gradient-to-br from-[#D6B166] to-[#E6C882]' : 'bg-gradient-to-br from-[#4B2F7D] to-[#281E5A]'}`}
                                                style={{
                                                    backfaceVisibility: 'hidden',
                                                    transform: 'rotateY(180deg)',
                                                }}
                                            >
                                                <div className="text-center p-8">
                                                    <Play className={`w-10 h-10 mx-auto mb-4 ${isDark ? 'text-[#281E5A]' : 'text-white'}`} />
                                                    <h3 className={`text-xl font-bold ${isDark ? 'text-[#281E5A]' : 'text-white'}`}>
                                                        {project.title}
                                                    </h3>
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="flex justify-center gap-2 mt-8">
                            {filteredProjects.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        if (animationPhase === 'idle') {
                                            setCurrentIndex(idx);
                                        }
                                    }}
                                    className={`h-2.5 rounded-full transition-all duration-300 ${currentIndex === idx
                                        ? `w-8 ${isDark ? 'bg-[#D6B166]' : 'bg-[#4B2F7D]'}`
                                        : `w-2.5 ${isDark ? 'bg-[#4B2F7D]' : 'bg-[#281E5A]/30'} hover:bg-[#D6B166]/50`}`}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {/* Video Popup Modal */}
                <AnimatePresence>
                    {selectedVideo && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
                            onClick={() => setSelectedVideo(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                                className="relative w-[90vw] max-w-4xl"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    onClick={() => setSelectedVideo(null)}
                                    className="absolute -top-12 right-0 text-white hover:text-[#D6B166] transition-colors duration-200 z-10"
                                >
                                    <X className="w-8 h-8" />
                                </button>
                                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl" style={{ paddingBottom: '56.25%' }}>
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src={selectedVideo}
                                        title="Video Player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default LatestProjects;
