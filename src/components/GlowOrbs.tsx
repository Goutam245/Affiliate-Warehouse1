const GlowOrbs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[128px] animate-float" />
    <div className="absolute top-3/4 right-1/4 w-[400px] h-[400px] bg-electric-violet/15 rounded-full blur-[128px] animate-float-delayed" />
    <div className="absolute top-1/2 left-3/4 w-[350px] h-[350px] bg-primary/10 rounded-full blur-[128px] animate-float-slow" />
  </div>
);

export default GlowOrbs;
