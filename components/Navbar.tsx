"use client";
import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="border-b border-white/10 bg-[#0d1117]/70 backdrop-blur sticky top-0 z-50">
      <div className="container py-3 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-tight">Protein • Tested (India)</Link>
        <nav className="hidden md:flex gap-5 text-sm text-neutral-300">
          <Link href="/categories/popular">Popular</Link>
          <Link href="/categories/budget-friendly">Budget</Link>
          <Link href="/categories/whey">Whey</Link>
          <Link href="/categories/isolate">Isolate</Link>
          <Link href="/categories/vegan">Vegan</Link>
        </nav>
        <button className="md:hidden text-sm" onClick={()=>setOpen(!open)}>Menu</button>
      </div>
      {open && (
        <div className="md:hidden container pb-3 text-sm text-neutral-300 flex gap-4 flex-wrap">
          <Link href="/categories/popular">Popular</Link>
          <Link href="/categories/budget-friendly">Budget</Link>
          <Link href="/categories/whey">Whey</Link>
          <Link href="/categories/isolate">Isolate</Link>
          <Link href="/categories/vegan">Vegan</Link>
        </div>
      )}
    </header>
  );
};
