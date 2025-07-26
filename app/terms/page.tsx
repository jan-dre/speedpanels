export default function Terms() {
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

      {/* Terms Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-700 mb-12 text-center">
            Last updated: July 13, 2025
          </p>

          {/* Terms Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="space-y-8">
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement</h2>
                <p className="text-gray-700">
                  By downloading, installing, or using the iOS application Speed Panels ("App"), you agree to be bound by these Terms of Service.
                </p>
                <p className="text-gray-700 mt-4">
                  If you do not agree, do not use the App.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Ownership and Provider</h2>
                <p className="text-gray-700">
                  The App is developed and maintained by Jan Drebes, sole proprietor based in Switzerland.
                </p>
                <p className="text-gray-700">
                  Responsible for content and data processing:<br />
                  Jan Drebes<br />
                  Email: <a href="mailto:support@speedpanels.com" className="text-blue-600 hover:text-blue-800">support@speedpanels.com</a>
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. App Purpose</h2>
                <p className="text-gray-700 mb-4">
                  Speed Panels is a recreational speed monitoring tool using sensor data (GPS, gyroscope, barometer, etc.). It is designed for non-professional, non-certified, and non-critical use only.
                </p>
                <p className="text-gray-700">
                  Do not rely on the App for aviation, marine, or vehicular safety-critical functions.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. User Responsibilities</h2>
                <p className="text-gray-700 mb-4">
                  You agree to:
                </p>
                <ul className="text-gray-700 mb-4 list-disc list-inside space-y-2">
                  <li>Use the App in compliance with applicable laws and traffic rules</li>
                  <li>Not use the App in a distracting or unsafe manner</li>
                  <li>Acknowledge that displayed measurements may be affected by hardware limitations or environmental conditions</li>
                  <li>Accept that the App is not a professional-grade instrument</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. In-App Purchases & Supporter Tiers</h2>
                <ul className="text-gray-700 mb-4 list-disc list-inside space-y-2">
                  <li>All purchases are processed by Apple and managed via RevenueCat</li>
                  <li>Donations ("Supporter Tiers") are symbolic and non-refundable</li>
                  <li>Supporter prices may vary depending on your country, currency, and applicable taxes. Apple determines final local pricing through the App Store.</li>
                  <li>Some features are unlocked through Supporter Tiers, as described in the App</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property</h2>
                <p className="text-gray-700">
                  All content, icons, code, and designs in the App are the exclusive property of Jan Drebes.<br />
                  You may not copy, modify, reverse-engineer, or redistribute the App without written consent.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. No Warranties</h2>
                <p className="text-gray-700 mb-4">
                  The App is provided "as is" without any guarantees. We make no warranty that:
                </p>
                <ul className="text-gray-700 mb-4 list-disc list-inside space-y-2">
                  <li>The App will function uninterrupted or error-free</li>
                  <li>The displayed data is accurate or reliable</li>
                  <li>The App will meet your specific expectations or purposes</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
                <p className="text-gray-700 mb-4">
                  To the fullest extent permitted by law, we are not liable for:
                </p>
                <ul className="text-gray-700 mb-4 list-disc list-inside space-y-2">
                  <li>Any indirect, incidental, or consequential damages</li>
                  <li>Loss of data or device malfunction</li>
                  <li>Accidents or damage resulting from reliance on the App</li>
                </ul>
                <p className="text-gray-700">
                  Maximum liability shall be limited to the amount you paid for the App in the last 12 months.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Indemnification</h2>
                <p className="text-gray-700">
                  You agree to indemnify and hold harmless Jan Drebes from any claims, losses, or legal actions resulting from misuse of the App or breach of these Terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. App and Terms Modifications</h2>
                <p className="text-gray-700">
                  We reserve the right to modify these Terms or the App (including features, pricing, or business model) at any time. Changes take effect upon publication. Continued use of the App after changes constitutes acceptance.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Termination</h2>
                <p className="text-gray-700">
                  You may stop using the App at any time.<br />
                  We may suspend or revoke your access if you violate these Terms. Upon termination, your right to use the App ends immediately.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Jurisdiction and Governing Law</h2>
                <p className="text-gray-700">
                  These Terms are governed by Swiss law. Disputes shall be resolved by the competent courts of Switzerland.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Severability</h2>
                <p className="text-gray-700">
                  If any provision of these Terms is found invalid, the rest remain enforceable.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Contact</h2>
                <p className="text-gray-700">
                  For questions about these Terms, please contact us at <a href="mailto:support@speedpanels.com" className="text-blue-600 hover:text-blue-800">support@speedpanels.com</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 