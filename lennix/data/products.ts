import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "rose-velvet",
    name: "Rose Velvet",
    slug: "rose-velvet",
    description:
      "A delicate floral fragrance with soft rose notes and an elegant finish.",
    price: 35,
    category: "women",
    image: "/products/rose-velvet.png",
    featured: true,
    bestseller: true,
    colors: ["#F6E8EA", "#E8B4C0"],
  },
  {
    id: "golden-oud",
    name: "Golden Oud",
    slug: "golden-oud",
    description:
      "A rich and confident fragrance blending warm woods, oud and golden amber.",
    price: 45,
    category: "men",
    image: "/products/golden-oud.png",
    featured: true,
    bestseller: true,
    colors: ["#D4AF37", "#2D2D2D"],
  },
  {
    id: "royal-lavender",
    name: "Royal Lavender",
    slug: "royal-lavender",
    description:
      "A sophisticated lavender fragrance with a soft, luxurious character.",
    price: 40,
    category: "unisex",
    image: "/products/royal-lavender.png",
    featured: true,
    newArrival: true,
    colors: ["#EDE7FA", "#A78BCE"],
  },
  {
    id: "pink-bloom",
    name: "Pink Bloom",
    slug: "pink-bloom",
    description:
      "A romantic floral blend created for effortless elegance.",
    price: 38,
    category: "women",
    image: "/products/pink-bloom.png",
    newArrival: true,
    colors: ["#F9DDE5", "#F2A9BC"],
  },
  {
    id: "midnight-oud",
    name: "Midnight Oud",
    slug: "midnight-oud",
    description:
      "Deep woods and smoky oud create a bold and unforgettable signature.",
    price: 48,
    category: "men",
    image: "/products/midnight-oud.png",
    bestseller: true,
    colors: ["#292522", "#B8860B"],
  },
  {
    id: "lilac-mist",
    name: "Lilac Mist",
    slug: "lilac-mist",
    description:
      "A graceful purple floral fragrance with a soft modern finish.",
    price: 39,
    category: "women",
    image: "/products/lilac-mist.png",
    colors: ["#E8DDF5", "#C7A9E0"],
  },
];