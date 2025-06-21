/////////////////////////////////////
///   product images

import product1 from "../images/products/brown-bear-cushion.jpg";
import product2 from "../images/products/brown-bear-notebook.jpg";
import product3 from "../images/products/today-is-a-good-day-framed-poster.jpg";
import product4 from "../images/products/brown-bear-notebook1.jpg";
import product5 from "../images/products/brown-bear-printed-sweater.jpg";
import product6 from "../images/products/hummingbird-cushion.jpg";
import product7 from "../images/products/hummingbird-printed-t-shirt.jpg";
import product8 from "../images/products/mountain-fox-cushion.jpg";
import product9 from "../images/products/mug-the-adventure-begins.jpg";
import product10 from "../images/products/the-adventure-begins-framed-poster.jpg";
import product11 from "../images/products/the-best-is-yet-to-come-framed-poster.jpg";

/////////////////////////////////////
///   products data

export const dealOfTheDayProducts = [
  {
    id: 1,
    productImage: product3,
    rating: 3,
    productName: "Pulsating Sprinklers",
    productDescryption:
      "The Pulsating Sprinkler delivers even water coverage with an adjustable spray pattern. Durable, efficient, and easy to install—perfect for lush lawns and gardens!",
    discountPrice: "40",
    originalPrice: "60",
  },
  {
    id: 2,
    productImage: product4,
    rating: 4,
    productName: "Drive Sprinkler",
    productDescryption:
      "The Drive Sprinkler offers powerful, consistent irrigation with a rotating spray for even coverage. Durable, efficient, and ideal for large lawns and gardens!",
    discountPrice: "34",
    originalPrice: "60",
  },
];

export const productData = [
  {
    id: 1,
    productImage: product1,
    rating: 4,
    productName: "wheel barrows",
    discountPrice: "43",
    originalPrice: "56",
  },
  {
    id: 2,
    productImage: product2,
    rating: 5,
    productName: "micro rain",
    discountPrice: "22",
    originalPrice: "35",
  },
  {
    id: 3,
    productImage: product3,
    rating: 3,
    productName: "pulsating sprinklers",
    discountPrice: "40",
    originalPrice: "60",
  },
  {
    id: 4,
    productImage: product4,
    rating: 3,
    productName: "drive sprinkler",
    discountPrice: "43",
    originalPrice: "60",
  },

  {
    id: 5,
    productImage: product6,
    rating: 4,
    productName: "pruninig saw",
    discountPrice: "41",
    originalPrice: "60",
  },

  {
    id: 6,
    productImage: product8,
    rating: 5,
    productName: "garden fork",
    discountPrice: "20",
    originalPrice: "33",
  },
  {
    id: 7,
    productImage: product9,
    rating: 4,
    productName: "husqvarna LC 140S",
    // productName: "husqvarna LC 140S",
    discountPrice: "25",
    originalPrice: "50",
  },
  {
    id: 8,
    productImage: product10,
    rating: 3,
    productName: "cutco garden trowel",
    discountPrice: "10",
    originalPrice: "32",
  },
  {
    id: 9,
    productImage: product11,
    rating: 5,
    productName: "camping shovel",
    discountPrice: "15",
    originalPrice: "27",
  },
];

export const productDetailsData = [
  {
    id: 1,
    productName: "wheel barrows",
    images: [
      "/images/products/saw1.jpg",
      "/images/products/saw2.jpg",
      "/images/products/saw3.jpg",
      "/images/products/saw4.jpg",
      "/images/products/saw5.jpg",
    ],
    description:
      "Heavy-duty wheel barrow for transporting soil, tools, and plants across the farm with ease.",
    specs: { material: "Steel", capacity: "80L", wheelType: "Pneumatic" },
    rating: 4,
    reviews: [
      {
        name: "Ali",
        comment: "Very durable and easy to use.",
        rating: 4,
        image: "https://randomuser.me/api/portraits/men/11.jpg",
        reviewDate: "2025-06-01",
        likesCount: 12,
      },
      {
        name: "Sara",
        comment: "Perfect for my farm!",
        rating: 5,
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        reviewDate: "2025-06-03",
        likesCount: 18,
      },
      {
        name: "Khaled",
        comment: "Handles heavy loads without issues.",
        rating: 4,
        image: "https://randomuser.me/api/portraits/men/45.jpg",
        reviewDate: "2025-06-04",
        likesCount: 20,
      },
    ],
    stock: 12,
    discountPrice: "43",
    originalPrice: "56",
    category: "Equipment",
  },
  {
    id: 2,
    productName: "micro rain",
    images: [
      "/images/products/saw1.jpg",
      "/images/products/saw2.jpg",
      "/images/products/saw3.jpg",
      "/images/products/saw4.jpg",
      "/images/products/saw5.jpg",
    ],
    description:
      "Compact and efficient micro-rain sprinkler for uniform irrigation in small farms or gardens.",
    specs: {
      range: "20m",
      waterUsage: "Low",
      compatibility: "Standard hose connectors",
    },
    rating: 5,
    reviews: [
      {
        name: "John",
        comment: "Water-saving and reliable.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/men/14.jpg",
        reviewDate: "2025-06-05",
        likesCount: 24,
      },
      {
        name: "Nora",
        comment: "Easy to install and very effective.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/women/31.jpg",
        reviewDate: "2025-06-06",
        likesCount: 21,
      },
      {
        name: "Samir",
        comment: "Best sprinkler I've used so far.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/men/36.jpg",
        reviewDate: "2025-06-07",
        likesCount: 19,
      },
    ],
    stock: 8,
    discountPrice: "22",
    originalPrice: "35",
    category: "Irrigation",
  },
  {
    id: 3,
    productName: "pulsating sprinklers",
    images: [
      "/images/products/saw1.jpg",
      "/images/products/saw2.jpg",
      "/images/products/saw3.jpg",
      "/images/products/saw4.jpg",
      "/images/products/saw5.jpg",
    ],
    description:
      "High-pressure pulsating sprinkler ideal for wide coverage and consistent water delivery.",
    specs: { range: "30m", pressure: "40 PSI", material: "Aluminum" },
    rating: 3,
    reviews: [
      {
        name: "Hassan",
        comment: "Works okay, but leaks sometimes.",
        rating: 3,
        image: "https://randomuser.me/api/portraits/men/24.jpg",
        reviewDate: "2025-06-10",
        likesCount: 7,
      },
      {
        name: "Laila",
        // comment: "Could be better with sealing.",
        comment:
          "Could be better with sealing. Could be better with sealing. Could be better with sealing. Could be better with sealing. Could be better with sealing.",
        rating: 3,
        image: "https://randomuser.me/api/portraits/women/19.jpg",
        reviewDate: "2025-06-11",
        likesCount: 9,
      },
      {
        name: "Ibrahim",
        comment: "Decent for the price.",
        rating: 4,
        image: "https://randomuser.me/api/portraits/men/30.jpg",
        reviewDate: "2025-06-12",
        likesCount: 15,
      },
    ],
    stock: 15,
    discountPrice: "40",
    originalPrice: "60",
    category: "Irrigation",
  },
  {
    id: 4,
    productName: "drive sprinkler",
    images: [
      "/images/products/saw1.jpg",
      "/images/products/saw2.jpg",
      "/images/products/saw3.jpg",
      "/images/products/saw4.jpg",
      "/images/products/saw5.jpg",
    ],
    description:
      "Drive sprinkler with rotating head for even water distribution across large areas.",
    specs: { rotation: "360°", material: "Plastic + Aluminum", range: "25m" },
    rating: 3,
    reviews: [
      {
        name: "Mohamed",
        comment: "Not bad but noisy.",
        rating: 3,
        image: "https://randomuser.me/api/portraits/men/51.jpg",
        reviewDate: "2025-06-12",
        likesCount: 5,
      },
      {
        name: "Rania",
        comment: "Works fine, but wish it was quieter.",
        rating: 3,
        image: "https://randomuser.me/api/portraits/women/22.jpg",
        reviewDate: "2025-06-13",
        likesCount: 8,
      },
      {
        name: "Ahmed",
        comment: "Good coverage but a bit loud.",
        rating: 3,
        image: "https://randomuser.me/api/portraits/men/53.jpg",
        reviewDate: "2025-06-14",
        likesCount: 11,
      },
    ],
    stock: 9,
    discountPrice: "43",
    originalPrice: "60",
    category: "Irrigation",
  },
  {
    id: 5,
    productName: "pruninig saw",
    images: [
      "/images/products/saw1.jpg",
      "/images/products/saw2.jpg",
      "/images/products/saw3.jpg",
      "/images/products/saw4.jpg",
      "/images/products/saw5.jpg",
    ],
    description:
      "Durable pruning saw with ergonomic grip for trimming trees and branches easily.",
    specs: { Length: "30cm", handle: "Rubber grip", type: "Folding saw" },
    rating: 4,
    reviews: [
      {
        name: "Rania",
        comment: "Sharp and easy to handle.",
        rating: 4,
        image: "https://randomuser.me/api/portraits/women/12.jpg",
        reviewDate: "2025-06-08",
        likesCount: 14,
      },
      {
        name: "Youssef",
        comment: "Great tool for pruning.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/men/27.jpg",
        reviewDate: "2025-06-09",
        likesCount: 22,
      },
      {
        name: "Layla",
        comment: "Comfortable and sharp.",
        rating: 4,
        image: "https://randomuser.me/api/portraits/women/33.jpg",
        reviewDate: "2025-06-10",
        likesCount: 17,
      },
    ],
    stock: 25,
    discountPrice: "41",
    originalPrice: "60",
    category: "Tools",
  },
  {
    id: 6,
    productName: "garden fork",
    images: [
      "/images/products/saw1.jpg",
      "/images/products/saw2.jpg",
      "/images/products/saw3.jpg",
      "/images/products/saw4.jpg",
      "/images/products/saw5.jpg",
    ],
    description:
      "Strong garden fork for loosening, lifting, and turning over soil.",
    specs: { material: "Carbon steel", handle: "Wood", tines: 4 },
    rating: 5,
    reviews: [
      {
        name: "Ahmed",
        comment: "Very solid tool.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/men/18.jpg",
        reviewDate: "2025-06-11",
        likesCount: 17,
      },
      {
        name: "Mona",
        comment: "My favorite gardening tool.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/women/15.jpg",
        reviewDate: "2025-06-13",
        likesCount: 22,
      },
      {
        name: "Omar",
        comment: "Helps a lot in my gardening tasks.",
        rating: 4,
        image: "https://randomuser.me/api/portraits/men/65.jpg",
        reviewDate: "2025-06-14",
        likesCount: 19,
      },
    ],
    stock: 18,
    discountPrice: "20",
    originalPrice: "33",
    category: "Tools",
  },
  {
    id: 7,
    productName: "husqvarna LC 140S",
    images: [
      "/images/products/saw1.jpg",
      "/images/products/saw2.jpg",
      "/images/products/saw3.jpg",
      "/images/products/saw4.jpg",
      "/images/products/saw5.jpg",
    ],
    description:
      "Self-propelled lawnmower suitable for medium-sized gardens with adjustable cutting height.",
    specs: { engine: "125cc", cuttingWidth: "40cm", fuelType: "Petrol" },
    rating: 4,
    reviews: [
      {
        name: "Youssef",
        comment: "Powerful and smooth operation.",
        rating: 4,
        image: "https://randomuser.me/api/portraits/men/29.jpg",
        reviewDate: "2025-06-04",
        likesCount: 19,
      },
      {
        name: "Ziad",
        comment: "Great performance for medium gardens.",
        rating: 4,
        image: "https://randomuser.me/api/portraits/men/53.jpg",
        reviewDate: "2025-06-06",
        likesCount: 23,
      },
      {
        name: "Heba",
        comment: "Efficient and reliable.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/women/24.jpg",
        reviewDate: "2025-06-07",
        likesCount: 20,
      },
    ],
    stock: 7,
    discountPrice: "25",
    originalPrice: "50",
    category: "Machinery",
  },
  {
    id: 8,
    productName: "cutco garden trowel",
    images: [
      "/images/products/saw1.jpg",
      "/images/products/saw2.jpg",
      "/images/products/saw3.jpg",
      "/images/products/saw4.jpg",
      "/images/products/saw5.jpg",
    ],
    description:
      "Hand trowel perfect for digging and transplanting in small flower beds or pots.",
    specs: { material: "Stainless steel", handle: "Plastic", length: "28cm" },
    rating: 3,
    reviews: [
      {
        name: "Layla",
        comment: "A bit small but works fine.",
        rating: 3,
        image: "https://randomuser.me/api/portraits/women/45.jpg",
        reviewDate: "2025-06-06",
        likesCount: 10,
      },
      {
        name: "Farah",
        comment: "Affordable and efficient.",
        rating: 4,
        image: "https://randomuser.me/api/portraits/women/58.jpg",
        reviewDate: "2025-06-08",
        likesCount: 14,
      },
      {
        name: "Tamer",
        comment: "Does the job well.",
        rating: 4,
        image: "https://randomuser.me/api/portraits/men/72.jpg",
        reviewDate: "2025-06-09",
        likesCount: 13,
      },
    ],
    stock: 20,
    discountPrice: "10",
    originalPrice: "32",
    category: "Tools",
  },
  {
    id: 9,
    productName: "camping shovel",
    images: [
      "/images/products/saw1.jpg",
      "/images/products/saw2.jpg",
      "/images/products/saw3.jpg",
      "/images/products/saw4.jpg",
      "/images/products/saw5.jpg",
    ],
    description:
      "Multi-purpose camping shovel suitable for outdoor use, gardening, and emergencies.",
    specs: { material: "High-carbon steel", foldable: true, weight: "1.2kg" },
    rating: 5,
    reviews: [
      {
        name: "Omar",
        comment: "Strong and compact — love it.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/men/67.jpg",
        reviewDate: "2025-06-09",
        likesCount: 27,
      },
      {
        name: "Zainab",
        comment: "Very helpful in emergencies.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/women/77.jpg",
        reviewDate: "2025-06-10",
        likesCount: 25,
      },
      {
        name: "Heba",
        comment: "Great for camping trips.",
        rating: 4,
        image: "https://randomuser.me/api/portraits/women/22.jpg",
        reviewDate: "2025-06-11",
        likesCount: 21,
      },
    ],
    stock: 14,
    discountPrice: "15",
    originalPrice: "27",
    category: "Outdoor",
  },
];
