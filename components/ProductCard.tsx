import Link from "next/link";
import Image from "next/image";
import { formatINR } from "@/lib/utils";
import type { Product } from "@/lib/types";

export default function ProductCard({ p }: { p: Product }) {
  const minPrice = Math.min(...p.retailers.map(r => r.currentPriceINR));
  return (
    <Link href={`/products/${p.slug}`} className="bg-[var(--card)] rounded-2xl p-4 border border-white/10 hover:border-white/20 transition block">
      <div className="flex gap-4">
        <div className="relative w-28 h-28 shrink-0 overflow-hidden rounded-xl bg-black/30">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={p.image} alt={p.name} className="object-cover w-full h-full" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold">{p.brand} <span className="text-neutral-300">•</span> {p.name}</h3>
          <p className="text-xs text-neutral-400 mt-1">{p.type.toUpperCase()} • {p.servings} servings • {p.proteinPerServingG}g protein</p>
          <div className="mt-3 flex items-center gap-3">
            <span className="text-sm px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300">Lab-tested</span>
            {p.popular && <span className="text-sm px-2 py-0.5 rounded-full bg-indigo-500/15 text-indigo-300">Popular</span>}
            <span className="ml-auto text-sm">from <b>{formatINR(minPrice)}</b></span>
          </div>
        </div>
      </div>
    </Link>
  );
}
