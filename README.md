# Contentia Creative

A modern, responsive website for Contentia Creative — a full-service creative agency specializing in branding, web design, and digital marketing.

## 🚀 Live Site

**Production URL:** https://contentia-creative.netlify.app

## ✨ Features

- **Modern Design** - Clean, contemporary aesthetic with gradient accents
- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **Fast Performance** - Static output via Astro
- **SEO Ready** - Meta tags, canonical URLs, and JSON-LD schema
- **Contact Form** - Netlify Function to Zapier webhook
- **CMS Enabled** - Decap CMS at `/admin`
- **Netlify Optimized** - Netlify build + headers + redirects

## 🛠️ Technologies

- Astro 4
- Tailwind CSS
- Vanilla JavaScript
- Netlify (Hosting + Functions)
- Decap CMS

## 📁 Project Structure

```
contentia-creative/
├── public/              # Static assets + CMS config
├── netlify/functions/   # Serverless functions (lead capture)
├── src/
│   ├── components/      # Reusable Astro components
│   ├── content/         # CMS-driven content
│   ├── layouts/         # Base layout
│   ├── pages/           # Site pages
│   └── styles/          # Tailwind entry
├── astro.config.mjs
├── tailwind.config.mjs
├── netlify.toml
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- npm

### Local Development

```bash
npm install
npm run dev
```

Visit `http://localhost:4321` to view the site.

## 📦 Deployment

### Netlify Git Integration

1. Push code to GitHub
2. In Netlify, import the repo
3. Build command: `npm run build`
4. Publish directory: `dist`

### Netlify Functions

Set the `ZAPIER_WEBHOOK_URL` environment variable for the lead capture function.

## 🔧 Customization

- **Site Settings:** `src/content/settings/site.json`
- **Service Content:** `src/content/services/`
- **Case Studies:** `src/content/case-studies/`
- **Blog Posts:** `src/content/blog/`
- **Brand Colors:** `tailwind.config.mjs`

## 📄 License

Proprietary - © 2026 Contentia Creative
