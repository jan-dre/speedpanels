export const LEGAL_PUBLISHER = {
  name: "Jan Drebes",
  role: "sole proprietor",
  locality: "Unterägeri",
  country: "Switzerland",
  email: "support@speedpanels.com",
} as const;

export const LEGAL_LOCATION = `${LEGAL_PUBLISHER.locality}, ${LEGAL_PUBLISHER.country}`;

export const LEGAL_PUBLISHER_LINE = `${LEGAL_PUBLISHER.name} (${LEGAL_PUBLISHER.role}), ${LEGAL_LOCATION}`;
