"use client";

import { useState } from 'react';

interface FlyingEmoji {
  id: number;
  src: string;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  rotation: number;
}

export default function Supporter() {
  const [flyingEmojis, setFlyingEmojis] = useState<FlyingEmoji[]>([]);

  const triggerHeartAnimation = () => {
    // Check if mobile device
    const isMobile = window.innerWidth <= 768;
    
    // Prevent rapid clicking only on mobile
    if (isMobile && flyingEmojis.length > 20) return;
    
    const transportEmojis = [
      'Airplane', 'Rocket_2', 'Propeller Airplane_Blue,Grey,Shadow',
      'Car 3 Door', 'Car 5 Door', 'Car Bus', 'Car Delivery Truck',
      'Car Lorry', 'Car minibus antenna', 'Car racecar', 'Car Taxi',
      'Car Traktor', 'Car Tuk Tuk', 'Motorcycle Scooter', 'Motorcycle Sport Grey',
      'Helicopter Gelb, Rot', 'Boat Cruise Ship', 'Boat Ferry', 'Boat Sailboat_5',
      'Boat Speedboat', 'Train ICE', 'Sport Cyclist', 'Sport Ski'
    ];
    const newEmojis: FlyingEmoji[] = [];
    
    // Reduce number of emojis on mobile for better performance
    const emojiCount = isMobile ? 6 : 10;
    
    for (let i = 0; i < emojiCount; i++) {
      const randomEmoji = transportEmojis[Math.floor(Math.random() * transportEmojis.length)];
      const angle = Math.random() * Math.PI * 2;
      const distance = isMobile ? 300 : 500; // Shorter distance on mobile
      const startX = 0; // Start from center
      const startY = 0; // Start from center
      const endX = Math.cos(angle) * distance;
      const endY = Math.sin(angle) * distance;
      
      // Special handling for airplanes and rocket (they are rotated 135° clockwise)
      let rotation;
      if (randomEmoji.includes('Airplane') || randomEmoji.includes('Rocket_2')) {
        rotation = (angle * 180 / Math.PI) + 180 - 135; // Subtract 135° to correct the orientation
      } else if (randomEmoji.includes('Ski')) {
        rotation = (angle * 180 / Math.PI) + 180 - 150 + 180; // Subtract 150° and add 180° to correct the orientation for skier
      } else {
        rotation = (angle * 180 / Math.PI) + 180; // Normal orientation
      }
      
      const emoji: FlyingEmoji = {
        id: Date.now() + i + Math.random(), // More unique IDs
        src: `/Transport emojis/${randomEmoji}.svg`,
        startX,
        startY,
        endX,
        endY,
        rotation
      };
      
      newEmojis.push(emoji);
    }
    
    // Add all emojis at once
    setFlyingEmojis(prev => [...prev, ...newEmojis]);
    
    // Remove all emojis after animation (shorter on mobile)
    const animationDuration = isMobile ? 1500 : 2000;
    setTimeout(() => {
      setFlyingEmojis(prev => prev.filter(e => !newEmojis.some(ne => ne.id === e.id)));
    }, animationDuration);
  };

  return (
    <div className="min-h-screen bg-blue-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 shadow-lg relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-10">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-3 group">
              <img 
                src="/AppIconLight.png" 
                alt="Speed Panels App Icon" 
                className="w-12 h-12 rounded-xl object-cover group-hover:opacity-80 transition-opacity shadow-lg"
              />
              <h1 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">Speed Panels</h1>
            </a>
          </div>
        </div>
      </header>

      {/* Supporter Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            Become a Supporter
          </h1>
          <p className="text-lg text-gray-700 mb-12 text-center">
            Support the development of Speed Panels and help make it even better
          </p>

          {/* Creator Introduction */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              {/* Profile Picture */}
              <div className="flex-shrink-0">
                <img 
                  src="/Profile_Picture.png" 
                  alt="Jan Drebes - Creator of Speed Panels" 
                  className="w-32 h-32 rounded-full object-cover shadow-lg"
                />
              </div>

              {/* Creator Information */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Hi! I'm Jan</h2>
                <p className="text-gray-700 mb-6">
                  I'm passionate about building and creating things, and I love turning ideas into reality. I'm fascinated by speed – as a hobby, I enjoy cycling, love airplanes, and high-speed trains. I'm always curious about how fast I'm going and where I'm traveling through. That's why I built Speed Panels.
                </p>
                <p className="text-gray-700 mb-6">
                  Building apps takes a lot of time and resources. While many developers rely on ads for income, which I find far from user-friendly, I wanted to do things differently with Speed Panels.
                </p>
                <p className="text-gray-700 mb-6">
                  If you enjoy using Speed Panels and want to support its continued development, please consider donating whatever you think it's worth. Your support helps keep Speed Panels updated, running smoothly, and growing.
                </p>
                <p className="text-gray-700">
                  Tips are greatly appreciated, but supporters unlock premium features. Thanks for helping Speed Panels thrive!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supporter Assets Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Become a Supporter in the App
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Scooter Supporter */}
            <div className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
              <div className="flex items-start space-x-4 mb-4">
                <img src="/Supporter/supporter_scooter.png" alt="Scooter Supporter" className="w-16 h-16 rounded-2xl flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-white">Scooter Supporter</h3>
                  <p className="text-gray-300">Give us a gentle push – thank you for the jumpstart!</p>
                </div>
              </div>
              <ul className="text-sm text-gray-300 space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="8" fill="currentColor"/>
                    <path d="M7 10l2 2 4-4" stroke="white" strokeWidth="2" fill="none"/>
                  </svg>
                  Custom app icons
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="8" fill="currentColor"/>
                    <path d="M7 10l2 2 4-4" stroke="white" strokeWidth="2" fill="none"/>
                  </svg>
                  Unlock all display units
                </li>
              </ul>
            </div>

            {/* Tuk Tuk Supporter */}
            <div className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
              <div className="flex items-start space-x-4 mb-4">
                <img src="/Supporter/supporter_tuktuk.png" alt="Tuk Tuk Supporter" className="w-16 h-16 rounded-2xl flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-white">TukTuk Supporter</h3>
                  <p className="text-gray-300">Nimble, loud, and always moving us forward!</p>
                </div>
              </div>
              <ul className="text-sm text-gray-300 space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="8" fill="currentColor"/>
                    <path d="M7 10l2 2 4-4" stroke="white" strokeWidth="2" fill="none"/>
                  </svg>
                  Everything from Scooter
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="8" fill="currentColor"/>
                    <path d="M7 10l2 2 4-4" stroke="white" strokeWidth="2" fill="none"/>
                  </svg>
                  Unlock all units in statistics
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="8" fill="currentColor"/>
                    <path d="M7 10l2 2 4-4" stroke="white" strokeWidth="2" fill="none"/>
                  </svg>
                  View map in Distance Travelled
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="8" fill="currentColor"/>
                    <path d="M7 10l2 2 4-4" stroke="white" strokeWidth="2" fill="none"/>
                  </svg>
                  Downloadable GPX file from Distance Travelled
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="8" fill="currentColor"/>
                    <path d="M7 10l2 2 4-4" stroke="white" strokeWidth="2" fill="none"/>
                  </svg>
                  Extra app icons
                </li>
              </ul>
            </div>

            {/* Lorry Supporter */}
            <div className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
              <div className="flex items-start space-x-4 mb-4">
                <img src="/Supporter/supporter_lorry.png" alt="Lorry Supporter" className="w-16 h-16 rounded-2xl flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-white">Truck Supporter</h3>
                  <p className="text-gray-300">Now the project is really rolling – you're pulling us like a pro!</p>
                </div>
              </div>
              <ul className="text-sm text-gray-300 space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="8" fill="currentColor"/>
                    <path d="M7 10l2 2 4-4" stroke="white" strokeWidth="2" fill="none"/>
                  </svg>
                  Everything from TukTuk
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="8" fill="currentColor"/>
                    <path d="M7 10l2 2 4-4" stroke="white" strokeWidth="2" fill="none"/>
                  </svg>
                  Experimental Features
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="8" fill="currentColor"/>
                    <path d="M7 10l2 2 4-4" stroke="white" strokeWidth="2" fill="none"/>
                  </svg>
                  Even more app icons
                </li>
              </ul>
            </div>

            {/* Rocket Supporter */}
            <div className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
              <div className="flex items-start space-x-4 mb-4">
                <img src="/Supporter/supporter_rocket_2.png" alt="Rocket Supporter" className="w-16 h-16 rounded-2xl flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-white">Rocket Supporter</h3>
                  <p className="text-gray-300">You're out of this world – we're speechless!</p>
                </div>
              </div>
              <ul className="text-sm text-gray-300 space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="8" fill="currentColor"/>
                    <path d="M7 10l2 2 4-4" stroke="white" strokeWidth="2" fill="none"/>
                  </svg>
                  Everything from Truck
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="8" fill="currentColor"/>
                    <path d="M7 10l2 2 4-4" stroke="white" strokeWidth="2" fill="none"/>
                  </svg>
                  Exclusive app icons
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Heart */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-16 mb-12 text-center min-h-[400px] flex items-center justify-center relative">
            {/* Flying Emojis Container */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div id="flying-emojis" className="relative w-full h-full">
                {flyingEmojis.map(emoji => (
                  <img
                    key={emoji.id}
                    src={emoji.src}
                    alt="Flying Emoji"
                    className="absolute w-12 h-12"
                    style={{
                      left: `calc(50% + ${emoji.startX}px)`,
                      top: `calc(50% + ${emoji.startY}px)`,
                      transform: `translate(-50%, -50%) rotate(${emoji.rotation}deg)`,
                      transition: 'all 2s ease-out',
                      opacity: 1,
                      zIndex: 10,
                      animation: 'flyOut 2s ease-out forwards',
                      '--end-x': `${emoji.endX}px`,
                      '--end-y': `${emoji.endY}px`,
                      '--rotation': `${emoji.rotation}deg`
                    } as React.CSSProperties}
                  />
                ))}
              </div>
            </div>
            
            <div className="relative z-20">
              {/* Heart Button */}
              <button 
                id="heart-button"
                className="inline-block transform transition-transform duration-200 hover:scale-110 active:scale-95 touch-manipulation"
                onClick={triggerHeartAnimation}
                style={{ touchAction: 'manipulation' }}
              >
                <img 
                  src="/Heart.svg" 
                  alt="Heart" 
                  className="w-32 h-32 mx-auto select-none"
                  draggable="false"
                />
              </button>
              
              <p className="text-gray-700 mt-6 text-base">
                Click the heart to see some magic!
              </p>
            </div>
          </div>

          {/* My Approach */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">My Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">What I Do</h3>
                <p className="text-gray-700">
                  I focus on creating an intuitive and useful app that solves real problems. Speed Panels is designed 
                  to help you monitor your speed with precision and style, whether you're driving, cycling, 
                  or just curious about your velocity.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">My Philosophy</h3>
                <p className="text-gray-700">
                  I believe in a clean, ad-free experience that prioritizes user value. My approach centers on making Speed Panels both practical and enjoyable to use, with premium features available for those who want to support ongoing development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 