import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Link } from "react-router-dom";
import GlowOrbs from "@/components/GlowOrbs";

const plans = [
  {
    name: "Standard",
    desc: "Direct wholesaler account",
    price: "Free",
    sub: "Standard published pricing",
    features: [
      { text: "Direct wholesaler account", included: true },
      { text: "Standard published pricing", included: true },
      { text: "Corporate-tier negotiated rates", included: false },
      { text: "Automated price monitoring", included: false },
      { text: "Multi-wholesaler access", included: false },
      { text: "Monthly savings reports", included: false },
    ],
    cta: "Current Setup",
    highlight: false,
  },
  {
    name: "Affiliate Warehouse",
    desc: "Collective buying power",
    price: "1.1%",
    sub: "Only when we save you money",
    features: [
      { text: "Direct wholesaler account", included: true },
      { text: "Corporate-tier negotiated rates", included: true },
      { text: "Automated price monitoring", included: true },
      { text: "Multi-wholesaler access (3+)", included: true },
      { text: "Monthly savings reports", included: true },
      { text: "No lock-in, cancel anytime", included: true },
    ],
    cta: "Apply Now",
    highlight: true,
  },
];

const faqs = [
  { q: "What if I don't save money?", a: "You pay nothing. Our fee only applies when our negotiated pricing saves you money compared to standard published rates." },
  { q: "Are there any hidden fees?", a: "Absolutely not. 1.1% of verified savings is the only fee. No setup costs, no monthly minimums, no exit fees." },
  { q: "How is the 1.1% calculated?", a: "We compare our negotiated pricing against standard published pricing for each product you purchase. The 1.1% applies only to the verified difference." },
];

const Pricing = () => (
  <>
    <section className="relative py-32 overflow-hidden">
      <GlowOrbs />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-5xl md:text-[86px] font-display font-bold tracking-tight mb-6">
            <span className="text-gradient">Simple, Transparent Pricing</span>
          </h1>
          <p className="text-secondary-custom text-lg max-w-2xl mx-auto">
            No saving = no fee. We only charge when our negotiated pricing actually saves you money.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`section-card p-8 ${plan.highlight ? "border-primary/50 relative overflow-hidden" : ""}`}
            >
              {plan.highlight && <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-purple" />}
              <h3 className="text-2xl font-heading font-bold text-foreground mb-1">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-6">{plan.desc}</p>
              <div className="mb-6">
                <span className="text-5xl font-technical font-bold text-neon-mint">{plan.price}</span>
                <span className="text-sm text-muted-foreground ml-2">{plan.sub}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f.text} className="flex items-center gap-2 text-sm">
                    {f.included ? (
                      <Check size={14} className="text-neon-mint" />
                    ) : (
                      <X size={14} className="text-destructive/50" />
                    )}
                    <span className={f.included ? "text-silver" : "text-muted-foreground"}>{f.text}</span>
                  </li>
                ))}
              </ul>
              {plan.highlight ? (
                <Link to="/apply" className="btn-gradient w-full text-center block">{plan.cta}</Link>
              ) : (
                <div className="text-center text-sm text-muted-foreground py-3 border border-primary/10 rounded-full">
                  {plan.cta}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-display font-bold text-foreground mb-10 text-center">Pricing FAQ</h2>
        <div className="space-y-6">
          {faqs.map((faq) => (
            <div key={faq.q} className="glass-card p-6">
              <h4 className="font-heading font-semibold text-foreground mb-2">{faq.q}</h4>
              <p className="text-sm text-secondary-custom">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Pricing;
