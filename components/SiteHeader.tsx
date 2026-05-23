export default function SiteHeader() {
  return (
    <header className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 shadow-lg relative overflow-hidden">
      <div className="absolute inset-0 bg-black/30" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-10">
        <a href="/" className="flex items-center space-x-3 group w-fit">
          <img
            src="/AppIconLight.png"
            alt="Speed Panels App Icon"
            className="w-12 h-12 rounded-xl object-cover group-hover:opacity-80 transition-opacity shadow-lg"
          />
          <span className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
            Speed Panels
          </span>
        </a>
      </div>
    </header>
  );
}
