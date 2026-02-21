import { motion } from "framer-motion";
import { Check, X, TrendingDown, TrendingUp, Minus } from "lucide-react";

const priceData = [
  { item: "20A Switch Mech", cat: "Electrical", before: "$4.85", after: "$3.92", change: "-19.2%", trend: "down" },
  { item: "Split System 7kW", cat: "HVAC", before: "$1,240", after: "$1,085", change: "-12.5%", trend: "down" },
  { item: "6.6kW Panel Kit", cat: "Solar", before: "$3,200", after: "$2,890", change: "-9.7%", trend: "down" },
  { item: "LED Downlight 10W", cat: "Electrical", before: "$8.50", after: "$6.80", change: "-20.0%", trend: "down" },
  { item: "Conduit 25mm 4m", cat: "Electrical", before: "$12.40", after: "$12.40", change: "0%", trend: "same" },
];

const comparisonRows = [
  { feature: "Multi-wholesaler pricing access", standard: false, aw: true },
  { feature: "Automated price monitoring", standard: false, aw: true },
  { feature: "Monthly transparent statements", standard: false, aw: true },
  { feature: "No lock-in contracts", standard: false, aw: true },
  { feature: "Corporate-tier negotiated rates", standard: false, aw: true },
  { feature: "No fee if no saving", standard: false, aw: true },
  { feature: "Direct wholesaler relationship", standard: true, aw: true },
  { feature: "Place orders directly", standard: true, aw: true },
];

const PricingPreview = () => (
  <>
    {/* Price Tracking Dashboard */}
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-[58px] font-display font-bold tracking-tight mb-4">
            <span className="text-gradient">Price Tracking Dashboard</span>
          </h2>
          <p className="text-secondary-custom text-lg max-w-2xl mx-auto">
            Real-time price monitoring across all your connected wholesalers.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-card overflow-hidden max-w-5xl mx-auto"
        >
          {/* Dashboard header */}
          <div className="bg-gradient-purple px-6 py-4 flex items-center justify-between">
            <h3 className="font-heading font-semibold text-foreground">
              Price Monitor — Live Dashboard
            </h3>
            <span className="text-xs text-foreground/70 font-technical">
              Last updated: 2 mins ago
            </span>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-primary/20">
                  <th className="text-left px-6 py-3 text-primary font-heading font-semibold">Item</th>
                  <th className="text-left px-6 py-3 text-primary font-heading font-semibold">Category</th>
                  <th className="text-right px-6 py-3 text-primary font-heading font-semibold">Before</th>
                  <th className="text-right px-6 py-3 text-primary font-heading font-semibold">After</th>
                  <th className="text-right px-6 py-3 text-primary font-heading font-semibold">Change</th>
                </tr>
              </thead>
              <tbody>
                {priceData.map((row) => (
                  <tr key={row.item} className="border-b border-primary/10 hover:bg-primary/5 transition-colors">
                    <td className="px-6 py-4 text-silver font-medium">{row.item}</td>
                    <td className="px-6 py-4 text-secondary-custom">{row.cat}</td>
                    <td className="px-6 py-4 text-right text-muted-foreground font-technical">{row.before}</td>
                    <td className="px-6 py-4 text-right text-foreground font-technical font-semibold">{row.after}</td>
                    <td className="px-6 py-4 text-right">
                      <span className={`inline-flex items-center gap-1 font-technical font-semibold ${
                        row.trend === "down" ? "text-neon-mint" : "text-muted-foreground"
                      }`}>
                        {row.trend === "down" ? <TrendingDown size={14} /> : <Minus size={14} />}
                        {row.change}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Comparison Table */}
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-[58px] font-display font-bold tracking-tight mb-4">
            <span className="text-gradient-purple">Standard vs Affiliate Warehouse</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto section-card overflow-hidden"
        >
          <div className="grid grid-cols-3">
            <div className="px-6 py-4 border-b border-primary/20 font-heading font-semibold text-silver">Feature</div>
            <div className="px-6 py-4 border-b border-primary/20 text-center font-heading font-semibold text-muted-foreground">Standard Account</div>
            <div className="px-6 py-4 border-b border-primary/20 text-center bg-gradient-purple font-heading font-semibold text-foreground">
              Affiliate Warehouse
            </div>
          </div>
          {comparisonRows.map((row) => (
            <div key={row.feature} className="grid grid-cols-3 border-b border-primary/10 hover:bg-primary/5 transition-colors">
              <div className="px-6 py-3 text-sm text-silver">{row.feature}</div>
              <div className="px-6 py-3 flex items-center justify-center">
                {row.standard ? (
                  <Check size={16} className="text-muted-foreground" />
                ) : (
                  <X size={16} className="text-destructive/60" />
                )}
              </div>
              <div className="px-6 py-3 flex items-center justify-center bg-primary/5">
                <Check size={16} className="text-neon-mint" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Fee Section */}
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-[58px] font-display font-bold tracking-tight mb-6">
            <span className="text-gradient">Transparent, Simple Pricing</span>
          </h2>
          <p className="text-secondary-custom text-lg mb-12 max-w-2xl mx-auto">
            Just 1.1% of your actual purchases — and only when we save you money.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Service Fee", value: "1.1%", desc: "Of actual monthly purchases through connected wholesalers" },
              { title: "No Saving?", value: "$0", desc: "If our negotiated pricing doesn't save you money, you pay nothing" },
              { title: "Setup Fee", value: "Free", desc: "No joining fees, no setup costs, no hidden charges" },
            ].map((card) => (
              <div key={card.title} className="glass-card p-8 text-center">
                <div className="text-sm text-secondary-custom mb-2">{card.title}</div>
                <div className="text-4xl font-technical font-bold text-neon-mint mb-3">{card.value}</div>
                <div className="text-sm text-muted-foreground">{card.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  </>
);

export default PricingPreview;
