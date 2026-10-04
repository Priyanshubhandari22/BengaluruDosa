import heroImage from "@/assets/avighna-hero.jpg";
import benneDosaImage from "@/assets/benne-dosa.jpg";
import mysoreMasalaImage from "@/assets/mysore-masala-dosa.jpg";
import setDosaImage from "@/assets/set-dosa.jpg";
import platterImage from "@/assets/south-indian-platter.jpg";

// PHOTO LIBRARY
// To change a photo later, replace its import above or assign a different image below.
export const restaurantImages = {
  hero: heroImage,
  benneFeature: benneDosaImage,
  menu: {
    dosa: {
      src: heroImage,
      alt: "Crisp classic masala dosa with chutneys and sambar",
      caption: "Classic Masala Dosa",
    },
    benne: {
      src: benneDosaImage,
      alt: "Buttery Bengaluru benne dosa served on a banana leaf",
      caption: "Bengaluru Benne Dosa",
    },
    specials: {
      src: mysoreMasalaImage,
      alt: "Golden Mysore masala dosa with chutneys and sambar",
      caption: "Mysore Masala Dosa",
    },
  },
  gallery: [
    {
      src: mysoreMasalaImage,
      alt: "Golden Mysore masala dosa with a crisp lace edge",
      caption: "Mysore Masala Dosa",
    },
    {
      src: benneDosaImage,
      alt: "Buttery Bengaluru benne dosa on a banana leaf",
      caption: "Bengaluru Benne Dosa",
    },
    {
      src: setDosaImage,
      alt: "Three soft Bengaluru set dosas with saagu and chutney",
      caption: "Bengaluru Set Dosa",
    },
    {
      src: heroImage,
      alt: "Crisp classic masala dosa with South Indian accompaniments",
      caption: "Classic Masala Dosa",
    },
    {
      src: platterImage,
      alt: "Complete South Indian vegetarian platter",
      caption: "South Indian Platter",
    },
  ],
} as const;