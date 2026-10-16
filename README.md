# KraftSoft website (static Next.js)
    npm install
    npm run dev      # local preview
    npm run build    # static site in ./out
Host `out/` on any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages, S3 + CDN).

## Fill in before launch (src/lib/site.ts)
- `url`: production domain (canonical URLs, sitemap)
- `email`: contact email used by the contact form's mailto
- `social`: verified social links
- Swap in a transparent or dark-background logo in header.tsx and footer.tsx (the current JPG has a white background, shown in a white chip).
- Add verified tech tags, URLs, and case-study details to src/data/content.ts.
