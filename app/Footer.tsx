export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="/imprint" className="text-gray-300 hover:text-white transition-colors">Imprint</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              <li><a href="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">App</h3>
            <ul className="space-y-2">
              <li><a href="https://apps.apple.com/app/speedometer-speed-panels/id6751212000" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">App Store</a></li>
              <li><a href="/changelog" className="text-gray-300 hover:text-white transition-colors">Changelog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support Us</h3>
            <ul className="space-y-2">
              <li><a href="/supporter" className="text-gray-300 hover:text-white transition-colors">Become a Supporter</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Jan Drebes. All rights reserved. | 
            <a href="/cookies" className="text-gray-300 hover:text-white ml-2">Cookie Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
} 