import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Globe,
    Palette,
    Search,
    Share2,
    Shield,
    ShoppingCart,
    CheckCircle,
    ArrowRight,
    Zap,
    Briefcase,
    Star,
} from 'lucide-react';
import { useApp } from '@/context/AppContext';

const serviceData = {
    'web-development': {
        title: 'Website Design & Development',
        subtitle: 'High-performance digital engines.',
        description: 'We build more than just websites. We create scalable, secure, and high-conversion digital platforms tailored to your business goals.',
        icon: Globe,
        color: 'from-blue-600 to-cyan-600',
        metrics: [
            { label: 'Avg Speed Increase', value: '45%' },
            { label: 'Conversion Lift', value: '2.5x' },
            { label: 'Uptime', value: '99.9%' },
        ],
        outcomes: [
            'Custom full-stack development using modern frameworks.',
            'Mobile-first, responsive design for all devices.',
            'SEO-ready architecture from day one.',
            'E-commerce integration and CMS mastery.',
        ],
    },
    'branding': {
        title: 'Brand Identity & Design',
        subtitle: 'Crafting visceral connections.',
        description: 'Your brand is your story. we help you tell it through powerful visuals, compelling narratives, and consistent design systems.',
        icon: Palette,
        color: 'from-pink-600 to-rose-600',
        metrics: [
            { label: 'Brand Recognition', value: '+80%' },
            { label: 'Design Concepts', value: 'Unlimited' },
            { label: 'Delivery Time', value: '7 Days' },
        ],
        outcomes: [
            'Strategic logo design and visual architecture.',
            'Comprehensive brand guidelines and systems.',
            'Narrative-driven messaging and microcopy.',
            'Multi-channel brand coherence.',
        ],
    },
    'seo-geo': {
        title: 'SEO & GEO (Generative Engine Optimization)',
        subtitle: 'Be the answer AI gives.',
        description: 'Traditional SEO is dead. We help you dominate both search engines and generative AI benchmarks (Perplexity, GPT, Gemini).',
        icon: Search,
        color: 'from-green-600 to-emerald-600',
        metrics: [
            { label: 'Organic Growth', value: '300%' },
            { label: 'AI Answer Rate', value: '94%' },
            { label: 'KW Rankings', value: '#1-3' },
        ],
        outcomes: [
            'Advanced technical SEO audits and fixes.',
            'Generative Engine Optimization (GEO) strategies.',
            'Semantic keyword targeting and clustering.',
            'Authority building and content ecosystem.',
        ],
    },
    'cyber-security': {
        title: 'Cyber Security & Privacy',
        subtitle: 'Fortify your digital promise.',
        description: 'Security is a brand promise. We implement elite-level protection for your digital assets and customer data.',
        icon: Shield,
        color: 'from-red-600 to-pink-600',
        metrics: [
            { label: 'Threat Mitigation', value: '100%' },
            { label: 'SSL Protocol', value: 'A+' },
            { label: 'Audit Compliance', value: 'Global' },
        ],
        outcomes: [
            '24/7 proactive security monitoring.',
            'Penetration testing and vulnerability assessment.',
            'Secure data encryption and privacy compliance.',
            'Malware protection and emergency response.',
        ],
    },
    'social-media': {
        title: 'Social Media Mastery',
        subtitle: 'Command attention and scale community.',
        description: 'From viral content to elite community management, we turn your social channels into conversion engines.',
        icon: Share2,
        color: 'from-purple-600 to-indigo-600',
        metrics: [
            { label: 'Engagement Rate', value: '12%' },
            { label: 'ROI on Ad Spend', value: '5x' },
            { label: 'Follower Growth', value: '20K+' },
        ],
        outcomes: [
            'Platform-specific content strategy (IG, LI, FB, X).',
            'Dynamic community management and engagement.',
            'Paid social scaling and optimization.',
            'Influencer partnerships and brand advocacy.',
        ],
    },
    'ecommerce': {
        title: 'E-Commerce Evolution',
        subtitle: 'Seamless shopping, maximum revenue.',
        description: 'We build e-commerce experiences that don’t just sell—they build loyal communities through interactive UI/UX.',
        icon: ShoppingCart,
        color: 'from-orange-600 to-amber-600',
        metrics: [
            { label: 'Cart Recovery', value: '30%' },
            { label: 'Avg Order Value', value: '+25%' },
            { label: 'Checkout Speed', value: '1.2s' },
        ],
        outcomes: [
            'Custom Shopify and WooCommerce theme dev.',
            'Personalized customer journeys and loyalty tech.',
            'Scalable inventory and payment integrations.',
            'Conversion Rate Optimization (CRO) audits.',
        ],
    }
};

const ServiceDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { theme } = useApp();
    const isDark = theme === 'dark';

    const service = serviceData[id as keyof typeof serviceData] || serviceData['web-development'];

    return (
        <div className={`overflow-hidden ${isDark ? 'bg-[#0a0a0f]' : 'bg-white'}`}>
            {/* Hero Section */}
            <section className="relative pt-40 pb-32 overflow-hidden">
                <div className="absolute inset-0">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10`} />
                    <div className={`absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br ${service.color} rounded-full blur-[150px] opacity-20`} />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <div className={`h-20 w-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-8 shadow-2xl`}>
                            <service.icon className="h-10 w-10 text-white" />
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black mb-6 leading-[0.9] tracking-tighter">
                            {service.title}
                        </h1>
                        <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500 mb-8">
                            {service.subtitle}
                        </p>
                        <p className={`text-xl leading-relaxed max-w-2xl ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                            {service.description}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Metrics Section */}
            <section className={`py-20 border-y ${isDark ? 'border-white/5 bg-white/[0.02]' : 'border-gray-100 bg-gray-50'}`}>
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {service.metrics.map((metric, index) => (
                            <motion.div
                                key={metric.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500 mb-2">
                                    {metric.value}
                                </div>
                                <div className={`text-sm uppercase tracking-widest font-bold ${isDark ? 'text-white/40' : 'text-gray-400'}`}>
                                    {metric.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Outcomes & Features */}
            <section className="py-32">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div>
                            <h2 className="text-5xl font-black mb-12">Strategic <span className="text-violet-500">Outcomes</span></h2>
                            <div className="space-y-6">
                                {service.outcomes.map((outcome, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className={`flex items-start gap-4 p-6 rounded-2xl border ${isDark ? 'border-white/5 bg-white/[0.01]' : 'border-gray-100 bg-white shadow-lg shadow-gray-100'}`}
                                    >
                                        <CheckCircle className="h-6 w-6 text-violet-500 flex-shrink-0" />
                                        <p className={`text-lg font-medium ${isDark ? 'text-white/80' : 'text-gray-700'}`}>{outcome}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative p-1 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-[2.5rem]"
                        >
                            <div className="absolute -inset-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-20 blur-2xl rounded-[3rem]" />
                            <img
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=800&fit=crop"
                                alt="Outcome visual"
                                className="w-full h-auto rounded-[2.5rem] relative z-10"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Packages Preview */}
            <section className={`py-32 ${isDark ? 'bg-white/[0.02]' : 'bg-gray-50'}`}>
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-5xl font-black mb-16">Select Your <span className="text-fuchsia-500">Fuel</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {['Basic', 'Professional', 'Elite'].map((tier, idx) => (
                            <motion.div
                                key={tier}
                                whileHover={{ y: -10 }}
                                className={`p-10 rounded-3xl border transition-all ${isDark ? 'bg-black border-white/5 hover:border-violet-500/50' : 'bg-white border-gray-100 hover:border-violet-300 shadow-xl'}`}
                            >
                                <div className={`h-12 w-12 rounded-full flex items-center justify-center mb-6 mx-auto ${idx === 1 ? 'bg-violet-500 text-white' : 'bg-violet-500/10 text-violet-500'}`}>
                                    {idx === 0 ? <Zap className="h-6 w-6" /> : idx === 1 ? <Briefcase className="h-6 w-6" /> : <Star className="h-6 w-6" />}
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{tier}</h3>
                                <div className="text-4xl font-black mb-8 text-violet-500">
                                    {idx === 0 ? '$199' : idx === 1 ? '$844' : '$1,494'}
                                </div>
                                <Link to="/contact">
                                    <button className={`w-full py-4 rounded-2xl font-black transition-all ${idx === 1 ? 'bg-violet-500 text-white hover:bg-violet-600 shadow-xl shadow-violet-500/30' : 'border-2 border-violet-500 text-violet-500 hover:bg-violet-500 hover:text-white'}`}>
                                        Order Now
                                    </button>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-40 relative">
                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className={`p-20 rounded-[4rem] border relative overflow-hidden ${isDark ? 'bg-black border-white/5' : 'bg-white border-gray-100 shadow-2xl shadow-violet-100'}`}
                    >
                        <div className={`absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br ${service.color} rounded-full blur-[150px] opacity-10`} />
                        <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9]">
                            Ready to <span className="text-violet-500">BOOM</span> Your Presence?
                        </h2>
                        <p className={`text-xl mb-12 max-w-2xl mx-auto ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                            Don’t settle for average. Let’s build the digital engine your brand deserves.
                        </p>
                        <Link to="/contact">
                            <button className="px-12 py-6 bg-white text-black font-black text-xl rounded-2xl hover:bg-violet-500 hover:text-white transition-all transform hover:scale-105 hover:rotate-2 shadow-2xl flex items-center gap-3 mx-auto">
                                Get a Proposal
                                <ArrowRight className="h-7 w-7" />
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetailPage;
