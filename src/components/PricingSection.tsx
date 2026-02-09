import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '@/context/AppContext';
import { Check, Box } from 'lucide-react';

const pricingData = {
    'Web Development': [
        {
            title: 'Basic Website',
            price: '199',
            features: [
                '2 Stock Photos',
                '1 Page Website',
                'Contact/Query Form',
                '1 jQuery Slider Banner',
                'Complete Deployment'
            ]
        },
        {
            title: 'Startup Website',
            price: '394',
            features: [
                '5 Stock Photos',
                '5 Page Website',
                '3 Banner Design',
                '1 jQuery Slider Banner',
                'FREE Google Friendly Sitemap'
            ]
        },
        {
            title: 'Professional Website',
            price: '844',
            features: [
                '10 Unique Pages Website',
                'CMS / Admin Panel Support',
                '8 Stock images',
                '5 Banner Designs',
                '1 jQuery Slider Banner',
                'FREE Google Friendly Sitemap',
                'Mobile Responsive'
            ]
        }
    ],
    'Ecommerce': [
        {
            title: 'Startup E-Store',
            price: '499',
            features: [
                'Customized Design',
                'Up to 50 Products',
                'Content Management System',
                'Shopping Cart Integration',
                'Payment Module Integration'
            ]
        },
        {
            title: 'Professional E-Store',
            price: '999',
            features: [
                'Customized Design',
                'Unlimited Products',
                'CMS / Admin Panel Support',
                'Shopping Cart Integration',
                'Payment Module Integration',
                'Sales & Inventory Management'
            ]
        },
        {
            title: 'Enterprise E-Store',
            price: '1999',
            features: [
                'Customized Design',
                'Unlimited Products',
                'Full Admin Control',
                'Shopping Cart Integration',
                'Payment Module Integration',
                'Sales & Inventory Management',
                '3 Month Support'
            ]
        }
    ],
    'Logo Designing': [
        {
            title: 'Basic Logo',
            price: '45',
            features: [
                '2 Custom Logo Design Concepts',
                '1 Dedicated Designer',
                '4 Revisions',
                '48 to 72 hours TAT',
                'Final File Format: JPG'
            ]
        },
        {
            title: 'Startup Logo',
            price: '95',
            features: [
                '4 Custom Logo Design Concepts',
                '1 Dedicated Designer',
                'Unlimited Revisions',
                '24 to 48 hours TAT',
                'All Final File Formats'
            ]
        },
        {
            title: 'Professional Logo',
            price: '145',
            features: [
                'Unlimited Logo Design Concepts',
                '2 Dedicated Designers',
                'Unlimited Revisions',
                '24 hours TAT',
                'All Final File Formats',
                'Free Icon Design'
            ]
        }
    ],
    'Corporate Branding': [
        {
            title: 'Startup Collateral',
            price: '99',
            features: [
                '2 Stationery Design Set',
                'FREE Fax Template',
                'Print Ready Formats',
                'Unlimited Revisions',
                '100% Satisfaction Guarantee'
            ]
        },
        {
            title: 'Collateral Classic',
            price: '199',
            features: [
                '2 Stationery Design Set',
                'Brochure Design (Bi-fold/Tri-fold)',
                'Flyer Design',
                'Unlimited Revisions',
                '100% Satisfaction Guarantee'
            ]
        },
        {
            title: 'Premium Collateral',
            price: '399',
            features: [
                '2 Stationery Design Set',
                'Packaging Design',
                'Brochure Design (4-8 Pages)',
                'T-Shirt Design',
                'Unlimited Revisions'
            ]
        }
    ],
    'Content Writing': [
        {
            title: 'Web Content',
            price: '12',
            features: [
                '1 Web Page Content',
                'SEO Friendly',
                'Plagiarism Free',
                'Industry Specific',
                'Timely Delivery'
            ]
        },
        {
            title: 'Article Writing',
            price: '25',
            features: [
                '1 Article (500 Words)',
                'SEO Friendly',
                'Plagiarism Free',
                'Well Researched',
                'Timely Delivery'
            ]
        },
        {
            title: 'Blog Writing',
            price: '20',
            features: [
                '1 Blog Post (500 Words)',
                'SEO Friendly',
                'Plagiarism Free',
                'Engaging Content',
                'Timely Delivery'
            ]
        }
    ]
};

const PricingSection: React.FC = () => {
    const { theme } = useApp();
    const isDark = theme === 'dark';
    const [activeTab, setActiveTab] = useState('Web Development');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPkg, setSelectedPkg] = useState<any>(null);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleBuyNow = (pkg: any) => {
        setSelectedPkg(pkg);
        setIsModalOpen(true);
        setIsSubmitted(false);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate email sending
        setTimeout(() => {
            setIsSubmitted(true);
            setFormData({ name: '', email: '', message: '' });
        }, 1000);
    };

    return (
        <section className={`py-32 relative overflow-hidden transition-colors duration-500 ${isDark ? 'bg-[#1a1235]' : 'bg-gray-50'}`}>
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 z-0">
                <div className={`absolute inset-0 bg-[size:50px_50px] transition-opacity duration-500 ${isDark
                    ? 'bg-[linear-gradient(rgba(139,92,246,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.08)_1px,transparent_1px)]'
                    : 'bg-[linear-gradient(rgba(139,92,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.1)_1px,transparent_1px)]'
                    }`} />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <span className={`inline-flex items-center gap-2 font-semibold text-xs uppercase tracking-widest px-4 py-2 rounded-full border backdrop-blur-sm transition-colors duration-300 ${isDark
                        ? 'text-amber-400 bg-amber-400/10 border-amber-400/20'
                        : 'text-violet-600 bg-violet-100 border-violet-200'
                        }`}>
                        <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
                        Our Packages
                    </span>
                    <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold mt-6 mb-4 tracking-tight transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                        Affordable Pricing Plans
                    </h2>

                    {/* Tabs */}
                    <div className={`flex flex-wrap justify-center gap-2 mt-12 p-1.5 rounded-2xl border backdrop-blur-sm max-w-fit mx-auto transition-colors duration-300 ${isDark
                        ? 'bg-white/5 border-white/10'
                        : 'bg-white border-gray-200 shadow-sm'
                        }`}>
                        {Object.keys(pricingData).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${activeTab === tab
                                    ? 'bg-[#462878] text-white shadow-lg'
                                    : isDark
                                        ? 'text-white/60 hover:text-white hover:bg-white/5'
                                        : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-32 gap-8 max-w-7xl mx-auto">
                    <AnimatePresence mode="wait">
                        {pricingData[activeTab as keyof typeof pricingData].map((pkg, index) => (
                            <motion.div
                                key={pkg.title + activeTab}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
                                className="relative group pt-16"
                            >
                                {/* Glow Background Card Style */}
                                <div className="absolute inset-0 top-16 bg-[#1a1235] rounded-[3rem] shadow-2xl transition-transform duration-500 group-hover:-translate-y-2"></div>

                                {/* Main Card Container */}
                                <div className="relative h-full flex flex-col rounded-[2.5rem] border-2 border-[#462878]/30 group-hover:border-[#462878] transition-all duration-500 bg-[#1a1235]">

                                    {/* Circular Icon Badge - Smaller & Cleaner like image */}
                                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full border-4 border-[#1a1235] bg-[#462878] flex items-center justify-center z-20 shadow-xl">
                                        <Box className="w-10 h-10 text-white" />
                                    </div>

                                    {/* Header Section - Dark Purple Gradient */}
                                    <div className="pt-16 pb-10 px-8 text-center flex flex-col items-center bg-gradient-to-b from-[#462878] to-[#1a1235] rounded-t-[2.5rem]">
                                        {/* Pill Title - Clean rounded border */}
                                        <div className="px-8 py-2 rounded-full border-2 border-[#D6B166] bg-transparent mb-6">
                                            <h3 className="text-lg font-black text-white uppercase tracking-wider">
                                                {pkg.title}
                                            </h3>
                                        </div>

                                        {/* Price - Golden Gradient */}
                                        <div className="mb-4">
                                            <div className="text-6xl font-black tracking-tighter text-[#D6B166] flex items-start justify-center">
                                                <span className="text-2xl font-bold mt-1 mr-1">$</span>
                                                {pkg.price}
                                            </div>
                                        </div>

                                        {/* Plan Includes Label */}
                                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                                            Plan Includes:
                                        </p>
                                    </div>

                                    {/* Features Section - White with Bold Black Text */}
                                    <div className="flex-grow bg-white px-8 py-10 border-t-2 border-[#462878]/10 rounded-b-[2.5rem]">
                                        <ul className="space-y-4 mb-10">
                                            {pkg.features.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#D6B166] flex items-center justify-center mt-0.5">
                                                        <Check className="w-3 h-3 text-white" strokeWidth={4} />
                                                    </div>
                                                    <span className="font-extrabold text-black leading-tight text-sm tracking-tight">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="mt-auto">
                                            <button
                                                onClick={() => handleBuyNow(pkg)}
                                                className="w-full py-4 rounded-xl font-black text-white bg-[#462878] hover:bg-[#5a3696] shadow-lg active:scale-[0.97] transition-all duration-300 uppercase tracking-widest text-xs"
                                            >
                                                Get Started
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Buy Now Modal */}
                <AnimatePresence>
                    {isModalOpen && selectedPkg && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setIsModalOpen(false)}
                                className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                            />
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                className="relative w-full max-w-lg rounded-3xl p-8 shadow-2xl border border-white/10 bg-[#1a1235]"
                            >
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="absolute top-4 right-4 p-2 rounded-full transition-colors hover:bg-white/10 text-white/70"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>

                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold mb-2 text-white">Get Started</h3>
                                    <p className="text-sm text-white/60">
                                        You selected: <span className="font-bold text-amber-400">{selectedPkg.title}</span> (${selectedPkg.price})
                                    </p>
                                </div>

                                {!isSubmitted ? (
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium mb-1 text-white/80">Full Name</label>
                                            <input
                                                type="text"
                                                required
                                                className="w-full px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-amber-400 transition-all bg-white/5 border border-white/10 text-white"
                                                placeholder="John Doe"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1 text-white/80">Email Address</label>
                                            <input
                                                type="email"
                                                required
                                                className="w-full px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-amber-400 transition-all bg-white/5 border border-white/10 text-white"
                                                placeholder="john@example.com"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1 text-white/80">Project Description</label>
                                            <textarea
                                                required
                                                rows={4}
                                                className="w-full px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-amber-400 transition-all resize-none bg-white/5 border border-white/10 text-white"
                                                placeholder="Tell us about your project requirements..."
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full py-4 rounded-xl font-bold text-white bg-[#462878] hover:bg-[#5a3696] shadow-lg active:scale-[0.98] transition-all uppercase tracking-widest text-sm"
                                        >
                                            Submit Request
                                        </button>
                                        <p className="text-xs text-center mt-4 text-white/40">
                                            Our team will contact you within 24 hours.
                                        </p>
                                    </form>
                                ) : (
                                    <div className="text-center py-8">
                                        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-[#D6B166]/20 border border-[#D6B166]/30">
                                            <Check className="w-8 h-8 text-[#D6B166]" />
                                        </div>
                                        <h4 className="text-xl font-bold mb-2 text-white">Request Received!</h4>
                                        <p className="mb-6 text-white/60">
                                            Thank you for your interest. We'll review your project details and get back to you shortly.
                                        </p>
                                        <p className="text-sm font-medium text-amber-400">
                                            Our team will contact you within 24 hours.
                                        </p>
                                    </div>
                                )}
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default PricingSection;
