import React from 'react';

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          controls={false} 
          preload="auto" 
          aria-label="Mouthwatering close-ups of juicy burgers sizzling on the grill"
          className="w-full h-full object-cover"
        >
          <source src="https://res.cloudinary.com/dlbvmlnul/video/upload/v1751273201/burgers_auddlx.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 sm:bg-black/40 lg:bg-black/30"></div>

      {/* Navigation Bar */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex justify-between items-center animate-fade-in">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="https://res.cloudinary.com/dlbvmlnul/image/upload/v1751275608/burger_logo_oeqijn.png" 
            alt="Bolt Burgers Logo" 
            className="w-8 h-8 sm:w-10 sm:h-10 mr-2 sm:mr-3 rounded-full overflow-hidden"
          />
          <span className="font-roboto uppercase tracking-widest text-xs sm:text-sm text-white/80 font-medium">
            Bolt Burgers
          </span>
        </div>

        {/* Center Navigation - Hidden on mobile */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-x-6 lg:gap-x-8">
          {['Menu', 'Locations', 'Contact'].map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-roboto text-white/80 text-sm hover:text-white transition-colors duration-300 relative group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Language Selector */}
        <button className="font-roboto text-white/80 text-xs sm:text-sm hover:text-white transition-colors duration-300">
          EN ⌄
        </button>
      </nav>

      {/* Hero Content */}
      <div className="relative z-40 min-h-screen flex items-center">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="max-w-4xl animate-slide-up">
            {/* Headline */}
            <h1 className="font-anton text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-[1.1] text-white uppercase mb-4 sm:mb-6">
              Sa<span className="text-yellow-400">vo</span>r the F<span className="text-yellow-400">la</span>vor
            </h1>
            
            {/* Subheading */}
            <p className="font-roboto text-sm sm:text-base lg:text-lg text-white/80 font-normal mb-6 sm:mb-8 lg:mb-10 max-w-2xl leading-relaxed">
              Handcrafted burgers, fresh ingredients, unforgettable taste.
            </p>
            
            {/* CTA Button */}
            <button className="bg-white text-black px-5 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-lg font-roboto text-sm sm:text-base font-medium uppercase hover:bg-gray-100 transition-all duration-300 min-h-[44px] hover:scale-105 hover:shadow-lg animate-scale-in touch-manipulation">
              Order Now
            </button>
          </div>
        </div>
      </div>

      {/* Right Vertical Label - Hidden on mobile */}
      <div className="hidden lg:block fixed right-4 xl:right-6 top-1/2 transform -translate-y-1/2 rotate-90 origin-center">
        <span className="font-roboto uppercase tracking-widest text-sm text-white/60 whitespace-nowrap">
          Freshly Made
        </span>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex justify-between items-end z-40">
        {/* Copyright */}
        <div className="font-roboto text-xs text-white/50">
          ©️ Bolt Burgers
        </div>
        
        {/* Bolt Badge */}
        <a 
          href="https://bolt.new/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform duration-300"
        >
          <img 
            src="https://res.cloudinary.com/dlbvmlnul/image/upload/v1751274537/bolt_black_circle_zghbbf.png" 
            alt="Bolt Badge" 
            className="w-12 h-12 sm:w-16 sm:h-16 lg:w-[72px] lg:h-[72px] rounded-full border-2 border-white/50 shadow-[0_0_8px_rgba(255,255,255,0.7)] hover:shadow-[0_0_12px_rgba(255,255,255,0.9)] transition-shadow duration-300"
          />
        </a>
      </div>

      {/* Mobile Menu Button - Only visible on mobile */}
      <button className="md:hidden fixed bottom-20 right-4 z-50 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3 text-white hover:bg-white/20 transition-all duration-300">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  );
}

export default App;