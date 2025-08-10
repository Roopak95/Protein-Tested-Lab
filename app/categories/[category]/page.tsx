import ProductCard from "@/components/ProductCard";
import { getProductsByCategory } from "@/lib/utils";

export default function CategoryPage({ params }: { params: { category: string }}) {
  const items = getProductsByCategory(params.category);
  return (
    <div className="space-y-6">
      <h2 className="text-xl md:text-2xl font-semibold capitalize">{params.category.replace("-", " ")}</h2>
      <section className="grid md:grid-cols-2 gap-4">
        {items.map(p => <ProductCard key={p.slug} p={p} />)}
      </section>
      {items.length === 0 && <p className="text-neutral-400">No items yet.</p>}
    </div>
  );
}
