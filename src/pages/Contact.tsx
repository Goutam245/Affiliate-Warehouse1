import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check, Mail, Phone, MapPin, Clock } from "lucide-react";
import GlowOrbs from "@/components/GlowOrbs";

const schema = z.object({
  name: z.string().min(2, "Required"),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Select a subject"),
  message: z.string().min(10, "Please enter your message"),
});

type FormData = z.infer<typeof schema>;

const subjects = ["General Enquiry", "Pricing Question", "Technical Support", "Partnership Opportunity", "Media/Press", "Other"];

const inputClass =
  "w-full bg-muted border border-primary/20 rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors";

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@affiliatewarehouse.com.au" },
  { icon: Phone, label: "Phone", value: "1300 XXX XXX" },
  { icon: MapPin, label: "Location", value: "Sydney, Australia" },
  { icon: Clock, label: "Hours", value: "Mon-Fri 8am-6pm AEST" },
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  return (
    <>
      <section className="relative py-32 overflow-hidden">
        <GlowOrbs />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-[86px] font-display font-bold tracking-tight mb-6">
              <span className="text-gradient">Contact Us</span>
            </h1>
            <p className="text-secondary-custom text-lg max-w-2xl mx-auto">
              Have a question or want to learn more? We're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Get in Touch</h2>
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <info.icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">{info.label}</p>
                    <p className="text-sm text-silver font-medium">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <Check size={48} className="text-neon-mint mx-auto mb-4" />
                  <h3 className="text-2xl font-display font-bold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-secondary-custom">We'll respond within 24 hours.</p>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="section-card p-8"
                >
                  <div className="h-1 bg-gradient-purple -mt-8 -mx-8 mb-8 rounded-t-lg" />
                  <form onSubmit={handleSubmit(() => setSubmitted(true))} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <input {...register("name")} placeholder="Your Name *" className={inputClass} />
                        {errors.name && <p className="text-destructive text-xs mt-1">{errors.name.message}</p>}
                      </div>
                      <div>
                        <input {...register("email")} placeholder="Email *" type="email" className={inputClass} />
                        {errors.email && <p className="text-destructive text-xs mt-1">{errors.email.message}</p>}
                      </div>
                    </div>
                    <input {...register("phone")} placeholder="Phone (optional)" className={inputClass} />
                    <select {...register("subject")} className={inputClass} defaultValue="">
                      <option value="" disabled>Select Subject *</option>
                      {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                    {errors.subject && <p className="text-destructive text-xs mt-1">{errors.subject.message}</p>}
                    <textarea {...register("message")} placeholder="Your Message *" className={inputClass + " h-32 resize-none"} />
                    {errors.message && <p className="text-destructive text-xs mt-1">{errors.message.message}</p>}
                    <button type="submit" className="btn-gradient w-full text-base">Send Message</button>
                  </form>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
