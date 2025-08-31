
# Shikhar Kewal Verma — Portfolio (GitHub Pages)

A fast, free, static portfolio hosted on **GitHub Pages** with your custom domain **www.shikharkverma.com**.

## 1) One-time setup

1. Create a new GitHub repository (e.g., `portfolio-site`).
2. Upload the contents of this folder to the repo (or push via git).
3. Go to **Settings → Pages**.
   - **Build and deployment**: Source = **Deploy from a branch**.
   - Branch = **main**, Folder = **/** (root). Save.
4. Under **Custom domain**, enter: `www.shikharkverma.com` and Save. GitHub will create a `CNAME` file automatically (already included here).
5. In your domain registrar’s DNS (where `shikharkverma.com` is managed):
   - Create a **CNAME** record:
     - Host/Name: `www`
     - Value/Target: `<your-github-username>.github.io`
   - Create **A** records for the apex (root) `@` pointing to GitHub Pages IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
6. Wait for DNS to propagate (can take up to an hour). Then in **Settings → Pages**, tick **Enforce HTTPS**.

## 2) Local editing

- Edit `index.html`, `assets/css/styles.css`, and `assets/js/main.js` as you see fit.
- Replace placeholder email (`your.email@example.com`) and update links.
- Your CV is at `assets/cv/Shikhar_Kewal_Verma_Aug25.pdf`. Replace with a newer file if needed.

## 3) Structure

```
├─ index.html
├─ 404.html
├─ robots.txt
├─ sitemap.xml
├─ CNAME                      # www.shikharkverma.com
├─ assets/
│  ├─ css/styles.css
│  ├─ js/main.js
│  ├─ images/profile.svg
│  └─ cv/Shikhar_Kewal_Verma_Aug25.pdf
└─ data/                      # reserved for future JSON/MD
```

## 4) Content tips

- Update case studies with concrete outcomes and any metrics you can share.
- Keep 6–9 highlights; link to a longer PDF or Notion if you need deeper detail.
- Consider moving to **Astro** or **Next.js** later for MDX case studies; you can still deploy free to Pages or to Vercel/Netlify.

## 5) Troubleshooting

- **Custom domain not resolving?** Check that the `www` CNAME points to `<username>.github.io` and that apex A records match the four IPs above.
- **HTTPS toggle greyed out?** Wait for DNS to propagate and retry. Also ensure the `CNAME` file contains exactly `www.shikharkverma.com`.
- **Styles not loading?** Paths are relative; ensure files are in `assets/css/styles.css` etc.

---

© {date.today().year} Shikhar Kewal Verma
