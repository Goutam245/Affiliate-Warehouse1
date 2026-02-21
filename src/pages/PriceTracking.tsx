import { motion } from "framer-motion";
import { TrendingDown, Minus, Bell, BarChart3, Search } from "lucide-react";
import { Link } from "react-router-dom";
import GlowOrbs from "@/components/GlowOrbs";

const priceData = [
  { item: "20A Switch Mech", cat: "Electrical", before: "$4.85", after: "$3.92", change: "-19.2%", down: true },
  { item: "Split System 7kW", cat: "HVAC", before: "$1,240", after: "$1,085", change: "-12.5%", down: true },
  { item: "6.6kW Panel Kit", cat: "Solar", before: "$3,200", after: "$2,890", change: "-9.7%", down: true },
  { item: "LED Downlight 10W", cat: "Electrical", before: "$8.50", after: "$6.80", change: "-20.0%", down: true },
  { item: "Conduit 25mm 4m", cat: "Electrical", before: "$12.40", after: "$12.40", change: "0%", down: false },
  { item: "RCD 2-Pole 30mA", cat: "Electrical", before: "$45.00", after: "$38.20", change: "-15.1%", down: true },
  { item: "Inverter 5kW", cat: "Solar", before: "$1,850", after: "$1,620", change: "-12.4%", down: true },
  { item: "Ducted Unit 14kW", cat: "HVAC", before: "$4,500", after: "$3,980", change: "-11.6%", down: true },
];

const features = [
  { icon: Bell, title: "Real-Time Alerts", desc: "Get notified instantly when prices drop on products you purchase regularly." },
  { icon: BarChart3, title: "Historical Trends", desc: "Track pricing trends over time to make smarter purchasing decisions." },
  { icon: Search, title: "Cross-Wholesaler", desc: "Compare prices across all connected wholesalers in one dashboard." },
];

const PriceTracking = () => (
  <>
    <section className="relative py-32 overflow-hidden">
      <GlowOrbs />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-5xl md:text-[86px] font-display font-bold tracking-tight mb-6">
            <span className="text-gradient">Price Tracking</span>
          </h1>
          <p className="text-secondary-custom text-lg max-w-2xl mx-auto">
            Automated price monitoring across all connected wholesalers. See real savings in real-time.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Features */}
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {features.map((f) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-6 text-center"
            >
              <f.icon size={28} className="text-neon-mint mx-auto mb-3" />
              <h3 className="font-heading font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Dashboard */}
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-card overflow-hidden max-w-5xl mx-auto"
        >
          <div className="bg-gradient-purple px-6 py-4 flex items-center justify-between">
            <h3 className="font-heading font-semibold text-foreground">Price Monitor — Full Dashboard</h3>
            <span className="text-xs text-foreground/70 font-technical">Live Data</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-primary/20">
                  <th className="text-left px-6 py-3 text-primary font-heading font-semibold">Item</th>
                  <th className="text-left px-6 py-3 text-primary font-heading font-semibold">Category</th>
                  <th className="text-right px-6 py-3 text-primary font-heading font-semibold">Standard</th>
                  <th className="text-right px-6 py-3 text-primary font-heading font-semibold">AW Price</th>
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
                        row.down ? "text-neon-mint" : "text-muted-foreground"
                      }`}>
                        {row.down ? <TrendingDown size={14} /> : <Minus size={14} />}
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

    <section className="py-20 bg-gradient-violet-section text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
          Start Monitoring Prices Today
        </h2>
        <Link to="/apply" className="btn-gradient text-lg">Get Access</Link>
      </div>
    </section>
  </>
);

export default PriceTracking;
