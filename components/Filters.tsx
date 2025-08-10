"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function Filters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [q, setQ] = useState(searchParams.get("q") ?? "");

  useEffect(() => {
    const t = setTimeout(() => {
      const params = new URLSearchParams(searchParams);
      if (q) params.set("q", q); else params.delete("q");
      router.replace(`${pathname}?${params.toString()}`);
    }, 300);
    return () => clearTimeout(t);
  }, [q]);

  return (
    <div className="bg-[var(--card)] border border-white/10 rounded-2xl p-4 flex items-center gap-3">
      <input
        value={q}
        onChange={(e)=>setQ(e.target.value)}
        placeholder="Search brand or product..."
        className="w-full bg-transparent outline-none text-sm border border-white/10 rounded-lg px-3 py-2"
      />
    </div>
  );
}
