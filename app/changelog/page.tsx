"use client";

import { useState, useRef, useCallback, useEffect } from "react";

type ChangelogImage = {
  src: string;
  alt: string;
};

type GalleryFormat = "landscape" | "portrait";

function getSlidesPerView(
  width: number,
  isPortrait: boolean,
  imageCount: number
): number {
  const minSlideWidth = isPortrait ? 128 : 168;
  const maxPerRow = isPortrait ? 3 : 3;
  const fitCount = Math.floor(width / minSlideWidth);
  return Math.max(1, Math.min(imageCount, maxPerRow, fitCount));
}

function ChangelogImageGallery({
  images,
  format = "landscape",
}: {
  images: ChangelogImage[];
  format?: GalleryFormat;
}) {
  const [pageIndex, setPageIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const viewportRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef(0);

  const isPortrait = format === "portrait";
  const pageCount = Math.max(1, Math.ceil(images.length / slidesPerView));
  const canGoPrev = pageIndex > 0;
  const canGoNext = pageIndex < pageCount - 1;
  const needsNavigation = pageCount > 1;

  const goToPage = useCallback(
    (next: number) => {
      setPageIndex(Math.max(0, Math.min(pageCount - 1, next)));
    },
    [pageCount]
  );

  const goPrev = () => goToPage(pageIndex - 1);
  const goNext = () => goToPage(pageIndex + 1);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const updateLayout = () => {
      const width = viewport.offsetWidth;
      const nextSpv = getSlidesPerView(width, isPortrait, images.length);
      setSlidesPerView(nextSpv);
      setPageIndex((p) => {
        const maxPage = Math.max(0, Math.ceil(images.length / nextSpv) - 1);
        return Math.min(p, maxPage);
      });
    };

    updateLayout();
    const observer = new ResizeObserver(updateLayout);
    observer.observe(viewport);
    return () => observer.disconnect();
  }, [images.length, isPortrait]);

  const finishDrag = useCallback(
    (delta: number) => {
      const width = viewportRef.current?.offsetWidth ?? 320;
      const threshold = Math.min(width * 0.12, 56);

      if (delta < -threshold && canGoNext) goToPage(pageIndex + 1);
      else if (delta > threshold && canGoPrev) goToPage(pageIndex - 1);

      setDragOffset(0);
      setIsDragging(false);
    },
    [canGoNext, canGoPrev, goToPage, pageIndex]
  );

  const onPointerDown = (e: React.PointerEvent) => {
    if (e.button !== 0) return;
    if ((e.target as HTMLElement).closest("[data-carousel-control]")) return;

    dragStartX.current = e.clientX;
    setIsDragging(true);
    viewportRef.current?.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const delta = e.clientX - dragStartX.current;
    const atStart = pageIndex === 0 && delta > 0;
    const atEnd = pageIndex === pageCount - 1 && delta < 0;
    setDragOffset(atStart || atEnd ? delta * 0.35 : delta);
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (!isDragging) return;
    viewportRef.current?.releasePointerCapture(e.pointerId);
    finishDrag(e.clientX - dragStartX.current);
  };

  const onPointerCancel = () => {
    if (!isDragging) return;
    finishDrag(0);
  };

  useEffect(() => {
    if (!needsNavigation) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") setPageIndex((p) => Math.max(0, p - 1));
      if (e.key === "ArrowRight") setPageIndex((p) => Math.min(pageCount - 1, p + 1));
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [needsNavigation, pageCount]);

  const maxImageHeight = isPortrait ? "min(68vh, 480px)" : "min(48vh, 360px)";
  const pageShiftPercent = (slidesPerView / images.length) * 100;

  return (
    <div
      className="mt-8"
      role="region"
      aria-roledescription="carousel"
      aria-label="App screenshots"
    >
      <div
        className={`flex items-center ${needsNavigation ? "gap-2 sm:gap-3" : ""}`}
      >
        {needsNavigation && (
          <button
            type="button"
            data-carousel-control
            onClick={goPrev}
            disabled={!canGoPrev}
            className="flex h-9 w-9 sm:h-10 sm:w-10 flex-shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-800 ring-1 ring-black/[0.06] transition hover:bg-neutral-200 active:scale-95 disabled:pointer-events-none disabled:opacity-0"
            aria-label="Previous screenshots"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        <div
          ref={viewportRef}
          className="min-w-0 flex-1 overflow-hidden rounded-2xl bg-white cursor-grab active:cursor-grabbing"
          style={{ touchAction: "none" }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerCancel}
        >
          <div
            className={`flex py-5 sm:py-6 ${isDragging ? "" : "transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"}`}
            style={{
              width: `${(images.length / slidesPerView) * 100}%`,
              transform: `translateX(calc(-${pageIndex * pageShiftPercent}% + ${dragOffset}px))`,
            }}
          >
            {images.map((image) => (
              <div
                key={image.src}
                className="box-border flex flex-shrink-0 items-center justify-center px-2 sm:px-3"
                style={{ width: `${100 / images.length}%` }}
              >
                <div className="inline-block max-w-full overflow-hidden rounded-[1.25rem] ring-1 ring-black/[0.06]">
                  <img
                    src={image.src}
                    alt={image.alt}
                    draggable={false}
                    className="block h-auto w-auto max-w-full object-contain"
                    style={{ maxHeight: maxImageHeight }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {needsNavigation && (
          <button
            type="button"
            data-carousel-control
            onClick={goNext}
            disabled={!canGoNext}
            className="flex h-9 w-9 sm:h-10 sm:w-10 flex-shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-800 ring-1 ring-black/[0.06] transition hover:bg-neutral-200 active:scale-95 disabled:pointer-events-none disabled:opacity-0"
            aria-label="Next screenshots"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>

      {needsNavigation && (
        <div className="mt-4 flex items-center justify-center gap-2">
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              type="button"
              data-carousel-control
              onClick={() => goToPage(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === pageIndex
                  ? "w-6 bg-neutral-800"
                  : "w-2 bg-neutral-300 hover:bg-neutral-400"
              }`}
              aria-label={`Page ${i + 1} of ${pageCount}`}
              aria-current={i === pageIndex ? "true" : undefined}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Changelog() {
  const launchImages: ChangelogImage[] = [
    { src: "/Webseite_124kmh.png", alt: "Speed Panels - 124 km/h Display" },
    { src: "/Webseite_bottom_values.png", alt: "Speed Panels - Bottom Values" },
    { src: "/Webseite_65knots.png", alt: "Speed Panels - 65 Knots Display" },
    { src: "/Webseite_colorpicker.png", alt: "Speed Panels - Color Picker" },
    { src: "/Webseite_statistics_dark.png", alt: "Speed Panels - Dark Statistics" },
    { src: "/Webseite_map.png", alt: "Speed Panels - Map View" },
  ];

  const version11Images: ChangelogImage[] = [
    { src: "/Portrait_Settings_BackgroundColor.jpg", alt: "Speed Panels - Background color settings" },
    { src: "/Portrait_SpeedPanel_Green_mph.jpg", alt: "Speed Panels - Green speed panel in mph" },
    { src: "/Portrait_SpeedPanel_White_mph.jpg", alt: "Speed Panels - White speed panel in mph" },
  ];

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

          {/* Version 1.1.1 - Update */}
          <div className="bg-white rounded-2xl shadow-sm ring-1 ring-black/[0.04] p-8 mb-16">
            <div className="flex items-center mb-4">
              <span className="text-sm text-gray-600 font-medium">February 9, 2026 • Speed Panels 1.1.1</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <img src="/Transport emojis/Car 3 Door.svg" alt="Car" className="w-7 h-7 drop-shadow-sm" />
              Improvements
            </h2>
            <ul className="text-gray-700 mb-4 list-disc list-inside space-y-2">
              <li>Translation improvements and optimizations.</li>
            </ul>
          </div>

          {/* Version 1.1 - Update */}
          <div className="bg-white rounded-2xl shadow-sm ring-1 ring-black/[0.04] p-8 mb-16">
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
            <ChangelogImageGallery images={version11Images} format="portrait" />
          </div>

          {/* Version 1.0.3 - Update */}
          <div className="bg-white rounded-2xl shadow-sm ring-1 ring-black/[0.04] p-8 mb-16">
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
          <div className="bg-white rounded-2xl shadow-sm ring-1 ring-black/[0.04] p-8 mb-16">
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
          <div className="bg-white rounded-2xl shadow-sm ring-1 ring-black/[0.04] p-8 mb-16">
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
            <ChangelogImageGallery images={launchImages} format="landscape" />
          </div>
        </div>
      </section>
    </div>
  );
} 