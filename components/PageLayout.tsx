import SiteHeader from "./SiteHeader";

const contentDotPattern = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;

type PageLayoutProps = {
  children: React.ReactNode;
  maxWidth?: "3xl" | "4xl";
};

export function PageLayout({ children, maxWidth = "4xl" }: PageLayoutProps) {
  const widthClass = maxWidth === "3xl" ? "max-w-3xl" : "max-w-4xl";

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100">
      <SiteHeader />
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div
          className="absolute inset-0"
          style={{ backgroundImage: contentDotPattern }}
        />
        <div className={`${widthClass} mx-auto relative z-10`}>{children}</div>
      </section>
    </div>
  );
}

export function PageHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <>
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">{title}</h1>
      {subtitle ? (
        <p className="text-lg text-gray-700 mb-12 text-center">{subtitle}</p>
      ) : null}
    </>
  );
}

export function ContentCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
      <div className="space-y-8">{children}</div>
    </div>
  );
}

export function ContentSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
      {children}
    </div>
  );
}

export function ContentBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6 last:mb-0">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      {children}
    </div>
  );
}

export const textLinkClass = "text-blue-600 hover:underline";

/** Contact page: gradient ring + white fill — matches site blues without a heavy solid button */
export function ContactEmailButton({ email }: { email: string }) {
  return (
    <a
      href={`mailto:${email}`}
      className="group inline-flex max-w-full rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-[2px] shadow-sm ring-1 ring-black/[0.04] transition duration-200 hover:shadow-md active:scale-[0.98]"
    >
      <span className="inline-flex items-center gap-2 sm:gap-3 rounded-full bg-white px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold transition group-hover:bg-blue-50/60">
        <svg
          className="h-5 w-5 flex-shrink-0 text-blue-600"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden
        >
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
        <span className="break-all bg-gradient-to-r from-blue-800 to-purple-800 bg-clip-text text-transparent">
          {email}
        </span>
      </span>
    </a>
  );
}
