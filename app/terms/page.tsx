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
            Last updated: September 5, 2025
          </p>

          {/* Terms Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="space-y-8">
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement</h2>
                <p className="text-gray-700">
                  By downloading, installing, or using the iOS app "Speedometer: Speed Panels" (short: "Speed Panels", the "App"), you agree to these Terms. If you do not agree, do not use the App.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Provider & contact</h2>
                <p className="text-gray-700">
                  The App ("Speedometer: Speed Panels", short: "Speed Panels") is developed and provided by Jan Drebes, sole proprietor in Switzerland. Contact: support@speedpanels.com (postal address: see Imprint).
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Purpose & acceptable use (safety first)</h2>
                <p className="text-gray-700 mb-4">
                  The App is a recreational speedometer and data-display tool. It is not designed, tested, or certified for safety-critical or professional use (including but not limited to aviation/avionics, maritime navigation, public transport operations, emergency services, industrial control, or primary vehicle instrumentation).
                </p>
                <p className="text-gray-700">
                  You must not rely on the App where inaccurate readings could cause harm. Always use professionally certified equipment and comply with applicable laws and regulations.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. User responsibilities</h2>
                <p className="text-gray-700 mb-4">
                  You agree to:
                </p>
                <ul className="text-gray-700 mb-4 list-disc list-inside space-y-2">
                  <li>use the App lawfully and safely and not in a distracting manner;</li>
                  <li>understand that readings can be affected by hardware limitations, GPS loss, environment, or configuration;</li>
                  <li>ensure the App is compatible with your device and kept up-to-date.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. In-app purchases, supporter tiers & pricing</h2>
                <p className="text-gray-700 mb-4">
                  Purchases/donations are processed by Apple and entitlement management by RevenueCat. We do not receive your payment card details.
                </p>
                <p className="text-gray-700 mb-4">
                  Supporter tiers may unlock additional features. Tiers are stacked/ascending; availability and exact features are displayed in-app.
                </p>
                <p className="text-gray-700 mb-4">
                  Prices vary by country/currency/taxes; final local pricing is determined by Apple. Refunds are handled per Apple's policies and any mandatory consumer laws in your country. Unless required by law, donations are not refundable.
                </p>
                <p className="text-gray-700">
                  If subscriptions are offered, they are managed by Apple; you can cancel in iOS Settings before renewal.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual property</h2>
                <p className="text-gray-700">
                  All rights in the App, code, design, graphics, and content are owned by Jan Drebes. You may not copy, modify, reverse engineer, or redistribute without our written permission, except as permitted by mandatory law.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. No warranties</h2>
                <p className="text-gray-700">
                  The App is provided "as is" and "as available". We do not warrant that it will be uninterrupted, error-free, or that readings will be accurate for your specific purpose.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of liability</h2>
                <p className="text-gray-700 mb-4">
                  To the maximum extent permitted by applicable law, we are not liable for indirect, incidental, special, consequential, or punitive damages, or for loss of data. Our total aggregate liability arising out of or relating to the App shall not exceed the amounts you paid within the 12 months preceding the event giving rise to the claim. Nothing in these Terms limits liability that cannot legally be limited (e.g., for intentional misconduct).
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Indemnity</h2>
                <p className="text-gray-700">
                  You agree to indemnify and hold Jan Drebes harmless from claims arising from your misuse of the App or breach of these Terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to the App/Terms</h2>
                <p className="text-gray-700">
                  We may update the App (including features, pricing, supporter tiers) and these Terms at any time. We will post changes on our website and, where required, provide in-app notice. Continued use after changes means you accept the updated Terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Suspension/termination</h2>
                <p className="text-gray-700">
                  We may suspend or terminate access if you violate these Terms or if required by law or platform rules. You may stop using the App at any time (uninstall).
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Governing law & consumer rights</h2>
                <p className="text-gray-700">
                  These Terms are governed by Swiss law; courts of Switzerland have jurisdiction. Mandatory consumer protections in your country remain unaffected.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact</h2>
                <p className="text-gray-700">
                  Jan Drebes — support@speedpanels.com — postal address in Imprint.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 