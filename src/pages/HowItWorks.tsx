import { motion } from "framer-motion";
import { Check, Zap, Users, Search, BarChart3, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import GlowOrbs from "@/components/GlowOrbs";

const steps = [
  {
    num: "01",
    title: "Apply in 60 Seconds",
    desc: "Submit a simple online application with your business details. No credit checks, no lengthy paperwork. We verify your ABN and trade credentials within 24 hours.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=85&fit=crop",
    details: [
      "Complete our simple online form with your ABN and business details",
      "No credit checks or financial statements required",
      "Instant eligibility assessment based on trade classification",
      "Approval notification within 24 business hours",
    ],
    icon: Zap,
  },
  {
    num: "02",
    title: "We Negotiate Pricing",
    desc: "Our procurement specialists leverage the collective buying power of hundreds of trade businesses to negotiate pricing that individual businesses simply can't access alone.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=85&fit=crop",
    details: [
      "Volume-based pricing tiers across all product categories",
      "Multi-wholesaler competitive pricing analysis",
      "Quarterly pricing renegotiations for continuous improvement",
      "Category-specific procurement specialists",
    ],
    icon: Users,
  },
  {
    num: "03",
    title: "Automated Price Monitoring",
    desc: "Our proprietary monitoring systems track pricing across all connected wholesalers 24/7, identifying savings opportunities and alerting you to price changes in real-time.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=85&fit=crop",
    details: [
      "Real-time price alerts for products you purchase regularly",
      "Historical price trend analysis and reporting",
      "Cross-wholesaler price comparison dashboard",
      "Automated savings opportunity notifications",
    ],
    icon: Search,
  },
  {
    num: "04",
    title: "Purchase as Normal",
    desc: "Nothing changes about your day-to-day operations. Continue ordering through your existing wholesaler accounts, maintaining your relationships and delivery arrangements.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=85&fit=crop",
    details: [
      "Use your existing wholesaler accounts and credentials",
      "No changes to your ordering process or delivery arrangements",
      "Maintain direct relationships with wholesaler representatives",
      "No minimum order quantities or purchase commitments",
    ],
    icon: BarChart3,
  },
  {
    num: "05",
    title: "Transparent Fee Settlement",
    desc: "At month-end, we provide a detailed statement showing your purchases, the savings achieved, and our 1.1% service fee. No savings? No fee. It's that simple.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85&fit=crop",
    details: [
      "Monthly transparent statements with full savings breakdown",
      "1.1% service fee applied only to verified savings",
      "No saving = no fee guarantee",
      "Direct debit or invoice payment options available",
    ],
    icon: Shield,
  },
];

const HowItWorks = () => (
  <>
    {/* Hero */}
    <section className="relative py-32 overflow-hidden">
      <GlowOrbs />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-5xl md:text-[86px] font-display font-bold tracking-tight mb-6">
            <span className="text-gradient">How It Works</span>
          </h1>
          <p className="text-secondary-custom text-lg max-w-2xl mx-auto">
            Five simple steps to unlock corporate-tier pricing for your Australian trade business.
            No complexity, no lock-ins, just savings.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Steps */}
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4 space-y-24">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
          >
            <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
              <div className="relative mb-6">
                <span className="text-[150px] font-display font-bold text-primary/10 leading-none absolute -top-20 -left-4">
                  {step.num}
                </span>
                <div className="relative z-10 flex items-center gap-3">
                  <div className="w-14 h-14 rounded-xl bg-gradient-purple flex items-center justify-center">
                    <step.icon size={24} className="text-foreground" />
                  </div>
                  <h2 className="text-3xl md:text-[38px] font-display font-bold text-foreground tracking-tight">
                    {step.title}
                  </h2>
                </div>
              </div>
              <div className="border-l-2 border-primary/40 pl-6 ml-7">
                <p className="text-secondary-custom leading-relaxed mb-6">{step.desc}</p>
                <ul className="space-y-3">
                  {step.details.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm">
                      <Check size={14} className="text-neon-mint flex-shrink-0 mt-1" />
                      <span className="text-silver">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={i % 2 === 1 ? "lg:col-start-1" : ""}>
              <div className="rounded-2xl overflow-hidden glow-border">
                <img src={step.image} alt={step.title} className="w-full h-[350px] object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay pointer-events-none" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-gradient-violet-section text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
          Ready to Start Saving?
        </h2>
        <p className="text-silver text-lg mb-8 max-w-xl mx-auto">
          Join hundreds of Australian trade businesses already benefiting from collective buying power.
        </p>
        <Link to="/apply" className="btn-gradient text-lg">Apply Now — It's Free</Link>
      </div>
    </section>
  </>
);

export default HowItWorks;
