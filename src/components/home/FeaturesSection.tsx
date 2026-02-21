import { motion } from "framer-motion";
import { Check, Search, Users, BarChart3, Shield, Zap } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Apply in 60 Seconds",
    desc: "Simple online application. No lock-in contracts, no hidden fees. Just tell us about your business and trade supply needs.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=85&fit=crop",
    bullets: ["ABN verification", "Instant eligibility check", "No credit checks required"],
    icon: Zap,
  },
  {
    num: "02",
    title: "We Negotiate Pricing",
    desc: "Our procurement team leverages collective buying power across hundreds of trade businesses to negotiate corporate-tier pricing.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=85&fit=crop",
    bullets: ["Volume-based discounts", "Multi-wholesaler access", "Transparent pricing tiers"],
    icon: Users,
  },
  {
    num: "03",
    title: "Automated Price Monitoring",
    desc: "Our systems continuously monitor pricing across all connected wholesalers, alerting you to price drops and savings opportunities.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=85&fit=crop",
    bullets: ["Real-time price alerts", "Historical price tracking", "Category-wide monitoring"],
    icon: Search,
  },
  {
    num: "04",
    title: "You Purchase as Normal",
    desc: "Continue purchasing from your existing wholesaler accounts. Nothing changes about your ordering process or relationships.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=85&fit=crop",
    bullets: ["Same wholesaler accounts", "No minimum orders", "Existing delivery arrangements"],
    icon: BarChart3,
  },
  {
    num: "05",
    title: "Transparent Fee Settlement",
    desc: "We only charge 1.1% of your actual purchases — and only when our negotiated pricing saves you money. No saving = no fee.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85&fit=crop",
    bullets: ["1.1% service fee only", "Monthly transparent statements", "No saving = no fee"],
    icon: Shield,
  },
];

const stats = [
  { value: "500+", label: "Trade Businesses" },
  { value: "$2.4M", label: "Annual Savings" },
  { value: "3+", label: "Wholesaler Partners" },
  { value: "98%", label: "Client Retention" },
];

const FeaturesSection = () => (
  <>
    {/* How It Works Steps */}
    <section className="py-24 bg-card relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-[58px] font-display font-bold tracking-tight mb-4">
            <span className="text-gradient">How It Works</span>
          </h2>
          <p className="text-secondary-custom text-lg max-w-2xl mx-auto">
            Five simple steps to unlock corporate-tier pricing for your trade business.
          </p>
        </motion.div>

        <div className="space-y-20">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                {/* Big faded number */}
                <div className="relative mb-4">
                  <span className="text-[150px] font-display font-bold text-primary/10 leading-none absolute -top-16 -left-4">
                    {step.num}
                  </span>
                  <div className="relative z-10 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-purple flex items-center justify-center">
                      <step.icon size={22} className="text-foreground" />
                    </div>
                    <h3 className="text-2xl md:text-[38px] font-display font-bold text-foreground tracking-tight">
                      {step.title}
                    </h3>
                  </div>
                </div>

                <div className="border-l-2 border-primary/40 pl-6 ml-6 mt-8">
                  <p className="text-secondary-custom text-base leading-relaxed mb-6">
                    {step.desc}
                  </p>
                  <ul className="space-y-2">
                    {step.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm">
                        <Check size={14} className="text-neon-mint flex-shrink-0" />
                        <span className="text-silver">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={i % 2 === 1 ? "lg:col-start-1" : ""}>
                <div className="rounded-2xl overflow-hidden glow-border relative">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-[300px] object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Stats Bar */}
    <section className="py-20 bg-gradient-violet-section relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-technical font-bold text-neon-mint mb-2">
                {stat.value}
              </div>
              <div className="text-silver text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default FeaturesSection;
