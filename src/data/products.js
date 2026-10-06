// Hardcoded product catalog for JEMSHOP store (in-memory only)
const products = [
  {
    id: 1,
    name: "Aqua Tote Bag",
    category: "Bags",
    price: 1299,
    image: "https://images.unsplash.com/photo-1561715276-a2d087060f1d?w=800&h=800&fit=crop",
    shortDescription: "A lightweight everyday tote designed for work and weekends.",
    description:
      "The Aqua Tote Bag is crafted from durable canvas with soft mint accents. Spacious enough for a laptop, water bottle, and daily essentials, it features reinforced handles and an interior zip pocket. Perfect for school, work, shopping, and everyday use.",
    stock: 12,
  },
  {
    id: 2,
    name: "Blush Mini Shoulder Bag",
    category: "Bags",
    price: 1499,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&h=800&fit=crop",
    shortDescription: "Compact shoulder bag in a soft blush finish.",
    description:
      "Carry only what you need in this Blush Mini Shoulder Bag. The structured silhouette keeps its shape, while an adjustable strap lets you wear it on the shoulder or crossbody. Ideal for nights out, errands, and polished everyday looks.",
    stock: 8,
  },
  {
    id: 3,
    name: "Cloud Everyday Sneakers",
    category: "Footwear",
    price: 2299,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&h=800&fit=crop",
    shortDescription: "Cushioned white sneakers made for all-day comfort.",
    description:
      "Cloud Everyday Sneakers combine a clean minimal design with a soft foam sole. Breathable upper, easy slip-on feel, and versatile styling make them your go-to pair for walks, travel, and casual outfits.",
    stock: 15,
  },
  {
    id: 4,
    name: "Soft Pink Card Holder",
    category: "Accessories",
    price: 499,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&h=800&fit=crop",
    shortDescription: "Slim card holder with a soft pink finish.",
    description:
      "Keep your essentials light with the Soft Pink Card Holder. It holds cards and folded bills without bulk, fits easily in a pocket or mini bag, and adds a gentle pastel touch to your everyday carry.",
    stock: 20,
  },
  {
    id: 5,
    name: "Ocean Blue Hoodie",
    category: "Clothing",
    price: 1899,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=800&fit=crop",
    shortDescription: "Cozy fleece hoodie in a calming ocean blue.",
    description:
      "Stay comfortable in the Ocean Blue Hoodie. Soft fleece interior, relaxed fit, and a roomy hood make it perfect for cool mornings, study sessions, and casual weekends. Pair it with jeans or joggers for an easy look.",
    stock: 10,
  },
  {
    id: 6,
    name: "Pearl Minimal Necklace",
    category: "Accessories",
    price: 899,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=800&fit=crop",
    shortDescription: "Delicate pearl necklace for everyday elegance.",
    description:
      "The Pearl Minimal Necklace features a refined chain and soft pearl accent. Lightweight and easy to layer, it elevates simple tops and dresses without overpowering your outfit. A timeless piece for daily wear.",
    stock: 18,
  },
  {
    id: 7,
    name: "Breeze Crossbody Bag",
    category: "Bags",
    price: 1599,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&h=800&fit=crop",
    shortDescription: "Hands-free crossbody bag for busy days.",
    description:
      "Move freely with the Breeze Crossbody Bag. Multiple compartments keep your phone, keys, and wallet organized. The adjustable strap and water-resistant exterior make it a reliable companion for commute and travel.",
    stock: 9,
  },
  {
    id: 8,
    name: "Cotton Essential Shirt",
    category: "Clothing",
    price: 999,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&h=800&fit=crop",
    shortDescription: "Breathable cotton shirt for everyday layering.",
    description:
      "The Cotton Essential Shirt is cut from soft, breathable fabric with a relaxed silhouette. Wear it alone or layered under jackets and cardigans. Easy care and versatile styling for school, work, and weekends.",
    stock: 14,
  },
  {
    id: 9,
    name: "Pastel Travel Pouch",
    category: "Lifestyle",
    price: 699,
    image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&h=800&fit=crop",
    shortDescription: "Organized pouch for toiletries and small essentials.",
    description:
      "Pack smarter with the Pastel Travel Pouch. Waterproof lining, smooth zipper, and a soft pastel exterior keep toiletries and gadgets tidy at home or on the go. Fits neatly inside larger bags and carry-ons.",
    stock: 22,
  },
  {
    id: 10,
    name: "Everyday Canvas Shoes",
    category: "Footwear",
    price: 1799,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=800&fit=crop",
    shortDescription: "Classic canvas shoes with a clean silhouette.",
    description:
      "Everyday Canvas Shoes offer a timeless low-top design with a flexible sole. Lightweight and easy to style with jeans, shorts, or skirts, they are built for comfortable daily wear around the city.",
    stock: 11,
  },
  {
    id: 11,
    name: "Minimalist Watch",
    category: "Accessories",
    price: 2499,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=800&fit=crop",
    shortDescription: "Clean-faced watch with a slim modern band.",
    description:
      "The Minimalist Watch keeps time with quiet elegance. A simple dial, slim case, and comfortable strap make it suitable for both casual and smart-casual looks. A refined accessory for daily wear.",
    stock: 7,
  },
  {
    id: 12,
    name: "Soft Knit Cardigan",
    category: "Clothing",
    price: 1699,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&h=800&fit=crop",
    shortDescription: "Lightweight knit cardigan for layering comfort.",
    description:
      "Wrap up in the Soft Knit Cardigan. Fine knit texture, open front, and a gentle drape make it ideal for air-conditioned spaces and breezy evenings. Layer over tees and dresses for effortless style.",
    stock: 13,
  },
];

export const categories = [
  "All",
  "Bags",
  "Clothing",
  "Accessories",
  "Footwear",
  "Lifestyle",
];

export default products;
