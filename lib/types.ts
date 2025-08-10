export type Retailer = {
  name: string;
  url: string;
  currentPriceINR: number;
  lastChecked: string; // ISO date
};

export type LabReport = {
  labName: string; // e.g., NABL-accredited lab
  url: string;     // external link to PDF/report page
  testedOn: string; // ISO date
  summary: string;
};

export type Product = {
  slug: string;
  brand: string;
  name: string;
  image: string; // remote or local path
  type: "whey" | "isolate" | "casein" | "vegan" | "blend";
  budgetTier: "budget-friendly" | "mid-range" | "premium";
  popular: boolean;
  servings: number;
  proteinPerServingG: number;
  pricePerServingINR: number; // derived in data but stored for SEO
  testedIndependently: true;
  labReports: LabReport[];
  retailers: Retailer[];
  description: string;
  lastVerified: string; // ISO date
};
