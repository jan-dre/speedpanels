import React from "react";

export default function FAQPage() {
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

      {/* FAQ Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            Frequently Asked Questions (FAQ)
          </h1>
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What is Speed Panels?</h2>
                <p className="text-gray-700 mb-4">
                  Speed Panels is an iOS app for real-time speed, altitude, and statistics tracking across various activities and vehicles. It offers a customizable interface, privacy-first data handling, and detailed performance analytics.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Does the app work offline?</h2>
                <p className="text-gray-700 mb-4">
                  Yes, all speed and GPS features work completely offline. No internet connection is required for core functionality. However, a good GPS signal is required for accurate speed and location measurements.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How can I select a custom or alternate app icon?</h2>
                <p className="text-gray-700 mb-4">
                  You can choose a different app icon by opening the app and navigating to <strong>Panel Settings</strong> &rarr; <strong>About</strong> &rarr; <strong>App Icon</strong>. There you can select from the available icons to personalize the look of Speed Panels on your home screen.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What data is stored or shared?</h2>
                <p className="text-gray-700 mb-4">
                  All data is processed and stored locally on your device. No personal or location data is sent to external servers. For more details, see our <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What is the minimum supported iOS version?</h2>
                <p className="text-gray-700 mb-4">
                  Speed Panels requires iOS 17 or later.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 