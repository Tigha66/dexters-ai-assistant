# 9 AI Services Setup Guide for Small Businesses

---

## 💬 Service 1: AI Chatbot

### What It Does
Answers website visitor questions 24/7 and books appointments automatically.

### Step-by-Step Setup

#### Step 1: Choose Your Chatbot Platform

| Platform | Difficulty | Best For | Free Plan |
|---------|------------|----------|-----------|
| **Tidio** | Easy | Beginners | ✅ Yes |
| **Intercom** | Medium | Scaling | ❌ No |
| **Drift** | Medium | B2B | ❌ No |
| **Voiceflow** | Medium | Custom | ✅ Yes |

**Recommended for small businesses: Tidio (free for small volumes)**

---

#### Step 2: Create Account

1. Go to **[tidio.com](https://tidio.com)**
2. Sign up with email or Google
3. Click "Add to website"
4. Copy the code snippet
5. Paste into your website's `<head>` section

```html
<script src="//code.tidio.co/your-code.js"></script>
```

---

#### Step 3: Configure Your Chatbot

**Set greeting message:**
```
"Hi! 👋 Welcome to [Your Business]. How can I help you today?"
```

**Set working hours:**
```
Monday-Friday: 9am-6pm (human available)
Outside hours: "Our team will respond within 24 hours"
```

---

#### Step 4: Add FAQs (Copy & Paste)

**For DENTAL Clinic:**
```
Q: Do you offer emergency appointments?
A: Yes! We offer same-day emergency appointments. Call us on [PHONE] or book online.

Q: How much do you charge for a check-up?
A: Our standard check-up is £50. This includes X-rays if needed.

Q: Do you do teeth whitening?
A: Yes! We offer professional whitening starting from £250. Book a consultation!

Q: What are your opening hours?
A: Mon-Thu 8:30am-7pm, Fri 8:30am-3:30pm
```

**For RESTAURANT:**
```
Q: Do you have tables available tonight?
A: Let me check availability! How many people in your party?

Q: What's your dress code?
A: Smart casual - we want you to feel comfortable!

Q: Can I bring my dog?
A: We're pet-friendly in our outdoor terrace area!
```

**For ESTATE AGENT:**
```
Q: Can you value my property?
A: Absolutely! We offer FREE property valuations. Book online or call us.

Q: Do you let properties?
A: Yes, we manage over 200 properties in the area. Call for details.

Q: What areas do you cover?
A: We cover [YOUR AREA] and surrounding areas.
```

---

#### Step 5: Connect to Booking

1. Go to "Automations" in Tidio
2. Click "Create new automation"
3. Set trigger: "When visitor asks about booking"
4. Set action: "Send quick reply with booking link"

---

### Cost: £0-49/month

---

## 🎧 Service 2: AI Voice Agent

### What It Does
Answers phone calls 24/7 when you're busy or closed. Books appointments directly.

### Step-by-Step Setup

#### Step 1: Choose Provider

| Provider | Quality | Cost/Min | Best For |
|----------|---------|----------|----------|
| **Bland AI** | Good | £0.04 | Budget |
| **Vapi** | Great | £0.10 | Small business |
| **ElevenLabs** | Best | £0.15 | Premium |

**Recommended: Vapi (easiest setup)**

---

#### Step 2: Set Up Vapi

1. Go to **[vapi.ai](https://vapi.ai)**
2. Sign up and get API key
3. Create new assistant
4. Choose voice: "Rachel" or "Matthew" (British accent)
5. Set greeting:

```
"Hello, thank you for calling [BUSINESS NAME]. How can I help you today?"
```

---

#### Step 3: Write Voice Script

**Sample Script for Dental:**

```
GREETING:
"Hello, thank you for calling London International Dental. How can I help you today?"

IF BOOKING:
"I'd be happy to book an appointment for you. What treatment are you looking for?"
[Wait for answer]
"And when would you prefer to come in? We have availability this week."
[Check calendar]
"Let me confirm: [DATE] at [TIME]. Should I send you a confirmation text?"

IF CLOSED:
"Our office is currently closed. Would you like me to book an appointment for when we reopen, or take a message?"

IF EMERGENCY:
"For dental emergencies, please call [EMERGENCY NUMBER] or visit A&E. For urgent appointments, I can check if we have any same-day availability."

CLOSING:
"Thank you for calling. Goodbye!"
```

---

#### Step 4: Get UK Phone Number

1. Go to **[numbers.mxtelecom.co.uk](https://numbers.mxtelecom.co.uk)** or **[telnyx.com](https://telnyx.com)**
2. Choose UK number (ideally local to your area)
3. Forward to your Vapi webhook URL

**Or use Vapi's built-in number:**

1. In Vapi dashboard, click "Phone Numbers"
2. "Get a UK Number"
3. Select area code
4. Cost: £1/month

---

#### Step 5: Test & Launch

- Call your number
- Test booking flow
- Adjust voice speed if needed
- Launch!

---

### Cost: £20-150/month

---

## 🎯 Service 3: Lead Generation

### What It Does
Captures visitor contact info and identifies people ready to buy.

### Step-by-Step Setup

#### Step 1: Install Tracking

**Google Analytics 4:**
1. Go to **[analytics.google.com](https://analytics.google.com)**
2. Create account → Add property
3. Get tracking ID (G-XXXXXXX)
4. Add to website:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXX');
</script>
```

---

#### Step 2: Create Lead Capture Forms

**Essential form fields:**
- Name (required)
- Email (required)
- Phone (optional)
- Service interested in (dropdown)
- Message (optional)

**Best places to put forms:**
1. Contact page
2. Pop-up (exit intent)
3. Chatbot first message
4. Footer of every page

---

#### Step 3: Set Up CRM (Free Option: HubSpot)

1. Go to **[hubspot.com](https://hubspot.com)**
2. Sign up for free CRM
3. Create form in HubSpot
4. Embed on website
5. Leads auto-add to CRM

---

#### Step 4: Set Up Lead Scoring

**Simple scoring system:**

| Action | Points |
|--------|--------|
| Fills out contact form | +10 |
| Books appointment | +20 |
| Downloads price list | +5 |
| Visits pricing page | +3 |
| Returns 3+ times | +5 |

**Hot lead (20+ points) → Call within 1 hour**

---

### Cost: £0-99/month

---

## 📧 Service 4: Automated Outreach

### What It Does
Sends automatic emails for appointments, reminders, and follow-ups.

### Step-by-Step Setup

#### Step 1: Choose Email Platform

| Platform | Free Plan | Best For |
|----------|-----------|----------|
| **Mailchimp** | 500 contacts | Beginners |
| **ConvertKit** | None | Creators |
| **GoHighLevel** | Trial | Agencies |

**Recommended: Mailchimp (free up to 500 contacts)**

---

#### Step 2: Create Email Sequences

**Sequence 1: New Lead**

```
EMAIL 1 (Immediate):
Subject: Welcome to [Business Name]!
Body: Thanks for contacting us! We'll be in touch within 24 hours.

Email 2 (Day 2):
Subject: Following up on your inquiry
Body: Just checking if you had any questions? Book here: [LINK]
```

**Sequence 2: Appointment Reminder**

```
EMAIL (24 hours before):
Subject: Reminder: Your appointment tomorrow at [TIME]
Body: Looking forward to seeing you! Here's what to bring: [LIST]
```

**Sequence 3: Post-Visit**

```
EMAIL (Day 3):
Subject: How was your visit?
Body: We hope you loved your experience! Would you mind leaving us a review? [LINK]
```

---

#### Step 3: Set Up Automations

In Mailchimp:
1. Go to "Automations"
2. "Create Customer Journey"
3. Set trigger (e.g., "Booked appointment")
4. Add email actions with delays

---

### Cost: £0-79/month

---

## ✍️ Service 5: Content Creation

### What It Does
AI helps write blog posts, social media, and website content.

### Step-by-Step Setup

#### Step 1: Choose AI Writing Tool

| Tool | Cost | Best For |
|------|------|----------|
| **ChatGPT** | £15/mo | Everything |
| **Jasper** | £49/mo | Marketing |
| **Copy.ai** | £36/mo | Short copy |

**Recommended: ChatGPT (best value)**

---

#### Step 2: Get Content Ideas

**Ask ChatGPT:**
```
"Give me 10 blog post ideas for a [DENTAL/ESTATE/Restaurant] business in [LOCATION]"
```

**Example response:**
1. "5 Signs You Need a Root Canal"
2. "What to Expect at Your First Visit"
3. "10 Tips for Healthy Teeth"
4. "The Truth About Teeth Whitening"
5. "How Often Should You Visit the Dentist?"

---

#### Step 3: Write Content (Use This Prompt)

```
"Write a 1000-word blog post about [TOPIC]. 

Requirements:
- Friendly, professional tone
- Include 5-7 subheadings
- Add practical tips
- Include 1-2 FAQs at the end
- End with a call to action to book an appointment

Keywords to include: [LIST]
```

---

#### Step 4: Repurpose Content

**1 blog post = 5 social posts:**

```
BLOG: "5 Tips for Whiter Teeth"
↓
SOCIAL 1: "Tip #1: Watch what you eat 🍎🍷"
SOCIAL 2: "Tip #2: Brush properly - 2 minutes, twice daily"
SOCIAL 3: "Tip #3: Professional whitening works!"
SOCIAL 4: "Tip #4: Don't forget to floss"
SOCIAL 5: "Book your whitening consultation today! [LINK]"
```

---

### Cost: £15-69/month

---

## ⭐ Service 6: Reputation Management

### What It Does
Monitors and responds to reviews across Google, Trustpilot, Yelp.

### Step-by-Step Setup

#### Step 1: Claim Business Listings

| Platform | URL |
|----------|-----|
| Google Business | business.google.com |
| Trustpilot | trustpilot.com |
| Yelp | yelp.co.uk |
| WhatClinic | whatclinic.com |

**Action:** Search your business, claim it, verify with postcard/phone

---

#### Step 2: Set Up Google Alerts (Free)

1. Go to **[alerts.google.com](https://alerts.google.com)**
2. Create alert for "[Your Business Name]"
3. Get notified of new mentions

---

#### Step 3: Create Response Templates

**Positive Review Response:**
```
Thank you so much for the 5-star review! We're thrilled to hear you had a great experience. See you at your next visit! 🙌
```

**Negative Review Response:**
```
We're sorry to hear about your experience. Please contact us directly at [email] so we can make this right. We value your feedback.
```

---

#### Step 4: Automate Review Requests

**In Mailchimp or your CRM:**
- Trigger: Appointment completed
- Action: Send review request email after 3 days

**Sample email:**
```
Subject: Quick favour? 🙏

Hi [Name],

Thanks for visiting us! 

Would you take 60 seconds to leave us a review? It really helps small businesses like ours.

[GOOGLE REVIEW LINK]

Thanks so much!
[Your Name]
```

---

### Cost: £0-59/month

---

## 📱 Service 7: Social Media

### What It Does
Automates posting and helps create content for Instagram, Facebook.

### Step-by-Step Setup

#### Step 1: Set Up Business Accounts

1. Create Instagram Business account
2. Connect to Facebook Page
3. Add to Meta Business Suite

---

#### Step 2: Choose Scheduling Tool

| Tool | Platforms | Free Plan |
|------|-----------|-----------|
| **Meta Business Suite** | FB/IG | ✅ Free |
| **Buffer** | All | ✅ 3 posts |
| **Later** | IG | ✅ 30 posts |

**Recommended: Meta Business Suite (free)**

---

#### Step 3: Plan Content (Weekly)

| Day | Content Type |
|-----|--------------|
| Monday | Educational tip |
| Tuesday | Behind the scenes |
| Wednesday | Product/service highlight |
| Thursday | User testimonial |
| Friday | Promotion/offer |
| Saturday | Engagement post |
| Sunday | Plan next week |

---

#### Step 4: Use AI for Captions

**Prompt for ChatGPT:**
```
"Write 5 Instagram captions for a [PHOTO TYPE]. 
Include 1-3 relevant hashtags.
Keep under 100 words.
Make it engaging and friendly."
```

---

### Cost: £0-79/month

---

## 💻 Service 8: Modern Website

### What It Does
Professional, fast, mobile-friendly website that converts visitors to customers.

### Step-by-Step Setup

#### Step 1: Choose Website Builder

| Builder | Difficulty | Cost | Best For |
|---------|------------|------|----------|
| **Wix** | Easy | £13-50/mo | Beginners |
| **Squarespace** | Easy | £12-44/mo | Design |
| **WordPress** | Medium | £5-25/mo | Control |
| **Carrd** | Very Easy | £19/yr | One-page |

**Recommended for small business: Wix or Carrd**

---

#### Step 2: Essential Pages

```
REQUIRED PAGES:

1. Home
   - Headline: What you do + benefit
   - Services overview (3-4)
   - Call to action button
   
2. Services/Prices
   - List all services
   - Starting prices
   - "Book Now" buttons

3. About
   - Who you are
   - Experience/qualifications
   - Team photo (optional)

4. Contact
   - Phone number
   - Address with map
   - Contact form
   - Opening hours
```

---

#### Step 3: Must-Have Features

```
☑ Mobile responsive (works on phone)
☑ SSL (padlock icon)
☑ Fast loading (< 3 seconds)
☑ Contact form
☑ Booking button (prominent)
☑ Click-to-call on mobile
☑ Social media links
```

---

#### Step 4: SEO Basics

```
□ Add business name to title
□ Add meta description (155 chars)
□ Add your city/area to headings
□ Add alt text to images
□ Submit sitemap to Google Search Console
```

---

### Cost: £12-50/month

---

## 📅 Service 9: Booking System

### What It Does
Lets customers book appointments online 24/7.

### Step-by-Step Setup

#### Step 1: Choose Platform

| Platform | Industry | Free Plan |
|----------|----------|-----------|
| **Calendly** | General | ✅ Yes |
| **Phorest** | Dental | ❌ |
| **Booqable** | Rental | ✅ Yes |
| **Square Appointments** | General | ✅ Yes |

**Recommended: Calendly (free for basic)**

---

#### Step 2: Set Up Calendly

1. Go to **[calendly.com](https://calendly.com)**
2. Create account
3. Click "Create" → "Event Type"
4. Choose: "One-on-One" or "Group"

**Settings to configure:**
- Event name
- Duration (30/60/90 min)
- Available times
- Buffer between bookings
- Your timezone

---

#### Step 3: Add Booking Questions

```
QUESTION 1 (Required):
What's your name?

QUESTION 2 (Required):
Email address?

QUESTION 3 (Required):
Phone number?

QUESTION 4 (Optional):
What service do you need?

QUESTION 5 (Optional):
Any notes for us?
```

---

#### Step 4: Connect to Calendar

1. Connect Google Calendar or Outlook
2. Set your availability
3. Calendar auto-blocks when booked
4. Get notifications

---

#### Step 5: Add to Website

**Option A: Embed**
```
<iframe src="YOUR_CALENDLY_LINK" width="100%" height="600" frameborder="0"></iframe>
```

**Option B: Button link**
```html
<a href="YOUR_CALENDLY_LINK" class="btn">Book Now</a>
```

---

### Cost: £0-20/month

---

## 📊 Quick Start Packages

### Minimum Viable (Start Here)
| Service | Tool | Cost |
|---------|------|------|
| Chatbot | Tidio (Free) | £0 |
| Booking | Calendly (Free) | £0 |
| Website | Carrd | £19/yr |
| **Total** | | **£19/yr** |

### Professional (Recommended)
| Service | Tool | Cost |
|---------|------|------|
| Chatbot | Tidio | £25/mo |
| Voice | Vapi | £50/mo |
| Booking | Calendly | £10/mo |
| Email | Mailchimp | £0 |
| Social | Meta Suite | £0 |
| **Total** | | **£85/mo** |

### Full Service (Complete)
| Service | Tool | Cost |
|---------|------|------|
| All 9 services | Mixed | £200-400/mo |

---

## 🚀 Action Steps

### Day 1-7: Foundation
- [ ] Set up Calendly account
- [ ] Add booking to website
- [ ] Set up Tidio chatbot
- [ ] Claim Google Business profile

### Day 8-14: Automation
- [ ] Connect email marketing (Mailchimp)
- [ ] Create email sequence
- [ ] Set up review request automation
- [ ] Connect phone to voice AI

### Day 15-30: Content
- [ ] Plan content calendar
- [ ] Set up social scheduling
- [ ] Write first 4 blog posts
- [ ] Launch!

---

## Need Help?

**For each service, I can create:**
1. ✅ Ready-to-use templates
2. ✅ Step-by-step video guides
3. ✅ Custom setup for your business

Just ask! 😊
