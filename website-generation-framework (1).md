# Website Generation Framework
## Based on Decap CMS + Netlify Architecture

---

## 1. COMPLETE PAGE MAP

### Core Pages (Production-Ready)

| URL Path | Purpose | Key Components | CMS-Managed |
|----------|---------|----------------|-------------|
| `/` | Homepage - Conversion focused | Hero + Value Props + CTA + Social Proof + Service Overview + FAQ | Partial |
| `/services` | Service Hub | Service cards grid + brief descriptions + CTAs | Yes |
| `/services/[slug]` | Individual Service Details | Detailed offering + deliverables + process + pricing hints + FAQ + schema | Yes |
| `/case-studies` | Portfolio/Proof Hub | Client results grid + filterable by industry/service | Yes |
| `/case-studies/[slug]` | Case Study Detail | Problem-Solution-Results format + tools used + testimonial | Yes |
| `/blog` | Content Hub (SEO) | Article grid + categories/tags + search | Yes |
| `/blog/[slug]` | Blog Article | Article content + author + related posts + CTA | Yes |
| `/locations/[city]` | Local SEO Landing Pages | City-specific intro + services + local proof + FAQ | Yes |
| `/about` | Brand Story | Mission + team (optional) + credentials + differentiators | Partial |
| `/contact` | Lead Capture | Multi-channel contact (form + Calendly + phone/email) | Partial |
| `/privacy` | Privacy Policy | Legal compliance (GA4 + HubSpot tracking disclosure) | No |
| `/terms` | Terms of Service | Legal protection | No |
| `/404` | Error Page | Helpful navigation back to site | No |
| `/admin` | CMS Access | Decap CMS interface | No |

### Optional Enhancement Pages (v2)

| URL Path | Purpose | When to Add |
|----------|---------|-------------|
| `/pricing` | Transparent pricing tiers | When productizing services |
| `/resources` | Downloads/tools hub | For lead magnets |
| `/testimonials` | Dedicated social proof | When you have 10+ testimonials |
| `/faq` | Centralized FAQ | When FAQs exceed service-level scope |
| `/careers` | Hiring page | When actively recruiting |
| `/partners` | Integration/partner showcase | For ecosystem positioning |

---

## 2. REQUIRED CLIENT INPUTS (By Category)

### A. Brand Identity & Content
**Priority: CRITICAL - Required before any page generation**

1. **Brand Basics**
   - Legal business name
   - Trading name (if different)
   - Tagline/positioning statement (1 sentence)
   - Brand voice guidelines (formal/casual, technical/accessible, etc.)
   
2. **Contact Information (NAP)**
   - Service area description (e.g., "Salt Lake County, UT" or "Remote - North America")
   - Primary phone number (formatted for display + schema)
   - Primary email address
   - Physical address (if applicable, or service area only)
   
3. **Core Messaging**
   - Mission statement (2-3 sentences)
   - Unique value proposition (what makes you different - 1 paragraph)
   - Primary pain point you solve (for hero section)
   - Target audience description (who you serve best)

### B. Visual Assets
**Priority: HIGH - Needed before design implementation**

4. **Logo Files**
   - Primary logo (SVG preferred, PNG fallback at 2x resolution)
   - Favicon (ICO or PNG, 512x512px minimum)
   - Logo variations (dark background, light background, icon-only)
   
5. **Brand Colors**
   - Primary brand color (hex code)
   - Secondary/accent color (hex code)
   - Background colors (light/dark mode if applicable)
   - Success/error/warning colors for forms
   
6. **Typography**
   - Heading font name + fallback stack
   - Body font name + fallback stack
   - Font files (if custom) or Google Fonts links
   
7. **Images**
   - Hero image (2400x1200px minimum, optimized WebP)
   - Service thumbnails (600x400px per service)
   - Team photos (if applicable, 800x800px)
   - Case study screenshots/photos (1200x800px)
   - Generic placeholder images (for empty states)

### C. Service & Content Data
**Priority: HIGH - Defines site structure**

8. **Service Definitions** (For each service offering)
   - Service name
   - URL slug (e.g., "ai-content-ops")
   - One-sentence summary (for cards)
   - Detailed description (2-3 paragraphs)
   - Primary outcome/benefit
   - Deliverables list (bullet points, 5-10 items)
   - Process/methodology steps (3-5 steps)
   - Service-specific FAQs (3-5 Q&A pairs)
   - Pricing approach (or CTA text if pricing is custom)
   
9. **Case Studies** (Minimum 3 for launch)
   - Client name (or anonymized "SaaS Company in FinTech")
   - Client type/industry
   - Problem statement (1 paragraph)
   - Solution approach (1-2 paragraphs)
   - Measurable results (3-5 bullet points with metrics)
   - Tools/technologies used (optional)
   - Testimonial quote (optional but powerful)
   - Before/after images (optional)

10. **Location Pages** (If doing local SEO)
    - Target cities/regions (list)
    - Per-city: unique intro paragraph (avoid duplicate content)
    - Per-city: local proof points (clients, projects, partnerships)
    - Per-city: location-specific FAQs

11. **About Page Content**
    - Company story/origin (2-3 paragraphs)
    - Team member bios (name, role, headshot, 1 paragraph each)
    - Credentials/certifications/partnerships
    - Core values or methodology

### D. Technical Integrations
**Priority: CRITICAL - Required for functionality**

12. **Analytics & Tracking**
    - Google Analytics 4 Measurement ID (G-XXXXXXXXXX)
    - HubSpot Portal ID + tracking code snippet
    - Preferred cookie consent approach (banner/implicit)
    
13. **Third-Party Services**
    - Calendly public event URL (https://calendly.com/yourname/30min)
    - Zapier Webhook URL (from your Zap setup)
    - HubSpot API key (if using direct API vs. Zapier)
    
14. **Domain & Hosting**
    - Target domain name (for canonical URLs, sitemaps)
    - Netlify site name (if already created)
    - DNS provider (for CNAME/A record instructions)
    - SSL certificate preference (Netlify auto or custom)

### E. SEO & Schema Data
**Priority: HIGH - Impacts discoverability**

15. **Global SEO**
    - Default meta title template (e.g., "{Page} | {Brand}")
    - Default meta description (fallback, 150-160 chars)
    - Social sharing image (OG image, 1200x630px)
    - Twitter handle (for Twitter Card metadata)
    
16. **Schema.org Data**
    - Organization type (LocalBusiness, ProfessionalService, etc.)
    - Founding date (for Organization schema)
    - Service categories (for Service schema)
    - Same-as social links (LinkedIn, Twitter, Facebook URLs)
    - Accepted payment methods (for schema)
    - Service area geographic coverage (city/state/region)

### F. Legal & Compliance
**Priority: MEDIUM - Required before public launch**

17. **Legal Documents**
    - Privacy Policy text (or template to customize)
    - Terms of Service text (or template to customize)
    - Cookie policy (if EU/UK traffic expected)
    - Accessibility statement (if targeting government/education)
    
18. **Compliance Requirements**
    - GDPR applicability (EU visitors?)
    - CCPA applicability (California users?)
    - ADA/WCAG level target (A, AA, AAA)
    - Industry-specific regulations (HIPAA, SOC2, etc.)

### G. Operational Details
**Priority: MEDIUM - Affects site management**

19. **Content Management**
    - Who will manage CMS updates? (names/emails for Netlify Identity invites)
    - Desired editorial workflow (draft → review → publish or auto-publish?)
    - Content update frequency (daily/weekly/monthly)
    
20. **Performance & Scale**
    - Expected monthly traffic (for performance budgets)
    - Peak traffic scenarios (launches, campaigns)
    - Media storage needs (images/videos/PDFs)

---

## 3. PHASED WORKFLOW & MILESTONES

### Phase 1: Foundation (Week 1)
**Goal: Infrastructure + Core Pages Live**

**Milestone 1.1 - Setup (Days 1-2)**
- Collect inputs: Brand basics (A1-A3), Visual assets (B4-B7), Technical (D12-D14)
- Initialize repo with Astro + Decap CMS scaffold
- Configure Netlify deployment + Identity
- Set up domain + SSL

**Milestone 1.2 - Core Pages (Days 3-5)**
- Generate homepage with collected hero/CTA content
- Build service hub page + 2-3 initial service detail pages
- Create contact page with form + Calendly embed
- Add privacy policy (templated if final text pending)

**Milestone 1.3 - Integrations (Days 6-7)**
- Wire Netlify Function → Zapier → HubSpot
- Test lead capture end-to-end
- Install GA4 + HubSpot tracking
- Verify Decap CMS access at /admin

**Deliverables:**
- Staging URL with 5 core pages live
- Functional lead capture
- CMS access for client

---

### Phase 2: Content Expansion (Week 2)
**Goal: Full Site Content + SEO Foundation**

**Milestone 2.1 - Service Content (Days 8-10)**
- Complete all service pages from client input (C8)
- Add service-specific FAQs + schema
- Create service overview cards on hub page

**Milestone 2.2 - Social Proof (Days 11-12)**
- Build case study hub + detail pages (minimum 3 from C9)
- Add testimonial components to homepage/services
- Generate Location pages if applicable (C10)

**Milestone 2.3 - SEO Implementation (Days 13-14)**
- Implement all JSON-LD schemas (Organization, Service, FAQPage, LocalBusiness)
- Generate sitemap.xml + robots.txt
- Add meta tags + OG/Twitter cards per page
- Create about page with company story (C11)

**Deliverables:**
- Complete page map (all production pages)
- SEO audit passing (meta tags, schemas, sitemap)
- Minimum 3 case studies published

---

### Phase 3: Polish & Launch Prep (Week 3)
**Goal: Production-Ready + Pre-Launch QA**

**Milestone 3.1 - Quality Assurance (Days 15-17)**
- Lighthouse audit (target ≥90 mobile on homepage + top service page)
- Cross-browser testing (Chrome, Safari, Firefox)
- Mobile responsiveness check (iPhone, Android)
- Form validation + error handling testing
- Accessibility audit (WCAG 2.1 AA minimum)

**Milestone 3.2 - Content Review (Day 18)**
- Client reviews all live content in staging
- Typo/grammar pass on all pages
- Image optimization (WebP conversion, lazy loading)
- Link checking (internal + external)

**Milestone 3.3 - Pre-Launch Checklist (Day 19)**
- Confirm legal pages (privacy, terms) approved
- Set up 301 redirects (if migrating from old site)
- Configure security headers (netlify.toml)
- Set up deploy notifications (Slack/email)
- Train client on CMS usage (30min session)

**Milestone 3.4 - Launch (Day 20)**
- Final DNS cutover (if not on Netlify domain)
- Monitor for 24h (traffic, errors, forms)
- Submit sitemap to Google Search Console
- Set up weekly monitoring alerts

**Deliverables:**
- Production site live on custom domain
- Client trained on CMS
- Monitoring/alerts configured

---

### Phase 4: V2 Enhancements (Month 2+)
**Goal: Iterative Improvements Based on Data**

**Potential Additions:**
- Blog launch (if content strategy confirmed)
- Advanced analytics (heatmaps, session recording)
- A/B testing framework for CTAs
- Live chat integration (if needed)
- Resource library/downloads
- Email capture/newsletter signup
- Pricing page (when packages solidify)

**Data-Driven Decisions:**
- Review GA4 data at Week 4: top landing pages, bounce rates, conversion paths
- HubSpot contact analysis: lead quality, source attribution
- Lighthouse scores: identify performance bottlenecks
- Search Console: impressions, clicks, top queries

---

## 4. PRE-START DATA COLLECTION CHECKLIST

### Essential (Cannot Start Without)
- [ ] Legal business name
- [ ] Service area text
- [ ] Primary contact email
- [ ] Primary contact phone
- [ ] Target domain name
- [ ] Logo file (SVG or high-res PNG)
- [ ] Brand colors (primary + secondary hex codes)
- [ ] Calendly URL
- [ ] HubSpot tracking ID or portal ID
- [ ] Zapier webhook URL
- [ ] GA4 Measurement ID

### High Priority (Needed by Week 1 End)
- [ ] Tagline/positioning statement
- [ ] Mission statement
- [ ] Unique value proposition
- [ ] Hero image (or stock photo direction)
- [ ] Service definitions (all offerings, name + description)
- [ ] Favicon
- [ ] Font selections
- [ ] Privacy policy text
- [ ] Terms of service text

### Medium Priority (Needed by Week 2 End)
- [ ] Service deliverables + process steps (per service)
- [ ] Service FAQs (3-5 per service)
- [ ] Case study content (minimum 3)
- [ ] About page story + team bios
- [ ] Service thumbnail images
- [ ] Social media URLs (for schema + footer)
- [ ] OG share image

### Nice-to-Have (Can Add Post-Launch)
- [ ] Additional case studies (beyond minimum 3)
- [ ] Blog posts (if launching with blog)
- [ ] Location page content (if doing local SEO)
- [ ] Video content
- [ ] Downloadable resources
- [ ] Extended team bios
- [ ] Partnership logos

---

## 5. SKELETON PAGE MAP EXAMPLE (5 Core Pages)

### Example: "Acme Marketing Agency" Website

#### Page 1: Homepage (`/`)
**Purpose:** Convert visitors → booked consultations  
**Required Fields:**
- Hero headline (e.g., "AI-Powered Marketing That Actually Converts")
- Hero subheadline (1 sentence value prop)
- Primary CTA text (e.g., "Book Free Strategy Call")
- Hero background image
- 3 core services (name, icon, 1-sentence description)
- Social proof stat 1 (e.g., "120+ clients served")
- Social proof stat 2 (e.g., "3.2M+ revenue generated")
- Social proof stat 3 (e.g., "92% client retention")
- 2-3 client testimonial snippets (name, company, quote)
- Secondary CTA (e.g., "See Case Studies")

#### Page 2: Services Hub (`/services`)
**Purpose:** Overview all offerings  
**Required Fields:**
- Page title ("Our Services")
- Page description (1-2 sentences)
- Per service (3-5 services):
  - Service name
  - Icon or thumbnail image
  - Summary (2-3 sentences)
  - CTA link text

#### Page 3: Service Detail (`/services/ai-content-ops`)
**Purpose:** Deep-dive on one offering  
**Required Fields:**
- Service name
- Hero/intro paragraph (2-3 sentences)
- Primary outcome ("You'll get X result")
- Deliverables list (5-10 bullet points)
- Process section:
  - Step 1 title + description
  - Step 2 title + description
  - Step 3 title + description
  - Step 4 title + description (optional)
- FAQs (3-5 Q&A pairs)
- Pricing approach or custom CTA
- Related case study links (if available)

#### Page 4: Case Study (`/case-studies/saas-client-doubles-leads`)
**Purpose:** Prove results  
**Required Fields:**
- Case study title
- Client type/industry (can be anonymized)
- Problem statement (1 paragraph)
- Solution approach (1-2 paragraphs)
- Results (3-5 bullet points with metrics, e.g., "2x lead volume in 90 days")
- Tools used (optional list)
- Client testimonial quote (optional)
- Thumbnail image

#### Page 5: Contact (`/contact`)
**Purpose:** Multi-channel lead capture  
**Required Fields:**
- Page headline
- Intro text (1-2 sentences encouraging contact)
- Contact form fields:
  - Name (required)
  - Email (required)
  - Phone (optional)
  - Company (optional)
  - Message (required)
  - Honeypot field (hidden)
- Calendly embed section:
  - Section headline
  - Calendly URL
- Alternative contact info:
  - Email address
  - Phone number
  - Office hours text (optional)

---

## 6. TEMPLATE EMAIL: Data Request

**Subject:** Website Project Kickoff - Input Needed to Get Started

---

Hi [Client Name],

Excited to kick off your new website! To hit the ground running, I need a few key pieces of information from you. I've organized this into three priorities to make it easy.

**🔴 Critical (Need by [Date - 2 days from now])** - Can't start without these:

1. **Brand Basics**
   - Legal business name:
   - Service area (e.g., "Salt Lake County, UT" or "Remote - North America"):
   - Primary contact email:
   - Primary contact phone:
   - Target domain name:

2. **Visual Assets**
   - Logo file (SVG preferred, or high-res PNG):
   - Primary brand color (hex code, e.g., #3B82F6):
   - Secondary/accent color (hex code):
   - Favicon (optional now, but ideal to provide):

3. **Integrations**
   - Calendly public booking URL (e.g., https://calendly.com/yourname/30min):
   - HubSpot tracking ID or portal ID:
   - Google Analytics 4 Measurement ID (G-XXXXXXXXXX):
   - Zapier webhook URL (I can help set this up if needed):

**🟡 High Priority (Need by [Date - 1 week])** - Required for full site content:

4. **Messaging**
   - Tagline or positioning statement (1 sentence):
   - Mission statement (2-3 sentences):
   - What makes you unique? (1 paragraph):

5. **Services** (Please provide for each service offering)
   - Service name:
   - Brief description (2-3 sentences):
   - Deliverables (5-10 bullet points):
   - Process/methodology (3-5 steps):
   - FAQs (3-5 common questions + answers):

6. **Social Proof**
   - 2-3 case studies:
     - Client type/industry:
     - Problem they had:
     - How you solved it:
     - Measurable results:
   - Client testimonials (if available):

7. **Legal**
   - Privacy policy text (or let me know if you need a template):
   - Terms of service text (or let me know if you need a template):

**🟢 Nice-to-Have (Can add later)** - Enhances the site but not blocking:

8. About page content (company story, team bios)
9. Blog posts (if launching with blog)
10. Additional images (hero backgrounds, service thumbnails)

**Next Steps:**

- Please reply with items 1-3 by [Date]
- I'll send a Calendly link if you'd prefer to discuss any of this over a call
- Once I have the critical items, I'll spin up a staging site within 48 hours for your review

Questions? Just reply to this email.

Looking forward to building something great together!

[Your Name]

---

**P.S.** If you have brand guidelines, a marketing deck, or any existing materials (even if outdated), please attach them—they're super helpful for understanding your voice and style!

---

## 7. FRAMEWORK NOTES

### Assumptions
- Using Astro + Decap CMS architecture per your blueprint
- Netlify hosting with Functions for serverless backend
- Zapier as middleware to HubSpot (free-tier compatible initially)
- Static-first approach for performance (Lighthouse ≥90 mobile target)

### Flexibility Points
- **CMS:** Framework works with any Git-based CMS (Decap, Tina, Forestry) or API CMS (Contentful, Sanity)
- **Hosting:** Netlify-specific features (Functions, Identity) can swap to Vercel/Cloudflare with minor adjustments
- **Framework:** Page map and content structure apply to Next.js, Gatsby, SvelteKit, etc.

### Risk Mitigation
- **Missing Content:** Use placeholder text (Lorem Ipsum) for staging; flag clearly for client replacement
- **Image Delays:** Use stock photos temporarily; ensure proper alt text placeholders
- **Integration Failures:** Build forms with email fallback if Zapier/HubSpot unreachable
- **Scope Creep:** Lock Phase 1 deliverables; defer enhancements to Phase 4 roadmap

---

## Quick Reference: What You Need to Ask First

Before generating a single page, get these 5 answers:

1. **What's your business name and service area?** (Brand + NAP)
2. **What services do you offer?** (Defines /services/* pages)
3. **Where should leads go?** (Calendly URL + HubSpot/Zapier setup)
4. **What do you look like?** (Logo, colors, fonts)
5. **Who are we trying to reach?** (Target audience, top pain points)

Everything else can be iteratively refined post-staging deployment.
