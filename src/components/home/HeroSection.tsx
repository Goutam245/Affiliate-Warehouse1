import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import GlowOrbs from "../GlowOrbs";

const floatingStats = [
  { value: "1.1%", label: "Service Fee" },
  { value: "3+", label: "Wholesalers" },
  { value: "$0", label: "If No Saving" },
];

const microBadges = ["No Lock-ins", "No Saving = No Fee", "Price Alerts"];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    <GlowOrbs />

    {/* Animated gradient border frame */}
    <div className="absolute inset-4 md:inset-8 rounded-3xl border border-primary/20 animate-gradient-border bg-gradient-to-br from-primary/5 via-transparent to-electric-violet/5 pointer-events-none" />

    <div className="container mx-auto px-4 py-20 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 text-sm text-secondary-custom mb-6">
            🇦🇺 Australian Trade Procurement Network
          </span>

          <h1 className="text-5xl md:text-7xl lg:text-[66px] font-display font-bold leading-[0.95] tracking-tight mb-6">
            <span className="text-gradient">
              Collective Buying Power
            </span>
            <br />
            <span className="text-foreground">for Australian Trade</span>
            <br />
            <span className="text-foreground">Businesses</span>
          </h1>

          <p className="text-lg md:text-xl text-secondary-custom leading-relaxed max-w-xl mb-8">
            Corporate-tier wholesaler access, automated price monitoring, and transparent fee
            structures — built specifically for electrical, HVAC, and solar contractors.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            {microBadges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 text-sm text-neon-mint"
              >
                <Check size={14} className="text-neon-mint" />
                {badge}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Link to="/apply" className="btn-gradient text-base">
              Get Started
            </Link>
            <Link to="/how-it-works" className="btn-ghost-mint text-base">
              See How It Works
            </Link>
          </div>
        </motion.div>

        {/* Right - Image + Floating Stats */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden glow-border">
            <img
              src="https://plus.unsplash.com/premium_photo-1663091967607-2e15b89f4d6e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8"
              alt="Australian trade warehouse"
              className="w-full h-[400px] lg:h-[500px] object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </div>

          {/* Floating stat cards */}
          <div className="absolute -bottom-6 left-4 right-4 flex gap-3 justify-center">
            {floatingStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.15 }}
                className="glass-card px-4 py-3 text-center"
              >
                <div className="text-xl font-technical font-bold text-neon-mint">
                  {stat.value}
                </div>
                <div className="text-xs text-secondary-custom">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
