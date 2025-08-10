import { products } from "./data";

export const getAllProducts = () => products;

export const getProductsByCategory = (category: string) => {
  const all = getAllProducts();
  if (["whey","isolate","casein","vegan","blend"].includes(category)) {
    return all.filter(p => p.type === category);
  }
  if (category === "budget-friendly") return all.filter(p => p.budgetTier === "budget-friendly");
  if (category === "popular") return all.filter(p => p.popular);
  if (category === "premium") return all.filter(p => p.budgetTier === "premium");
  return all;
};

export const getProductBySlug = (slug: string) => getAllProducts().find(p => p.slug === slug);

export const formatINR = (n: number) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(n);
