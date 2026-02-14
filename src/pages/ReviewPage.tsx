import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  Star,
  Send,
  CheckCircle,
  Quote,
  ThumbsUp,
} from 'lucide-react';
import { useApp } from '@/context/AppContext';

const ReviewPage: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useApp();
  const isDark = theme === 'dark';
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    review: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) return;

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', company: '', service: '', review: '' });
    setRating(0);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const services = [
    'Website Design & Development',
    'Logo Design',
    'Graphical Works',
    'SEO/GEO',
    'Social Media Marketing',
    'Cyber Security',
    'Content Marketing',
    'Social Media Management',
    'E-Commerce Solutions',
    'Shopify Development',
    'Other',
  ];

  const recentReviews = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      rating: 5,
      review: 'DigiDevBrand exceeded all our expectations. The team delivered a stunning website that has significantly improved our online presence and conversions.',
      service: 'Website Design',
      date: 'December 2024',
    },
    {
      name: 'Michael Chen',
      company: 'GreenLeaf Co.',
      rating: 5,
      review: 'Outstanding branding work! They captured our vision perfectly and created a logo that truly represents our company values.',
      service: 'Logo Design',
      date: 'November 2024',
    },
    {
      name: 'Emily Davis',
      company: 'FashionHub',
      rating: 5,
      review: 'Our e-commerce store has never performed better. The team understood our needs and delivered a seamless shopping experience.',
      service: 'E-Commerce',
      date: 'November 2024',
    },
  ];

  if (isSubmitted) {
    return (
      <div className={`min-h-screen flex items-center justify-center py-24 ${isDark ? 'bg-[#0a0a0f]' : 'bg-white'}`}>
        <div className="absolute inset-0">
          <div className={`absolute inset-0 ${isDark ? 'bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)]' : 'bg-[linear-gradient(rgba(139,92,246,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.08)_1px,transparent_1px)]'} bg-[size:50px_50px]`} />
        </div>
        <div className={`absolute top-1/4 left-1/4 w-96 h-96 ${isDark ? 'bg-violet-500/10' : 'bg-violet-300/20'} rounded-full blur-[120px]`} />
        <div className={`absolute bottom-1/4 right-1/4 w-80 h-80 ${isDark ? 'bg-purple-500/10' : 'bg-purple-300/20'} rounded-full blur-[100px]`} />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md mx-auto px-4 relative z-10"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', delay: 0.2 }}
            className="h-24 w-24 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="h-12 w-12 text-green-400" />
          </motion.div>
          <h2 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('review.thankYou')}</h2>
          <p className={`mb-8 ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
            Your feedback helps us improve and serve you better. We appreciate you taking the time to share your experience.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="px-8 py-3 bg-violet-500 text-white font-medium rounded-full hover:bg-violet-600 transition-colors"
          >
            Submit Another Review
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={`overflow-hidden ${isDark ? 'bg-[#0a0a0f]' : 'bg-white'}`}>
      {/* Hero Section */}
      <section className="relative w-full max-w-[1920px] mx-auto aspect-video overflow-hidden bg-gray-100 mt-[9rem] md:mt-[11rem]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/share.jpeg"
            alt="Reviews"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Review Form */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className={`p-8 rounded-2xl ${isDark ? 'bg-white/[0.02] border border-white/[0.06]' : 'bg-white border border-gray-200 shadow-xl shadow-gray-100/50'}`}>
                <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Write Your Review</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Star Rating */}
                  <div>
                    <label className={`block text-sm font-medium mb-3 ${isDark ? 'text-white/80' : 'text-gray-700'}`}>
                      {t('review.rating')} *
                    </label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <motion.button
                          key={star}
                          type="button"
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHoveredRating(star)}
                          onMouseLeave={() => setHoveredRating(0)}
                          className="focus:outline-none"
                        >
                          <Star
                            className={`h-10 w-10 transition-colors ${star <= (hoveredRating || rating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : isDark ? 'text-white/20' : 'text-gray-300'
                              }`}
                          />
                        </motion.button>
                      ))}
                    </div>
                    {rating === 0 && (
                      <p className="text-sm text-red-400 mt-2">Please select a rating</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-white/80' : 'text-gray-700'}`}>
                        {t('contact.name')} *
                      </label>
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your Name"
                        className={`w-full px-4 py-3 rounded-xl transition-all focus:outline-none ${isDark ? 'bg-white/[0.03] border border-white/[0.08] text-white placeholder:text-white/30 focus:border-violet-500/50 focus:bg-white/[0.05]' : 'bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-violet-500 focus:bg-white'}`}
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-white/80' : 'text-gray-700'}`}>
                        {t('contact.email')} *
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className={`w-full px-4 py-3 rounded-xl transition-all focus:outline-none ${isDark ? 'bg-white/[0.03] border border-white/[0.08] text-white placeholder:text-white/30 focus:border-violet-500/50 focus:bg-white/[0.05]' : 'bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-violet-500 focus:bg-white'}`}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-white/80' : 'text-gray-700'}`}>
                        Company Name
                      </label>
                      <input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        className={`w-full px-4 py-3 rounded-xl transition-all focus:outline-none ${isDark ? 'bg-white/[0.03] border border-white/[0.08] text-white placeholder:text-white/30 focus:border-violet-500/50 focus:bg-white/[0.05]' : 'bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-violet-500 focus:bg-white'}`}
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-white/80' : 'text-gray-700'}`}>
                        Service Used *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 rounded-xl transition-all focus:outline-none ${isDark ? 'bg-white/[0.03] border border-white/[0.08] text-white focus:border-violet-500/50 focus:bg-white/[0.05]' : 'bg-gray-50 border border-gray-200 text-gray-900 focus:border-violet-500 focus:bg-white'}`}
                      >
                        <option value="" className={isDark ? 'bg-[#0a0a0f]' : 'bg-white'}>Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service} className={isDark ? 'bg-[#0a0a0f]' : 'bg-white'}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-white/80' : 'text-gray-700'}`}>
                      Your Review *
                    </label>
                    <textarea
                      name="review"
                      value={formData.review}
                      onChange={handleChange}
                      required
                      placeholder="Share your experience working with us..."
                      rows={5}
                      className={`w-full px-4 py-3 rounded-xl transition-all focus:outline-none resize-none ${isDark ? 'bg-white/[0.03] border border-white/[0.08] text-white placeholder:text-white/30 focus:border-violet-500/50 focus:bg-white/[0.05]' : 'bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-violet-500 focus:bg-white'}`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || rating === 0}
                    className="w-full py-4 bg-violet-500 text-white font-semibold rounded-xl hover:bg-violet-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin">⏳</span>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        {t('review.submit')}
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Recent Reviews */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Recent Reviews</h2>
              <div className="space-y-6">
                {recentReviews.map((review, index) => (
                  <motion.div
                    key={review.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className={`p-6 rounded-2xl transition-all ${isDark ? 'bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-violet-500/20' : 'bg-white border border-gray-200 hover:bg-gray-50 hover:border-violet-300 shadow-lg shadow-gray-100/50'}`}>
                      <div className="flex items-start gap-4">
                        <Quote className={`h-8 w-8 flex-shrink-0 ${isDark ? 'text-violet-500/30' : 'text-violet-300'}`} />
                        <div>
                          <div className="flex gap-1 mb-2">
                            {Array.from({ length: review.rating }).map((_, i) => (
                              <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <p className={`mb-4 italic ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                            "{review.review}"
                          </p>
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{review.name}</h4>
                              <p className={`text-sm ${isDark ? 'text-white/40' : 'text-gray-500'}`}>
                                {review.company}
                              </p>
                            </div>
                            <div className="text-right">
                              <span className={`text-xs px-3 py-1 rounded-full border ${isDark ? 'bg-violet-500/10 text-violet-400 border-violet-500/20' : 'bg-violet-100 text-violet-600 border-violet-200'}`}>
                                {review.service}
                              </span>
                              <p className={`text-xs mt-1 ${isDark ? 'text-white/40' : 'text-gray-500'}`}>
                                {review.date}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className={`text-center p-4 rounded-xl ${isDark ? 'bg-white/[0.02] border border-white/[0.06]' : 'bg-white border border-gray-200 shadow-lg shadow-gray-100/50'}`}>
                  <div className={`text-3xl font-bold ${isDark ? 'text-violet-400' : 'text-violet-600'}`}>4.9</div>
                  <div className="flex justify-center gap-0.5 my-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className={`text-xs ${isDark ? 'text-white/50' : 'text-gray-500'}`}>Average Rating</p>
                </div>
                <div className={`text-center p-4 rounded-xl ${isDark ? 'bg-white/[0.02] border border-white/[0.06]' : 'bg-white border border-gray-200 shadow-lg shadow-gray-100/50'}`}>
                  <div className={`text-3xl font-bold ${isDark ? 'text-violet-400' : 'text-violet-600'}`}>450+</div>
                  <ThumbsUp className="h-4 w-4 mx-auto my-1 text-green-400" />
                  <p className={`text-xs ${isDark ? 'text-white/50' : 'text-gray-500'}`}>Happy Clients</p>
                </div>
                <div className={`text-center p-4 rounded-xl ${isDark ? 'bg-white/[0.02] border border-white/[0.06]' : 'bg-white border border-gray-200 shadow-lg shadow-gray-100/50'}`}>
                  <div className={`text-3xl font-bold ${isDark ? 'text-violet-400' : 'text-violet-600'}`}>98%</div>
                  <CheckCircle className="h-4 w-4 mx-auto my-1 text-green-400" />
                  <p className={`text-xs ${isDark ? 'text-white/50' : 'text-gray-500'}`}>Satisfaction</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReviewPage;
