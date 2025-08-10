import { formatINR } from "@/lib/utils";
import type { Product } from "@/lib/types";

export default function PriceComparison({ p }: { p: Product }) {
  return (
    <div className="bg-[var(--card)] rounded-2xl p-4 border border-white/10">
      <h4 className="font-semibold mb-3">Latest Indian Prices</h4>
      <ul className="space-y-2">
        {p.retailers.map(r => (
          <li key={r.name} className="flex items-center justify-between text-sm">
            <a className="underline hover:no-underline" href={r.url} target="_blank" rel="noopener noreferrer">{r.name}</a>
            <span className="tabular-nums">{formatINR(r.currentPriceINR)}</span>
            <span className="text-neutral-400 text-xs">checked {new Date(r.lastChecked).toLocaleDateString("en-IN")}</span>
          </li>
        ))}
      </ul>
      <p className="text-xs text-neutral-400 mt-3">Prices are indicative. Click through to confirm on retailer sites.</p>
    </div>
  );
}
