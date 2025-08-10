import ProductCard from "@/components/ProductCard";
import Filters from "@/components/Filters";
import { getAllProducts } from "@/lib/utils";

export default function Home({ searchParams }: { searchParams: { q?: string } }) {
  const all = getAllProducts();
  const q = searchParams?.q?.toLowerCase() ?? "";
  const filtered = q ? all.filter(p =>
    (p.brand + " " + p.name).toLowerCase().includes(q)
  ) : all;

  return (
    <div className="space-y-6">
      <section className="text-center space-y-3">
        <h1 className="text-2xl md:text-4xl font-bold">Only Independently Lab‑Tested Protein Powders in India</h1>
        <p className="text-neutral-300 max-w-2xl mx-auto">
          Compare prices from Indian retailers and read the actual lab reports. We only list products that have verified third‑party testing.
        </p>
      </section>

      <Filters />

      <section className="grid md:grid-cols-2 gap-4">
        {filtered.map(p => <ProductCard key={p.slug} p={p} />)}
      </section>
    </div>
  );
}
