import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '@/context/AppContext';
import { Play, X } from 'lucide-react';

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

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = windowWidth < 768;

    useEffect(() => {
        setCurrentIndex(0);
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

                <div className="flex flex-wrap justify-center gap-3 mb-8">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-8 py-3.5 rounded-2xl text-base font-bold transition-all duration-500 border-2 ${activeCategory === category.id
                                ? isDark
                                    ? 'bg-gradient-to-r from-[#D6B166] to-[#E6C882] border-[#D6B166] text-[#1a0b2e] shadow-xl shadow-[#D6B166]/30 scale-105'
                                    : 'bg-gradient-to-r from-[#4B2F7D] to-[#281E5A] border-[#4B2F7D] text-white shadow-xl shadow-[#4B2F7D]/20 scale-105'
                                : isDark
                                    ? 'bg-[#4B2F7D]/30 text-[#E6C882] border-[#4B2F7D]/40 hover:border-[#D6B166]/50 hover:text-[#D6B166]'
                                    : 'bg-white text-[#4B2F7D]/60 border-[#4B2F7D]/10 hover:border-[#4B2F7D]/40 hover:text-[#4B2F7D]'
                                }`}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                {activeCategory === 'Video Animation' ? (
                    <>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
                    >
                        {animationVideos.map((video) => {
                            const videoId = video.url.split('/embed/')[1];
                            return (
                            <motion.div
                                key={video.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: video.id * 0.05 }}
                                onClick={() => setSelectedVideo(video.url + '?autoplay=1')}
                                className={`rounded-2xl overflow-hidden shadow-xl border-2 cursor-pointer group ${isDark ? 'border-[#4B2F7D]/40 bg-[#1a1235]' : 'border-[#4B2F7D]/10 bg-white'}`}
                            >
                                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                                    <img
                                        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                                        alt={`Animation Video ${video.id}`}
                                        className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors duration-300">
                                        <div className={`w-16 h-16 rounded-full flex items-center justify-center ${isDark ? 'bg-[#D6B166]' : 'bg-[#4B2F7D]'} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                            <Play className="w-7 h-7 text-white fill-white ml-1" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                            );
                        })}
                    </motion.div>

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
                    </>
                ) : (
                    <div className="relative max-w-7xl mx-auto" style={{ perspective: '2000px' }}>
                        <div className="relative h-[650px] md:h-[750px] flex items-center justify-center overflow-visible">
                            <div className="relative w-full flex justify-center items-center" style={{ transformStyle: 'preserve-3d' }}>
                                {visibleIndices.map(({ index: projectIndex, position }) => {
                                    const project = projectsData[projectIndex];
                                    if (!project) return null;

                                    const transform = getCardTransform(position, projectIndex);

                                return (
                                    <motion.div
                                        key={projectIndex}
                                        className="absolute w-[320px] md:w-[480px] h-[420px] md:h-[560px]"
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
                                            marginLeft: isMobile ? '-160px' : '-240px',
                                        }}
                                    >
                                        <div
                                            className={`w-full h-full rounded-3xl overflow-hidden shadow-2xl ${isDark ? 'bg-[#1a1235]' : 'bg-white'} border-2 ${position === 0 && animatingCard !== projectIndex ? 'border-[#D6B166]/50' : 'border-transparent'}`}
                                            style={{
                                                backfaceVisibility: 'hidden',
                                                transformStyle: 'preserve-3d',
                                            }}
                                        >
                                            {/* Full Screenshot Display - Scroll on hover with bounce back */}
                                            <div className="relative h-full overflow-hidden group/card">
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full translate-y-0 group-hover/card:-translate-y-[60%] transition-transform duration-[10s] ease-in-out"
                                                />
                                            </div>
                                        </div>

                                            <div
                                                className={`absolute inset-0 w-full h-full rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center ${isDark ? 'bg-gradient-to-br from-[#D6B166] to-[#E6C882]' : 'bg-gradient-to-br from-[#4B2F7D] to-[#281E5A]'}`}
                                                style={{
                                                    backfaceVisibility: 'hidden',
                                                    transform: 'rotateY(180deg)',
                                                }}
                                            >
                                                <div className="text-center p-8">
                                                    <div className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center ${isDark ? 'bg-[#281E5A]' : 'bg-white/20'}`}>
                                                        <Play className={`w-10 h-10 ${isDark ? 'text-[#D6B166]' : 'text-white'}`} />
                                                    </div>
                                                    <h3 className={`text-2xl font-black mb-4 ${isDark ? 'text-[#281E5A]' : 'text-white'}`}>
                                                        {project.title}
                                                    </h3>
                                                    <p className={`text-sm ${isDark ? 'text-[#281E5A]/70' : 'text-white/80'}`}>
                                                        Loading next project...
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>

                        </div>

                        <div className="flex justify-center gap-2 mt-8">
                            {projectsData.map((_, idx) => (
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
            </div>
        </section>
    );
};

export default LatestProjects;
