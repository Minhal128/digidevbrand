import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { X, Send, Sparkles, Bot } from 'lucide-react';
import './AIChat.css';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  options?: string[];
}

interface LeadData {
  name?: string;
  email?: string;
  projectType?: string;
}

interface ConversationContext {
  messageCount: number;
  mentionedServices: string[];
  leadData: LeadData;
  language: 'en' | 'ar';
}

const AIChat: React.FC = () => {
  const { isChatOpen, setIsChatOpen } = useApp();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "👋 Welcome to DigiDevBrand!\n\nI'm your AI assistant available 24/7. How can I help you grow your digital presence?",
      isBot: true,
      options: ["🚀 Our Services", "💰 Pricing", "📞 Contact Us", "📝 Get Quote"]
    }
  ]);
  const [currentState, setCurrentState] = useState<string>('start');
  const [inputValue, setInputValue] = useState<string>('');
  const [context, setContext] = useState<ConversationContext>({
    messageCount: 0,
    mentionedServices: [],
    leadData: {},
    language: 'en'
  });

  // Knowledge Base - Comprehensive AI Training Data
  const knowledgeBase = {
    company: {
      name: 'DigiDevBrand',
      tagline: 'Full-Stack Digital Solutions | Enterprise Trusted',
      phone: '+1 209 508 5566',
      email: 'info@digidevbrand.com',
      website: 'www.digidevbrand.com',
      philosophy: 'We are a full-service digital agency providing end-to-end solutions for businesses worldwide.',
      offices: ['USA'],
    },
    services: {
      'Web Development': {
        description: 'Responsive, high-performance websites and web applications',
        price: '$199+',
        features: ['Responsive Design', 'E-Commerce Integration', 'Fast Performance', 'SEO Optimized'],
        deliveryTime: '1-8 weeks'
      },
      'SEO & Digital Marketing': {
        description: 'Boost your online visibility and drive organic traffic',
        price: '$299/month',
        features: ['On-Page SEO', 'Technical SEO', 'Link Building', 'Monthly Reports'],
        deliveryTime: '6-8 weeks for results'
      },
      'Logo & Brand Identity': {
        description: 'Create a memorable brand that stands out',
        price: '$99+',
        features: ['Multiple Concepts', 'Unlimited Revisions', 'Brand Guidelines', 'Social Media Kit'],
        deliveryTime: '3-7 business days'
      },
      'E-Commerce Solutions': {
        description: 'Launch or upgrade your online store',
        price: '$399+',
        features: ['Shopify Setup', 'WooCommerce', 'Payment Integration', 'Inventory Management'],
        deliveryTime: '2-6 weeks'
      },
      'Content Marketing': {
        description: 'Engage your audience with compelling content',
        price: 'Custom Quote',
        features: ['Blog Writing', 'Social Media Content', 'Video Scripts', 'Email Campaigns']
      },
      'Cyber Security': {
        description: 'Protect your business from digital threats',
        price: 'Custom Quote',
        features: ['Security Audits', 'SSL Certificates', 'Firewall Setup', '24/7 Monitoring']
      }
    },
    pricing: {
      startup: { name: 'Startup', price: '$394', features: 'Perfect for new businesses' },
      professional: { name: 'Professional', price: '$844', features: 'Growing businesses' },
      elite: { name: 'Elite', price: '$1,494+', features: 'Enterprise solutions' }
    }
  };

  const flow: Record<string, any> = {
    start: {
      message: "👋 Welcome to DigiDevBrand!\n\nI'm your AI assistant available 24/7. How can I help you grow your digital presence?",
      options: ["🚀 Our Services", "💰 Pricing", "📞 Contact Us", "📝 Get Quote"],
    },
    services: {
      message: "🎯 Our Comprehensive Digital Solutions:\n\n✨ Web Development - From $199\n🔍 SEO & Digital Marketing - $299/month\n🎨 Logo & Brand Identity - From $99\n🛍️ E-Commerce Solutions - From $399\n📝 Content Marketing - Custom\n🔐 Cyber Security - Custom\n\nWhich service interests you?",
      options: ["Web Dev", "SEO", "Branding", "E-Commerce", "Content", "Security", "Back"],
    },
    pricing: {
      message: "💎 Our Flexible Pricing Plans:\n\n🌟 Startup: $394\n💼 Professional: $844\n🏆 Elite: $1,494+\n\nCustom quotes available for enterprise solutions!\n\nWhich plan works best for you?",
      options: ["Startup", "Professional", "Elite", "Custom Quote", "Back"],
    },
    contact: {
      message: "📞 Get in Touch:\n\n☎️ Phone: +1 209 508 5566\n📧 Email: info@digidevbrand.com\n🌐 Website: www.digidevbrand.com\n\n🌍 Office Location: USA\n24/7 Support Available!\n\nHow can we help?",
      options: ["Schedule Call", "Send Email", "Talk to Human", "Back"],
    },
    quote: {
      message: "📋 Let's Create Your Perfect Solution!\n\nTo provide you with an accurate quote, I'd love to know more about your project.\n\nWhat type of service are you interested in?",
      options: ["Web Development", "SEO/Marketing", "Logo Design", "E-Commerce", "Other"],
    },
    webdev: {
      message: "🌐 Web Development Services:\n\n✅ Responsive Design\n✅ E-Commerce Integration\n✅ Fast Performance & SEO Optimization\n\n💰 Starting from $199\n⏱️ Delivery: 1-8 weeks\n\nReady to discuss your website project?",
      options: ["Get Started", "Learn More", "Back"],
    },
    seo: {
      message: "🔍 SEO & Digital Marketing Services:\n\n✅ On-Page & Technical SEO\n✅ Link Building\n✅ Monthly Performance Reports\n\n💰 From $299/month\n📈 Results in 6-8 weeks\n\nLet's boost your online visibility!",
      options: ["Start Now", "Learn More", "Back"],
    },
    branding: {
      message: "🎨 Logo & Brand Identity:\n\n✅ Multiple Design Concepts\n✅ Unlimited Revisions\n✅ Brand Guidelines & Social Media Kit\n\n💰 From $99\n⏱️ Delivery: 3-7 business days\n\nReady to create your brand?",
      options: ["Get Started", "View Portfolio", "Back"],
    },
    ecommerce: {
      message: "🛍️ E-Commerce Solutions:\n\n✅ Shopify & WooCommerce Setup\n✅ Payment Gateway Integration\n✅ Inventory Management\n\n💰 From $399\n⏱️ Delivery: 2-6 weeks\n\nLet's launch your store!",
      options: ["Get Started", "See Demo", "Back"],
    },
  };

  // Detect language from user input
  const detectLanguage = (text: string): 'en' | 'ar' => {
    const arabicRegex = /[\u0600-\u06FF]/g;
    return arabicRegex.test(text) ? 'ar' : 'en';
  };

  // Generate AI response based on context
  const generateAIResponse = (userInput: string): { text: string; options?: string[] } => {
    const input = userInput.toLowerCase();
    const lang = detectLanguage(userInput);

    // Update context
    setContext(prev => ({
      ...prev,
      messageCount: prev.messageCount + 1,
      language: lang
    }));

    // Service recognition
    const serviceKeywords = {
      'web dev': 'Web Development',
      'website': 'Web Development',
      'seo': 'SEO & Digital Marketing',
      'marketing': 'SEO & Digital Marketing',
      'branding': 'Logo & Brand Identity',
      'logo': 'Logo & Brand Identity',
      'ecommerce': 'E-Commerce Solutions',
      'store': 'E-Commerce Solutions',
      'content': 'Content Marketing',
      'security': 'Cyber Security'
    };

    // Check for mentioned services
    let mentionedService = '';
    for (const [keyword, service] of Object.entries(serviceKeywords)) {
      if (input.includes(keyword)) {
        mentionedService = service;
        setContext(prev => ({
          ...prev,
          mentionedServices: [...new Set([...prev.mentionedServices, service])]
        }));
        break;
      }
    }

    // Lead capture after 2-3 exchanges
    if (context.messageCount === 3 && !context.leadData.name) {
      return {
        text: "Before we continue, I'd love to know who I'm speaking with! 👋\n\nWhat's your name?",
        options: undefined
      };
    }

    if (context.messageCount === 4 && !context.leadData.email) {
      return {
        text: `Nice to meet you! 😊\n\nWhat's your email address so we can follow up with you?`,
        options: undefined
      };
    }

    if (context.messageCount === 5 && !context.leadData.projectType) {
      return {
        text: `Great! What type of project are you looking to work on?`,
        options: ["Web Development", "SEO/Marketing", "Branding", "E-Commerce", "Other"]
      };
    }

    // Service-specific responses
    if (mentionedService) {
      const service = knowledgeBase.services[mentionedService as keyof typeof knowledgeBase.services];
      if (service) {
        return {
          text: `${mentionedService}:\n\n${service.description}\n\n💰 Price: ${service.price}${'deliveryTime' in service && service.deliveryTime ? `\n⏱️ Delivery: ${service.deliveryTime}` : ''}\n\nFeatures:\n${service.features.map(f => `✅ ${f}`).join('\n')}\n\nWould you like to learn more?`,
          options: ["Get Quote", "Learn More", "Contact Us", "Back"]
        };
      }
    }

    // General inquiries
    if (input.includes('pricing') || input.includes('price') || input.includes('cost')) {
      return {
        text: "💰 Our pricing varies by service and project scope:\n\nStartup: $394\nProfessional: $844\nElite: $1,494+\n\nWould you like a custom quote for your specific project?",
        options: ["Get Custom Quote", "View Services", "Contact Us"]
      };
    }

    if (input.includes('contact') || input.includes('call') || input.includes('email')) {
      return {
        text: `📞 Contact DigiDevBrand:\n\n☎️ Phone: ${knowledgeBase.company.phone}\n📧 Email: ${knowledgeBase.company.email}\n🌐 Website: ${knowledgeBase.company.website}\n\nWe're located in USA with 24/7 support!`,
        options: ["Schedule Call", "Send Message", "Back"]
      };
    }

    if (input.includes('talk to human') || input.includes('speak to')) {
      return {
        text: "🤝 I'm connecting you with our human team...\n\nWe've sent an alert to our team. They'll respond to you shortly at info@digidevbrand.com or +1 209 508 5566\n\n⏱️ Average response time: 5-15 minutes during business hours",
        options: ["Return to Menu", "View Services", "Contact Us"]
      };
    }

    // Default helpful response
    return {
      text: "That's a great question! 🤔\n\nTo better assist you, could you tell me more about:\n\n• The service you're interested in\n• Your project type\n• Your budget range\n\nOr feel free to explore our services below!",
      options: ["🚀 Our Services", "💰 Pricing", "📞 Contact Us", "📝 Get Quote"]
    };
  };

  const getNextState = (message: string): string => {
    if (message.includes("Services")) return "services";
    if (message.includes("Pricing")) return "pricing";
    if (message.includes("Contact")) return "contact";
    if (message.includes("Quote")) return "quote";
    if (message.includes("Web Dev")) return "webdev";
    if (message.includes("SEO")) return "seo";
    if (message.includes("Branding")) return "branding";
    if (message.includes("E-Commerce")) return "ecommerce";
    if (message.includes("Back")) return "start";
    return currentState;
  };

  const handleOptionClick = (option: string) => {
    const userMsg: Message = {
      id: Date.now().toString(),
      text: option,
      isBot: false,
    };
    setMessages(prev => [...prev, userMsg]);

    const nextState = getNextState(option);
    setCurrentState(nextState);

    setTimeout(() => {
      const botResponse = flow[nextState];
      if (botResponse) {
        const botMsg: Message = {
          id: (Date.now() + 1).toString(),
          text: botResponse.message,
          isBot: true,
          options: botResponse.options,
        };
        setMessages(prev => [...prev, botMsg]);
      }
    }, 300);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
    };
    setMessages(prev => [...prev, userMsg]);

    // Extract lead data from message
    if (context.messageCount === 3 && !context.leadData.name) {
      setContext(prev => ({
        ...prev,
        leadData: { ...prev.leadData, name: inputValue }
      }));
    } else if (context.messageCount === 4 && !context.leadData.email) {
      setContext(prev => ({
        ...prev,
        leadData: { ...prev.leadData, email: inputValue }
      }));
    } else if (context.messageCount === 5 && !context.leadData.projectType) {
      setContext(prev => ({
        ...prev,
        leadData: { ...prev.leadData, projectType: inputValue }
      }));
    }

    setInputValue('');

    setTimeout(() => {
      const aiResponse = generateAIResponse(inputValue);
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse.text,
        isBot: true,
        options: aiResponse.options,
      };
      setMessages(prev => [...prev, botMsg]);
    }, 400);
  };

  if (!isChatOpen) {
    return (
      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 text-white shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 flex items-center justify-center hover:scale-110 transition-all duration-300 group border-2 border-yellow-400/40 hover:border-yellow-400/60"
        aria-label="Open chat"
      >
        {/* Main Bot Icon */}
        <Bot className="h-8 w-8 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]" />
        
        {/* Sparkles accent */}
        <Sparkles className="h-4 w-4 text-yellow-300 absolute top-2 right-2 animate-pulse" />
        
        {/* Online indicator */}
        <div className="absolute -top-1 -right-1 h-5 w-5 bg-green-500 rounded-full border-2 border-white animate-pulse">
          <div className="h-2 w-2 bg-white rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-[95vw] sm:w-[420px] max-w-[420px] h-[85vh] sm:h-[600px] max-h-[600px] rounded-3xl bg-gradient-to-b from-[#1a1235] to-[#120d2a] border border-violet-500/30 shadow-2xl shadow-violet-500/30 overflow-hidden flex flex-col animate-slideUp"
      style={{ maxWidth: 'calc(100vw - 3rem)' }}
    >
      <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 p-4 flex items-center justify-between relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.1),transparent)] animate-shimmer" />
        <div className="flex items-center gap-3 relative z-10">
          <div className="h-10 w-10 rounded-lg bg-purple-700/40 backdrop-blur-sm flex items-center justify-center border border-yellow-400/50 relative">
            <Bot className="h-6 w-6 text-yellow-400 drop-shadow-[0_0_6px_rgba(250,204,21,0.6)]" />
            <Sparkles className="h-3 w-3 text-yellow-300 absolute -top-0.5 -right-0.5 animate-pulse" />
          </div>
          <div>
            <h4 className="font-bold text-white text-sm flex items-center gap-1">
              DigiDevBrand AI
              <Sparkles className="h-3 w-3 text-yellow-300 animate-pulse" />
            </h4>
            <p className="text-xs text-white/70">🟢 24/7 Support</p>
          </div>
        </div>
        <button
          onClick={() => setIsChatOpen(false)}
          className="p-2 hover:bg-white/20 rounded-lg transition-colors relative z-10"
        >
          <X className="h-5 w-5 text-white" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto bg-[#1a1235] p-4 space-y-4 scroll-smooth">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
            <div
              className={`max-w-xs px-4 py-3 rounded-2xl whitespace-pre-wrap break-words ${msg.isBot
                ? 'bg-gradient-to-r from-violet-600/30 to-purple-600/30 text-white border border-violet-500/50'
                : 'bg-gradient-to-r from-violet-600 to-purple-600 text-white'
                }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {messages.length > 0 && messages[messages.length - 1].options && (
          <div className="mt-4 space-y-2">
            {messages[messages.length - 1].options?.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleOptionClick(option)}
                className="w-full px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 text-white hover:shadow-lg hover:shadow-violet-500/50 hover:scale-105 border border-violet-400/50"
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>

      <form onSubmit={handleSendMessage} className="p-3 border-t border-white/10 bg-[#0d0d14]/80 backdrop-blur-sm flex gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:border-violet-500 transition-colors"
        />
        <button
          type="submit"
          className="px-5 py-2 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-violet-500/50 transition-all hover:scale-105 flex items-center gap-2"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};

export default AIChat;
