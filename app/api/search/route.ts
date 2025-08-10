import { NextResponse } from "next/server";
import { getAllProducts } from "@/lib/utils";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = (searchParams.get("q") || "").toLowerCase();
  const results = getAllProducts().filter(p => (p.brand + " " + p.name).toLowerCase().includes(q));
  return NextResponse.json({ results });
}
