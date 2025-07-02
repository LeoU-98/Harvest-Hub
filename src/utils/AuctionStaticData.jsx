export const auctions = [
  {
    id: 1,
    title: "Compact Utility Tractor 45HP",
    currentBid: "68,000 EGP",
    startTime: "2025-06-29T08:00:00.000Z",
    endTime: "2025-07-05T18:00:00.000Z",
    image: "/products/agriTech/CompactUtilityTractor45HP.jpg",
  },
  {
    id: 2,
    title: "Diesel Irrigation Pump",
    currentBid: "9,800 EGP",
    startTime: "2025-06-30T09:30:00.000Z",
    endTime: "2025-07-04T17:00:00.000Z",
    image: "/products/agriTech/DieselIrrigationPump.webp",
  },
  {
    id: 3,
    title: "Mini Harvester",
    currentBid: "42,500 EGP",
    startTime: "2025-06-28T10:00:00.000Z",
    endTime: "2025-07-06T20:00:00.000Z",
    image: "/products/agriTech/MiniHarvester.png",
  },
  {
    id: 4,
    title: "Electric Orchard Sprayer",
    currentBid: "3,600 EGP",
    startTime: "2025-07-01T09:00:00.000Z",
    endTime: "2025-07-07T15:30:00.000Z",
    image: "/products/agriTech/ElectricOrchardSprayer.webp",
  },
  {
    id: 5,
    title: "Organic Red Apples (10kg)",
    currentBid: "230 EGP",
    startTime: "2025-07-01T11:00:00.000Z",
    endTime: "2025-07-05T17:00:00.000Z",
    image: "/products/agriProducts/CropsAndFreshProduces/redApple.jpg",
  },
  {
    id: 6,
    title: "Premium Potatoes (25kg sack)",
    currentBid: "180 EGP",
    startTime: "2025-06-30T08:30:00.000Z",
    endTime: "2025-07-04T15:00:00.000Z",
    image: "/products/agriProducts/CropsAndFreshProduces/potato1.jpg",
  },
  {
    id: 7,
    title: "Fresh Carrots (10kg)",
    currentBid: "120 EGP",
    startTime: "2025-06-29T10:00:00.000Z",
    endTime: "2025-07-03T18:00:00.000Z",
    image: "/products/agriProducts/CropsAndFreshProduces/carrot1.jpg",
  },
  {
    id: 8,
    title: "Sweet Yellow Corn (100 ears)",
    currentBid: "340 EGP",
    startTime: "2025-07-01T09:00:00.000Z",
    endTime: "2025-07-06T20:00:00.000Z",
    image: "/products/agriProducts/CropsAndFreshProduces/corn.jpg",
  },
  {
    id: 9,
    title: "Strawberry (15kg box)",
    currentBid: "290 EGP",
    startTime: "2025-07-01T10:00:00.000Z",
    endTime: "2025-07-05T16:30:00.000Z",
    image: "/products/agriProducts/CropsAndFreshProduces/strawberry.jpg",
  },
  {
    id: 10,
    title: "Bananas (8kg)",
    currentBid: "360 EGP",
    startTime: "2025-06-28T12:00:00.000Z",
    endTime: "2025-07-04T22:00:00.000Z",
    image: "/products/agriProducts/CropsAndFreshProduces/bananas.jpg",
  },
];

export const myAuctions = [
  {
    id: 1,
    title: "Compact Utility Tractor 45HP",

    images: [
      "/products/agriTech/CompactUtilityTractor45HP.jpg",
      "/products/agriTech/CompactUtilityTractor45HP.jpg",
      "/products/agriTech/CompactUtilityTractor45HP.jpg",
    ],
    status: "Live",
    highestBid: "68,000 EGP",
    bids: 21,
    startTime: "2025-07-1",
    endTime: "2025-07-5",
  },
  {
    id: 2,
    title: "Organic Red Apples (10kg)",

    images: [
      "/products/agriProducts/CropsAndFreshProduces/redApple.jpg",
      "/products/agriProducts/CropsAndFreshProduces/redApple.jpg",
      "/products/agriProducts/CropsAndFreshProduces/redApple.jpg",
      "/products/agriProducts/CropsAndFreshProduces/redApple.jpg",
      "/products/agriProducts/CropsAndFreshProduces/redApple.jpg",
    ],
    status: "Ended",
    highestBid: "230 EGP",
    bids: 8,
    startTime: "2025-05-10",
    endTime: "2025-05-15",
  },
];

export const userBids = [
  {
    id: 1,
    title: "Compact Utility Tractor 45HP",
    currentBid: "68,000 EGP",
    startTime: "2025-06-25T10:00:00.000Z", // already started
    endTime: "2025-07-04T18:00:00.000Z", // ends in 3 days (✅ live)
    image: "/products/agriTech/CompactUtilityTractor45HP.jpg",
    userBid: "3,000 EGP",
  },
  {
    id: 2,
    title: "Diesel Irrigation Pump",
    currentBid: "9,800 EGP",
    startTime: "2025-06-20T09:00:00.000Z", // started long ago
    endTime: "2025-06-29T13:48:00.000Z", // ✅ ended
    image: "/products/agriTech/DieselIrrigationPump.webp",
    userBid: "750 EGP", // outbid
  },
  {
    id: 3,
    title: "Mini Harvester",
    currentBid: "42,500 EGP",
    startTime: "2025-06-28T08:00:00.000Z", // recently started
    endTime: "2025-07-07T17:48:00.000Z", // ✅ live
    image: "/products/agriTech/MiniHarvester.png",
    userBid: "2,800 EGP", // tied
  },
  {
    id: 4,
    title: "Fresh Carrots (10kg)",
    currentBid: "120 EGP",
    startTime: "2025-06-15T14:00:00.000Z", // older auction
    endTime: "2025-06-30T05:48:00.000Z", // ✅ ended
    image: "/products/agriProducts/CropsAndFreshProduces/carrot1.jpg",
    userBid: "1,200 EGP",
  },
  {
    id: 5,
    title: "Sweet Yellow Corn (100 ears)",
    currentBid: "340 EGP",
    startTime: "2025-06-30T12:00:00.000Z", // started yesterday
    endTime: "2025-07-05T23:48:00.000Z", // ✅ live
    image: "/products/agriProducts/CropsAndFreshProduces/corn.jpg",
    userBid: "3,500 EGP",
  },
];
