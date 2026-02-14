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
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=800&fit=crop',
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
        packages: [
            { name: 'BASIC TIER ECOMMERCE WEBSITE', price: '$1250', popular: false, features: ['Custom Home Page Design', 'Multiple Website', '3 Stock Photos', 'Up-to 100 Products', 'Content Management System (CMS)', 'Shopping Cart Integration', 'Easy Product Search', 'Payment Merchant Integration', 'Hover Effects', 'Social Media Integration', '1 Unique Banner Designs', '1 jQuery Slider Banner', 'Dedicated designer & developer', 'Unlimited Revisions', '100% Satisfaction Guarantee', '100% Unique Design Guarantee'] },
            { name: 'MID TIER ECOMMERCE WEBSITE', price: '$1450', popular: true, features: ['Custom Home Page Design', 'Multiple Page Website', '5 Stock Photos', '2-3 Stock Videos', 'Up-to 300 Products', 'Content Management System (CMS)', 'Shopping Cart Integration', 'Easy Product Search', 'Payment Merchant Integration', 'Hover Effects', 'Social Media Integration', '3 Unique Banner Designs', '3 jQuery Slider Banner', 'Dedicated designer & developer', 'Unlimited Revisions', '100% Satisfaction Guarantee', '100% Unique Design Guarantee'] },
            { name: 'ELITE TIER ECOMMERCE WEBSITE', price: '$1650', popular: false, features: ['Highly Dynamic CUSTOM WEBSITE', 'Custom Home Page Design', 'Multiple Page Website', 'Multiple Stock Photos', 'Multiple Stock Videos', 'Up-to 500 Products', 'Content Management System (CMS)', 'Shopping Cart Integration', 'Easy Product Search', 'Payment Merchant Integration', 'Hover Effects', 'Social Media Integration', '5 Unique Banner Designs', '5 jQuery Slider Banner', 'Dedicated designer & developer', 'Unlimited Revisions', '100% Satisfaction Guarantee', '100% Unique Design Guarantee'] },
        ],
    },
    'branding': {
        title: 'Brand Identity & Design',
        subtitle: 'Crafting visceral connections.',
        description: 'Your brand is your story. We help you tell it through powerful visuals, compelling narratives, and consistent design systems.',
        icon: Palette,
        color: 'from-pink-600 to-rose-600',
        image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=800&fit=crop',
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
        packages: [
            { name: 'BASIC LOGO DESIGN', price: '$60', popular: false, features: ['3 Custom Logo Designs', 'Professional Design', '3 Revisions', '48 TO 72 Hours TAT', 'All Files (PNG, JPG)', '100% Satisfaction Guarantee', '100% Money Back Guarantee'] },
            { name: 'Mid-Tier Logo Package', price: '$90', popular: true, features: ['6 Custom Logo Designs', 'Professional Design', 'Upto 6 Revisions', '48 TO 72 Hours TAT', 'All Files (PNG, JPG)', '100% Satisfaction Guarantee', '100% Money Back Guarantee'] },
            { name: 'Elite Logo Design', price: '$120', popular: false, features: ['9 Custom Logo Designs', 'Professional Design', 'Upto 9 Revisions', '48 TO 72 Hours TAT', 'All Files (PNG, JPG)', '100% Satisfaction Guarantee', '100% Money Back Guarantee'] },
            { name: 'PREMIUM LOGO PACKAGE', price: '$600', popular: false, features: ['UNLIMITED 3D Logo Design Concepts', 'FREE Business Card', 'Unlimited Revisions', '2 Stock Photos', '2 Banner Designs', '2 Stationary Design Sets', 'FREE MS Word Letterhead', '48 TO 72 Hours TAT', 'All Files (PNG, JPG)', '100% Satisfaction Guarantee'] },
        ],
    },
    'seo-geo': {
        title: 'SEO & GEO (Generative Engine Optimization)',
        subtitle: 'Be the answer AI gives.',
        description: 'Traditional SEO is dead. We help you dominate both search engines and generative AI benchmarks (Perplexity, GPT, Gemini).',
        icon: Search,
        color: 'from-green-600 to-emerald-600',
        image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&h=800&fit=crop',
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
        packages: [
            { name: 'Basic SEO Package', price: '$299', popular: false, features: ['Keyword Research & Analysis', 'On-Page SEO Optimization', 'Technical SEO Audit', 'Monthly Report', 'Google Analytics Setup', '100% Satisfaction Guarantee'] },
            { name: 'Professional SEO Package', price: '$599', popular: true, features: ['Everything in Basic', 'Content Strategy & Creation', 'Link Building Campaign', 'GEO Optimization', 'Competitor Analysis', 'Bi-Weekly Reports', '100% Satisfaction Guarantee'] },
            { name: 'Elite SEO Package', price: '$999', popular: false, features: ['Everything in Professional', 'AI Search Optimization', 'Full GEO Strategy', 'Authority Building', 'Social Signals', 'Weekly Reports', 'Dedicated SEO Manager', '100% Satisfaction Guarantee'] },
        ],
    },
    'cyber-security': {
        title: 'Cyber Security & Privacy',
        subtitle: 'Fortify your digital promise.',
        description: 'Security is a brand promise. We implement elite-level protection for your digital assets and customer data.',
        icon: Shield,
        color: 'from-red-600 to-pink-600',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=800&fit=crop',
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
        packages: [
            { name: 'Basic Security Audit', price: '$399', popular: false, features: ['Security Vulnerability Scan', 'SSL Certificate Setup', 'Firewall Configuration', 'Basic Malware Removal', '1 Month Monitoring', '100% Satisfaction Guarantee'] },
            { name: 'Advanced Security Package', price: '$799', popular: true, features: ['Everything in Basic', 'Penetration Testing', 'DDoS Protection', 'Real-time Monitoring', '24/7 Incident Response', '3 Months Monitoring', '100% Satisfaction Guarantee'] },
            { name: 'Enterprise Security Suite', price: '$1499', popular: false, features: ['Everything in Advanced', 'Custom Security Architecture', 'Compliance Auditing (GDPR/HIPAA)', 'Employee Security Training', 'Ongoing Vulnerability Management', '12 Months Monitoring', 'Dedicated Security Analyst', '100% Satisfaction Guarantee'] },
        ],
    },
    'social-media': {
        title: 'Social Media Mastery',
        subtitle: 'Command attention and scale community.',
        description: 'From viral content to elite community management, we turn your social channels into conversion engines.',
        icon: Share2,
        color: 'from-purple-600 to-indigo-600',
        image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=800&fit=crop',
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
        packages: [
            { name: 'Starter Social Package', price: '$299', popular: false, features: ['2 Platforms Management', '12 Posts per Month', 'Basic Graphics', 'Monthly Analytics Report', 'Community Management', '100% Satisfaction Guarantee'] },
            { name: 'Growth Social Package', price: '$599', popular: true, features: ['4 Platforms Management', '24 Posts per Month', 'Professional Graphics & Reels', 'Paid Ad Campaign Management', 'Bi-Weekly Reports', 'Content Calendar', '100% Satisfaction Guarantee'] },
            { name: 'Elite Social Package', price: '$999', popular: false, features: ['All Platforms Management', 'Daily Posts & Stories', 'Premium Video Content', 'Influencer Outreach', 'Full Ad Campaign Suite', 'Weekly Reports', 'Dedicated Social Manager', '100% Satisfaction Guarantee'] },
        ],
    },
    'ecommerce': {
        title: 'E-Commerce Evolution',
        subtitle: 'Seamless shopping, maximum revenue.',
        description: 'We build e-commerce experiences that don’t just sell—they build loyal communities through interactive UI/UX.',
        icon: ShoppingCart,
        color: 'from-orange-600 to-amber-600',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=800&fit=crop',
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
        packages: [],
    },
    'app-development': {
        title: 'App Development',
        subtitle: 'Powerful apps, seamless experiences.',
        description: 'We build native and cross-platform mobile applications that deliver exceptional user experiences and drive business growth.',
        icon: Globe,
        color: 'from-teal-600 to-cyan-600',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=800&fit=crop',
        metrics: [
            { label: 'App Store Rating', value: '4.8+' },
            { label: 'User Retention', value: '72%' },
            { label: 'Load Time', value: '<2s' },
        ],
        outcomes: [
            'Native iOS and Android app development.',
            'Cross-platform development with React Native & Flutter.',
            'Intuitive UI/UX designed for engagement.',
            'Backend API development and cloud integration.',
        ],
        packages: [],
    },
    'game-development': {
        title: 'Game Development',
        subtitle: 'Immersive worlds, endless possibilities.',
        description: 'From casual mobile games to complex multiplayer experiences, we bring your gaming vision to life with cutting-edge technology.',
        icon: Zap,
        color: 'from-violet-600 to-purple-600',
        image: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=800&h=800&fit=crop',
        metrics: [
            { label: 'Player Retention', value: '65%' },
            { label: 'Avg Session Time', value: '18min' },
            { label: 'Platform Support', value: 'All' },
        ],
        outcomes: [
            '2D and 3D game design and development.',
            'Unity and Unreal Engine expertise.',
            'Multiplayer and real-time game mechanics.',
            'In-app purchases and monetization strategy.',
        ],
        packages: [],
    },
};

const ServiceDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { theme } = useApp();
    const isDark = theme === 'dark';

    const service = serviceData[id as keyof typeof serviceData] || serviceData['web-development'];

    return (
        <div className={`overflow-hidden ${isDark ? 'bg-[#0a0a0f]' : 'bg-white'}`}>
            {/* Hero Section */}
            <section className="relative pt-48 pb-32 overflow-hidden md:pt-60">
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
                                src={service.image}
                                alt={service.title}
                                className="w-full h-auto rounded-[2.5rem] relative z-10"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Packages Preview */}
            {service.packages.length > 0 ? (
                <section className={`py-32 ${isDark ? 'bg-white/[0.02]' : 'bg-gray-50'}`}>
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-5xl font-black mb-16">Select Your <span className="text-fuchsia-500">Package</span></h2>
                        <div className={`grid grid-cols-1 ${service.packages.length === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-3'} gap-8`}>
                            {service.packages.map((pkg, idx) => (
                                <motion.div
                                    key={pkg.name}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    whileHover={{ y: -10 }}
                                    className={`p-8 rounded-3xl border transition-all relative ${pkg.popular ? (isDark ? 'bg-violet-500/10 border-violet-500/50 shadow-2xl shadow-violet-500/10' : 'bg-violet-50 border-violet-300 shadow-2xl shadow-violet-100') : (isDark ? 'bg-black border-white/5 hover:border-violet-500/50' : 'bg-white border-gray-100 hover:border-violet-300 shadow-xl')}`}
                                >
                                    {pkg.popular && (
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-violet-500 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                                            Most Popular
                                        </div>
                                    )}
                                    <div className={`h-12 w-12 rounded-full flex items-center justify-center mb-6 mx-auto ${pkg.popular ? 'bg-violet-500 text-white' : 'bg-violet-500/10 text-violet-500'}`}>
                                        {idx === 0 ? <Zap className="h-6 w-6" /> : idx === 1 ? <Briefcase className="h-6 w-6" /> : <Star className="h-6 w-6" />}
                                    </div>
                                    <h3 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{pkg.name}</h3>
                                    <div className="text-4xl font-black mb-6 text-violet-500">
                                        {pkg.price}
                                    </div>
                                    <ul className="text-left space-y-3 mb-8">
                                        {pkg.features.map((feature, fIdx) => (
                                            <li key={fIdx} className={`flex items-start gap-2 text-sm ${isDark ? 'text-white/70' : 'text-gray-600'}`}>
                                                <CheckCircle className="h-4 w-4 text-violet-500 flex-shrink-0 mt-0.5" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link to="/contact">
                                        <button className={`w-full py-4 rounded-2xl font-black transition-all ${pkg.popular ? 'bg-violet-500 text-white hover:bg-violet-600 shadow-xl shadow-violet-500/30' : 'border-2 border-violet-500 text-violet-500 hover:bg-violet-500 hover:text-white'}`}>
                                            Order Now
                                        </button>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            ) : (
                <section className={`py-32 ${isDark ? 'bg-white/[0.02]' : 'bg-gray-50'}`}>
                    <div className="container mx-auto px-6 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className={`max-w-2xl mx-auto p-12 rounded-3xl border ${isDark ? 'bg-black border-white/5' : 'bg-white border-gray-100 shadow-2xl shadow-violet-100'}`}
                        >
                            <h2 className="text-4xl md:text-5xl font-black mb-6">Interested in <span className="text-fuchsia-500">{service.title}</span>?</h2>
                            <p className={`text-lg mb-10 ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                                Get a custom quote tailored to your project needs. Our team will work with you to deliver the perfect solution.
                            </p>
                            <Link to="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-10 py-5 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-black text-lg rounded-2xl shadow-xl shadow-violet-500/30 hover:shadow-2xl hover:shadow-violet-500/40 transition-all flex items-center gap-3 mx-auto"
                                >
                                    Contact Us
                                    <ArrowRight className="h-5 w-5" />
                                </motion.button>
                            </Link>
                        </motion.div>
                    </div>
                </section>
            )}

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
