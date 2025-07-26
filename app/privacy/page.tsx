export default function Privacy() {
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

      {/* Privacy Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-700 mb-12 text-center">
            Last updated: July 13, 2025
          </p>

          {/* Privacy Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="space-y-8">
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                <p className="text-gray-700 mb-4">
                  This Privacy Policy explains how the iOS application Speed Panels ("we", "us", "our") collects, stores, and uses your information.
                </p>
                <p className="text-gray-700 mb-4">
                  We respect your privacy and are committed to protecting your personal data. As a sole proprietorship based in Switzerland (Jan Drebes), we comply with the Swiss Federal Act on Data Protection (FADP), the General Data Protection Regulation (GDPR), and other applicable international laws including but not limited to:
                </p>
                <ul className="text-gray-700 mb-4 list-disc list-inside space-y-2">
                  <li>UK GDPR</li>
                  <li>CCPA/CPRA (California)</li>
                  <li>LGPD (Brazil)</li>
                  <li>PIPEDA (Canada)</li>
                  <li>POPIA (South Africa)</li>
                  <li>APPI (Japan)</li>
                  <li>PIPA (South Korea)</li>
                  <li>PDPA (Taiwan)</li>
                  <li>Privacy Acts in Australia and New Zealand</li>
                  <li>LFPDPPP (Mexico)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Data Collection</h2>
                <p className="text-gray-700 mb-4">
                  We collect only what is strictly necessary to provide core app functionality:
                </p>
                <ul className="text-gray-700 mb-4 list-disc list-inside space-y-2">
                  <li><strong>Sensor Data:</strong> GPS, gyroscope, accelerometer, and barometer readings for real-time speed and elevation calculations.</li>
                  <li><strong>Device Information:</strong> Device model, iOS version, and app version to ensure compatibility.</li>
                  <li><strong>Usage Data:</strong> Feature preferences and interaction history (stored locally).</li>
                  <li><strong>In-App Purchase Data:</strong> Managed via Apple and RevenueCat. No payment or personal data is collected or stored by us.</li>
                </ul>
                <p className="text-gray-700">
                  <strong>Important:</strong> All data is stored locally on your iPhone. No data is transmitted to our servers or to the cloud.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Purpose of Data Usage</h2>
                <p className="text-gray-700 mb-4">
                  We use your data exclusively for the following:
                </p>
                <ul className="text-gray-700 mb-4 list-disc list-inside space-y-2">
                  <li>Real-time display of speed, altitude, and other readings</li>
                  <li>Device compatibility optimization</li>
                  <li>Enabling in-app purchases and donations</li>
                  <li>Local feature preferences and user experience</li>
                  <li>Responding to technical inquiries (when you contact us directly)</li>
                </ul>
                <p className="text-gray-700">
                  We do not use your data for tracking, profiling, marketing, or advertising.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Storage & Security</h2>
                <ul className="text-gray-700 mb-4 list-disc list-inside space-y-2">
                  <li><strong>Local Only:</strong> All app data stays on your device and is managed by iOS's secure sandboxing.</li>
                  <li><strong>No Cloud, No Remote Servers:</strong> We do not use cloud sync or external storage.</li>
                  <li><strong>You Control It:</strong> You can delete your data at any time by uninstalling the app or using built-in reset functions.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Third-Party Services</h2>
                <ul className="text-gray-700 mb-4 list-disc list-inside space-y-2">
                  <li><strong>Apple App Store:</strong> Manages app distribution, purchases, and refunds.</li>
                  <li><strong>RevenueCat:</strong> Manages in-app purchases and subscriptions.</li>
                  <li><strong>Vercel:</strong> Hosts our website (this privacy policy only applies to the app).</li>
                  <li><strong>GitHub:</strong> Used for code versioning and development (not involved in user data).</li>
                </ul>
                <p className="text-gray-700">
                  These services have their own privacy policies. We do not share your data with them except as technically required for purchases or app updates.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Retention</h2>
                <ul className="text-gray-700 mb-4 list-disc list-inside space-y-2">
                  <li>All data is retained only as long as the app remains installed.</li>
                  <li>When you delete or reset the app, your data is removed completely.</li>
                  <li>No backup or transmission to us ever occurs.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Rights</h2>
                <p className="text-gray-700 mb-4">
                  Depending on your jurisdiction, you may have the right to:
                </p>
                <ul className="text-gray-700 mb-4 list-disc list-inside space-y-2">
                  <li>Access, correct, or delete your data</li>
                  <li>Request data portability (e.g., GPX export)</li>
                  <li>Withdraw consent to sensor usage via device settings</li>
                  <li>Lodge a complaint with your local data authority</li>
                </ul>
                <p className="text-gray-700">
                  To exercise any rights, contact us at: <a href="mailto:support@speedpanels.com" className="text-blue-600 hover:text-blue-800">support@speedpanels.com</a>
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Children's Privacy</h2>
                <p className="text-gray-700">
                  The app is not intended for children under 13 years old. We do not knowingly collect data from minors.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. International Users & Compliance</h2>
                <p className="text-gray-700">
                  We comply with relevant privacy laws in all countries where the app is available. No international data transfers take place since all data is stored locally.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to this Policy</h2>
                <p className="text-gray-700">
                  We may revise this Privacy Policy. You will be notified via the app or website when changes occur.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Information</h2>
                <p className="text-gray-700">
                  Jan Drebes<br />
                  Email: <a href="mailto:support@speedpanels.com" className="text-blue-600 hover:text-blue-800">support@speedpanels.com</a>
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Governing Law</h2>
                <p className="text-gray-700">
                  This Privacy Policy is governed by the laws of Switzerland. Any disputes shall be settled by the courts of Switzerland.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 