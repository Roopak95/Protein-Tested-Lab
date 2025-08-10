import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.example"),
  title: "Lab-Tested Protein Powders in India | Price & Lab Report Comparison",
  description: "Only protein powders independently tested by NABL-accredited labs. Compare latest Indian prices and see lab reports.",
  openGraph: {
    title: "Lab-Tested Protein Powders in India",
    description: "Only independently lab-tested proteins. Indian price comparison and lab reports.",
    url: "https://your-domain.example",
    type: "website",
  },
  alternates: {
    canonical: "https://your-domain.example"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
