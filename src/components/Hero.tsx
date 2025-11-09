const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[hsl(211,100%,50%)] to-[hsl(191,100%,50%)]">
      {/* Top Right Info */}
      <div className="absolute top-5 right-8 text-right text-white z-20">
        <span className="block text-sm font-semibold mb-1">TNEA Counselling Code: 1203</span>
        <span className="block text-sm font-semibold">
          📍 Vellarai, Tambaram
        </span>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-32 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 animate-fade-in">
          Madras Engineering College
        </h1>
        <p className="text-2xl md:text-3xl text-white font-semibold mb-4 max-w-4xl mx-auto">
          Your Tech Journey Begins @ Madras Engineering College.
        </p>
        <p className="text-lg md:text-xl text-white/95 max-w-4xl mx-auto leading-relaxed mb-8">
          India's 1st Engineering College Specialising in IT, Computer Science, Data Science, Artificial Intelligence, 
          Machine Learning, Cybersecurity & Business Systems.
        </p>
        <div className="mt-8">
          <a
            href="/login"
            className="inline-block px-8 py-4 bg-white text-primary font-bold text-lg rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Get Started →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
