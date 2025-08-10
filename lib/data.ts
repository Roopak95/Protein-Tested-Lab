import type { Product } from "./types";

export const products: Product[] = [
  {
    slug: "nutrabay-gold-isolate-1kg",
    brand: "Nutrabay",
    name: "Gold 100% Whey Isolate (1 kg)",
    // TODO: Replace with Amazon image URL (m.media-amazon.com) – see instructions below
    image: "https://m.media-amazon.com/images/I/placeholder.jpg",
    type: "whey",
    budgetTier: "mid-range",
    popular: true,
    servings: 33,
    proteinPerServingG: 25,
    pricePerServingINR: 110,
    testedIndependently: true,
    labReports: [
      {
        labName: "Trustified (Eurofins tested)",
        url: "https://www.trustified.in/passandfail/nutrabaygoldwheyprotein",
        testedOn: "2024-11-17",
        summary: "Passed macro accuracy; no amino or melamine spiking per report."
      }
    ],
    retailers: [
      {
        name: "Amazon India",
        url: "https://www.amazon.in/Nutrabay-Gold-100-Protein-Isolate/dp/B08DRGYF33",
        currentPriceINR: 3799,
        lastChecked: "2025-08-10"
      }
    ],
    description: "Isolate from Nutrabay with third-party verification via Trustified (Eurofins).",
    lastVerified: "2025-08-10"
  },
  {
    slug: "muscleblaze-whey-gold-1kg",
    brand: "MuscleBlaze",
    name: "Whey Gold 100% Whey (1 kg)",
    // TEMP image (HealthKart CDN is allowed); replace with Amazon image URL if you prefer
    image: "https://img2.hkrtcdn.com/35641/prd_3564081-MuscleBlaze-Whey-Gold-Protein-Isolate-with-Digezyme-8.8-lb-Rich-Milk-Chocolate_o.jpg",
    type: "whey",
    budgetTier: "premium",
    popular: true,
    servings: 30,
    proteinPerServingG: 30,
    pricePerServingINR: 143,
    testedIndependently: true,
    labReports: [
      {
        labName: "Trustified (Eurofins tested)",
        url: "https://www.trustified.in/passandfail/muscleblaze-whey-gold",
        testedOn: "2024-07-17",
        summary: "Passed Eurofins tests; batch JJGWCF0001."
      }
      // Optional extra independent link for MB Biozyme series:
      // { labName: "Informed Choice (UK program)", url: "https://choice.wetestyoutrust.com/supplement-search/muscleblaze/biozyme-performance-whey-biozorb-performance-whey", testedOn: "2022-12-10", summary: "Certified product page." }
    ],
    retailers: [
      {
        name: "Amazon India",
        url: "https://www.amazon.in/MuscleBlaze-Whey-Gold-Protein-Chocolate/dp/B0721745M1",
        currentPriceINR: 4299,
        lastChecked: "2025-08-10"
      }
    ],
    description: "MB Whey Gold with a verifiable third-party test page on Trustified.",
    lastVerified: "2025-08-10"
  },
  {
    slug: "avvatar-nitro-iso-whey-1kg",
    brand: "Avvatar",
    name: "Nitro ISO Whey (1 kg)",
    // TODO: Replace with Amazon image URL (m.media-amazon.com)
    image: "https://m.media-amazon.com/images/I/placeholder.jpg",
    type: "isolate",
    budgetTier: "premium",
    popular: true,
    servings: 29,
    proteinPerServingG: 28.5,
    pricePerServingINR: 150,
    testedIndependently: true,
    labReports: [
      {
        labName: "Trustified (Eurofins tested)",
        url: "https://www.trustified.in/passandfail",
        testedOn: "2024-04-28",
        summary: "Passed Eurofins tests; batch AISO23H12G (see Avvatar Nitro ISO Whey entries)."
      }
    ],
    retailers: [
      {
        name: "Amazon India",
        url: "https://www.amazon.in/Avvatar-Absolute-Protein-Belgian-Chocolate/dp/B07DQNW7SJ",
        currentPriceINR: 0,
        lastChecked: "2025-08-10"
      }
    ],
    description: "Avvatar’s ISO whey with independent verification listed on Trustified.",
    lastVerified: "2025-08-10"
  },
  {
    slug: "naturaltein-whey-isolate-1kg",
    brand: "NATURALTEIN",
    name: "Whey Protein Isolate (1 kg)",
    // TODO: Replace with Amazon image URL
    image: "https://m.media-amazon.com/images/I/placeholder.jpg",
    type: "isolate",
    budgetTier: "mid-range",
    popular: false,
    servings: 30,
    proteinPerServingG: 27,
    pricePerServingINR: 120,
    testedIndependently: true,
    labReports: [
      {
        labName: "Eurofins (PDF)",
        url: "https://naturaltein.in/wp-content/uploads/2024/06/258-2024-06000809_Whey_Protein_Isolate_Chocolate_-1_compressed.pdf",
        testedOn: "2024-06-04",
        summary: "Amino acids & aflatoxin screen; Eurofins India report."
      }
    ],
    retailers: [
      // If you sell via Amazon, put the exact PDP here. Otherwise use brand/other Indian retailer links.
    ],
    description: "Example of a product with a public Eurofins PDF report.",
    lastVerified: "2025-08-10"
  }
];
