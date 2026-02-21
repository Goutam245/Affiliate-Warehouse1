import { motion } from "framer-motion";
import { Quote, ShieldCheck, Unlock, Building2 } from "lucide-react";

const testimonials = [
  {
    name: "Michael Torres",
    role: "Director, Bright Spark Electrical",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=85&fit=crop&crop=face",
    quote: "We've saved over $18,000 in the first six months. The price monitoring alone has been a game-changer for our purchasing decisions.",
  },
  {
    name: "Sarah Chen",
    role: "Owner, CoolFlow HVAC Solutions",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=85&fit=crop&crop=face",
    quote: "The transparency is what sold me. Monthly statements showing exactly what we saved and what the fee was. No surprises, ever.",
  },
  {
    name: "James Mitchell",
    role: "Operations Manager, SolarEdge Installations",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=85&fit=crop&crop=face",
    quote: "Having access to three major wholesalers with negotiated corporate rates has completely changed our margins. Best business decision this year.",
  },
];

const wholesalerStatements = [
  "We maintain independent commercial relationships with all partner wholesalers",
  "Pricing negotiations are conducted at arm's length with full transparency",
  "All savings are verified against standard published pricing",
  "Fee structures are fully disclosed before any engagement",
];

const SocialProof = () => (
  <>
    {/* No Lock-in Section */}
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-start gap-6 mb-8">
            <Unlock size={40} className="text-primary flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-4xl md:text-[58px] font-display font-bold tracking-tight mb-4">
                <span className="text-gradient-purple">No Lock-in Contracts</span>
              </h2>
              <p className="text-secondary-custom text-lg leading-relaxed">
                We believe in earning your business every month. No minimum terms, no exit fees,
                no penalties. If we're not saving you money, you're free to leave at any time.
                That's the confidence we have in our service.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { icon: Unlock, title: "Cancel Anytime", desc: "No exit fees, no notice period required" },
              { icon: ShieldCheck, title: "No Minimum Term", desc: "Month-to-month, no contracts to sign" },
              { icon: Building2, title: "Your Accounts", desc: "Wholesaler relationships remain yours" },
            ].map((item) => (
              <div key={item.title} className="glass-card p-6 text-center">
                <item.icon size={28} className="text-neon-mint mx-auto mb-3" />
                <h4 className="font-heading font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* Wholesaler Alignment */}
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-[58px] font-display font-bold tracking-tight mb-6">
            <span className="text-gradient">Wholesaler Alignment</span>
          </h2>
          <p className="text-secondary-custom text-lg mb-10">
            Our relationships with wholesalers are built on transparency, volume, and mutual benefit.
          </p>

          <div className="space-y-4 mb-10">
            {wholesalerStatements.map((s) => (
              <div key={s} className="flex items-start gap-4 border-l-2 border-primary/40 pl-6 py-2">
                <p className="text-silver text-sm">{s}</p>
              </div>
            ))}
          </div>

          <div className="glass-card p-6 border-l-4 border-neon-mint">
            <p className="text-neon-mint font-semibold mb-1">Key Principle</p>
            <p className="text-silver text-sm leading-relaxed">
              "Affiliate Warehouse exists to create collective buying power for small-to-medium trade businesses.
              We never receive undisclosed rebates or commissions. Every dollar of savings is transparently shared."
            </p>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-[58px] font-display font-bold tracking-tight mb-4">
            <span className="text-gradient-purple">What Our Clients Say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6"
            >
              <Quote size={24} className="text-primary/40 mb-4" />
              <p className="text-silver text-sm leading-relaxed mb-6">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border border-primary/30"
                  loading="lazy"
                />
                <div>
                  <div className="text-sm font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default SocialProof;
