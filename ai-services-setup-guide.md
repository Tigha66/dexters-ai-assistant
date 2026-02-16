# 9 AI Services Setup Guide by Industry

## Overview

This guide details how to set up each of the 9 AI services for different industries:
- Dental Clinics
- Estate Agents
- Restaurants/Cafes
- Plumbers/Electricians
- Beauty/Spas
- Vets
- Retail/Shops

---

## 1. 💬 AI Chatbot

### What It Does
- Answers website visitor questions 24/7
- Books appointments automatically
- Qualifies leads
- Answers FAQs

### Setup Steps

#### Step 1: Choose Platform
| Platform | Best For | Cost |
|---------|----------|------|
| Voiceflow | Complex flows | £0-50/mo |
| Botpress | Custom AI | £0-100/mo |
| Custom (OpenClaw) | Full control | £49/mo |

#### Step 2: Train the Chatbot
```
Industry-Specific Knowledge Base:

DENTAL:
- "Do you offer emergency appointments?" → Yes, same-day
- "How much for teeth whitening?" → From £250
- "Do you do invisalign?" → Yes, Dr. X specializes
- "What are your opening hours?" → Mon-Thu 8:30am-7pm

ESTATE AGENT:
- "What properties do you have in [area]?" → [Search CRM]
- "How much is my property worth?" → Free valuation
- "Do you let properties?" → Yes, full letting service

RESTAURANT:
- "Do you have tables tonight?" → Check availability
- "What's your menu?" → Send menu link
- "Can I book for 6 people?" → Check capacity
```

#### Step 3: Install on Website
```html
<!-- Add to website <head> -->
<script src="https://cdn.chatbot.com/widget.js"></script>
<script>
  ChatBot.init({
    appId: "YOUR_APP_ID",
    greeting: "Hi! How can I help you today?",
    colors: "#c9a962"
  });
</script>
```

#### Step 4: Connect to Booking System
- Sync with existing booking calendar
- Send notifications to staff
- Collect patient details

---

## 2. 🎧 AI Voice Agent

### What It Does
- Answers phone calls 24/7
- Books appointments via voice
- Routes calls to right department
- Takes messages

### Setup Steps

#### Step 1: Choose Provider
| Provider | Features | Cost |
|----------|----------|------|
| Bland AI | Natural voice, cheap | £0.05/min |
| Vapi | Multi-language | £0.10/min |
| ElevenLabs | Best voice quality | £0.15/min |

#### Step 2: Configure Voice Prompts

```
VOICE SCRIPT - DENTAL CLINIC:

"Greeting: Good [morning/afternoon], thank you for calling London International Dental. How can I help you today?"

"If booking: I'd be happy to book an appointment. What treatment are you looking for? [Wait for response] And what date works for you? [Check calendar]"

"If emergency: For dental emergencies, please call our emergency line or visit A&E. For urgent appointments, I can try to fit you in today. Would you like me to check?"

"If closing: Our office is currently closed. Would you like me to take a message or book an appointment for when we reopen?"

"Thank you for calling. Goodbye!"
```

#### Step 3: Set Up Phone Number
- Get virtual UK number (e.g., 020 XXXX XXXX)
- Forward existing number or replace
- Configure voicemail

#### Step 4: Connect to Calendar
- Google Calendar / Outlook / Practice management
- Real-time availability check

---

## 3. 🎯 Lead Generation

### What It Does
- Captures visitor contact info
- Identifies high-intent prospects
- Tracks user journey
- Scores leads

### Setup Steps

#### Step 1: Install Tracking
```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
<script>
  gtag('config', 'G-XXXXXXX');
</script>

<!-- Meta Pixel -->
<script>
  fbq('init', 'YOUR_PIXEL_ID');
</script>
```

#### Step 2: Create Lead Forms
| Type | Placement |
|------|-----------|
| Contact form | Contact page |
| Booking popup | Exit intent |
| Quote calculator | Service pages |
| Chatbot capture | First message |

#### Step 3: Set Up CRM Integration
```
LEAD FLOW:

Website Form → Webhook → CRM (GoHighLevel/HubSpot)
                                    ↓
                            Assign to staff
                                    ↓
                            Send auto-follow-up
                                    ↓
                            Add to marketing sequence
```

#### Step 4: Lead Scoring
```
Score points:
+10 Booked appointment
+5 Downloaded price list
+3 Visited pricing page
+2 Added to cart (e-commerce)
+1 Page views (per page)

Hot lead: 20+ points → Call within 1 hour
Warm lead: 10-19 points → Call within 24 hours
Cold lead: <10 points → Email nurture
```

---

## 4. 📧 Automated Outreach

### What It Does
- Sends appointment reminders
- Follow-up emails after visits
- Re-engagement campaigns
- Review requests

### Setup Steps

#### Step 1: Choose Email Platform
| Platform | Best For | Cost |
|----------|----------|------|
| GoHighLevel | Agencies | £30/mo |
| Mailchimp | Simple | £0-50/mo |
| ConvertKit | Content | £0-50/mo |
| ActiveCampaign | Automation | £0-149/mo |

#### Step 2: Create Email Sequences

```
SEQUENCE 1: NEW PATIENT WELCOME

Email 1 (Immediate):
Subject: Welcome to [Practice Name]!
Body: Thank you for contacting us. Here's what to expect...

Email 2 (Day 3):
Subject: Your appointment is coming up
Body: Reminder: Your appointment is on [DATE]

Email 3 (Day 7 - Post-visit):
Subject: How was your visit?
Body: We hope you loved your experience. Leave us a review!


SEQUENCE 2: RE-ENGAGEMENT

Email 1 (30 days no booking):
Subject: It's been a while...
Body: We miss you! Book now for 10% off first visit

Email 2 (60 days):
Subject: Special offer inside
Body: Exclusive discount for existing patients

Email 3 (90 days):
Subject: Last chance for your discount
Body: This offer expires in 48 hours
```

#### Step 3: Set Up Triggers
```
Booking confirmed → Start "Upcoming appointment" sequence
Appointment completed → Start "Post-visit" sequence
No booking in 90 days → Start "Re-engagement" sequence
Lead status = "Hot" → Send to sales team
```

---

## 5. ✍️ Content Creation

### What It Does
- Generates blog posts
- Creates social media content
- Writes treatment explanations
- Produces email newsletters

### Setup Steps

#### Step 1: Content Templates

```
BLOG POST TOPIC: "5 Signs You Need a Root Canal"

Outline:
1. Introduction (100 words)
2. What is a root canal? (150 words)
3. 5 Warning signs (500 words)
   - Sign 1: Severe toothache
   - Sign 2: Sensitivity to hot/cold
   - Sign 3: Swollen gums
   - Sign 4: Dark tooth color
   - Sign 5: Crack or damage
4. Treatment process (200 words)
5. Recovery time (100 words)
6. Conclusion + CTA (50 words)

Total: ~1,200 words
```

#### Step 2: AI Writing Tools
| Tool | Use | Cost |
|------|-----|------|
| ChatGPT | Drafts | £15/mo |
| Jasper | Marketing | £49/mo |
| Copy.ai | Short copy | £36/mo |
| Writesonic | SEO | £19/mo |

#### Step 3: Content Calendar
```
WEEKLY CONTENT SCHEDULE:

Monday: Blog post (1,000+ words)
Tuesday: Social media x3
Wednesday: Email newsletter
Thursday: Treatment page update
Friday: Testimonial request
Saturday: Engagement reply
Sunday: Plan next week
```

#### Step 4: Distribution
- Auto-post to WordPress
- Schedule social media
- Send to email list

---

## 6. ⭐ Reputation Management

### What It Does
- Monitors reviews across platforms
- Auto-responds to reviews
- Generates review requests
- Tracks sentiment

### Setup Steps

#### Step 1: Claim Business Listings
| Platform | URL |
|----------|-----|
| Google Business | business.google.com |
| Trustpilot | trustpilot.com |
| Yelp | yelp.co.uk |
| WhatClinic | whatclinic.com |

#### Step 2: Set Up Review Monitoring
```
TOOLS:
- Birdeye (all platforms) £60/mo
- Podium (SMS reviews) £99/mo
- RevUp (medical) £149/mo
- Google Alerts (free)
```

#### Step 3: Auto-Response Templates

```
POSITIVE REVIEW RESPONSE:

Thank you so much for the 5-star review! We're thrilled to hear you had a great experience with us. Thank you for recommending us to friends and family. See you at your next visit!

---

NEGATIVE REVIEW RESPONSE:

We're sorry to hear about your experience. We'd like to make this right. Please contact us directly at [email] so we can discuss this further. We value your feedback and want to improve.
```

#### Step 4: Review Request Automation
```
TRIGGER: Appointment completed
                        ↓
SMS/Email: "Thanks for visiting! Would you take 60 seconds to leave us a review? [LINK]"
                        ↓
If no response in 3 days → Follow-up
```

---

## 7. 📱 Social Media

### What It Does
- Auto-posts to Instagram/Facebook
- Creates content ideas
- Schedules posts
- Engages with followers

### Setup Steps

#### Step 1: Content Types by Industry

```
DENTAL:
- Before/after photos
- Treatment explanations (Reels)
- Patient testimonials
- Oral hygiene tips
- Team highlights

RESTAURANT:
- Food photography
- Chef specials
- Behind the scenes
- Customer reviews
- Events/promotions

ESTATE AGENT:
- Property showcase
- Market updates
- Moving tips
- Success stories
- Local area highlights
```

#### Step 2: Scheduling Tools
| Tool | Platforms | Cost |
|------|-----------|------|
| Buffer | All | £0-80/mo |
| Later | Instagram | £0-83/mo |
| Hootsuite | All | £0-1000/mo |
| Meta Business Suite | FB/IG | Free |

#### Step 3: Content Generation Prompts
```
FOR DENTAL:

"Write 5 Instagram captions for a teeth whitening result photo:
- 1 inspirational
- 1 funny  
- 1 educational
- 1 promotional (20% off)
- 1 testimonial request"

AI Response:
1. "✨ New year, new smile! Book your whitening today 💫 #NewSmile #TeethWhitening"
2. "Coffee lovers, we don't judge 🙈 But have you tried our whitening? ☕➡️✨"
3. "Did you know? Teeth whitening is safe when done by professionals 🦷 #DentalTips"
4. "✨ Start the year with a brighter smile! 20% off whitening this month. Book now!"
5. "Love your new smile? Share your results and get 10% off your next visit! 📸"
```

#### Step 4: Posting Schedule
```
DAILY:

9 AM: Motivation quote
12 PM: Behind the scenes
3 PM: Tip of the day
6 PM: Showcase/promo
8 PM: Engagement reply

WEEKLY:
Monday: Blog promotion
Wednesday: Video/Reel
Friday: Special offer
Saturday: User-generated content
```

---

## 8. 💻 Modern Website

### What It Does
- Creates professional website
- Optimizes for SEO
- Mobile-responsive
- Fast loading

### Setup Steps

#### Step 1: Choose Platform
| Platform | Best For | Cost |
|----------|----------|------|
| WordPress | Full control | £5-50/mo |
| Wix | Easy | £13-50/mo |
| Squarespace | Design | £12-44/mo |
| Webflow | Pro | £14-39/mo |

#### Step 2: Essential Pages
```
REQUIRED PAGES:

1. Home
   - Hero with CTA
   - Services overview
   - Trust signals (reviews, qualifications)
   - Contact form

2. Services
   - List all treatments
   - Before/after
   - Pricing (ranges)
   - FAQ

3. About Us
   - Team photos & bios
   - Experience/qualifications
   - Awards/certifications

4. Contact
   - Map
   - Form
   - Phone/email
   - Opening hours

5. FAQ
   - Common questions
   - Pricing info
   - What to expect
```

#### Step 3: SEO Checklist
```
ON-PAGE SEO:

□ Title tags (60 chars max)
□ Meta descriptions (155 chars)
□ H1-H6 hierarchy
□ Image alt text
□ Internal linking
□ Mobile-friendly
□ Page speed < 3 seconds
□ SSL certificate
□ Local business schema
□ Contact info in footer
```

#### Step 4: Essential Features
```
MUST-HAVE:

☐ Online booking widget
☐ Click-to-call on mobile
☐ Contact form with auto-responder
☐ SSL certificate
☐ Mobile responsive
☐ Load speed < 3 seconds
☐ Google Business integration
☐ Chat widget
☐ Social media links
☐ Privacy policy page
```

---

## 9. 📅 Booking System

### What It Does
- Online appointment scheduling
- Calendar management
- Automated reminders
- Payment collection

### Setup Steps

#### Step 1: Choose Platform
| Platform | Industry | Cost |
|----------|----------|------|
| Phorest | Dental | £30/mo |
| Timely | All | £25/mo |
| Calendly | Simple | £0-20/mo |
| Square Appointments | Retail | £0-50/mo |

#### Step 2: Configure Availability
```
WORKING HOURS:

Monday: 8:30 AM - 7:00 PM
Tuesday: 8:30 AM - 7:00 PM
Wednesday: 8:30 AM - 7:00 PM
Thursday: 8:30 AM - 7:00 PM
Friday: 8:30 AM - 3:30 PM
Saturday: Closed
Sunday: Closed

APPOINTMENT TYPES:

New Patient: 60 min
Check-up: 30 min
Cleaning: 45 min
Whitening: 90 min
Consultation: 30 min
Emergency: Same-day
```

#### Step 3: Set Up Reminders
```
REMINDER SCHEDULE:

Appointment confirmed → Email + SMS immediately
3 days before → Email reminder
1 day before → SMS reminder (at 10 AM)
2 hours before → SMS reminder
If no-show → Auto-follow-up next day
```

#### Step 4: Connect Payments
```
PAYMENT OPTIONS:

☐ Take payment at booking
☐ Invoice after appointment
☐ Direct debit (GoCardless)
☐ Card on file

Set policies:
- 24-hour cancellation policy
- No-show fee: £25
- Deposit required for new patients: £50
```

---

## Integration Matrix

| Industry | Priority 1 | Priority 2 | Priority 3 |
|----------|------------|------------|------------|
| Dental | Booking | Chatbot | Voice |
| Estate Agent | Lead Gen | Website | Chatbot |
| Restaurant | Booking | Social | Reviews |
| Plumber | Chatbot | Voice | Booking |
| Beauty | Booking | Social | Chatbot |
| Vet | Booking | Reminders | Chatbot |

---

## Pricing Summary

| Service | Setup | Monthly |
|---------|-------|---------|
| AI Chatbot | £0-500 | £49 |
| AI Voice | £0-200 | £50-150 |
| Lead Generation | £200 | £99 |
| Automated Outreach | £300 | £79 |
| Content Creation | £100 | £69 |
| Reputation | £200 | £59 |
| Social Media | £150 | £79 |
| Website | £500-2000 | £99 |
| Booking System | £200 | £79 |

**Total Setup: £1,650-4,050**
**Total Monthly: £563-762**
