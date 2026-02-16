# How to Add All 9 AI Services to Any Website

---

## Quick Overview

Here's what you need to add to a website to get all 9 services working:

```html
<!-- PUT THIS IN YOUR WEBSITE'S <head> SECTION -->

<!-- 1. GOOGLE ANALYTICS (Lead Tracking) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>

<!-- 2. TIDIO CHATBOT (AI Chat) -->
<script src="//code.tidio.co/YOUR_TIDIO_CODE.js"></script>

<!-- 3. CALENDLY (Booking System) -->
<link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
<script src="https://assets.calendly.com/assets/external/widget.js" async></script>

<!-- 4. TRUSTPILOT (Reviews) -->
<script src="//widget.trustpilot.com/bootstrap/v7/tp.widget.bootstrap.en.js" async></script>

<!-- 5. METADATA FOR SEO -->
<meta name="description" content="Your business description here">
<meta property="og:title" content="Your Business Name">
<meta property="og:description" content="What you do">
<meta property="og:image" content="https://yoursite.com/image.jpg">

<!-- 6. STRUCTURED DATA (Local SEO) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "DentalClinic",
  "name": "Your Business Name",
  "telephone": "+44-20-XXXX-XXXX",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 High Street",
    "addressLocality": "London",
    "postalCode": "SW1A 1AA"
  },
  "openingHours": "Mo-Th 08:30-19:00, Fr 08:30-15:30"
}
</script>
```

---

## Step-by-Step Implementation

---

## STEP 1: Add Google Analytics (Lead Tracking)

### What it does
Tracks who visits your website and what they do.

### How to get it
1. Go to **[analytics.google.com](https://analytics.google.com)**
2. Sign up → Create Property
3. Get your Tracking ID (starts with G-)
4. Replace G-XXXXXXXXXX in the code above

### Where to put it
In your website's `<head>` section on EVERY page.

---

## STEP 2: Add Tidio Chatbot (AI Chat)

### What it does
Pops up a chat window where visitors can ask questions 24/7.

### How to get it
1. Go to **[tidio.com](https://tidio.com)**
2. Sign up for free
3. Click "Add to website"
4. Copy your code (looks like: `//code.tidio.co/abc123.js`)

### Where to put it
Just before the closing `</body>` tag.

### What visitors see
A chat bubble in the bottom-right corner.

---

## STEP 3: Add Calendly (Online Booking)

### What it does
Lets visitors book appointments without calling.

### How to get it
1. Go to **[calendly.com](https://calendly.com)**
2. Sign up free
3. Create your event type
4. Get your link (calendly.com/yourname)

### Option A: Button Popup
```html
<!-- Add this button where you want it -->
<button onclick="Calendly.initPopupWidget({url: 'https://calendly.com/YOUR_LINK'});return false;" 
class="book-btn">
Book Appointment
</button>

<!-- Add this before </body> -->
<script src="https://assets.calendly.com/assets/external/widget.js" async></script>
<link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
```

### Option B: Embed Directly
```html
<!-- Calendly inline widget begin -->
<div class="calendly-inline-widget" data-url="https://calendly.com/YOUR_LINK" 
style="min-width:320px;height:700px;"></div>
<!-- Calendly inline widget end -->
```

---

## STEP 4: Add Trustpilot (Reviews)

### What it does
Shows your star rating and lets customers leave reviews.

### How to get it
1. Go to **[business.trustpilot.com](https://business.trustpilot.com)**
2. Claim your free profile
3. Get your TrustBox code

### Simple version - Add stars to your site:
```html
<div class="trustpilot-widget" 
data-businessunit-id="YOUR_BUSINESS_UNIT_ID" 
data-locale="en-GB" 
data-template-id="YOUR_TEMPLATE_ID" 
data-style-height="150px" 
data-style-width="100%">
<a href="https://www.trustpilot.com" target="_blank">Trustpilot</a>
</div>
```

---

## STEP 5: Add Meta Pixel (Facebook/Instagram Tracking)

### What it does
Tracks conversions from Facebook/Instagram ads.

### How to get it
1. Go to **[business.facebook.com](https://business.facebook.com)**
2. Events Manager → Data Sources → Add
3. Get your Pixel ID

### Add to website:
```html
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'YOUR_PIXEL_ID');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"
/></noscript>
```

---

## STEP 6: Add Structured Data (Google Business Info)

### What it does
Helps Google understand your business info for local search.

### Add to `<head>`:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "DentalClinic",
  "name": "Your Business Name",
  "image": "https://yoursite.com/logo.jpg",
  "telephone": "+44-20-1234-5678",
  "email": "hello@yoursite.com",
  "url": "https://yoursite.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 High Street",
    "addressLocality": "London",
    "postalCode": "SW1A 1AA",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "51.5074",
    "longitude": "-0.1278"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
      "opens": "08:30",
      "closes": "19:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Friday",
      "opens": "08:30",
      "closes": "15:30"
    }
  ],
  "priceRange": "££"
}
</script>
```

---

## STEP 7: Set Up Email Marketing (Automated Outreach)

### Option A: Mailchimp Form (Embed)
```html
<!-- Mailchimp signup form -->
<div id="mc_embed_signup">
<form action="YOUR_MAILCHIMP_URL" method="post" id="mc-embedded-subscribe-form" 
name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
  <div id="mc_embed_signup_scroll">
    <h2>Subscribe for updates</h2>
    <div class="mc-field-group">
      <label for="mce-EMAIL">Email Address <span class="asterisk">*</span></label>
      <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
    </div>
    <div id="mce-responses" class="clear">
      <div class="response" id="mce-error-response" style="display:none"></div>
      <div class="response" id="mce-success-response" style="display:none"></div>
    </div>
    <div style="position: absolute; left: -5000px;" aria-hidden="true">
      <input type="text" name="b_YOUR_TAG" tabindex="-1" value="">
    </div>
    <div class="clear">
      <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
    </div>
  </div>
</form>
</div>
```

---

## STEP 8: Add WhatsApp Chat Button

### What it does
Lets visitors message you on WhatsApp directly.

### Add this code:
```html
<!-- WhatsApp button -->
<a href="https://wa.me/447712345678" target="_blank" 
   style="position:fixed;bottom:20px;right:20px;background:#25D366;color:white;
          padding:15px 25px;border-radius:50px;box-shadow:2px 2px 10px rgba(0,0,0,0.2);
          text-decoration:none;font-weight:bold;z-index:1000;">
  💬 Chat on WhatsApp
</a>
```

---

## STEP 9: Add AI Voice Agent (Phone)

### This doesn't need website code!

For AI Voice, you just:
1. Get a virtual number from **[vapi.ai](https://vapi.ai)** or **[mxtelecom.co.uk](https://numbers.mxtelecom.co.uk)**
2. Forward calls to the AI
3. No website changes needed

---

## Complete "All-in-One" Code to Copy

Here's everything combined - just replace the XXXXX parts:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Business Name</title>
    <meta name="description" content="Your business description here">
    
    <!-- GOOGLE ANALYTICS -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX');
    </script>
    
    <!-- META PIXEL -->
    <script>
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', 'XXXXXXXXXXXXXXX');
    fbq('track', 'PageView');
    </script>
    
    <!-- STRUCTURED DATA -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Your Business Name",
      "telephone": "+44-20-1234-5678",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Street Name",
        "addressLocality": "London",
        "postalCode": "SW1A 1AA"
      }
    }
    </script>
    
    <!-- CALENDLY CSS -->
    <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
</head>
<body>
    <!-- YOUR WEBSITE CONTENT HERE -->
    
    <!-- TIDIO CHATBOT -->
    <script src="//code.tidio.co/XXXXXXXXXXXX.js"></script>
    
    <!-- CALENDLY WIDGET -->
    <script src="https://assets.calendly.com/assets/external/widget.js" async></script>
    
    <!-- TRUSTPILOT -->
    <div class="trustpilot-widget" data-businessunit-id="XXXXXXX" data-locale="en-GB" data-template-id="XXXXX" style="height:150px;">
    <a href="https://www.trustpilot.com" target="_blank">Trustpilot</a>
    </div>
    <script src="//widget.trustpilot.com/bootstrap/v7/tp.widget.bootstrap.en.js" async></script>
    
    <!-- BOOK BUTTON -->
    <button onclick="Calendly.initPopupWidget({url: 'https://calendly.com/YOUR_NAME'});return false;" 
    class="book-now-btn">Book Now</button>
    
    <!-- WHATSAPP BUTTON -->
    <a href="https://wa.me/447712345678" class="whatsapp-btn" target="_blank">💬</a>
</body>
</html>
```

---

## What Each Service Does

| # | Service | Code Needed | What It Does |
|---|---------|-------------|--------------|
| 1 | Chatbot | ✅ Yes | 24/7 answering questions |
| 2 | Voice | ❌ No | Answers phone calls |
| 3 | Lead Gen | ✅ Yes | Tracks visitors |
| 4 | Outreach | ✅ Yes | Email sign-up form |
| 5 | Content | ❌ No | AI writes for you |
| 6 | Reviews | ✅ Yes | Shows star ratings |
| 7 | Social | ❌ No | Use Meta Business Suite |
| 8 | Website | ❌ No | Use Wix/Squarespace |
| 9 | Booking | ✅ Yes | Calendar widget |

---

## Checklist

```
IMPLEMENTATION CHECKLIST:

□ Google Analytics (get ID, add code)
□ Tidio chatbot (sign up, add code)
□ Calendly (sign up, add button)
□ Trustpilot (claim profile, add widget)
□ Meta Pixel (get ID, add code)
□ Structured data (customize JSON)
□ WhatsApp button (change number)
□ Test everything works
□ Submit sitemap to Google Search Console
```

---

## Need This as a File?

I'll create a simple HTML file with all this ready to use!
