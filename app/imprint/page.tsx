import { PostalAddress } from "@/components/PostalAddress";
import {
  ContentCard,
  ContentSection,
  PageHeading,
  PageLayout,
  textLinkClass,
} from "@/components/PageLayout";
import { LEGAL_PUBLISHER } from "@/lib/legal";

export default function Imprint() {
  return (
    <PageLayout>
      <PageHeading title="Imprint" />

      <ContentCard>
        <ContentSection title="Publisher">
          <p className="text-gray-700">
            {LEGAL_PUBLISHER.name} ({LEGAL_PUBLISHER.role})
          </p>
        </ContentSection>

        <ContentSection title="Postal address">
          <PostalAddress />
        </ContentSection>

        <ContentSection title="Contact">
          <p className="text-gray-700">
            <strong>Email:</strong>{" "}
            <a
              href={`mailto:${LEGAL_PUBLISHER.email}`}
              className={textLinkClass}
            >
              {LEGAL_PUBLISHER.email}
            </a>
          </p>
        </ContentSection>
      </ContentCard>
    </PageLayout>
  );
}
