import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider, useApp } from '@/context/AppContext';
import { AnimatePresence, motion } from 'framer-motion';

// Components
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AIChat from '@/components/AIChat';
import LoadingScreen from '@/components/LoadingScreen';
import CountryMarquee from '@/components/CountryMarquee';
import ScrollToTop from '@/components/ScrollToTop';

// Pages
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ServicesPage from '@/pages/ServicesPage';
import ServiceDetailPage from '@/pages/ServiceDetailPage';
import ContactPage from '@/pages/ContactPage';
import ReviewPage from '@/pages/ReviewPage';

// Page transition wrapper
const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
};

// Main App Content
const AppContent: React.FC = () => {
  const { isLoading, theme } = useApp();
  const isDark = theme === 'dark';

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <ScrollToTop />
      <div className={`flex flex-col min-h-screen transition-colors duration-300 w-full overflow-x-hidden ${isDark ? 'bg-[#110B2E] text-white' : 'bg-white text-[#281E5A]'}`}>
        <Navbar />

        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route
                path="/"
                element={
                  <PageWrapper>
                    <HomePage />
                  </PageWrapper>
                }
              />
              <Route
                path="/about"
                element={
                  <PageWrapper>
                    <AboutPage />
                  </PageWrapper>
                }
              />
              <Route
                path="/services"
                element={
                  <PageWrapper>
                    <ServicesPage />
                  </PageWrapper>
                }
              />
              <Route
                path="/services/:id"
                element={
                  <PageWrapper>
                    <ServiceDetailPage />
                  </PageWrapper>
                }
              />
              <Route
                path="/contact"
                element={
                  <PageWrapper>
                    <ContactPage />
                  </PageWrapper>
                }
              />
              <Route
                path="/review"
                element={
                  <PageWrapper>
                    <ReviewPage />
                  </PageWrapper>
                }
              />
            </Routes>
          </AnimatePresence>
        </main>

        <div className={`w-full px-4 md:px-6 py-3 md:py-4 text-center ${isDark ? 'bg-black' : 'bg-gray-50'}`}>
          <p className="font-semibold tracking-wider uppercase text-xs" style={{ color: isDark ? '#f59e0b' : '#62109F' }}>
            Trusted by Brands Worldwide
          </p>
        </div>
        <CountryMarquee />
        <Footer />
        <AIChat />
      </div>
    </Router>
  );
};

// App with Provider
const App: React.FC = () => {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
};

export default App;
