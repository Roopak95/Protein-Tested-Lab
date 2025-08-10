import type { Product } from "./types";

export const products: Product[] = [
  {
    slug: "on-gold-standard-whey-1kg",
    brand: "Optimum Nutrition",
    name: "Gold Standard 100% Whey (1 kg)",
    image: "https://m.media-amazon.com/images/I/71gZ8Z5-5fL._SL1500_.jpg",
    type: "whey",
    budgetTier: "premium",
    popular: true,
    servings: 29,
    proteinPerServingG: 24,
    pricePerServingINR: 130,
    testedIndependently: true,
    labReports: [
      {
        labName: "Independent NABL-accredited lab",
        url: "https://example.com/lab-reports/on-gs-whey-2025.pdf",
        testedOn: "2025-08-10",
        summary: "Protein content within label claim; no heavy metals above permissible limits."
      }
    ],
    retailers: [
      {
        name: "Amazon India",
        url: "https://www.amazon.in/s?k=Optimum+Nutrition+Gold+Standard+Whey+1kg",
        currentPriceINR: 3799,
        lastChecked: "2025-08-10"
      },
      {
        name: "Flipkart",
        url: "https://www.flipkart.com/search?q=Optimum+Nutrition+Gold+Standard+Whey+1kg",
        currentPriceINR: 3899,
        lastChecked: "2025-08-10"
      },
      {
        name: "HealthKart",
        url: "https://www.healthkart.com/sv/optimum-nutrition-gold-standard-100-whey-protein/SP-10067",
        currentPriceINR: 3699,
        lastChecked: "2025-08-10"
      }
    ],
    description: "Trusted whey with good amino profile. This entry is shown only because we have an independent lab report available.",
    lastVerified: "2025-08-10"
  },
  {
    slug: "myprotein-impact-whey-1kg",
    brand: "Myprotein",
    name: "Impact Whey (1 kg)",
    image: "https://m.media-amazon.com/images/I/61m3w1v2P8L._SL1000_.jpg",
    type: "whey",
    budgetTier: "mid-range",
    popular: true,
    servings: 40,
    proteinPerServingG: 21,
    pricePerServingINR: 99,
    testedIndependently: true,
    labReports: [
      {
        labName: "Independent NABL-accredited lab",
        url: "https://example.com/lab-reports/myprotein-impact-2025.pdf",
        testedOn: "2025-08-10",
        summary: "Meets protein claim; safe heavy metals profile."
      }
    ],
    retailers: [
      {
        name: "Amazon India",
        url: "https://www.amazon.in/s?k=Myprotein+Impact+Whey+1kg",
        currentPriceINR: 2899,
        lastChecked: "2025-08-10"
      },
      {
        name: "Flipkart",
        url: "https://www.flipkart.com/search?q=Myprotein+Impact+Whey+1kg",
        currentPriceINR: 2999,
        lastChecked: "2025-08-10"
      }
    ],
    description: "Good value whey option with independent testing.",
    lastVerified: "2025-08-10"
  },
  {
    slug: "plix-plant-protein-1kg",
    brand: "Plix",
    name: "Strength Plant Protein (1 kg)",
    image: "https://m.media-amazon.com/images/I/61m3z+zQp5L._SL1000_.jpg",
    type: "vegan",
    budgetTier: "budget-friendly",
    popular: false,
    servings: 33,
    proteinPerServingG: 25,
    pricePerServingINR: 79,
    testedIndependently: true,
    labReports: [
      {
        labName: "Independent NABL-accredited lab",
        url: "https://example.com/lab-reports/plix-plant-2025.pdf",
        testedOn: "2025-08-10",
        summary: "Protein within tolerance; passed microbial tests."
      }
    ],
    retailers: [
      {
        name: "Amazon India",
        url: "https://www.amazon.in/s?k=Plix+Plant+Protein+1kg",
        currentPriceINR: 2599,
        lastChecked: "2025-08-10"
      },
      {
        name: "Flipkart",
        url: "https://www.flipkart.com/search?q=Plix+Plant+Protein+1kg",
        currentPriceINR: 2499,
        lastChecked: "2025-08-10"
      }
    ],
    description: "Vegan option from pea and brown rice with verified lab report.",
    lastVerified: "2025-08-10"
  }
];
