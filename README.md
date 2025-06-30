# ⚡ Bolt Burgers 🍔  
*1-shot challenge entry for the world’s largest hackathon*

> A totally fake, 100 % fun landing page in honor of the **Bolt Hackathon** — with zero calories and unlimited hype.

---

## What’s inside?

- **Mouth-watering video** cooked up with *Midjourney* + *Canva* 🍳  
- **Sizzling assets** hosted on *Cloudinary* ☁️  
- **“1-shot” Bolt magic**: generate the entire page from a single prompt 🔥  

> **Disclaimer:** No burgers were harmed (or eaten) in the making of this page 🤤

---

## Quick Start

| Do this | Why |
| ------- | --- |
| ⭐ **Star** | Show some love |
| 🍴 **Fork** | Remix it for your own projects |
| 👀 **Browse** | Enjoy the virtual burger bliss |

And Bolt — if you ever decide to sell real burgers… we’re here for it! 🍔👋

---

## 🛠️  Workflow Overview

1. **Generate burger imagery**  
   *Midjourney* prompts → high-res burger shots.

2. **Create short videos**  
   Combine stills into two clips (kept tiny for speed).

3. **Stitch & resize in Canva**  
   Export a single MP4 hero video.

4. **Upload to Cloudinary**  
   - Select **Copy URL → Original URL (include version #)**  
   - Save to notepad as `video`.

5. **Make a quick logo**  
   - Burger icon with a “B” for *bold* 😄  
   - Upload & save link as `logo`.

6. **Add the Bolt badge**  
   - Upload badge; save link as `bolt_badge`.

7. **Feed links + basic brief** into my *Landing-Page Generator GPT*.

---

## 🏗️  Prompt Sent to the Generator

> “A landing page for a fictional burger joint named **“Bolt Burgers”**  
>  • **Video background:** `https://res.cloudinary.com/[my_video].mp4`  
>  • **Logo:** `https://res.cloudinary.com/[my_logo].png`  
>  • **Footer badge:** `https://res.cloudinary.com/[my_bolt_badge].png`  
>  • Use the ‘single-section video background’ trend.”

---

## 🔧 YAML Output

```yaml
background_video:
  cloudinary_url: "https://res.cloudinary.com/[my_video].mp4"
  code: |
    overlay: "bg-black/50 sm:bg-black/40 lg:bg-black/30"
    overlay_class: "absolute inset-0"

navigation_bar:
  left:
    logo: "https://res.cloudinary.com/[my_logo].png"
    label: "Bolt Burgers"
    class: "flex items-center uppercase tracking-widest text-sm text-white/80 overflow-hidden rounded-full"
  center:
    links: ["Menu", "Locations", "Contact"]
    class: "absolute left-1/2 transform -translate-x-1/2 flex gap-x-8 text-white/80 text-sm"
  right:
    label: "EN ⌄"
    class: "text-white/80 text-sm"
  position: "absolute top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center"

hero_content:
  headline:
    text: "Savor the Flavor"
    class: "font-anton text-6xl tracking-tight leading-[1.1] text-white uppercase text-left"
  subheading:
    text: "Handcrafted burgers, fresh ingredients, unforgettable taste."
    class: "font-roboto text-base text-white/80 font-normal text-left"
  cta_button:
    text: "Order Now"
    class: "bg-white text-black px-5 py-2 rounded-lg font-roboto text-sm font-medium uppercase hover:bg-gray-100 transition min-h-[44px]"

right_vertical_label:
  content: "Freshly Made"
  class: "font-roboto uppercase tracking-widest text-sm text-white/60"
  position: "fixed right-4 top-1/2 transform: translateY(-50%) rotate(90deg)"

footer:
  bottom_right:
    content: "Bolt Badge"
    class: "font-roboto text-xs text-white/60"
    position: "absolute bottom-4 right-6"
  bottom_left:
    content: "©️ Bolt Burgers"
    class: "font-roboto text-xs text-white/50"
    position: "absolute bottom-4 left-6"

fonts:
  primary:
    name: "Anton"
    class: "font-anton"
    google_fonts: "https://fonts.googleapis.com/css2?family=Anton&display=swap"
  secondary:
    name: "Roboto"
    class: "font-roboto"
    google_fonts: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"

responsive_mobile_notes: |
  • All content and spacing scale with breakpoints  
  • Button min-h-[44px] for touch targets  
  • Semantic HTML + ARIA labels (WCAG 2.1 AA)  
  • No horizontal scroll at 320 px width

###

🤖 About the Generator

My Landing-Page GPT system prompt is still evolving. Ping me if you’d like to see how it churns out one-shot prototypes for any brand, topic, or idea!
