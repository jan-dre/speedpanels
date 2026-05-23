import { LEGAL_PUBLISHER } from "@/lib/legal";

export function PostalAddress({ className = "text-gray-700" }: { className?: string }) {
  return (
    <p className={className}>
      {LEGAL_PUBLISHER.name}
      <br />
      {LEGAL_PUBLISHER.locality}
      <br />
      {LEGAL_PUBLISHER.country}
    </p>
  );
}
