# Deployment Guide

This site is a standard Next.js app. The easiest and recommended way to put it online is **Vercel** (the company that makes Next.js) — it's free for personal sites, gives you HTTPS automatically, and redeploys every time you push to GitHub.

Below are three paths, from easiest to most manual.

---

## Prerequisites (one-time setup)

1. **Install Node.js** (version 20 recommended): https://nodejs.org
2. **Install Git**: https://git-scm.com
3. You already have a **GitHub account** (github.com/Ishanarora35).

Verify things work locally first:

```bash
cd ishan-portfolio
npm install
npm run dev      # visit http://localhost:3000
```

If the site loads, you're ready to deploy.

---

## Option A — Deploy with Vercel (recommended)

### Step 1 — Put the code on GitHub

From inside the `ishan-portfolio` folder:

```bash
git init
git add .
git commit -m "Initial portfolio"
```

Create a new **empty** repository on GitHub (e.g. named `portfolio`), then:

```bash
git remote add origin https://github.com/Ishanarora35/portfolio.git
git branch -M main
git push -u origin main
```

### Step 2 — Import into Vercel

1. Go to https://vercel.com and sign up / log in **with GitHub**.
2. Click **Add New… → Project**.
3. Select your `portfolio` repository and click **Import**.
4. Vercel auto-detects Next.js — you don't need to change any settings.
5. Click **Deploy**.

In about a minute you'll get a live URL like `https://portfolio-yourname.vercel.app`.

### Step 3 — Every future update

Just push to GitHub and Vercel redeploys automatically:

```bash
git add .
git commit -m "Add new project"
git push
```

---

## Option B — Add a custom domain (e.g. ishanarora.com)

1. Buy a domain from Namecheap, Cloudflare, Google Domains, etc.
2. In your Vercel project, go to **Settings → Domains → Add**.
3. Enter your domain and follow Vercel's DNS instructions (usually adding an `A` record or `CNAME` at your domain registrar).
4. HTTPS is set up automatically.

**Important:** after choosing your final domain, update the `url` field in `src/data/site.ts` so SEO metadata, the sitemap, and social previews point to the right place. Then commit and push.

---

## Option C — Other hosts (Netlify, Render, etc.)

The site also works on any host that supports Next.js:

- **Netlify:** import the GitHub repo; it detects Next.js automatically.
- **Render / Railway:** create a new Web Service from the repo with build command `npm run build` and start command `npm start`.

### Fully static export (optional)

This site prerenders to static HTML. If you want to host on a plain static file host (GitHub Pages, S3), add this to `next.config.mjs`:

```js
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  // keep the existing images settings below
};
```

Then run `npm run build` and deploy the generated `out/` folder. Note: the contact form's `mailto:` still works, but you lose Next.js image optimization.

---

## Post-launch checklist

- [ ] Site loads at your Vercel URL
- [ ] Resume downloads correctly on the Resume page
- [ ] GitHub and LinkedIn buttons open the right profiles
- [ ] Updated `url` in `src/data/site.ts` if using a custom domain
- [ ] Add the live link to your resume, LinkedIn, and internship/transfer applications

---

## Troubleshooting

- **Build fails on Vercel:** make sure `package.json` and `package-lock.json` are committed. Run `npm run build` locally first to catch errors.
- **Images not showing:** confirm the file exists in `public/projects/` and the `image` path in `src/data/projects.ts` matches exactly (case-sensitive).
- **Resume 404:** confirm `public/resume.pdf` exists and is committed to Git.
