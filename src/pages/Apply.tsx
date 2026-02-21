import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check, ShieldCheck } from "lucide-react";
import GlowOrbs from "@/components/GlowOrbs";

const schema = z.object({
  businessName: z.string().min(2, "Required"),
  abn: z.string().min(11, "Valid ABN required"),
  contactName: z.string().min(2, "Required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(8, "Valid phone required"),
  trade: z.string().min(1, "Select your trade"),
  monthlySpend: z.string().min(1, "Select estimated spend"),
  currentWholesalers: z.string().min(1, "Required"),
  howHeard: z.string().optional(),
  message: z.string().optional(),
  terms: z.boolean().refine((v) => v, "You must agree to the terms"),
});

type FormData = z.infer<typeof schema>;

const tradeOptions = ["Electrical", "HVAC", "Solar", "Plumbing", "Multi-trade", "Other"];
const spendOptions = ["< $5,000/mo", "$5,000 - $20,000/mo", "$20,000 - $50,000/mo", "$50,000 - $100,000/mo", "$100,000+/mo"];

const inputClass =
  "w-full bg-muted border border-primary/20 rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors";

const Apply = () => {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = () => setSubmitted(true);

  return (
    <>
      <section className="relative py-32 overflow-hidden">
        <GlowOrbs />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-[86px] font-display font-bold tracking-tight mb-6">
              <span className="text-gradient">Apply Now</span>
            </h1>
            <p className="text-secondary-custom text-lg max-w-2xl mx-auto">
              Join Australia's trade procurement network in under 60 seconds. No lock-ins, no hidden fees.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 max-w-2xl">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 rounded-full bg-neon-mint/20 flex items-center justify-center mx-auto mb-6">
                <Check size={40} className="text-neon-mint" />
              </div>
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">Application Submitted!</h2>
              <p className="text-secondary-custom">
                We'll review your application and get back to you within 24 business hours.
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-card p-8"
            >
              <div className="h-1 bg-gradient-purple -mt-8 -mx-8 mb-8 rounded-t-lg" />
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input {...register("businessName")} placeholder="Business Name *" className={inputClass} />
                    {errors.businessName && <p className="text-destructive text-xs mt-1">{errors.businessName.message}</p>}
                  </div>
                  <div>
                    <input {...register("abn")} placeholder="ABN *" className={inputClass} />
                    {errors.abn && <p className="text-destructive text-xs mt-1">{errors.abn.message}</p>}
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input {...register("contactName")} placeholder="Contact Name *" className={inputClass} />
                    {errors.contactName && <p className="text-destructive text-xs mt-1">{errors.contactName.message}</p>}
                  </div>
                  <div>
                    <input {...register("email")} placeholder="Email *" type="email" className={inputClass} />
                    {errors.email && <p className="text-destructive text-xs mt-1">{errors.email.message}</p>}
                  </div>
                </div>
                <input {...register("phone")} placeholder="Phone Number *" className={inputClass} />
                {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone.message}</p>}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <select {...register("trade")} className={inputClass} defaultValue="">
                      <option value="" disabled>Select Trade *</option>
                      {tradeOptions.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                    {errors.trade && <p className="text-destructive text-xs mt-1">{errors.trade.message}</p>}
                  </div>
                  <div>
                    <select {...register("monthlySpend")} className={inputClass} defaultValue="">
                      <option value="" disabled>Est. Monthly Spend *</option>
                      {spendOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                    {errors.monthlySpend && <p className="text-destructive text-xs mt-1">{errors.monthlySpend.message}</p>}
                  </div>
                </div>
                <input {...register("currentWholesalers")} placeholder="Current Wholesaler(s) *" className={inputClass} />
                {errors.currentWholesalers && <p className="text-destructive text-xs mt-1">{errors.currentWholesalers.message}</p>}
                <input {...register("howHeard")} placeholder="How did you hear about us?" className={inputClass} />
                <textarea {...register("message")} placeholder="Additional notes or questions" className={inputClass + " h-24 resize-none"} />

                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" {...register("terms")} className="mt-1 accent-primary" />
                  <span className="text-xs text-muted-foreground">
                    I agree to the terms of service and acknowledge that the 1.1% service fee applies only to verified savings. *
                  </span>
                </label>
                {errors.terms && <p className="text-destructive text-xs">{errors.terms.message}</p>}

                <button type="submit" className="btn-gradient w-full text-base">
                  Submit Application
                </button>
              </form>

              <div className="flex items-center gap-2 mt-6 justify-center">
                <ShieldCheck size={14} className="text-neon-mint" />
                <span className="text-xs text-muted-foreground">Your data is encrypted and stored securely</span>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
};

export default Apply;
