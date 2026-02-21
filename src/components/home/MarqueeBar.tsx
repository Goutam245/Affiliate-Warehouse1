const items = [
  "⚡ Electrical",
  "❄️ HVAC",
  "☀️ Solar",
  "TradeZone",
  "Voltex",
  "Ideal Electrical",
  "No Lock-ins",
  "Price Monitoring",
  "Transparent Fees",
];

const MarqueeBar = () => (
  <div className="bg-gradient-purple py-3 overflow-hidden relative">
    <div className="animate-marquee whitespace-nowrap flex">
      {[...items, ...items].map((item, i) => (
        <span
          key={i}
          className={`mx-8 text-sm font-semibold ${
            i % 2 === 0 ? "text-foreground" : "text-neon-mint"
          }`}
        >
          {item} •
        </span>
      ))}
    </div>
  </div>
);

export default MarqueeBar;
