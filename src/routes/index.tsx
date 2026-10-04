import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  ChevronRight,
  Instagram,
  Leaf,
  MapPin,
  Menu as MenuIcon,
  MessageCircle,
  Phone,
  QrCode,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { restaurantImages } from "@/content/restaurant-images";
import paymentQr from "@/assets/avighna-payment-qr.jpeg.asset.json";

const whatsappUrl =
  "https://wa.me/918447634177?text=Namaste%20Avighna%20Bengaluru%20Dosa%2C%20I%20would%20like%20to%20place%20an%20order.";
const instagramUrl = "https://www.instagram.com/avighnabengalurudosa?stkn=enczNzhoYzQ0NHNl";
const directionsUrl =
  "https://www.google.com/maps/search/?api=1&query=Avighna+Bengaluru+Dosa+Sahastradhara+Road+Mussoorie+Road";

type MenuItem = {
  name: string;
  price: string;
  alternate?: string;
  description?: string;
  featured?: boolean;
};

type MenuSectionKey = "dosa" | "benne" | "specials";

const menuSections: Record<MenuSectionKey, { label: string; note: string; items: MenuItem[] }> = {
  dosa: {
    label: "Classic Dosa",
    note: "Add ghee or butter for the richer Bengaluru finish.",
    items: [
      { name: "Plain Dosa", price: "₹150", alternate: "Ghee / Butter ₹170" },
      { name: "Masala Dosa", price: "₹160", alternate: "Ghee / Butter ₹180" },
      { name: "Onion Masala Dosa", price: "₹170", alternate: "Ghee / Butter ₹190" },
      { name: "Rava Dosa (Plain)", price: "₹160", alternate: "Ghee / Butter ₹180" },
      { name: "Rava Dosa (Masala)", price: "₹180", alternate: "Ghee / Butter ₹200" },
      { name: "Rava Onion Plain", price: "₹170", alternate: "Ghee / Butter ₹190" },
      { name: "Rava Onion Masala", price: "₹190", alternate: "Ghee / Butter ₹210" },
      { name: "Cheese Dosa", price: "₹220", alternate: "Ghee / Butter ₹240" },
      { name: "Paneer Masala Dosa", price: "₹230", alternate: "Ghee / Butter ₹250" },
    ],
  },
  benne: {
    label: "Benne Specials",
    note: "Our chef's buttery, crisp Bengaluru favourites.",
    items: [
      { name: "Benne Plain Dosa", price: "₹190" },
      { name: "Benne Podi Plain Dosa", price: "₹200" },
      { name: "Benne Masala Dosa", price: "₹210", featured: true },
      { name: "Benne Podi Masala Dosa", price: "₹220" },
    ],
  },
  specials: {
    label: "Bengaluru Specials",
    note: "Regional favourites and a complete South Indian feast.",
    items: [
      { name: "Ghee Podi Dosa", price: "Masala ₹200", alternate: "Plain ₹180" },
      { name: "Mysore Masala Dosa", price: "₹170" },
      { name: "Ghee Roast Masala Dosa", price: "₹170" },
      { name: "Ghee Roast Plain Dosa", price: "₹170" },
      { name: "Miyari Dosa", price: "₹170" },
      { name: "Set Dosa", price: "₹170" },
      { name: "Mulbagal Dosa", price: "₹180" },
      {
        name: "South Indian Platter",
        price: "₹450",
        description: "Idli, 1 Vada, Mini Uttapam, 1 Mini Dosa, Rava Kesari",
        featured: true,
      },
    ],
  },
};

const navItems = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Menu", "#menu"],
  ["Specials", "#specials"],
  ["Gallery", "#gallery"],
  ["Location", "#location"],
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Avighna Bengaluru Dosa | Pure Veg South Indian Restaurant" },
      {
        name: "description",
        content:
          "Crispy Bengaluru-style dosas, benne specials and pure vegetarian South Indian favourites on Sahastradhara Road and Mussoorie Road.",
      },
      { property: "og:title", content: "Avighna Bengaluru Dosa — Pure Veg" },
      {
        property: "og:description",
        content: "Authentic Bengaluru dosa, buttery benne specials and South Indian favourites, freshly prepared.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function BrandMark() {
  return (
    <a href="#home" className="flex items-center gap-3" aria-label="Avighna Bengaluru Dosa home">
      <span className="flex size-10 items-center justify-center rounded-full border border-gold/60 bg-primary font-display text-xl font-bold text-primary-foreground">
        A
      </span>
      <span className="leading-none">
        <span className="block font-display text-xl font-bold text-primary">Avighna</span>
        <span className="mt-1 block text-[0.6rem] font-extrabold uppercase tracking-[0.18em] text-muted-foreground">
          Bengaluru Dosa · Pure Veg
        </span>
      </span>
    </a>
  );
}

function Index() {
  const [activeMenu, setActiveMenu] = useState<MenuSectionKey>("dosa");
  const [mobileOpen, setMobileOpen] = useState(false);
  const section = menuSections[activeMenu];
  const menuPhoto = restaurantImages.menu[activeMenu];

  return (
    <main className="overflow-hidden bg-background">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-md">
        <div className="page-shell flex h-18 items-center justify-between">
          <BrandMark />
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} className="text-sm font-semibold text-foreground/75 transition-colors hover:text-primary">
                {label}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-2 sm:flex">
            <Button asChild>
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle /> Order now
              </a>
            </Button>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="sm:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X /> : <MenuIcon />}
          </Button>
        </div>
        {mobileOpen && (
          <nav className="border-t border-border bg-background px-4 py-4 sm:hidden" aria-label="Mobile navigation">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMobileOpen(false)} className="block border-b border-border/60 py-3 text-sm font-bold">
                {label}
              </a>
            ))}
            <Button asChild className="mt-4 w-full">
              <a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle /> Order on WhatsApp</a>
            </Button>
          </nav>
        )}
      </header>

      <section id="home" className="relative min-h-[92svh] scroll-mt-20 pt-18">
        <img src={restaurantImages.hero} alt="Crisp masala dosa with chutneys and sambar in brass bowls" width={1600} height={1200} className="absolute inset-0 size-full object-cover object-[66%_center]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--hero-overlay-strong)_0%,var(--hero-overlay)_48%,transparent_78%)]" />
        <div className="page-shell relative z-10 flex min-h-[calc(92svh-4.5rem)] items-center py-16">
          <div className="rise-softly max-w-2xl text-hero-foreground">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-hero-overlay px-4 py-2 text-xs font-bold uppercase tracking-[0.14em]">
              <Leaf className="size-4 text-gold" /> 100% Pure Vegetarian
            </span>
            <p className="eyebrow mt-8 text-gold">Traditional taste · Freshly prepared</p>
            <h1 className="mt-4 text-5xl font-semibold leading-[0.96] sm:text-7xl lg:text-8xl">
              Authentic Bengaluru Dosa. Pure Vegetarian.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-hero-foreground/85 sm:text-lg">
              Crispy dosas, rich South Indian flavours, and traditional Bengaluru-style favourites — freshly prepared for you.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="hero" size="lg" asChild><a href="#menu">View menu <ArrowRight /></a></Button>
              <Button variant="heroOutline" size="lg" asChild><a href="#location"><MapPin /> Visit us</a></Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 z-10 border-t border-hero-foreground/20 bg-hero-overlay backdrop-blur-sm">
          <div className="page-shell flex flex-wrap items-center justify-between gap-3 py-4 text-sm text-hero-foreground">
            <span className="font-bold">Sahastradhara Road · Mussoorie Road</span>
            <a href="tel:+918447634177" className="flex items-center gap-2 font-semibold hover:text-gold"><Phone className="size-4" /> +91 84476 34177</a>
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-18 py-20 sm:py-28">
        <div className="page-shell grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow text-leaf">Our story</p>
            <h2 className="mt-3 text-4xl font-semibold text-primary sm:text-6xl">The Taste of Bengaluru</h2>
          </div>
          <div className="border-l-2 border-gold pl-6 sm:pl-10">
            <p className="text-lg leading-8 text-foreground/80">
              At Avighna, dosa is prepared the traditional way: a well-rested batter spread on a hot griddle, cooked until crisp, and served straight away. Fresh ingredients, honest South Indian flavours, and a completely vegetarian kitchen shape every plate.
            </p>
            <div className="mt-7 flex flex-wrap gap-x-8 gap-y-3 text-sm font-bold text-primary">
              <span className="flex items-center gap-2"><Leaf className="size-4 text-leaf" /> Pure vegetarian</span>
              <span className="flex items-center gap-2"><span className="size-2 rounded-full bg-gold" /> Made fresh</span>
              <span className="flex items-center gap-2"><span className="size-2 rounded-full bg-gold" /> Bengaluru style</span>
            </div>
          </div>
        </div>
      </section>

      <section id="specials" className="scroll-mt-18 bg-primary py-20 text-primary-foreground sm:py-28">
        <div className="page-shell grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <img src={restaurantImages.benneFeature} alt="Buttery Bengaluru benne dosa on a banana leaf" width={1200} height={912} loading="lazy" className="aspect-[4/3] w-full rounded-lg object-cover shadow-2xl" />
            <div className="absolute -bottom-5 right-5 rounded-md bg-gold px-5 py-4 text-maroon shadow-xl">
              <span className="block text-xs font-extrabold uppercase tracking-[0.14em]">Chef special</span>
              <span className="font-display text-2xl font-bold">From ₹190</span>
            </div>
          </div>
          <div className="lg:pl-10">
            <p className="eyebrow text-gold">The Avighna favourite</p>
            <h2 className="mt-3 text-5xl font-semibold sm:text-7xl">Bengaluru Benne Dosa</h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-primary-foreground/75 sm:text-lg">
              Crisp at the edges, soft within, and finished with generous benne. This buttery Bengaluru classic is comfort, crunch, and deep roasted flavour in every bite.
            </p>
            <Button variant="hero" size="lg" asChild className="mt-8"><a href="#menu">Explore benne specials <ChevronRight /></a></Button>
          </div>
        </div>
      </section>

      <section id="menu" className="temple-pattern scroll-mt-18 py-20 sm:py-28">
        <div className="page-shell">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow text-leaf">Fresh from the griddle</p>
            <h2 className="mt-3 text-5xl font-semibold text-primary sm:text-7xl">Our Menu</h2>
            <p className="mt-4 leading-7 text-muted-foreground">Choose a collection to explore our pure vegetarian favourites.</p>
          </div>
          <div className="mt-9 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Menu categories">
            {(Object.entries(menuSections) as [MenuSectionKey, (typeof menuSections)[MenuSectionKey]][]).map(([key, value]) => (
              <Button key={key} variant="filter" data-active={activeMenu === key} role="tab" aria-selected={activeMenu === key} onClick={() => setActiveMenu(key)}>
                {value.label}
              </Button>
            ))}
          </div>
          <div className="mx-auto mt-10 max-w-6xl rounded-lg border border-border bg-card p-5 shadow-xl sm:p-8 lg:p-10">
            <div className="flex flex-col justify-between gap-3 border-b border-border pb-6 sm:flex-row sm:items-end">
              <div>
                <p className="eyebrow text-leaf">Avighna selection</p>
                <h3 className="mt-2 text-3xl font-semibold text-primary">{section.label}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{section.note}</p>
            </div>
            <div className="mt-7 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <figure className="group relative overflow-hidden rounded-md bg-muted">
                <img
                  key={menuPhoto.src}
                  src={menuPhoto.src}
                  alt={menuPhoto.alt}
                  width={1200}
                  height={912}
                  loading="lazy"
                  className="aspect-[4/3] size-full object-cover transition-transform duration-500 group-hover:scale-[1.03] lg:aspect-[4/5]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-hero-overlay-strong px-5 py-4 font-display text-xl font-bold text-hero-foreground">
                  {menuPhoto.caption}
                </figcaption>
              </figure>
              <div className="grid gap-x-8 sm:grid-cols-2">
                {section.items.map((item) => (
                  <div key={item.name} className="flex min-h-24 items-start justify-between gap-4 border-b border-border/70 py-5">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="font-display text-xl font-bold text-foreground">{item.name}</h4>
                        {item.featured && <span className="rounded-full bg-secondary px-2 py-1 text-[0.62rem] font-extrabold uppercase text-secondary-foreground">Favourite</span>}
                      </div>
                      {item.description && <p className="mt-1 max-w-sm text-xs leading-5 text-muted-foreground">{item.description}</p>}
                      {item.alternate && <p className="mt-1 text-xs font-semibold text-leaf">{item.alternate}</p>}
                    </div>
                    <span className="shrink-0 font-bold text-primary">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <Button size="lg" asChild><a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle /> Order this menu</a></Button>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="scroll-mt-18 bg-cream-deep py-20 sm:py-28">
        <div className="page-shell">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div><p className="eyebrow text-leaf">At our table</p><h2 className="mt-3 text-5xl font-semibold text-primary sm:text-7xl">Made to be shared</h2></div>
            <a href={instagramUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-bold text-primary hover:text-leaf"><Instagram className="size-5" /> Follow @avighnabengalurudosa</a>
          </div>
          <div className="mt-10 grid auto-rows-[13rem] gap-4 sm:grid-cols-2 sm:auto-rows-[16rem] lg:grid-cols-12">
            {restaurantImages.gallery.map((photo, index) => (
              <figure
                key={photo.caption}
                className={`group relative overflow-hidden rounded-lg ${
                  index === 0
                    ? "sm:row-span-2 lg:col-span-7"
                    : index === 1 || index === 2
                      ? "lg:col-span-5"
                      : "lg:col-span-6"
                }`}
              >
                <img src={photo.src} alt={photo.alt} width={1200} height={912} loading="lazy" className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-hero-overlay-strong px-5 py-4 font-display text-xl font-bold text-hero-foreground sm:text-2xl">
                  {photo.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="location" className="scroll-mt-18 py-20 sm:py-28">
        <div className="page-shell grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="flex min-h-[28rem] flex-col justify-between rounded-lg bg-primary p-8 text-primary-foreground sm:p-12">
            <div>
              <p className="eyebrow text-gold">Come hungry</p>
              <h2 className="mt-3 text-5xl font-semibold sm:text-7xl">Visit Avighna</h2>
              <p className="mt-6 max-w-md text-lg leading-8 text-primary-foreground/75">Find us around Sahastradhara Road and Mussoorie Road for crisp dosas, warm sambar, and genuine South Indian hospitality.</p>
            </div>
            <div className="mt-10 space-y-4">
              <a href={directionsUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 font-bold hover:text-gold"><MapPin className="size-5" /> Sahastradhara Road · Mussoorie Road</a>
              <a href="tel:+918447634177" className="flex items-center gap-3 font-bold hover:text-gold"><Phone className="size-5" /> +91 84476 34177</a>
              <Button variant="hero" size="lg" asChild className="mt-3"><a href={directionsUrl} target="_blank" rel="noreferrer"><MapPin /> Get directions</a></Button>
            </div>
          </div>
          <div className="rounded-lg border border-border bg-card p-7 shadow-lg sm:p-9">
            <div className="flex items-center gap-3"><span className="flex size-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground"><QrCode /></span><div><p className="eyebrow text-leaf">Quick payment</p><h3 className="font-display text-2xl font-bold text-primary">Scan to pay</h3></div></div>
            <div className="mx-auto mt-7 max-w-[15rem] overflow-hidden rounded-md border border-border bg-background p-2">
              <img src={paymentQr.url} alt="Avighna Bengaluru Dosa payment QR code" width={185} height={385} loading="lazy" className="aspect-[0.48] w-full object-cover" />
            </div>
            <p className="mx-auto mt-5 max-w-xs text-center text-sm leading-6 text-muted-foreground">Please confirm your order on WhatsApp before paying, then share your payment confirmation.</p>
            <Button variant="outline" size="lg" asChild className="mt-6 w-full"><a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle /> Confirm on WhatsApp</a></Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-foreground py-12 text-background">
        <div className="page-shell grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div><p className="font-display text-3xl font-bold text-gold">Avighna Bengaluru Dosa</p><p className="mt-2 text-sm text-background/65">Pure Veg · Authentic South Indian</p></div>
          <div><p className="eyebrow text-gold">Find us</p><p className="mt-3 text-sm leading-6 text-background/70">Sahastradhara Road<br />Mussoorie Road</p></div>
          <div className="sm:text-right"><p className="eyebrow text-gold">Connect</p><div className="mt-3 flex gap-3 sm:justify-end"><Button size="icon" variant="secondary" asChild><a href={instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram /></a></Button><Button size="icon" variant="secondary" asChild><a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle /></a></Button><Button size="icon" variant="secondary" asChild><a href="tel:+918447634177" aria-label="Call Avighna"><Phone /></a></Button></div></div>
        </div>
        <div className="page-shell mt-10 border-t border-background/15 pt-6 text-xs text-background/50">© 2026 Avighna Bengaluru Dosa. All rights reserved.</div>
      </footer>

      <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Order on WhatsApp" className="fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-xl transition-transform hover:scale-105 sm:hidden">
        <MessageCircle className="size-6" />
      </a>
    </main>
  );
}