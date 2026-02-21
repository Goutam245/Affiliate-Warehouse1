import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search } from "lucide-react";
import { Link } from "react-router-dom";
import GlowOrbs from "@/components/GlowOrbs";

const faqData = [
  {
    cat: "Getting Started",
    items: [
      { q: "How do I apply?", a: "Simply fill out our online application form with your business details and ABN. The process takes about 60 seconds and there are no credit checks required." },
      { q: "Who is eligible?", a: "Any Australian trade business with a valid ABN operating in the electrical, HVAC, or solar sectors. We work with sole traders, partnerships, and companies of all sizes." },
      { q: "How long does approval take?", a: "Most applications are reviewed and approved within 24 business hours. We verify your ABN and trade classification before activating your account." },
      { q: "Is there a setup fee?", a: "No. There are no setup fees, joining fees, or monthly minimums. You only pay the 1.1% service fee when we actually save you money." },
    ],
  },
  {
    cat: "Pricing & Fees",
    items: [
      { q: "How does the 1.1% fee work?", a: "We compare our negotiated pricing against standard published pricing for each product you purchase. The 1.1% fee applies only to the verified savings — the actual difference between standard and negotiated pricing." },
      { q: "What if there are no savings?", a: "You pay nothing. If our negotiated pricing doesn't beat the standard published rate for any product, no fee applies to that product. No saving = no fee." },
      { q: "Are there any hidden charges?", a: "Absolutely not. The 1.1% of verified savings is the only fee. No monthly minimums, no administration charges, no exit penalties." },
      { q: "How are savings verified?", a: "We maintain records of standard published pricing from each wholesaler. Each month, we compare your purchase prices against these published rates and provide a detailed breakdown." },
    ],
  },
  {
    cat: "Operations",
    items: [
      { q: "Do I need to change wholesalers?", a: "No. You continue purchasing from your existing wholesaler accounts. We negotiate better pricing behind the scenes — your ordering process doesn't change at all." },
      { q: "How does price monitoring work?", a: "Our automated systems track pricing across all connected wholesalers 24/7. You receive alerts when prices drop on products you purchase regularly, and can view trends through your dashboard." },
      { q: "Can I cancel at any time?", a: "Yes. There are no lock-in contracts or minimum terms. You can cancel your membership at any time with no exit fees or penalties." },
      { q: "How many wholesalers do you work with?", a: "We currently have negotiated pricing arrangements with 3+ major Australian trade wholesalers, covering electrical, HVAC, and solar product categories." },
    ],
  },
];

const FAQ = () => {
  const [search, setSearch] = useState("");
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggle = (q: string) => {
    setOpenItems((prev) => (prev.includes(q) ? prev.filter((i) => i !== q) : [...prev, q]));
  };

  const filtered = faqData.map((cat) => ({
    ...cat,
    items: cat.items.filter(
      (item) =>
        item.q.toLowerCase().includes(search.toLowerCase()) ||
        item.a.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter((cat) => cat.items.length > 0);

  return (
    <>
      <section className="relative py-32 overflow-hidden">
        <GlowOrbs />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-[86px] font-display font-bold tracking-tight mb-6">
              <span className="text-gradient">Frequently Asked Questions</span>
            </h1>
            <div className="max-w-lg mx-auto relative mt-8">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search questions..."
                className="w-full bg-card border border-primary/20 rounded-full pl-12 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 max-w-3xl">
          {filtered.map((cat) => (
            <div key={cat.cat} className="mb-12">
              <h2 className="text-xl font-heading font-bold text-gradient-purple mb-6">{cat.cat}</h2>
              <div className="space-y-3">
                {cat.items.map((item) => (
                  <div key={item.q} className="section-card overflow-hidden">
                    <button
                      onClick={() => toggle(item.q)}
                      className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-primary/5 transition-colors"
                    >
                      <span className="text-sm font-semibold text-foreground pr-4">{item.q}</span>
                      <ChevronDown
                        size={18}
                        className={`text-primary flex-shrink-0 transition-transform ${
                          openItems.includes(item.q) ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {openItems.includes(item.q) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <p className="px-6 pb-4 text-sm text-secondary-custom leading-relaxed">{item.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gradient-violet-section text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-foreground mb-4">Still Have Questions?</h2>
          <p className="text-silver mb-8">Our team is ready to help.</p>
          <Link to="/contact" className="btn-gradient text-lg">Contact Us</Link>
        </div>
      </section>
    </>
  );
};

export default FAQ;
