import React, { useState, useEffect } from 'react';
import { ArrowRight, Shield, Zap, Layers, BarChart3, Globe2, CheckCircle2, Wallet, Lock, Cpu, Building2, MessageSquare, Calendar, Bot, CreditCard, LineChart, Settings, Database } from 'lucide-react';
import emailjs from '@emailjs/browser';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [logoClicks, setLogoClicks] = useState<number>(0);
  const [showDetailedContent, setShowDetailedContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (logoClicks > 0 && logoClicks < 5) {
        setLogoClicks(0);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [logoClicks]);

  useEffect(() => {
    if (logoClicks === 5) {
      setShowDetailedContent(true);
      setLogoClicks(0);
    }
  }, [logoClicks]);

  const handleLogoClick = () => {
    setLogoClicks(prev => prev + 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        'service_3cqfs13',
        'template_x6d8n9c',
        {
          to_email: 'vedant.agarwal312@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        '_Ya88Lmr8EK5VfPFm'
      );
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    }
    setIsSubmitting(false);
  };

  const handleGetStarted = () => {
    window.location.href = '#pricing';
  };

  const handleScheduleMeeting = () => {
    window.open('https://calendly.com/your-calendly-link', '_blank');
  };

  const getFeatures = () => {
    if (showDetailedContent) {
      return [
        {
          icon: <Wallet className="w-8 h-8 text-purple-400" />,
          title: "Unified AI Fund Pool",
          description: "Manage all AI tool payments from a single centralized fund. No more separate wallets for each service."
        },
        {
          icon: <Bot className="w-8 h-8 text-purple-400" />,
          title: "AI Agent Spending Control",
          description: "Allocate budgets to autonomous AI employees with preset spending limits and approval workflows."
        },
        {
          icon: <LineChart className="w-8 h-8 text-purple-400" />,
          title: "AI Cost Analytics",
          description: "Real-time insights into AI tool usage, spending patterns, and cost optimization opportunities."
        },
        {
          icon: <Settings className="w-8 h-8 text-purple-400" />,
          title: "Automated Transactions",
          description: "Enable AI services to request and receive funds dynamically based on usage patterns."
        },
        {
          icon: <Database className="w-8 h-8 text-purple-400" />,
          title: "Multi-Payment Support",
          description: "Process payments via fiat, crypto, UPI, and AI-specific tokens like OpenAI credits."
        },
        {
          icon: <Shield className="w-8 h-8 text-purple-400" />,
          title: "Enterprise Controls",
          description: "Set budgets, approval thresholds, and spending limits across departments and AI agents."
        }
      ];
    }
    return [
      {
        icon: <Wallet className="w-8 h-8 text-purple-400" />,
        title: "Unified Fund Pool",
        description: "Manage all service payments from a single centralized fund. No more separate wallets."
      },
      {
        icon: <LineChart className="w-8 h-8 text-purple-400" />,
        title: "Cost Analytics",
        description: "Real-time insights into service usage, spending patterns, and cost optimization opportunities."
      },
      {
        icon: <Settings className="w-8 h-8 text-purple-400" />,
        title: "Automated Transactions",
        description: "Enable services to request and receive funds dynamically based on usage patterns."
      },
      {
        icon: <Database className="w-8 h-8 text-purple-400" />,
        title: "Multi-Payment Support",
        description: "Process payments via multiple payment methods including fiat, crypto, and UPI."
      },
      {
        icon: <Shield className="w-8 h-8 text-purple-400" />,
        title: "Enterprise Controls",
        description: "Set budgets, approval thresholds, and spending limits across departments."
      },
      {
        icon: <Globe2 className="w-8 h-8 text-purple-400" />,
        title: "Global Compatibility",
        description: "Support for international payments and multiple currency conversions."
      }
    ];
  };

  const getSolutions = () => {
    if (showDetailedContent) {
      return [
        {
          icon: <Building2 className="w-12 h-12 text-purple-400" />,
          title: "Enterprise AI Teams",
          description: "Centralized fund management for large-scale AI operations and autonomous AI employees.",
          features: ["Departmental budgeting", "Approval workflows", "Cost center tracking"]
        },
        {
          icon: <Bot className="w-12 h-12 text-purple-400" />,
          title: "AI Research Labs",
          description: "Flexible fund allocation for AI experimentation and model development.",
          features: ["Usage-based billing", "Resource optimization", "Budget controls"]
        },
        {
          icon: <Cpu className="w-12 h-12 text-purple-400" />,
          title: "AI-First Startups",
          description: "Streamlined AI tool payments and autonomous agent fund management.",
          features: ["Quick integration", "Scalable pricing", "Real-time analytics"]
        }
      ];
    }
    return [
      {
        icon: <Building2 className="w-12 h-12 text-purple-400" />,
        title: "Enterprise Teams",
        description: "Centralized fund management for large-scale operations.",
        features: ["Departmental budgeting", "Approval workflows", "Cost center tracking"]
      },
      {
        icon: <Globe2 className="w-12 h-12 text-purple-400" />,
        title: "Digital Services",
        description: "Flexible fund allocation for service management.",
        features: ["Usage-based billing", "Resource optimization", "Budget controls"]
      },
      {
        icon: <Layers className="w-12 h-12 text-purple-400" />,
        title: "Modern Startups",
        description: "Streamlined payment management and fund allocation.",
        features: ["Quick integration", "Scalable pricing", "Real-time analytics"]
      }
    ];
  };

  const getCodeExample = () => {
    if (showDetailedContent) {
      return `// Initialize Vora
const vora = new Vora({
  apiKey: 'your_api_key'
});

// Configure AI agent budget
await vora.configureAgent({
  agentId: 'ai_assistant_1',
  budget: {
    monthly: 1000,
    perTransaction: 50
  },
  approvalRequired: amount => amount > 50
});

// Process AI service payment
const payment = await vora.processPayment({
  service: 'openai_api',
  amount: 25.50,
  metadata: {
    purpose: 'model_inference',
    department: 'research'
  }
});`;
    }
    return `// Initialize Vora
const vora = new Vora({
  apiKey: 'your_api_key'
});

// Configure service budget
await vora.configureService({
  serviceId: 'service_1',
  budget: {
    monthly: 1000,
    perTransaction: 50
  },
  approvalRequired: amount => amount > 50
});

// Process service payment
const payment = await vora.processPayment({
  service: 'service_name',
  amount: 25.50,
  metadata: {
    purpose: 'service_usage',
    department: 'operations'
  }
});`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div 
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text cursor-pointer"
            onClick={handleLogoClick}
          >
            VORA
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="hover:text-purple-400 transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-purple-400 transition-colors">How It Works</a>
            <a href="#solutions" className="hover:text-purple-400 transition-colors">Solutions</a>
            <a href="#pricing" className="hover:text-purple-400 transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
          </div>
          <button onClick={handleGetStarted} className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20 z-0"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(101,37,247,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,56,156,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>

        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {showDetailedContent ? 'Unified AI Fund' : 'Unified Fund'}
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text"> Management Platform</span>
              </h1>
              <p className="text-xl text-gray-300 mb-12">
                {showDetailedContent ? 
                  'Centralize your AI tool payments, empower autonomous AI spending, and optimize your AI investments. One platform to manage funds across all your AI services and agentic AI employees.' :
                  'Simplify your service payments with our unified platform. Centralize your funds, automate transactions, and optimize spending across all your digital services.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={handleGetStarted} className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-full hover:opacity-90 transition-opacity flex items-center justify-center">
                  {showDetailedContent ? 'Start Managing AI Funds' : 'Start Managing Funds'} <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-purple-400 px-8 py-3 rounded-full hover:bg-purple-400/10 transition-colors">
                  View API Docs
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full aspect-[4/5] transform perspective-1000">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" 
                  alt={showDetailedContent ? "AI Fund Management Dashboard" : "Fund Management Dashboard"}
                  className="absolute inset-0 w-full h-full object-cover rounded-3xl transform rotate-y-10 rotate-x-10 shadow-2xl"
                />
                <div className="absolute -right-8 top-1/4 bg-gradient-to-br from-purple-500 to-pink-500 p-4 rounded-xl shadow-lg transform -rotate-6">
                  {showDetailedContent ? <Bot className="w-8 h-8 text-white" /> : <Wallet className="w-8 h-8 text-white" />}
                </div>
                <div className="absolute -left-8 bottom-1/4 bg-white p-4 rounded-xl shadow-lg transform rotate-6">
                  <LineChart className="w-8 h-8 text-purple-500" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-3xl filter blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          {showDetailedContent ? 'Complete AI Financial Management' : 'Complete Financial Management'}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {getFeatures().map((feature, index) => (
            <div key={index} className="bg-gray-800/50 p-8 rounded-2xl hover:bg-gray-800 transition-colors">
              {feature.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="container mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          {showDetailedContent ? 'AI Financial Solutions for Every Need' : 'Solutions for Every Need'}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {getSolutions().map((solution, index) => (
            <div key={index} className="bg-gray-800/50 p-8 rounded-2xl">
              {solution.icon}
              <h3 className="text-2xl font-semibold mt-4 mb-2">{solution.title}</h3>
              <p className="text-gray-400 mb-4">{solution.description}</p>
              <ul className="space-y-2">
                {solution.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="container mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          {showDetailedContent ? 'Seamless AI Fund Management' : 'Seamless Fund Management'}
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {[
              {
                icon: <CreditCard className="w-6 h-6 text-purple-400" />,
                title: "1. Fund Your Account",
                description: "Add funds to your centralized Vora account using your preferred payment method."
              },
              {
                icon: <Settings className="w-6 h-6 text-purple-400" />,
                title: showDetailedContent ? "2. Configure AI Budgets" : "2. Configure Budgets",
                description: showDetailedContent ? 
                  "Set spending limits and approval workflows for AI services and autonomous agents." :
                  "Set spending limits and approval workflows for your services."
              },
              {
                icon: showDetailedContent ? <Bot className="w-6 h-6 text-purple-400" /> : <Database className="w-6 h-6 text-purple-400" />,
                title: showDetailedContent ? "3. Enable AI Transactions" : "3. Enable Transactions",
                description: showDetailedContent ?
                  "Let your AI tools and agents process payments automatically within set limits." :
                  "Let your services process payments automatically within set limits."
              },
              {
                icon: <LineChart className="w-6 h-6 text-purple-400" />,
                title: "4. Monitor & Optimize",
                description: showDetailedContent ?
                  "Track AI spending patterns and optimize fund allocation in real-time." :
                  "Track spending patterns and optimize fund allocation in real-time."
              }
            ].map((step, index) => (
              <div key={index} className="flex gap-4">
                {step.icon}
                <div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-8 rounded-2xl">
            <pre className="text-sm text-gray-300 overflow-x-auto">
              <code>{getCodeExample()}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          {showDetailedContent ? 'Enterprise AI Fund Management' : 'Enterprise Fund Management'}
        </h2>
        <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
          {showDetailedContent ?
            'Tailored pricing based on your AI operations scale and transaction volume. Schedule a consultation to discuss your specific needs.' :
            'Tailored pricing based on your operations scale and transaction volume. Schedule a consultation to discuss your specific needs.'}
        </p>
        <div className="bg-gray-800/50 max-w-3xl mx-auto p-8 rounded-2xl">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-semibold">Custom Enterprise Solution</h3>
            <ul className="space-y-4 text-left max-w-xl mx-auto mb-8">
              {[
                showDetailedContent ? "Unified AI fund management dashboard" : "Unified fund management dashboard",
                showDetailedContent ? "Custom AI agent spending controls" : "Custom spending controls",
                "Advanced analytics and cost optimization",
                "Multi-payment method support",
                "Custom approval workflows",
                "Dedicated account manager",
                "24/7 priority support",
                "Enterprise SLA"
              ].map((feature, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={handleScheduleMeeting}
              className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-full hover:opacity-90 transition-opacity inline-flex items-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Get in Touch
          </h2>
          <p className="text-gray-400 text-center mb-12">
            {showDetailedContent ?
              'Ready to transform your AI financial management? Our team is here to help you get started.' :
              'Ready to transform your financial management? Our team is here to help you get started.'}
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                rows={4}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-full hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {submitStatus === 'success' && (
              <p className="text-green-400 text-center">Message sent successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-400 text-center">Failed to send message. Please try again.</p>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-purple-400">Features</a></li>
                <li><a href="#solutions" className="hover:text-purple-400">Solutions</a></li>
                <li><a href="#pricing" className="hover:text-purple-400">Pricing</a></li>
                <li><a href="#" className="hover:text-purple-400">API Documentation</a></li>
                <li><a href="#" className="hover:text-purple-400">SDK Reference</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-purple-400">About</a></li>
                <li><a href="#" className="hover:text-purple-400">Blog</a></li>
                <li><a href="#" className="hover:text-purple-400">Careers</a></li>
                <li><a href="#" className="hover:text-purple-400">Press</a></li>
                <li><a href="#contact" className="hover:text-purple-400">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-purple-400">Support</a></li>
                <li><a href="#" className="hover:text-purple-400">Help Center</a></li>
                <li><a href="#" className="hover:text-purple-400">Case Studies</a></li>
                <li><a href="#" className="hover:text-purple-400">Status</a></li>
                <li><a href="#" className="hover:text-purple-400">Developer Hub</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-purple-400">Terms</a></li>
                <li><a href="#" className="hover:text-purple-400">Privacy</a></li>
                <li><a href="#" className="hover:text-purple-400">Security</a></li>
                <li><a href="#" className="hover:text-purple-400">Compliance</a></li>
                <li><a href="#" className="hover:text-purple-400">Trust & Safety</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            © {new Date().getFullYear()} Vora. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;