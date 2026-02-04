# Contentia Creative - Quick Start Guide

## 🚀 Get Live in 5 Steps (30 minutes)

### Step 1: Push to GitHub (5 min)

```bash
cd contentia-site
git init
git add .
git commit -m "Initial Contentia Creative website"

# Create repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/contentia-site.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Netlify (5 min)

1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Select GitHub → Choose `contentia-site` repo
4. Deploy settings should auto-fill:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site"
6. Wait for build to complete (2-3 minutes)

### Step 3: Enable CMS Access (5 min)

1. In Netlify: Site Settings → Identity → **Enable Identity**
2. Registration: Choose **"Invite only"**
3. Services → Git Gateway → **Enable Git Gateway**
4. Done! CMS is now accessible at `yoursitename.netlify.app/admin`

### Step 4: Configure Integrations (10 min)

**Add Environment Variable for Zapier:**
1. Site Settings → Environment Variables
2. Add variable:
   - Key: `ZAPIER_WEBHOOK_URL`
   - Value: `https://hooks.zapier.com/hooks/catch/XXXXX/XXXXX/`
     (Get this from your Zapier Zap - see setup below)

**Zapier Zap Setup (Quick):**
1. Create new Zap in Zapier
2. Trigger: "Webhooks by Zapier" → Catch Hook
3. Copy webhook URL → Add to Netlify environment variables (above)
4. Action: "HubSpot" → "Create or Update Contact"
5. Map these fields:
   - Email → email
   - First Name → name
   - Phone → phone
   - Company → company
   - Message → message (create custom property if needed)
6. Turn on Zap
7. Test by submitting your contact form

**Analytics (Optional for launch, add later):**
- Google Analytics 4: Uncomment lines 29-36 in `src/layouts/BaseLayout.astro`
- Microsoft Clarity: Uncomment lines 39-47 in `src/layouts/BaseLayout.astro`
- HubSpot Tracking: Uncomment line 50 in `src/layouts/BaseLayout.astro`

### Step 5: Access CMS & Verify (5 min)

1. Visit `yoursitename.netlify.app/admin`
2. Click "Sign up" (Netlify Identity will send confirmation email)
3. Check email, click confirmation link, set password
4. You're in! Navigate to "Settings" → "Site Settings"
5. Verify all info is correct (phone, email, Calendly URL, etc.)

---

## ✅ Verification Checklist

After deployment, test these:

- [ ] Homepage loads correctly
- [ ] All service pages accessible
- [ ] Contact form submits (check Zapier history, HubSpot contacts)
- [ ] Calendly widget opens and works
- [ ] Mobile responsive (test on phone)
- [ ] CMS accessible at /admin
- [ ] Can create/edit content in CMS

---

## 🎨 First Customizations

### 1. Update Contact Info (if needed)

CMS → Settings → Site Settings:
- Brand Name: "Contentia Creative"
- Tagline: (customize if desired)
- CTA Label: "Book Free Strategy Call"
- Calendly URL: Already set
- Service Area: Update if you have specific service area
- Phone: 385-275-5635 (verify)
- Email: hknwbldsolutions@hotmail.com (verify)

### 2. Add Your First Case Study

CMS → Case Studies → New Case Study:
- Title: "SaaS Company Doubles Organic Traffic"
- Client Type: "B2B SaaS in FinTech"
- Problem: "Low AI visibility, minimal local presence"
- Solution: "Implemented AI content ops + local SEO strategy"
- Results:
  - "2x organic traffic in 90 days"
  - "Top 3 Google Maps ranking for 12 keywords"
  - "Featured in ChatGPT responses 47% of the time"
- Publish!

### 3. Write Your First Blog Post

CMS → Blog → New Blog:
- Title: "How to Get Your Business Recommended by ChatGPT"
- Slug: "chatgpt-seo-optimization"
- Summary: "A practical guide to optimizing your content for AI answer engines"
- Body: (Write your content using Markdown)
- Publish!

---

## 🎯 Next Steps After Launch

**Week 1:**
- [ ] Submit sitemap to Google Search Console
- [ ] Test all forms and integrations thoroughly
- [ ] Add 2 more case studies
- [ ] Write 2-3 blog posts

**Week 2:**
- [ ] Set up Google Business Profile (if applicable)
- [ ] Create social media profiles
- [ ] Add social links to site settings
- [ ] Run Lighthouse audit and optimize any issues

**Week 3:**
- [ ] Set up Google Analytics 4
- [ ] Set up Microsoft Clarity
- [ ] Monitor form submissions and leads
- [ ] Gather initial performance data

**Month 2:**
- [ ] Create location pages (if doing local SEO)
- [ ] Expand blog content
- [ ] Optimize based on analytics data
- [ ] Consider A/B testing CTAs

---

## 📞 Need Help?

**Email:** hknwbldsolutions@hotmail.com  
**Phone:** 385-275-5635

---

## 🔗 Important URLs

After deployment, bookmark these:

- **Live Site:** `https://yoursitename.netlify.app`
- **CMS Admin:** `https://yoursitename.netlify.app/admin`
- **Netlify Dashboard:** `https://app.netlify.com/sites/yoursitename`
- **Netlify Deploy Logs:** Dashboard → Deploys
- **Netlify Functions Logs:** Dashboard → Functions → lead

---

## 🎉 That's It!

Your professional website is now live. Everything is configured and ready to go.

Focus on creating great content and let the site do the heavy lifting for conversions!
