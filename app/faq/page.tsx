import {
  ContentBlock,
  ContentCard,
  ContentSection,
  PageHeading,
  PageLayout,
  textLinkClass,
} from "@/components/PageLayout";
import { LEGAL_PUBLISHER } from "@/lib/legal";

export default function FAQPage() {
  return (
    <PageLayout>
      <PageHeading title="Frequently Asked Questions (FAQ)" />

      <ContentCard>
        <ContentSection title="General">
          <div className="space-y-6">
            <ContentBlock title="What is Speed Panels?">
              <p className="text-gray-700">
                Speed Panels is an iOS app for real-time speed, altitude, and statistics
                tracking across various activities and vehicles. It offers a customizable
                interface, privacy-first data handling, detailed performance analytics, and
                operates without traditional advertising.
              </p>
            </ContentBlock>
            <ContentBlock title="What is the minimum supported iOS version?">
              <p className="text-gray-700">Speed Panels requires iOS 17.6 or later.</p>
            </ContentBlock>
            <ContentBlock title="Does Speed Panels work on iPad?">
              <p className="text-gray-700">
                Yes. GPS-based speed, altitude, and related values are available on iPhone
                and on iPad models with cellular (Wi‑Fi + Cellular). Wi‑Fi‑only iPad models
                do not provide GPS data for these measurements.
              </p>
            </ContentBlock>
            <ContentBlock title="Does the app work offline?">
              <p className="text-gray-700">
                Yes. Core features work without an internet connection. A usable GPS signal is
                still required for accurate speed and location measurements.
              </p>
            </ContentBlock>
          </div>
        </ContentSection>

        <ContentSection title="Privacy & data">
          <ContentBlock title="What data is stored or shared?">
            <p className="text-gray-700">
              All data is processed and stored locally on your device. No personal or location
              data is sent to external servers. For more details, see our{" "}
              <a href="/privacy" className={textLinkClass}>
                Privacy Policy
              </a>
              .
            </p>
          </ContentBlock>
        </ContentSection>

        <ContentSection title="Customization">
          <ContentBlock title="How can I select a custom or alternate app icon?">
            <p className="text-gray-700">
              Open the app and go to{" "}
              <strong>
                <svg
                  className="w-5 h-5 text-gray-700 align-text-top inline mr-1 -mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Panel Settings
              </strong>{" "}
              → <strong>About</strong> → <strong>App Icon</strong>.
            </p>
          </ContentBlock>
        </ContentSection>

        <ContentSection title="Tips for better readings">
          <p className="text-gray-700 mb-6">
            These suggestions may improve GPS reception. Results still depend on your device,
            environment, and signal conditions. They are not guaranteed.
          </p>
          <div className="space-y-6">
            <ContentBlock title="On airplanes">
              <p className="text-gray-700 mb-3">
                When airline rules and cabin crew allow it, hold your device close to the
                window. A window seat often gives the GPS chip a clearer view of the sky; aisle
                seats are frequently more shielded by the fuselage, which can weaken or block
                the signal needed for speed, climb rate, and altitude.
              </p>
              <p className="text-gray-700">
                Even at a window seat, reception varies by aircraft type, route, and phone
                placement. Speed Panels is a recreational tool only. It is not certified flight
                instrumentation. Always follow airline regulations regarding device use.
              </p>
            </ContentBlock>
            <ContentBlock title="On trains">
              <p className="text-gray-700">
                Keeping your device near the window can help, similar to other vehicles.
                Metal train bodies often attenuate GPS signals, so speed, climb rate, and
                altitude may still be missing or unstable, even at the window.
              </p>
            </ContentBlock>
            <ContentBlock title="Climb rate display">
              <p className="text-gray-700">
                Climb rate may appear slightly delayed. The value is smoothed for a steadier
                on-screen display, so brief vertical changes can take a moment to show.
              </p>
            </ContentBlock>
          </div>
        </ContentSection>

        <ContentSection title="Good to know">
          <p className="text-gray-700 mb-4">
            The tips above are practical ideas, not promises. They do not replace professional
            or certified instruments. Speed Panels is for recreational use. Readings can be wrong
            or missing because of GPS, your device, or your surroundings.
          </p>
          <p className="text-gray-700 mb-4">
            Tips about planes or trains are general guidance only, not aviation or navigation
            advice. Binding rules on using the app, safety, and liability are in our{" "}
            <a href="/terms" className={textLinkClass}>
              Terms of Service
            </a>
            . Mandatory consumer rights in your country still apply where the law requires them.
          </p>
          <p className="text-gray-700">
            Questions?{" "}
            <a href={`mailto:${LEGAL_PUBLISHER.email}`} className={textLinkClass}>
              {LEGAL_PUBLISHER.email}
            </a>
            {" · "}
            <a href="/imprint" className={textLinkClass}>
              Imprint
            </a>
          </p>
        </ContentSection>
      </ContentCard>
    </PageLayout>
  );
}
