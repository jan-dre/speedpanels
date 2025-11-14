"use client";

import { useState, useEffect } from 'react';

export default function Changelog() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(1024); // Default value for SSR
  
  const images = [
    { src: "/Webseite_124kmh.png", alt: "Speed Panels - 124 km/h Display", description: "Real-time speed monitoring at 124 km/h" },
    { src: "/Webseite_bottom_values.png", alt: "Speed Panels - Bottom Values", description: "Detailed bottom panel with additional metrics" },
    { src: "/Webseite_65knots.png", alt: "Speed Panels - 65 Knots Display", description: "Speed display in knots unit" },
    { src: "/Webseite_colorpicker.png", alt: "Speed Panels - Color Picker", description: "Customizable color picker interface" },
    { src: "/Webseite_statistics_dark.png", alt: "Speed Panels - Dark Statistics", description: "Statistics view in dark mode" },
    { src: "/Webseite_map.png", alt: "Speed Panels - Map View", description: "Interactive map with route tracking" }
  ];

  const nextImage = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  // Set window width after component mounts (client-side only)
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 shadow-lg relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-10">
          <div className="flex items-center justify-between">
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

      {/* Changelog Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            What's New in Speed Panels
          </h1>

          {/* Version 1.1 - Update */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <div className="flex items-center mb-4">
              <span className="text-sm text-gray-600 font-medium">November 12, 2025 • Speed Panels 1.1</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <img src="/Transport emojis/Rocket_2.svg" alt="Rocket" className="w-7 h-7 drop-shadow-sm" />
              Major Update with Colorful and Creative New Features
            </h2>
            <ul className="text-gray-700 mb-4 list-disc list-inside space-y-2">
              <li>Redesigned, more intuitive menu</li>
              <li>New Background Color options: Solid, Gradient, Vignette, and the new Grain texture</li>
              <li>New text effects with Shadow and Glow</li>
              <li>Added preview for background color and text customization</li>
              <li>Speed Panels is now fully available in German</li>
            </ul>
          </div>

          {/* Version 1.0.3 - Update */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <div className="flex items-center mb-4">
              <span className="text-sm text-gray-600 font-medium">September 15, 2025 • Speed Panels 1.0.3</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <img src="/Transport emojis/Car 3 Door.svg" alt="Car" className="w-7 h-7 drop-shadow-sm" />
              Improvements
            </h2>
            <ul className="text-gray-700 mb-4 list-disc list-inside space-y-2">
              <li>Bug fixes and general improvements.</li>
            </ul>
          </div>

          {/* Version 1.0.1 - Update */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <div className="flex items-center mb-4">
              <span className="text-sm text-gray-600 font-medium">September 8, 2025 • Speed Panels 1.0.1</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <img src="/Transport emojis/Car 3 Door.svg" alt="Car" className="w-7 h-7 drop-shadow-sm" />
              Improvements
            </h2>
            <ul className="text-gray-700 mb-4 list-disc list-inside space-y-2">
              <li>Sharing Speed Panels is now simpler, with better text and a link to the website.</li>
              <li>Leaving a review now opens the app's page in the App Store.</li>
            </ul>
          </div>

          {/* Version 1.0.0 - Launch */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <div className="flex items-center mb-4">
              <span className="text-sm text-gray-600 font-medium">September 6, 2025 • Speed Panels 1.0</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <img src="/Transport emojis/Rocket_2.svg" alt="Rocket" className="w-7 h-7 drop-shadow-sm" />
              App Store Launch
            </h2>
            <p className="text-gray-700 mb-4">
              I am thrilled to announce the official launch of Speed Panels on the App Store! 
              After months of development and testing, I'm excited to bring you a comprehensive 
              real-time speed monitoring experience.
            </p>
            <p className="text-gray-700 mb-4">
              Speed Panels allows users to monitor their real-time speed while traveling in different 
              modes of transportation. Using GPS data, it provides speed measurements in 
              various units including km/h, mph, and m/s.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Key Features:</strong>
            </p>
            <ul className="text-gray-700 mb-4 list-disc list-inside space-y-2">
              <li>Real-time GPS speed monitoring</li>
              <li>Multiple speed units: km/h, mph, knots, m/s, Mach</li>
              <li>Three configurable display pages with swipe navigation</li>
              <li>Altitude measurement in meters and feet with climb rate calculation in m/s, ft/min, km/h, and mph</li>
              <li>Automatic GPS route recording with GPX export</li>
              <li>Interactive map view with color-coded speed segments</li>
              <li>Performance statistics with maximum speed and distance tracking in kilometers, miles, and nautical miles</li>
              <li>Privacy-first design with all data processed locally on your device</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Download Speed Panels today and start monitoring your speed with style!
            </p>
          </div>

          {/* Image Gallery - Responsive Design */}
          <div className="mt-8">
            {/* Desktop Version - Original with Navigation */}
            <div className="hidden md:block">
              <div className="grid grid-cols-6 gap-85 transition-transform duration-500" style={{
                transform: `translateX(-${currentImageIndex * (windowWidth < 768 ? 80 : 40)}%)`
              }}>
                {images.map((image, index) => (
                  <div key={index} className="border-2 border-gray-200 rounded-2xl overflow-hidden bg-gray-50 shadow-lg aspect-square min-h-80">
                    <img 
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
              
              {/* Desktop Navigation Arrows */}
              <div className="flex justify-start items-center space-x-8 mt-8 ml-12">
                <button 
                  onClick={prevImage}
                  className="bg-white hover:bg-gray-100 text-gray-800 rounded-full p-4 shadow-lg transition-all duration-200 hover:scale-110 border border-gray-200"
                  aria-label="Previous image"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button 
                  onClick={nextImage}
                  className="bg-white hover:bg-gray-100 text-gray-800 rounded-full p-4 shadow-lg transition-all duration-200 hover:scale-110 border border-gray-200"
                  aria-label="Next image"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile Version - Touch Scroll */}
            <div className="md:hidden">
              <div className="overflow-x-auto scrollbar-hide bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-4">
                <div className="flex space-x-4 min-w-max">
                  {images.map((image, index) => (
                    <div key={index} className="flex-shrink-0 border-2 border-gray-200 rounded-2xl overflow-hidden bg-white shadow-lg" style={{ width: '280px', height: '280px' }}>
                      <img 
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-contain p-2"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 