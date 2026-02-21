import { motion } from "framer-motion";
import { Building2, ShieldCheck, Handshake } from "lucide-react";
import { Link } from "react-router-dom";
import GlowOrbs from "@/components/GlowOrbs";

const wholesalers = [
  {
    name: "Voltex Electrical",
    specialty: "Electrical supplies & accessories",
    coverage: "National — all states",
    desc: "One of Australia's largest independent electrical wholesalers with extensive product range and competitive pricing.",
  },
  {
    name: "Ideal Electrical",
    specialty: "Electrical, lighting & data",
    coverage: "QLD, NSW, VIC",
    desc: "Specialist electrical wholesaler with strong relationships in the contractor market and fast delivery networks.",
  },
  {
    name: "TradeZone",
    specialty: "HVAC, solar & electrical",
    coverage: "National — all states",
    desc: "Multi-category trade wholesaler offering competitive pricing across HVAC, solar and electrical product categories.",
  },
];

const principles = [
  "We maintain independent commercial relationships with all partner wholesalers",
  "Pricing negotiations are conducted at arm's length with full transparency",
  "All savings are verified against standard published pricing",
  "We never receive undisclosed rebates or commissions from wholesaler partners",
  "Fee structures are fully disclosed before any engagement begins",
];

const Wholesalers = () => (
  <>
    <section className="relative py-32 overflow-hidden">
      <GlowOrbs />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-5xl md:text-[86px] font-display font-bold tracking-tight mb-6">
            <span className="text-gradient">Our Wholesaler Partners</span>
          </h1>
          <p className="text-secondary-custom text-lg max-w-2xl mx-auto">
            Access corporate-tier pricing from Australia's leading trade wholesalers through one unified network.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {wholesalers.map((w, i) => (
            <motion.div
              key={w.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6"
            >
              <Building2 size={28} className="text-primary mb-4" />
              <h3 className="text-xl font-heading font-bold text-foreground mb-1">{w.name}</h3>
              <p className="text-xs text-neon-mint mb-1">{w.specialty}</p>
              <p className="text-xs text-muted-foreground mb-4">{w.coverage}</p>
              <p className="text-sm text-secondary-custom leading-relaxed">{w.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="flex items-center gap-3 mb-8">
            <Handshake size={32} className="text-primary" />
            <h2 className="text-3xl md:text-[38px] font-display font-bold text-foreground tracking-tight">
              Our Alignment Principles
            </h2>
          </div>
          <div className="space-y-4 mb-10">
            {principles.map((p) => (
              <div key={p} className="border-l-2 border-primary/40 pl-6 py-2">
                <p className="text-silver text-sm">{p}</p>
              </div>
            ))}
          </div>
          <div className="glass-card p-6 border-l-4 border-neon-mint">
            <p className="text-neon-mint font-semibold mb-1">Transparency Guarantee</p>
            <p className="text-silver text-sm leading-relaxed">
              Every dollar of savings is transparently documented and verifiable. We publish monthly statements
              showing standard pricing vs negotiated pricing for every product purchased.
            </p>
          </div>
        </motion.div>
      </div>
    </section>

    <section className="py-20 bg-gradient-violet-section text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
          Access All Wholesalers Through One Network
        </h2>
        <Link to="/apply" className="btn-gradient text-lg">Apply Now</Link>
      </div>
    </section>
  </>
);

export default Wholesalers;
