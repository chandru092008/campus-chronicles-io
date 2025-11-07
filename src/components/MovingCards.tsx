const MovingCards = () => {
  const cards = [
    {
      title: "Industry-Ready Curriculum",
      description: "Learn what the industry needs — cutting-edge curriculum for tomorrow's tech.",
      color: "bg-[hsl(45,92%,63%)]"
    },
    {
      title: "Experienced Faculty",
      description: "Well-qualified mentors from both academic & real-world experience.",
      color: "bg-[hsl(211,100%,50%)]"
    },
    {
      title: "Learn by Doing",
      description: "Hands-on learning through paid internships & pre-placement opportunities.",
      color: "bg-[hsl(0,0%,11%)]"
    },
    {
      title: "Placement Support",
      description: "100% Placement assistance through tie-ups with Fortune 500 Companies.",
      color: "bg-[hsl(162,79%,36%)]"
    },
    {
      title: "Vibrant Community",
      description: "Enjoy a fun, inclusive campus with clubs, events, sports, and initiatives.",
      color: "bg-[hsl(250,64%,63%)]"
    },
    {
      title: "Gen Z Campus",
      description: "AC Classrooms, Smart Labs, and a Tech-Integrated Learning Environment.",
      color: "bg-[hsl(45,92%,63%)]"
    }
  ];

  return (
    <section className="py-16 overflow-hidden bg-background -mt-12">
      <div className="animate-scroll flex gap-5">
        {/* Duplicate cards for seamless loop */}
        {[...cards, ...cards].map((card, index) => (
          <div
            key={index}
            className={`${card.color} min-w-[300px] h-[180px] rounded-xl p-5 text-white shadow-lg flex-shrink-0`}
          >
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-sm leading-relaxed">{card.description}</p>
          </div>
        ))}
      </div>
      
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default MovingCards;
