# bolt-burgers
1 shot challenge for the worlds largest hackathon challenge

# README 🍔⚡
  Welcome to **Bolt Burgers** — a totally fake, 100% fun landing page in honor of the Bolt Hackathon! 😜

  **This repo showcases:**
  - A drool-worthy video cooked up with **Midjourney + Canva** 🍳  
  - **Cloudinary** hosting sizzling images & videos ☁️  
  - **Bolt** magic to 1-shot the entire page with a single prompt 🔥  

  **Disclaimer:** No burgers were harmed (or eaten) in the making of this page. 🤤

  Feel free to star ⭐, fork 🍴, or just enjoy the virtual burger bliss. And Bolt, if you ever want to sell real burgers… we’re here for it! 🍔👋

Prompt created using flow below: 

step 1: make burger images on midjourney
step 2: make videos from images, downloaded 2 videos to keep video smaller
step 3: string videos together in canva and resize a little, download as single mp4
step 4: upload to cloudinary and get url with timestamp and version # from "copy url" --> "copy original url with options" --> get link with checkbox ticked "Include the version number in the delivery URL" --> save link on notepad for use in prompt with label "video"
step 5: make a quick burger logo with a b on it for bold lol : ), download and repeat step 4, save link on notepad for use in prompt with label "logo"
step 6: save bolt logo to cloudinary as well for use in projects, save link on notepad for use in prompt with label "bolt_badge"
step 7: Send links and basic prompt to prompt generator GPT


Input to personal landing page generator gpt I put together using the "single section video background" trend idea

-Me: A landing page for a fictional burger joint named "Bolt Burgers"

use this for the video background
-https://res.cloudinary.com/[my_video url].mp4

use this for the logo
-https://res.cloudinary.com/[my_logo].png

use this for a "badge" on the bottom right of the page in the footer instead of the normal item we use.
-https://res.cloudinary.com/[my_bolt_badge].png


Yaml response from Landing Page Generator:

###
background_video:
  cloudinary_url: "https://res.cloudinary.com/[my_video url].mp4"
  code: |
    <video autoPlay muted loop playsInline controls={false} preload="auto" aria-label="Mouthwatering close-ups of juicy burgers sizzling on the grill">
      <source src="https://res.cloudinary.com/dlbvmlnul/video/upload/v1751273201/burgers_auddlx.mp4" type="video/mp4" />
    </video>
  overlay: "bg-black/50 sm:bg-black/40 lg:bg-black/30"
  overlay_class: "absolute inset-0"

navigation_bar:
  left:
    logo: "https://res.cloudinary.com/[my_logo].png"
    label: "Bolt Burgers"
    class: "flex items-center uppercase tracking-widest text-sm text-white/80 overflow-hidden rounded-full"
  center:
    links:
      - "Menu"
      - "Locations"
      - "Contact"
    class: "absolute left-1/2 transform -translate-x-1/2 flex gap-x-8 text-white/80 text-sm"
  right:
    label: "EN ⌄"
    class: "text-white/80 text-sm"
  position: "absolute top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center"

hero_content:
  headline:
    text: 'Sa<span class="text-yellow-400">vo</span>r the F<span class="text-yellow-400">la</span>vor'
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
    content: '<a href="https://bolt.new/" target="_blank"><img src="https://res.cloudinary.com/[my_bolt_badge].png" alt="Bolt Badge" class="w-[72px] h-[72px] rounded-full border-2 border-white/50 shadow-[0_0_8px_rgba(255,255,255,0.7)]"/></a>'
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
  - All content and spacing scales with breakpoints: text-xs → text-lg, mb-3 sm:mb-4 lg:mb-6, px-4 sm:px-6 lg:px-8
  - Button min-h-[44px] for touch targets, uses touch-manipulation class
  - Semantic HTML, aria-labels, video description for accessibility (WCAG 2.1 AA)
  - No horizontal scroll; text readable at 320px width
###


###
My landing page GPTs system prompt is a work in progress and I will be sharing it soon if anyone is interested in getting outputs like this for any brand/topic/idea in 1 shot to get a quick prototype up and running 

