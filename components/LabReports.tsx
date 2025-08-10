import type { Product } from "@/lib/types";

export default function LabReports({ p }: { p: Product }) {
  return (
    <div className="bg-[var(--card)] rounded-2xl p-4 border border-white/10">
      <h4 className="font-semibold mb-3">Independent Lab Reports</h4>
      <ul className="space-y-2 text-sm">
        {p.labReports.map((l, i) => (
          <li key={i} className="flex items-center justify-between gap-3">
            <div>
              <p className="font-medium">{l.labName}</p>
              <p className="text-xs text-neutral-400">Tested on {new Date(l.testedOn).toLocaleDateString("en-IN")} • {l.summary}</p>
            </div>
            <a className="underline hover:no-underline shrink-0" href={l.url} target="_blank" rel="noopener noreferrer">View report</a>
          </li>
        ))}
      </ul>
      <p className="text-xs text-neutral-400 mt-3">We only list products with at least one independent report.</p>
    </div>
  );
}
