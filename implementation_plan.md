# Premium SaaS Navigation Upgrade

Transform the existing header and hero into a premium SaaS compliance platform UI inspired by IndiaFilings, with a full mega menu, animated hero, and CTA section.

## Proposed Changes

---

### Layout

#### [MODIFY] [layout.tsx](file:///d:/Tapswi/ac/legal-services/app/layout.tsx)
- Adjust `pt-[188px]` → `pt-[176px]` (recalculated after header height changes)

---

### Header / Navigation

#### [MODIFY] [ContactBar.tsx](file:///d:/Tapswi/ac/legal-services/components/layout/ContactBar.tsx)
- Add **Register** link alongside Login on the right side
- Ensure dark navy background is solid (`bg-[#0f172a]`)

#### [MODIFY] [Header.tsx](file:///d:/Tapswi/ac/legal-services/components/layout/Header.tsx)
- Replace the 3-item mega menu with a **full 11-category mega menu**:
  `Startup | Trademark & IP | Licenses | GST | Income Tax | MCA/ROC | HR & Payroll | ISO & Certs | Consulting | Finance | Global Setup`
- Each category opens a **4-column dropdown** with 8–17 services and icons
- Add **search bar** (`Search services...`) in the navbar
- Add **Popular Services** highlighted box inside the mega menu
- Keep sticky behavior, `top-[76px]` (ContactBar 36px + AnnouncementBar 40px)
- Reduce height back to `h-20` (the `h-28` from previous step was too tall — this upgrade re-structures padding properly)

---

### Hero Section

#### [MODIFY] [page.tsx](file:///d:/Tapswi/ac/legal-services/app/page.tsx)
- **Hero**: Dark navy gradient (`from-[#0f172a] via-[#1e293b] to-[#0f172a]`), two-column layout
  - Left: headline _"India's Smart Business Compliance Platform"_, subheading, two CTA buttons
  - Right: Animated dashboard/stats card UI (built with Tailwind, no image dependency)
- **CTA Bar**: Full-width orange-to-amber gradient section with _"Ready to start your business?"_ + two buttons
- Keep existing Popular Services and Why Choose Us sections

---

### AnnouncementBar (already upgraded — no change needed)

---

## Verification Plan

### Manual Verification
1. Open [http://localhost:3000](http://localhost:3000) in browser
2. ✅ Verify layer order top-to-bottom: ContactBar (navy) → AnnouncementBar (orange marquee) → Header (white with mega menu)
3. ✅ Hover over each of the 11 menu items — mega menu dropdown should appear with 4 columns of services
4. ✅ Hero section shows dark navy background with left headline + right dashboard card
5. ✅ CTA bar appears below popular services with two action buttons
6. ✅ Search bar in navbar is visible and styled correctly
7. ✅ No content hidden behind fixed header (proper `padding-top` on `main`)
8. ✅ Mobile hamburger menu opens on small screens
