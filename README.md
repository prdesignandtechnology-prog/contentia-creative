# Contentia Creative

[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR-NETLIFY-SITE-ID/deploy-status)](https://app.netlify.com/sites/contentia-creative/deploys)

A modern, responsive website for Contentia Creative - a full-service creative agency specializing in branding, web design, and digital marketing.

## 🚀 Live Site

**Production URL:** https://contentia-creative.netlify.app

## ✨ Features

- **Modern Design** - Clean, contemporary aesthetic with gradient accents
- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **Fast Performance** - Static HTML with optimized assets
- **SEO Ready** - Proper meta tags and semantic HTML structure
- **Contact Form** - Functional form with success states
- **Smooth Animations** - CSS animations and scroll effects
- **Netlify Optimized** - Configured for optimal deployment on Netlify

## 🛠️ Technologies

- HTML5
- Tailwind CSS (via CDN)
- Vanilla JavaScript
- Netlify (Hosting)

## 📁 Project Structure

```
contentia-creative/
├── index.html          # Main website file
├── netlify.toml        # Netlify configuration
├── _redirects          # Netlify redirects rules
├── .gitignore          # Git ignore rules
└── README.md           # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- A GitHub account
- A Netlify account (free tier works great)

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/YOUR-USERNAME/contentia-creative.git
cd contentia-creative
```

2. Open `index.html` in your browser, or use a local server:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (npx)
npx serve .

# Using PHP
php -S localhost:8000
```

3. Visit `http://localhost:8000` to view the site

## 📦 Deployment

### Option 1: Deploy via Netlify Git Integration (Recommended)

1. Push your code to GitHub
2. Log in to [Netlify](https://app.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Select GitHub and authorize Netlify
5. Select the `contentia-creative` repository
6. Configure build settings:
   - **Build command:** (leave empty for static sites)
   - **Publish directory:** `.`
7. Click "Deploy site"

### Option 2: Deploy via Netlify Drop (Drag & Drop)

1. Go to [Netlify Drop](https://app.netlify.com/drop)
2. Drag and drop the project folder
3. Your site is live instantly!

### Option 3: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize and deploy
netlify init
netlify deploy --prod --dir=.
```

## 🔧 Customization

### Changing Colors

Edit the Tailwind config in `index.html`:

```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        'cc-purple': '#6B46C1',    // Change this
        'cc-pink': '#EC4899',      // Change this
        // ... more colors
      }
    }
  }
}
```

### Updating Content

- **Company Info:** Edit text in the About and Contact sections
- **Services:** Modify the Services section cards
- **Portfolio:** Update the Work section with your projects
- **Contact:** Update email, phone, and address in the Contact section

### Adding a Custom Domain

1. In Netlify, go to **Site settings** → **Domain management**
2. Click **Add custom domain**
3. Enter your domain (e.g., `contentiacreative.com`)
4. Follow DNS configuration instructions

## 📝 Environment Variables

If you need to add API keys or secrets (e.g., for contact forms):

1. In Netlify, go to **Site settings** → **Environment variables**
2. Add your variables (e.g., `FORMSPREE_ENDPOINT`)
3. Access in your code via Netlify Functions (if needed)

## 🔒 Security Headers

Security headers are configured in `netlify.toml`:

- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin

## 📊 Analytics

To add analytics:

1. **Google Analytics:** Add the tracking script to the `<head>` of `index.html`
2. **Plausible:** Add the Plausible script tag
3. **Fathom:** Add the Fathom site ID

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

**Contentia Creative**  
📧 hello@contentiacreative.com  
📞 +1 (234) 567-890  
🌐 https://contentia-creative.netlify.app

---

Made with ❤️ by Contentia Creative
