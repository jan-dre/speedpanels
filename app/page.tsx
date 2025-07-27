"use client";

import { useState, useRef, useEffect } from 'react';

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const [hasSeenVideo, setHasSeenVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Prüfe, ob der Benutzer das Video bereits gesehen hat
    const videoSeen = localStorage.getItem('speedPanels_videoSeen');
    
    if (!videoSeen) {
      // Erste Besuch - Video automatisch starten
      setIsPlaying(true);
      if (videoRef.current) {
        videoRef.current.play();
      }
    } else {
      // Bereits gesehen - Video nicht automatisch starten und Standbild anzeigen
      setHasSeenVideo(true);
      setVideoEnded(true);
    }
  }, []);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoEnded) {
        // Reset video to beginning and play
        videoRef.current.currentTime = 0;
        videoRef.current.play();
        setVideoEnded(false);
        setIsPlaying(true);
        // Markiere als gesehen, wenn manuell gestartet
        localStorage.setItem('speedPanels_videoSeen', 'true');
      } else if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
        // Markiere als gesehen, wenn manuell gestartet
        localStorage.setItem('speedPanels_videoSeen', 'true');
      }
    }
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
    setVideoEnded(true);
    // Markiere das Video als gesehen
    localStorage.setItem('speedPanels_videoSeen', 'true');
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

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-100 to-purple-100 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Monitor Your Speed in{" "}
            <span className="inline-block">
              <span className="text-red-500">R</span>
              <span className="text-orange-500">e</span>
              <span className="text-yellow-500">a</span>
              <span className="text-green-500">l</span>
              <span className="text-blue-500">-</span>
              <span className="text-indigo-500">T</span>
              <span className="text-purple-500">i</span>
              <span className="text-pink-500">m</span>
              <span className="text-red-600">e</span>
            </span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Track your speed with ease and view your real-time progress in a clear, intuitive way. 
            Stay informed and curious as you explore different modes of transportation.
          </p>
          
          {/* Download Button */}
          <div id="download" className="mb-16">
            <a 
              href="#app-store" 
              className="inline-block hover:scale-105 transition-transform duration-200"
            >
              <img 
                src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg" 
                alt="Download on the App Store" 
                className="h-14 md:h-16"
              />
            </a>
          </div>
          
          {/* App Screenshots */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-xl p-4 transform hover:scale-105 transition-transform duration-200">
              <div className="relative rounded-xl h-64 overflow-hidden">
                <video 
                  ref={videoRef}
                  className={`w-full h-full object-contain ${videoEnded ? 'hidden' : ''}`}
                  muted
                  playsInline
                  onEnded={handleVideoEnded}
                >
                  <source src="/Speed Panels Video Webseite.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {videoEnded && (
                  <div className="w-full h-full bg-black">
                    <img 
                      src="/IMG_2680.jpg" 
                      alt="Speed Panels App Screenshot" 
                      className="w-full h-full object-cover animate-fade-in-black"
                      style={{
                        animation: 'fadeInFromBlack 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards'
                      }}
                    />
                  </div>
                )}
                <button 
                  onClick={togglePlayPause}
                  className="absolute bottom-4 right-4 text-white hover:text-gray-200 transition-all duration-200 bg-white/20 backdrop-blur-sm rounded-full p-1 shadow-lg border border-white/30 hover:bg-white/30"
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                  {isPlaying ? (
                    <img src="/pause.svg" alt="Pause" className="w-8 h-8" />
                  ) : (
                    <img src="/play.svg" alt="Play" className="w-8 h-8" />
                  )}
                </button>
              </div>
              <p className="text-gray-600 mt-4 text-sm">Real-time speed monitoring with colorful interface</p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-4 transform hover:scale-105 transition-transform duration-200">
              <div className="rounded-xl h-64 flex items-center justify-center overflow-hidden">
                <img src="/Screenshot.png" alt="Speed Panels App Screenshot" className="w-full h-full object-contain" />
              </div>
              <p className="text-gray-600 mt-4 text-sm">Multi-page interface with customizable layouts</p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-4 transform hover:scale-105 transition-transform duration-200">
              <div className="rounded-xl h-64 flex items-center justify-center overflow-hidden">
                <img src="/Screenshot_statistics.png" alt="Speed Panels Statistics Screenshot" className="w-full h-full object-contain" />
              </div>
              <p className="text-gray-600 mt-4 text-sm">Track your performance with detailed statistics</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">What Speed Panels Can Do</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                <img src="/Icons/Precision.svg" alt="Precision" className="w-16 h-16 rounded-xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Precise Speed Monitoring</h3>
              <p className="text-gray-300">Real-time GPS speed measurement with enhanced accuracy. Track your speed across different activities and environments.</p>
            </div>
            
            <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                <img src="/Icons/Multi-Page.svg" alt="Multi-Page" className="w-16 h-16 rounded-xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Multi-Page Interface</h3>
              <p className="text-gray-300">Three customizable display pages with smooth swipe navigation. Each page can be individually configured with different layouts and information.</p>
            </div>
            
            <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                <img src="/Icons/ruler.svg" alt="Ruler" className="w-16 h-16 rounded-xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Multiple Speed Units</h3>
              <p className="text-gray-300">Choose from km/h, mph, knots, m/s, and Mach. All data is displayed locally on your device for privacy and performance.</p>
            </div>
            
            <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                <img src="/Icons/Satellite.svg" alt="Satellite" className="w-16 h-16 rounded-xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Advanced GPS Features</h3>
              <p className="text-gray-300">Track altitude, climb rate, GPS accuracy, and record your route with GPX export functionality. Color-coded speed segments on interactive maps.</p>
            </div>
            
            <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-500 rounded-2xl flex items-center justify-center mx-auto mb-4 overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                <img src="/Icons/Customizable_Design.svg" alt="Customizable Design" className="w-20 h-20 -m-2 rounded-xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Customizable Design</h3>
              <p className="text-gray-300">Personalize with custom colors, fonts, and layouts. Choose from 5 different fonts and customize the appearance to match your style.</p>
            </div>
            
            <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                <img src="/Icons/Statistics.svg" alt="Statistics" className="w-16 h-16 rounded-xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Performance Statistics</h3>
              <p className="text-gray-300">Track your maximum speed, highest altitude, total distance traveled, and other key performance metrics. Monitor your achievements and progress over time.</p>
            </div>
            
            <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                <img src="/Icons/Landscape & Portrait.svg" alt="Landscape & Portrait" className="w-16 h-16 rounded-xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Landscape & Portrait Compatible</h3>
              <p className="text-gray-300">Seamless rotation support for both landscape and portrait orientations. Suitable for dashboard mounting or handheld use with automatic layout adaptation.</p>
            </div>
            
            <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-4 overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                <img src="/Icons/Dark_Mode.svg" alt="Dark Mode" className="w-16 h-16 rounded-xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Dark Mode Support</h3>
              <p className="text-gray-300">Automatic dark mode that adapts to your device settings. Ideal for low-light conditions with comfortable viewing experience.</p>
            </div>
            
            <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                <img src="/Icons/Privacy.svg" alt="Privacy" className="w-16 h-16 rounded-xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Privacy First</h3>
              <p className="text-gray-300">All data processing happens locally on your device. No data is sent to external servers, ensuring your location and speed information remains private.</p>
            </div>
          </div>
          
          {/* Legal Disclaimer */}
          <div className="text-center mt-16 mb-8">
            <p className="text-sm text-gray-400 italic max-w-2xl mx-auto">
              Note: Speed Panels is designed for recreational use only. Measurements may be affected by hardware limitations or environmental conditions. Please use responsibly and in compliance with applicable laws and traffic rules.
            </p>
          </div>
          
          {/* Second Download Button */}
          <div className="text-center mt-4">
            <a 
              href="#app-store" 
              className="inline-block hover:scale-105 transition-transform duration-200"
            >
              <img 
                src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg" 
                alt="Download on the App Store" 
                className="h-14 md:h-16 drop-shadow-2xl"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Transport Banner */}
      <section className="bg-gradient-to-r from-blue-100 to-purple-100 py-4 overflow-hidden">
        <div className="relative">
          {/* Static transport icons */}
          <div className="flex space-x-8 py-2 justify-center">
            {/* First set */}
            <img src="/Transport emojis/Airplane.svg" alt="Airplane" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/Transport emojis/Car racecar.svg" alt="Race Car" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/Transport emojis/Boat Speedboat.svg" alt="Speedboat" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/Transport emojis/Train ICE.svg" alt="High-speed Train" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/Transport emojis/Sport Cyclist.svg" alt="Cyclist" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/Transport emojis/Motorcycle Sport Grey.svg" alt="Motorcycle" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/Transport emojis/Rocket_2.svg" alt="Rocket" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/Transport emojis/Helicopter Gelb, Rot.svg" alt="Helicopter" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/Transport emojis/Boat Sailboat_5.svg" alt="Sailboat" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/Transport emojis/Sport Ski.svg" alt="Ski" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/Transport emojis/Boat Ferry.svg" alt="Ferry" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/Transport emojis/Boat Cruise Ship.svg" alt="Cruise Ship" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/Transport emojis/Motorcycle Scooter.svg" alt="Scooter" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/Transport emojis/Car minibus antenna.svg" alt="Minibus" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/Transport emojis/Car Traktor.svg" alt="Tractor" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/Transport emojis/Car Taxi.svg" alt="Taxi" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/Transport emojis/Car Delivery Truck.svg" alt="Delivery Truck" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/Transport emojis/Car Lorry.svg" alt="Lorry" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/Transport emojis/Car Bus.svg" alt="Bus" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/Transport emojis/Car Tuk Tuk.svg" alt="Tuk Tuk" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/Transport emojis/Car 3 Door.svg" alt="3 Door Car" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/Transport emojis/Car 5 Door.svg" alt="5 Door Car" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/Transport emojis/Propeller Airplane_Blue,Grey,Shadow.svg" alt="Propeller Airplane" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            
            {/* Duplicate set for seamless loop */}
            <img src="/Transport emojis/Airplane.svg" alt="Airplane" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/Transport emojis/Car racecar.svg" alt="Race Car" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/Transport emojis/Boat Speedboat.svg" alt="Speedboat" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/Transport emojis/Train ICE.svg" alt="High-speed Train" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/Transport emojis/Sport Cyclist.svg" alt="Cyclist" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/Transport emojis/Motorcycle Sport Grey.svg" alt="Motorcycle" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/Transport emojis/Rocket_2.svg" alt="Rocket" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/Transport emojis/Helicopter Gelb, Rot.svg" alt="Helicopter" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/Transport emojis/Boat Sailboat_5.svg" alt="Sailboat" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/Transport emojis/Sport Ski.svg" alt="Ski" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/Transport emojis/Boat Ferry.svg" alt="Ferry" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/Transport emojis/Boat Cruise Ship.svg" alt="Cruise Ship" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/Transport emojis/Motorcycle Scooter.svg" alt="Scooter" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/Transport emojis/Car minibus antenna.svg" alt="Minibus" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/Transport emojis/Car Traktor.svg" alt="Tractor" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/Transport emojis/Car Taxi.svg" alt="Taxi" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/Transport emojis/Car Delivery Truck.svg" alt="Delivery Truck" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/Transport emojis/Car Lorry.svg" alt="Lorry" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/Transport emojis/Car Bus.svg" alt="Bus" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/Transport emojis/Car Tuk Tuk.svg" alt="Tuk Tuk" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/Transport emojis/Car 3 Door.svg" alt="3 Door Car" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/Transport emojis/Car 5 Door.svg" alt="5 Door Car" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/Transport emojis/Propeller Airplane_Blue,Grey,Shadow.svg" alt="Propeller Airplane" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
          </div>
        </div>
      </section>
    </div>
  );
}