import { getProductBySlug } from "@/lib/utils";
import PriceComparison from "@/components/PriceComparison";
import LabReports from "@/components/LabReports";

export default function ProductPage({ params }: { params: { slug: string }}) {
  const p = getProductBySlug(params.slug);
  if (!p) return <div>Not found</div>;

  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="md:col-span-2 space-y-4">
        <div className="bg-[var(--card)] rounded-2xl p-4 border border-white/10">
          <h1 className="text-2xl font-bold">{p.brand} • {p.name}</h1>
          <p className="text-sm text-neutral-400 mt-1 uppercase">{p.type}</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={p.image} alt={p.name} className="rounded-xl mt-4 w-full object-cover" />
          <p className="text-sm text-neutral-300 mt-4">{p.description}</p>
          <p className="text-xs text-neutral-400 mt-2">Last verified: {new Date(p.lastVerified).toLocaleDateString("en-IN")}</p>
        </div>
        <LabReports p={p} />
      </div>
      <div className="space-y-4">
        <PriceComparison p={p} />
        <div className="bg-[var(--card)] rounded-2xl p-4 border border-white/10 text-sm text-neutral-300">
          <h4 className="font-semibold mb-2">Why we listed this</h4>
          <p>Meets our inclusion rule: at least one credible, independent lab report. Replace sample links with your actual NABL/third‑party PDFs.</p>
        </div>
      </div>
    </div>
  );
}
