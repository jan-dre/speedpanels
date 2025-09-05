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
            Last updated: September 5, 2025
          </p>

          {/* Privacy Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="space-y-8">
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Who we are</h2>
                <p className="text-gray-700 mb-4">
                  Speedometer: Speed Panels (hereinafter "Speed Panels") is an iOS app published by Jan Drebes (sole proprietor) based in Switzerland ("we", "us", "our"). For contact details, see Imprint on our website or email support@speedpanels.com.
                </p>
                <p className="text-gray-700 mb-4">
                  For the purposes of data protection laws (e.g., GDPR/UK GDPR), we act as the data controller for processing we determine. For in-app purchases, Apple and RevenueCat process certain data independently—see Third-Party Services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. What this policy covers</h2>
                <p className="text-gray-700 mb-4">
                  This policy applies to the iOS app "Speedometer: Speed Panels" (short: "Speed Panels") and to our website. It explains which data we process, for what purposes, and your rights.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. What data the app processes (on-device)</h2>
                <ul className="text-gray-700 mb-4 list-disc list-inside space-y-2">
                  <li>Sensor readings you allow iOS to access (GPS/location, barometer, gyroscope, accelerometer) to compute speed, altitude and related metrics.</li>
                  <li>App settings & usage preferences (e.g., units, layout), stored locally on your device.</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  <strong>No cloud by us:</strong> The app does not send your sensor data to our servers; computation and storage occur locally on your iPhone. You can delete all app data by uninstalling the app or using built-in reset options.
                </p>
                <p className="text-gray-700">
                  <strong>Important:</strong> In-app purchases/donations are handled via Apple and RevenueCat (see §6). We do not receive your payment card details.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. What data the website may process</h2>
                <ul className="text-gray-700 mb-4 list-disc list-inside space-y-2">
                  <li>Standard server logs (e.g., IP address, user-agent, timestamp) via our hosting provider Vercel for security/operation.</li>
                  <li>Optional analytics: If enabled, Vercel Web Analytics uses a request-hash approach without third-party cookies. (If disabled, no analytics are run.)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Purposes and legal bases (Art. 6 GDPR)</h2>
                <ul className="text-gray-700 mb-4 list-disc list-inside space-y-2">
                  <li>Provide core functionality of the app (performance of a contract).</li>
                  <li>Show you sensor-based readouts after you grant consent in iOS (you can revoke in iOS Settings).</li>
                  <li>Process in-app purchases/donations (performance of a contract; legal obligations on Apple's side for billing/tax).</li>
                  <li>Security, fraud prevention, abuse (legitimate interests).</li>
                </ul>
                <p className="text-gray-700">
                  We do not use your data for targeted advertising or tracking.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Third-party services we rely on</h2>
                <ul className="text-gray-700 mb-4 list-disc list-inside space-y-2">
                  <li><strong>Apple (App Store / Media Services)</strong> – distribution, purchases, refunds, receipt validation and account-level processing. Apple may retain purchase-related personal data for statutory periods (often ≥10 years). See Apple's privacy notices.</li>
                  <li><strong>RevenueCat</strong> – infrastructure for in-app purchases/subscriptions. RevenueCat generally processes purchase history, transaction receipts, locale/currency, and related technical data; it does not collect your payment card data, and encrypts data in transit. We configure RevenueCat only for purchase entitlement management. See RevenueCat privacy/GDPR.</li>
                  <li><strong>Vercel (website hosting)</strong> – hosting and (if enabled) analytics; see Vercel privacy/DPA.</li>
                </ul>
                <p className="text-gray-700">
                  Where these providers process data outside Switzerland/EEA/UK, they use Standard Contractual Clauses or equivalent safeguards.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data sharing & "sale/share"</h2>
                <p className="text-gray-700">
                  We do not sell or share personal information for cross-context behavioral advertising as defined by the CPRA. We share data only as necessary to operate the app/website as described above.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Retention</h2>
                <ul className="text-gray-700 mb-4 list-disc list-inside space-y-2">
                  <li><strong>App data:</strong> stays on your device until you delete/reset or uninstall.</li>
                  <li><strong>Purchase records:</strong> retained by Apple/RevenueCat per their legal/operational requirements; developers typically need Apple's records for refunds, fraud prevention, and tax reporting periods.</li>
                  <li><strong>Support emails:</strong> retained only as long as needed to handle your request and comply with legal obligations.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Your rights</h2>
                <p className="text-gray-700 mb-4">
                  Depending on where you live, you may have rights to access, correct, delete, restrict, object, or port your personal data, and to withdraw consent (e.g., location permissions).
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>How to exercise:</strong> email support@speedpanels.com. For App Store purchase data, you may also contact Apple directly via your account settings. You can lodge a complaint with your supervisory authority (e.g., FDPIC in CH; an EU DPA for EU residents; ICO in the UK).
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Children</h2>
                <p className="text-gray-700">
                  The app is not intended for children under 13, or the higher minimum age in your country. We do not knowingly collect personal data from children. Parents can manage permissions via Apple's Family settings.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. International availability & transfers</h2>
                <p className="text-gray-700">
                  We make the app available in many countries/regions except where restricted (e.g., regulatory requirements). Where personal data is processed by our partners outside Switzerland/EEA/UK, appropriate safeguards apply (see §6).
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Security</h2>
                <p className="text-gray-700">
                  We use iOS sandboxing and platform security best practices; RevenueCat encrypts data in transit; our website uses HTTPS via Vercel. No system is 100% secure, but we actively minimize processing and do not upload your sensor data to our servers.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Changes to this policy</h2>
                <p className="text-gray-700">
                  We may update this policy to reflect legal, technical, or business changes. We will post the new version on our website and, where required, notify you in-app. If changes materially affect how we process your data, we will seek consent where required.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Contact</h2>
                <p className="text-gray-700">
                  <strong>Controller:</strong> Jan Drebes (sole proprietor), Switzerland<br />
                  <strong>Email:</strong> support@speedpanels.com<br />
                  <strong>Postal address:</strong> see Imprint on our website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 