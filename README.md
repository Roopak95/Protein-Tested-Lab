# Protein • Tested (India)

A Next.js site that lists only independently lab-tested protein powders in India. It shows category filters, Indian price links, and links to third-party lab reports.

## Quick start

```bash
npm i
npm run dev
# or build & start
npm run build && npm start
```

## Deploy
- **Vercel**: Import this repo and deploy. No env vars needed.
- **Netlify/Render**: Build command `npm run build`, publish `./.next` with Next adapter.

## Edit data
All products live in `lib/data.ts`. Only add proteins with credible **independent** lab reports. Use Indian retailer links (Amazon.in, Flipkart, HealthKart, etc.).

## SEO
- App Router metadata for titles/descriptions
- OpenGraph, robots.txt, sitemap.xml
- Product pages are static and fast.
- Add a custom domain in your host.

## Notes
- Sample lab report links are placeholders. Replace them with real NABL/third-party report URLs.
- You can extend with a cron/service that refreshes prices from your own scraper or partner APIs, then update `retailers[].currentPriceINR`.


---

## Deploy to Vercel (fastest)
1. Create a new private repo on GitHub.
2. Push this folder:
   ```bash
   git init
   git add .
   git commit -m "init"
   git branch -M main
   git remote add origin https://github.com/<you>/protein-tested-india.git
   git push -u origin main
   ```
3. Go to Vercel → "New Project" → Import your repo → Framework detected: Next.js → Deploy.
4. Add your custom domain and set it as primary.

## Deploy with Docker
```bash
docker build -t protein-tested-india .
docker run -p 3000:3000 protein-tested-india
```

## Deploy to Netlify
- Build command: `npm run build`
- Publish directory: `.next`
- Choose framework: Next.js
