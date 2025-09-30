import { useState, useEffect } from 'react';

export default function DairyPromoBanner() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Target: current time + 72 hours
    const targetDate = new Date(Date.now() + 72 * 60 * 60 * 1000);

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12">
      <div className="container-px">
        <div className="relative h-[500px] md:h-[500px] sm:h-[260px] rounded-sm overflow-hidden">
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(circle at center, rgba(71,85,105,0.65) 0%, rgba(10,12,16,1) 100%)',
            zIndex: 0
          }}></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 h-full px-10 py-10 relative z-10">
            {/* Left Content */}
            <div className="flex flex-col justify-center text-white" style={{ zIndex: 20 }}>
              {/* Small Header */}
              <div className="mb-4">
                <span className="text-green-500 font-medium tracking-wide text-sm">Categories</span>
              </div>

              {/* Headline */}
              <h2 className="text-4xl lg:text-5xl md:text-3xl sm:text-2xl font-bold mb-8 leading-tight">
                Enhance Your<br />Dairy Experience
              </h2>

              {/* Countdown */}
              <div className="flex gap-4 mb-8">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center mb-2">
                    <span className="text-black text-xl font-semibold">{timeLeft.hours.toString().padStart(2, '0')}</span>
                  </div>
                  <span className="text-gray-400 text-xs">Hours</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center mb-2">
                    <span className="text-black text-xl font-semibold">{timeLeft.days.toString().padStart(2, '0')}</span>
                  </div>
                  <span className="text-gray-400 text-xs">Days</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center mb-2">
                    <span className="text-black text-xl font-semibold">{timeLeft.minutes.toString().padStart(2, '0')}</span>
                  </div>
                  <span className="text-gray-400 text-xs">Minutes</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center mb-2">
                      <span className="text-black text-xl font-semibold">{timeLeft.seconds.toString().padStart(2, '0')}</span>
                    </div>
                    <span className="text-gray-400 text-xs">Seconds</span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-md font-semibold transition-colors self-start"
                aria-label="Buy dairy products now"
              >
                Buy Now!
              </button>
            </div>

            {/* Right Image */}
            <div className="lg:absolute lg:right-0 lg:bottom-0 lg:w-1/2 lg:h-full flex items-end justify-center lg:justify-end" style={{ zIndex: 10 }}>
              <img
                src="/images/tuangsusu.png"
                alt="Milk being poured into a glass"
                className="h-[90%] lg:h-[110%] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}