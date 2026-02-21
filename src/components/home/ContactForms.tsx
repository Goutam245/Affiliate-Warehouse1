import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check, ShieldCheck, FileText, Scale } from "lucide-react";

const quickSchema = z.object({
  businessName: z.string().min(2, "Required"),
  contactName: z.string().min(2, "Required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(8, "Valid phone required"),
  trade: z.string().min(1, "Select a trade"),
});

const detailedSchema = z.object({
  businessName: z.string().min(2),
  abn: z.string().min(11, "Valid ABN required"),
  contactName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(8),
  trade: z.string().min(1),
  monthlySpend: z.string().min(1),
  wholesalers: z.string().min(1),
  message: z.string().optional(),
});

const callbackSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(8),
  preferredTime: z.string().min(1),
});

type QuickForm = z.infer<typeof quickSchema>;
type DetailedForm = z.infer<typeof detailedSchema>;
type CallbackForm = z.infer<typeof callbackSchema>;

const tradeOptions = ["Electrical", "HVAC", "Solar", "Plumbing", "Other"];
const spendOptions = ["< $5,000/mo", "$5,000 - $20,000/mo", "$20,000 - $50,000/mo", "$50,000+/mo"];
const timeOptions = ["Morning (9-12)", "Afternoon (12-5)", "Evening (5-7)"];

const inputClass =
  "w-full bg-muted border border-primary/20 rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors";

const selectClass = inputClass;

const ContactForms = () => {
  const [submitted, setSubmitted] = useState<string | null>(null);

  const quick = useForm<QuickForm>({ resolver: zodResolver(quickSchema) });
  const detailed = useForm<DetailedForm>({ resolver: zodResolver(detailedSchema) });
  const callback = useForm<CallbackForm>({ resolver: zodResolver(callbackSchema) });

  const handleSubmit = (formName: string) => () => {
    setSubmitted(formName);
    setTimeout(() => setSubmitted(null), 4000);
  };

  return (
    <>
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-[58px] font-display font-bold tracking-tight mb-4">
              <span className="text-gradient">Get Started Today</span>
            </h2>
            <p className="text-secondary-custom text-lg">
              Choose the option that works best for you.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Quick Enquiry */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-card overflow-hidden"
            >
              <div className="h-1 bg-gradient-purple" />
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-foreground mb-1">Quick Enquiry</h3>
                <p className="text-xs text-muted-foreground mb-6">Get a response within 24 hours</p>

                {submitted === "quick" ? (
                  <div className="text-center py-8">
                    <Check size={40} className="text-neon-mint mx-auto mb-3" />
                    <p className="text-neon-mint font-semibold">Enquiry submitted!</p>
                  </div>
                ) : (
                  <form onSubmit={quick.handleSubmit(handleSubmit("quick"))} className="space-y-3">
                    <input {...quick.register("businessName")} placeholder="Business Name" className={inputClass} />
                    <input {...quick.register("contactName")} placeholder="Contact Name" className={inputClass} />
                    <input {...quick.register("email")} placeholder="Email" type="email" className={inputClass} />
                    <input {...quick.register("phone")} placeholder="Phone" className={inputClass} />
                    <select {...quick.register("trade")} className={selectClass} defaultValue="">
                      <option value="" disabled>Select Trade</option>
                      {tradeOptions.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                    <button type="submit" className="btn-gradient w-full text-sm !py-2.5">Submit Enquiry</button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Detailed Application */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="section-card overflow-hidden"
            >
              <div className="h-1 bg-neon-mint" />
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-foreground mb-1">Full Application</h3>
                <p className="text-xs text-muted-foreground mb-6">Start saving immediately</p>

                {submitted === "detailed" ? (
                  <div className="text-center py-8">
                    <Check size={40} className="text-neon-mint mx-auto mb-3" />
                    <p className="text-neon-mint font-semibold">Application submitted!</p>
                  </div>
                ) : (
                  <form onSubmit={detailed.handleSubmit(handleSubmit("detailed"))} className="space-y-3">
                    <input {...detailed.register("businessName")} placeholder="Business Name" className={inputClass} />
                    <input {...detailed.register("abn")} placeholder="ABN" className={inputClass} />
                    <input {...detailed.register("contactName")} placeholder="Contact Name" className={inputClass} />
                    <input {...detailed.register("email")} placeholder="Email" type="email" className={inputClass} />
                    <input {...detailed.register("phone")} placeholder="Phone" className={inputClass} />
                    <select {...detailed.register("trade")} className={selectClass} defaultValue="">
                      <option value="" disabled>Select Trade</option>
                      {tradeOptions.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                    <select {...detailed.register("monthlySpend")} className={selectClass} defaultValue="">
                      <option value="" disabled>Monthly Spend</option>
                      {spendOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                    <input {...detailed.register("wholesalers")} placeholder="Current Wholesalers" className={inputClass} />
                    <textarea {...detailed.register("message")} placeholder="Additional Notes" className={inputClass + " h-20 resize-none"} />
                    <button type="submit" className="btn-gradient w-full text-sm !py-2.5">Submit Application</button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Callback Request */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="section-card overflow-hidden"
            >
              <div className="h-1 animate-gradient-border" style={{ background: "linear-gradient(135deg, hsl(263,84%,58%), hsl(271,91%,65%), hsl(158,100%,51%))", backgroundSize: "300% 300%" }} />
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-foreground mb-1">Request a Call</h3>
                <p className="text-xs text-muted-foreground mb-6">We'll call you at your preferred time</p>

                {submitted === "callback" ? (
                  <div className="text-center py-8">
                    <Check size={40} className="text-neon-mint mx-auto mb-3" />
                    <p className="text-neon-mint font-semibold">We'll call you soon!</p>
                  </div>
                ) : (
                  <form onSubmit={callback.handleSubmit(handleSubmit("callback"))} className="space-y-3">
                    <input {...callback.register("name")} placeholder="Your Name" className={inputClass} />
                    <input {...callback.register("phone")} placeholder="Phone Number" className={inputClass} />
                    <select {...callback.register("preferredTime")} className={selectClass} defaultValue="">
                      <option value="" disabled>Preferred Time</option>
                      {timeOptions.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                    <button type="submit" className="btn-gradient w-full text-sm !py-2.5">Request Callback</button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
            {[
              { icon: ShieldCheck, title: "Data Protection", desc: "All data encrypted and stored securely in Australian data centres" },
              { icon: FileText, title: "Full Transparency", desc: "Monthly statements with complete breakdown of savings and fees" },
              { icon: Scale, title: "Regulatory Compliance", desc: "Operating in full compliance with ACCC guidelines and Australian law" },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <item.icon size={22} className="text-neon-mint flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-heading font-semibold text-foreground mb-1">{item.title}</h4>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-10 border-t border-primary/10 pt-6">
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong>Disclaimer:</strong> All savings figures and percentages are estimates based on historical data and may vary.
              Past performance does not guarantee future results. Affiliate Warehouse acts as a procurement intermediary and
              does not hold inventory or process orders directly. All product purchases are made directly through your wholesaler
              accounts. Fee of 1.1% applies only to verified savings. Affiliate Warehouse Pty Ltd. ABN: XX XXX XXX XXX.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForms;
