import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Award, TrendingUp, Users, Calendar, ArrowRight, 
  Play, ChevronLeft, ChevronRight, Menu, X 
} from 'lucide-react';
import { cn } from './utils/cn';

interface CaseStudy {
  id: number;
  title: string;
  client: string;
  industry: string;
  image: string;
  metrics: {
    traffic: string;
    leads: string;
    roi: string;
  };
  description: string;
  results: string[];
  category: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Web Summit 2024",
    client: "Web Summit",
    industry: "Technology",
    image: "https://picsum.photos/id/1015/600/400",
    metrics: {
      traffic: "487%",
      leads: "12.4k",
      roi: "14.2x"
    },
    description: "Complete SEO overhaul for one of the world's largest tech conferences resulting in record breaking attendance.",
    results: ["Organic traffic increased by 487%", "15,000+ new email signups", "Top 3 ranking for 42 event related keywords"],
    category: "tech"
  },
  {
    id: 2,
    title: "MEDICA 2023",
    client: "MEDICA",
    industry: "Healthcare",
    image: "https://picsum.photos/id/106/600/400",
    metrics: {
      traffic: "312%",
      leads: "8.9k",
      roi: "9.8x"
    },
    description: "Strategic content and technical SEO campaign for the world's largest medical trade fair.",
    results: ["Tripled qualified leads", "Featured in 27 industry publications", "Rank #1 for 'medical conference europe'"],
    category: "healthcare"
  },
  {
    id: 3,
    title: "CES 2025 Preview",
    client: "Consumer Technology Association",
    industry: "Consumer Electronics",
    image: "https://picsum.photos/id/160/600/400",
    metrics: {
      traffic: "265%",
      leads: "19.2k",
      roi: "21x"
    },
    description: "Integrated SEO, content syndication and influencer outreach for North America's biggest tech event.",
    results: ["19,200+ booth visitor pre-registrations", "Record media coverage", "Dominant SERP presence"],
    category: "tech"
  },
  {
    id: 4,
    title: "Art Basel Miami",
    client: "Art Basel",
    industry: "Arts & Culture",
    image: "https://picsum.photos/id/201/600/400",
    metrics: {
      traffic: "178%",
      leads: "4.1k",
      roi: "6.4x"
    },
    description: "Premium event SEO and digital PR strategy for the world's most prestigious art show.",
    results: ["VIP collector registrations up 340%", "Global media mentions increased 4x", "Strong year-round brand awareness"],
    category: "entertainment"
  },
  {
    id: 5,
    title: "World Economic Forum",
    client: "WEF",
    industry: "Finance",
    image: "https://picsum.photos/id/29/600/400",
    metrics: {
      traffic: "421%",
      leads: "6.7k",
      roi: "11.9x"
    },
    description: "High authority link building and content optimization for the annual Davos meeting.",
    results: ["Secured 87 high-authority backlinks", "Positioned as THE thought leadership event", "Significant increase in C-level attendance"],
    category: "finance"
  },
  {
    id: 6,
    title: "Ultra Music Festival",
    client: "Ultra Music",
    industry: "Entertainment",
    image: "https://picsum.photos/id/1016/600/400",
    metrics: {
      traffic: "356%",
      leads: "28k",
      roi: "18.7x"
    },
    description: "Festival SEO, ticket funnel optimization and social amplification campaign.",
    results: ["Record ticket sales in 11 minutes", "28k organic registrations", "Viral TikTok campaign with 41M views"],
    category: "entertainment"
  }
];

const industries = [
  { label: "All", value: "all" },
  { label: "Technology", value: "tech" },
  { label: "Healthcare", value: "healthcare" },
  { label: "Finance", value: "finance" },
  { label: "Entertainment", value: "entertainment" },
];

export default function App() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const filteredCases = selectedFilter === "all" 
    ? caseStudies 
    : caseStudies.filter(c => c.category === selectedFilter);

  const testimonials = [
    {
      quote: "WebTech Mart transformed how we approach digital visibility for our annual summit. We saw a 380% increase in qualified attendees from organic search alone.",
      name: "Dr. Elena Vasquez",
      role: "Director of Conferences, MEDTECH Alliance",
      company: "MEDTECH",
      avatar: "https://picsum.photos/id/64/128/128"
    },
    {
      quote: "The ROI on our SEO investment with WebTech Mart has been phenomenal. They truly understand the unique challenges of marketing B2B events.",
      name: "Marcus Chen",
      role: "VP Marketing, TechForward",
      company: "TechForward",
      avatar: "https://picsum.photos/id/91/128/128"
    },
    {
      quote: "Working with WebTech Mart was a game changer for Ultra. Their strategies helped us sell out in record time while building year-round buzz.",
      name: "Sarah Patel",
      role: "Head of Digital, Ultra Worldwide",
      company: "Ultra Music Festival",
      avatar: "https://picsum.photos/id/1005/128/128"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-zinc-950 text-white overflow-hidden">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/90 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl tracking-tighter">L</span>
              </div>
              <div>
                <div className="font-semibold text-2xl tracking-tighter">WebTech Mart</div>
                <div className="text-[10px] text-zinc-500 -mt-1">EVENT SEO</div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-10 text-sm font-medium">
              <a href="#services" className="hover:text-violet-400 transition-colors">Services</a>
              <a href="#case-studies" className="hover:text-violet-400 transition-colors">Case Studies</a>
              <a href="#process" className="hover:text-violet-400 transition-colors">Process</a>
              <a href="#insights" className="hover:text-violet-400 transition-colors">Insights</a>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <button 
                onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                className="px-6 py-2.5 text-sm font-medium border border-white/30 hover:border-white/70 rounded-2xl transition-all active:scale-95"
              >
                Free SEO Audit
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-2.5 bg-white text-zinc-900 rounded-2xl font-semibold flex items-center gap-2 hover:bg-white/90 transition-all active:scale-95"
              >
                Get in touch <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-3"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-white/10 bg-zinc-950"
            >
              <div className="px-6 py-8 flex flex-col gap-6 text-lg">
                <a href="#services" className="hover:text-violet-400" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
                <a href="#case-studies" className="hover:text-violet-400" onClick={() => setIsMobileMenuOpen(false)}>Case Studies</a>
                <a href="#process" className="hover:text-violet-400" onClick={() => setIsMobileMenuOpen(false)}>Our Process</a>
                <a href="#insights" className="hover:text-violet-400" onClick={() => setIsMobileMenuOpen(false)}>Insights</a>
                
                <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
                  <button 
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                    }}
                    className="w-full py-4 border border-white/30 rounded-3xl text-sm"
                  >
                    Free SEO Audit
                  </button>
                  <button 
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full py-4 bg-white text-black rounded-3xl font-semibold"
                  >
                    Contact Sales
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO */}
      <section className="min-h-screen pt-20 flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(at_50%_30%,rgba(124,58,237,0.15),transparent_70%)]"></div>
        
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-16 items-center relative z-10 pt-12">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-3xl text-xs tracking-[0.5px] mb-6">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              NOW BOOKING 2026 EVENTS
            </div>
            
            <h1 className="text-7xl md:text-[92px] leading-[0.95] font-semibold tracking-tighter mb-6">
              YOUR EVENT.<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400">VISIBLE.</span>
            </h1>
            
            <p className="max-w-lg text-2xl text-zinc-400 mb-10">
              We help the world's most important events dominate search, fill venues, and build lasting digital legacies.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-3 bg-white text-black px-10 h-16 rounded-3xl font-semibold text-lg group"
              >
                EXPLORE CASE STUDIES
                <div className="group-hover:-rotate-45 transition-transform">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex-1 md:flex-none border border-white/30 hover:bg-white/5 px-10 h-16 rounded-3xl font-medium flex items-center justify-center gap-3 text-lg transition-colors"
              >
                <Play className="w-5 h-5" /> WATCH 2-MIN VIDEO
              </motion.button>
            </div>

            <div className="mt-16 flex items-center gap-12 text-sm">
              <div>
                <div className="text-emerald-400 font-mono text-4xl font-semibold">184</div>
                <div className="text-zinc-500">EVENTS OPTIMIZED</div>
              </div>
              <div>
                <div className="text-emerald-400 font-mono text-4xl font-semibold">4.8×</div>
                <div className="text-zinc-500">AVERAGE ROI</div>
              </div>
              <div>
                <div className="text-emerald-400 font-mono text-4xl font-semibold">92%</div>
                <div className="text-zinc-500">RENEWAL RATE</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="md:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              <div className="aspect-[4/3] bg-zinc-900 rounded-[3.5rem] border border-white/10 overflow-hidden shadow-2xl shadow-black/80 relative">
                <img 
                  src="https://picsum.photos/id/1015/800/620" 
                  alt="Conference hall full of attendees" 
                  className="object-cover w-full h-full grayscale-[0.4]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black/90"></div>
                
                {/* Overlay metrics */}
                <div className="absolute bottom-8 left-8 right-8 bg-black/70 backdrop-blur-xl border border-white/20 p-6 rounded-3xl">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-emerald-400 text-xs tracking-widest mb-1">THIS MONTH</div>
                      <div className="text-5xl font-semibold tabular-nums">+184k</div>
                      <div className="text-zinc-400">organic visitors</div>
                    </div>
                    <div className="h-14 w-px bg-white/20"></div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-emerald-400 justify-end">
                        <TrendingUp className="w-5 h-5" /> 41%
                      </div>
                      <div className="text-sm text-white/70">from last event</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-8 right-8 px-5 py-2 bg-white/95 text-black text-xs font-mono rounded-2xl flex items-center gap-2 shadow-xl">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full animate-ping"></div>
                  RANKING #1
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -left-6 -top-6 bg-zinc-900 border border-violet-500/30 text-violet-400 text-xs px-4 py-2 rounded-3xl rotate-[-8deg] shadow-xl">
                1.4M ATTENDEES REACHED
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 flex flex-col items-center gap-3 text-xs tracking-[1px] text-zinc-500">
          SCROLL TO DISCOVER
          <motion.div 
            animate={{ y: [0, 12, 0] }} 
            transition={{ duration: 2, repeat: Infinity }}
            className="w-px h-12 bg-gradient-to-b from-transparent via-white/40 to-transparent"
          />
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="border-t border-b border-white/10 py-7 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8 opacity-60">
            <div className="font-mono text-xl tracking-[3px]">WEB SUMMIT</div>
            <div className="font-semibold text-3xl">CES</div>
            <div className="font-serif italic text-4xl">Art Basel</div>
            <div className="font-mono text-2xl">MEDICA</div>
            <div className="text-2xl font-bold tracking-tighter">WEF</div>
            <div className="text-xl">ULTRA</div>
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-28">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="uppercase tracking-[3px] text-xs font-medium text-violet-400 mb-3">WHAT WE DO BEST</div>
          <h2 className="text-6xl font-semibold tracking-tighter max-w-2xl">Specialized SEO built exclusively for live events</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <Search className="w-8 h-8" />,
              title: "Event SEO Domination",
              desc: "Technical audits, schema markup, local event SEO, and backlink strategies that get your conference ranking above competitors."
            },
            {
              icon: <Calendar className="w-8 h-8" />,
              title: "Content That Converts",
              desc: "Speaker spotlights, agenda deep-dives, location guides and thought leadership pieces that attract the exact decision makers you need."
            },
            {
              icon: <Users className="w-8 h-8" />,
              title: "Attendee Acquisition",
              desc: "Multi-channel campaigns combining SEO, paid search, social amplification, email nurturing and retargeting to fill every seat."
            }
          ].map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-zinc-900 border border-white/10 hover:border-violet-500/50 p-10 rounded-3xl transition-all duration-500 hover:-translate-y-3"
            >
              <div className="text-violet-400 mb-8 transition-transform group-hover:scale-110 inline-block">
                {service.icon}
              </div>
              <h3 className="text-3xl font-semibold tracking-tight mb-6">{service.title}</h3>
              <p className="text-zinc-400 leading-relaxed text-[15.2px]">{service.desc}</p>
              
              <div className="mt-12 pt-8 border-t border-white/10 text-xs flex items-center justify-between text-zinc-400 group-hover:text-white transition-colors">
                <span>LEARN MORE</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a href="#" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white">
            View all 7 specialized services <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section id="case-studies" className="bg-black py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="text-xs uppercase tracking-widest text-amber-400 mb-2">PROVEN RESULTS</div>
              <h2 className="text-6xl font-semibold tracking-tighter">Real events.<br />Real outcomes.</h2>
            </div>
            
            <div className="flex gap-2 mt-8 md:mt-0">
              {industries.map((industry) => (
                <button
                  key={industry.value}
                  onClick={() => setSelectedFilter(industry.value)}
                  className={cn(
                    "px-6 py-2 text-sm rounded-3xl transition-all border",
                    selectedFilter === industry.value 
                      ? "bg-white text-black border-white" 
                      : "border-white/30 hover:border-white/70"
                  )}
                >
                  {industry.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCases.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(index * 0.05, 0.6) }}
                onClick={() => setSelectedCase(study)}
                className="group cursor-pointer bg-zinc-900 rounded-3xl overflow-hidden border border-white/5 hover:border-white/30 transition-all duration-300"
              >
                <div className="relative h-64">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover transition-all group-hover:scale-110 duration-700"
                  />
                  <div className="absolute top-4 right-4 px-4 py-1 bg-black/70 text-xs backdrop-blur rounded-3xl border border-white/20">
                    {study.industry}
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="font-mono text-xs text-violet-400 mb-3 tracking-widest">{study.client.toUpperCase()}</div>
                  <h3 className="text-2xl font-semibold tracking-tight leading-none mb-6 group-hover:text-violet-300 transition-colors">{study.title}</h3>
                  
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-semibold text-emerald-400 tabular-nums">{study.metrics.traffic}</div>
                      <div className="text-[10px] text-zinc-500 tracking-widest mt-0.5">TRAFFIC</div>
                    </div>
                    <div>
                      <div className="text-3xl font-semibold text-emerald-400 tabular-nums">{study.metrics.leads}</div>
                      <div className="text-[10px] text-zinc-500 tracking-widest mt-0.5">LEADS</div>
                    </div>
                    <div>
                      <div className="text-3xl font-semibold text-emerald-400 tabular-nums">{study.metrics.roi}</div>
                      <div className="text-[10px] text-zinc-500 tracking-widest mt-0.5">ROI</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button 
              onClick={() => window.open('https://www.ibex.co.th/client-case-studies/', '_blank')}
              className="text-sm inline-flex items-center gap-2 px-5 py-3 border border-white/20 hover:bg-white/5 rounded-full transition-colors"
            >
              VIEW ALL 42 CASE STUDIES ON IBEX.CO.TH <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="max-w-7xl mx-auto px-6 py-28">
        <div className="grid md:grid-cols-12 gap-x-16 items-center">
          <div className="md:col-span-5">
            <div className="sticky top-28">
              <div className="uppercase text-xs font-semibold tracking-[2px] text-cyan-400">4 PHASES • 14 WEEKS</div>
              <h2 className="text-6xl font-semibold tracking-[-2px] leading-none mt-3 mb-8">How we make your event impossible to miss in search</h2>
              <p className="text-zinc-400 max-w-xs">Our battle-tested process has been refined across 180+ global events.</p>
              
              <div className="mt-16 hidden md:block">
                <div className="flex items-center gap-4 text-xs">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent to-white/30"></div>
                  <div>INSPIRED BY ASP.EVENTS METHODOLOGY</div>
                  <div className="flex-1 h-px bg-gradient-to-l from-transparent to-white/30"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 mt-16 md:mt-0">
            <div className="space-y-8">
              {[
                { 
                  step: "01", 
                  title: "Event Deep Dive &amp; Competitor Teardown", 
                  desc: "We analyze your past events, audience, keywords that actually convert, and reverse engineer every competing event in your space." 
                },
                { 
                  step: "02", 
                  title: "Technical Foundation &amp; Schema Architecture", 
                  desc: "Complete site audit, fixing crawl errors, implementing advanced event schema, creating dedicated landing pages for each track and speaker." 
                },
                { 
                  step: "03", 
                  title: "Content Engine &amp; Authority Building", 
                  desc: "Develop a 9-month editorial calendar, produce 40+ assets, secure features in top industry publications and build a powerful backlink profile." 
                },
                { 
                  step: "04", 
                  title: "Conversion Systems &amp; Live Optimization", 
                  desc: "Build high converting registration flows, implement real-time analytics dashboards, and run aggressive remarketing while the event is live." 
                },
              ].map((phase, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex gap-8 bg-zinc-900/50 border border-white/10 hover:border-cyan-400/30 p-9 rounded-3xl transition-all"
                >
                  <div className="font-mono text-7xl font-bold text-white/10 group-hover:text-white/30 transition-colors select-none">{phase.step}</div>
                  
                  <div className="-mt-1">
                    <div className="text-3xl font-semibold tracking-tight mb-4 text-white group-hover:text-cyan-200 transition-colors">{phase.title}</div>
                    <p className="text-zinc-400 leading-relaxed pr-8">{phase.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-zinc-900 py-20 border-t border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline text-amber-400">★★★★★</div>
            <h2 className="text-5xl font-semibold tracking-tight mt-4">Trusted by the best events on earth</h2>
          </div>
          
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                className="bg-black border border-white/10 rounded-3xl p-16 text-center"
              >
                <div className="max-w-2xl mx-auto">
                  <p className="text-3xl leading-tight text-zinc-200 font-light tracking-[-0.02em] mb-16">
                    “{testimonials[currentTestimonial].quote}”
                  </p>
                  
                  <div className="flex justify-center items-center gap-5">
                    <img 
                      src={testimonials[currentTestimonial].avatar} 
                      alt={testimonials[currentTestimonial].name}
                      className="w-14 h-14 rounded-2xl object-cover ring-4 ring-white/10"
                    />
                    <div className="text-left">
                      <div className="font-semibold">{testimonials[currentTestimonial].name}</div>
                      <div className="text-sm text-zinc-400">{testimonials[currentTestimonial].role}</div>
                      <div className="text-xs text-violet-400 mt-1">{testimonials[currentTestimonial].company}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            <div className="flex justify-center gap-4 mt-8">
              <button 
                onClick={prevTestimonial}
                className="h-12 w-12 border border-white/20 hover:border-white flex items-center justify-center rounded-2xl transition-all active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="h-12 w-12 border border-white/20 hover:border-white flex items-center justify-center rounded-2xl transition-all active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* INSIGHTS / STATS */}
      <section id="insights" className="max-w-7xl mx-auto px-6 py-28 border-b border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-6xl font-semibold tracking-tighter leading-none mb-12">Numbers that speak louder than words</h2>
            
            <div className="space-y-16">
              <div className="flex gap-6">
                <div className="text-7xl font-light text-white/30 font-mono">01</div>
                <div>
                  <div className="text-5xl font-semibold mb-4 text-white">4.2×</div>
                  <div className="text-xl">Average increase in organic registrations within 9 months</div>
                  <div className="h-px bg-white/10 my-8"></div>
                  <div className="text-zinc-400">Across all our clients, SEO traffic becomes the #1 source of attendees.</div>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="text-7xl font-light text-white/30 font-mono">02</div>
                <div>
                  <div className="text-5xl font-semibold mb-4 text-white">67</div>
                  <div className="text-xl">Average new keywords ranked in top 10 per campaign</div>
                  <div className="h-px bg-white/10 my-8"></div>
                  <div className="text-zinc-400">We focus on high-intent event discovery keywords.</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-zinc-900 rounded-3xl p-12 flex flex-col justify-between">
            <div>
              <div className="uppercase text-xs mb-6 tracking-widest border-l border-violet-400 pl-5">FROM THE BLOG</div>
              
              <a href="#" className="block group">
                <div className="text-4xl leading-none font-medium tracking-tight group-hover:text-violet-300 transition-colors">How we helped a major medical conference generate 9,400 qualified leads from search in 5 months</div>
                <div className="mt-8 text-xs flex items-center gap-4 text-zinc-400">
                  <span>CASE STUDY</span> 
                  <span className="inline-block w-1.5 h-1.5 bg-white rounded-full"></span> 
                  <span>8 MIN READ</span>
                </div>
              </a>
            </div>
            
            <div className="pt-12 border-t border-white/10 text-xs flex items-center justify-between">
              <div>INSPIRED BY ASP.EVENTS SEO GUIDES</div>
              <button className="flex items-center gap-2 hover:text-violet-400">READ ALL INSIGHTS →</button>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact" className="py-28 relative">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-violet-500 flex items-center justify-center mb-8">
            <Award className="w-8 h-8" />
          </div>
          
          <h2 className="text-6xl font-semibold tracking-tighter leading-none mb-6">Ready to make your next event the most attended in its category?</h2>
          <p className="text-xl text-zinc-400 max-w-md mx-auto mb-12">Our team typically responds within 4 hours during business days.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => alert("Thank you! Our team will contact you shortly. (Demo)")}
              className="bg-white text-zinc-950 hover:bg-amber-200 transition-colors px-16 py-6 rounded-3xl text-xl font-semibold flex items-center justify-center gap-3 shadow-2xl shadow-violet-500/30"
            >
              START YOUR FREE EVENT SEO AUDIT
              <ArrowRight />
            </button>
            
            <a href="https://www.asp.events/our-product/digital-marketing/seo-for-events" target="_blank" className="border border-white/40 hover:bg-white/5 px-10 py-6 rounded-3xl text-sm flex items-center justify-center font-medium">
              LEARN MORE ABOUT OUR METHODOLOGY
            </a>
          </div>
          
          <div className="text-xs mt-16 text-zinc-500">No sales calls. No spam. Only value.</div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-white/10 pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-y-16">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-white text-black rounded-2xl flex items-center justify-center font-bold">L</div>
              <div className="font-semibold text-3xl tracking-tighter">WebTech Mart</div>
            </div>
            <div className="text-xs text-zinc-500 max-w-[190px]">
              Digital visibility partner for the most important gatherings in the world.
            </div>
            
            <div className="mt-auto pt-16 text-[10px] text-zinc-600">
              © {new Date().getFullYear()} WebTech Mart Digital Ltd.
            </div>
          </div>
          
          <div>
            <div className="uppercase text-xs tracking-widest mb-6 text-zinc-500">Company</div>
            <div className="space-y-4 text-sm">
              <div className="cursor-pointer hover:text-white transition">About Us</div>
              <div className="cursor-pointer hover:text-white transition">Our Team</div>
              <div className="cursor-pointer hover:text-white transition">Careers</div>
              <div className="cursor-pointer hover:text-white transition">Contact</div>
            </div>
          </div>
          
          <div>
            <div className="uppercase text-xs tracking-widest mb-6 text-zinc-500">Services</div>
            <div className="space-y-4 text-sm">
              <div className="cursor-pointer hover:text-white transition">Event SEO</div>
              <div className="cursor-pointer hover:text-white transition">Content Strategy</div>
              <div className="cursor-pointer hover:text-white transition">Link Building</div>
              <div className="cursor-pointer hover:text-white transition">Analytics</div>
              <div className="cursor-pointer hover:text-white transition">Paid Amplification</div>
            </div>
          </div>
          
          <div>
            <div className="uppercase text-xs tracking-widest mb-6 text-zinc-500">Resources</div>
            <div className="space-y-4 text-sm">
              <a href="https://www.ibex.co.th/client-case-studies/" target="_blank" className="block hover:text-white transition">Case Studies</a>
              <a href="https://www.asp.events/our-product/digital-marketing/seo-for-events" target="_blank" className="block hover:text-white transition">SEO for Events Guide</a>
              <div className="cursor-pointer hover:text-white transition">Blog</div>
              <div className="cursor-pointer hover:text-white transition">Event SEO Checklist</div>
            </div>
          </div>
          
          <div className="col-span-2 md:col-span-1">
            <div className="uppercase text-xs tracking-widest mb-6 text-zinc-500">HEADQUARTERS</div>
            <div className="text-sm leading-snug">
              Vikaspuri, Delhi<br />
            </div>
            
            <div className="mt-8">
              <a href="mailto:hello@WebTech Mart.events" className="text-sm hover:underline block">hello@WebTech Mart.events</a>
              <a href="tel:+91114567890" className="text-sm hover:underline block mt-1">+91 11 4567 890</a>
            </div>
            
            <div className="flex gap-6 mt-12">
              <div className="text-xs cursor-pointer hover:text-violet-400">𝕏</div>
              <div className="text-xs cursor-pointer hover:text-violet-400">IN</div>
              <div className="text-xs cursor-pointer hover:text-violet-400">LI</div>
            </div>
          </div>
        </div>
        
        <div className="text-center text-[10px] text-zinc-600 mt-24">
          Built as a demonstration inspired by Ibex.co.th and ASP.Events. Not a real company.
        </div>
      </footer>

      {/* CASE STUDY MODAL */}
      <AnimatePresence>
        {selectedCase && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4" onClick={() => setSelectedCase(null)}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", bounce: 0.02, duration: 0.4 }}
              className="bg-zinc-900 w-full max-w-4xl rounded-3xl overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative h-80">
                <img 
                  src={selectedCase.image} 
                  alt={selectedCase.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-zinc-900"></div>
                
                <button 
                  onClick={() => setSelectedCase(null)}
                  className="absolute top-6 right-6 bg-black/60 hover:bg-black text-white p-3 rounded-full"
                >
                  <X size={22} />
                </button>
                
                <div className="absolute bottom-0 left-0 right-0 p-10">
                  <div className="flex items-center gap-3 text-xs">
                    <span className="px-5 py-2 bg-white/10 backdrop-blur rounded-3xl">{selectedCase.industry}</span>
                    <span className="text-emerald-400 font-medium">{selectedCase.client}</span>
                  </div>
                  <h3 className="text-5xl font-semibold tracking-tighter mt-4">{selectedCase.title}</h3>
                </div>
              </div>
              
              <div className="p-10 md:p-16 grid md:grid-cols-5 gap-10">
                <div className="md:col-span-3">
                  <div className="text-violet-400 text-sm mb-2">THE CHALLENGE</div>
                  <p className="text-zinc-300 text-lg leading-relaxed">{selectedCase.description}</p>
                  
                  <div className="mt-12">
                    <div className="text-violet-400 text-sm mb-6">KEY RESULTS</div>
                    <ul className="space-y-6">
                      {selectedCase.results.map((result, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <div className="mt-1.5 w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0"></div>
                          <div>{result}</div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="md:col-span-2 bg-black/40 rounded-3xl p-8 self-start">
                  <div className="text-xs text-zinc-400 mb-8">PROJECT METRICS</div>
                  
                  <div className="space-y-8">
                    <div>
                      <div className="text-6xl font-semibold text-emerald-400">{selectedCase.metrics.traffic}</div>
                      <div className="text-sm mt-2 text-zinc-400">INCREASE IN ORGANIC TRAFFIC</div>
                    </div>
                    <div>
                      <div className="text-6xl font-semibold text-emerald-400">{selectedCase.metrics.leads}</div>
                      <div className="text-sm mt-2 text-zinc-400">NEW REGISTRATIONS GENERATED</div>
                    </div>
                    <div>
                      <div className="text-6xl font-semibold text-emerald-400">{selectedCase.metrics.roi}</div>
                      <div className="text-sm mt-2 text-zinc-400">AVERAGE RETURN ON INVESTMENT</div>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => {
                      setSelectedCase(null);
                      setTimeout(() => {
                        alert("Thank you for your interest in this case study! Our team would love to discuss how we can achieve similar results for your event.");
                      }, 400);
                    }}
                    className="mt-16 w-full py-6 text-sm border border-white/30 hover:bg-white hover:text-black rounded-2xl transition-all"
                  >
                    DOWNLOAD FULL PDF CASE STUDY
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
