export const auctions = [
  {
    id: 1,
    title: "Compact Utility Tractor 45HP",
    currentBid: "68,000 EGP",
    startTime: "2025-07-05T08:00:00.000Z",
    endTime: "2025-07-10T18:00:00.000Z",
    image: `${import.meta.env.BASE_URL}products/agriTech/CompactUtilityTractor45HP.jpg`,
  },
  {
    id: 2,
    title: "Diesel Irrigation Pump",
    currentBid: "9,800 EGP",
    startTime: "2025-07-05T09:30:00.000Z",
    endTime: "2025-07-09T17:00:00.000Z",
    image: `${import.meta.env.BASE_URL}products/agriTech/DieselIrrigationPump.webp`,
  },
  {
    id: 3,
    title: "Mini Harvester",
    currentBid: "42,500 EGP",
    startTime: "2025-07-04T10:00:00.000Z",
    endTime: "2025-07-11T20:00:00.000Z",
    image: `${import.meta.env.BASE_URL}products/agriTech/MiniHarvester.png`,
  },
  {
    id: 4,
    title: "Electric Orchard Sprayer",
    currentBid: "3,600 EGP",
    startTime: "2025-07-05T09:00:00.000Z",
    endTime: "2025-07-12T15:30:00.000Z",
    image: `${import.meta.env.BASE_URL}products/agriTech/ElectricOrchardSprayer.webp`,
  },
  {
    id: 5,
    title: "Organic Red Apples (10kg)",
    currentBid: "230 EGP",
    startTime: "2025-07-05T11:00:00.000Z",
    endTime: "2025-07-09T17:00:00.000Z",
    image: `${import.meta.env.BASE_URL}products/agriProducts/CropsAndFreshProduces/redApple.jpg`,
  },
  {
    id: 6,
    title: "Premium Potatoes (25kg sack)",
    currentBid: "180 EGP",
    startTime: "2025-07-05T08:30:00.000Z",
    endTime: "2025-07-08T15:00:00.000Z",
    image: `${import.meta.env.BASE_URL}products/agriProducts/CropsAndFreshProduces/potato1.jpg`,
  },
  {
    id: 7,
    title: "Fresh Carrots (10kg)",
    currentBid: "120 EGP",
    startTime: "2025-07-05T10:00:00.000Z",
    endTime: "2025-07-07T18:00:00.000Z",
    image: `${import.meta.env.BASE_URL}products/agriProducts/CropsAndFreshProduces/carrot1.jpg`,
  },
  {
    id: 8,
    title: "Sweet Yellow Corn (100 ears)",
    currentBid: "340 EGP",
    startTime: "2025-07-05T09:00:00.000Z",
    endTime: "2025-07-10T20:00:00.000Z",
    image: `${import.meta.env.BASE_URL}products/agriProducts/CropsAndFreshProduces/corn.jpg`,
  },
  {
    id: 9,
    title: "Strawberry (15kg box)",
    currentBid: "290 EGP",
    startTime: "2025-07-05T10:00:00.000Z",
    endTime: "2025-07-08T16:30:00.000Z",
    image: `${import.meta.env.BASE_URL}products/agriProducts/CropsAndFreshProduces/strawberry.jpg`,
  },
  {
    id: 10,
    title: "Bananas (8kg)",
    currentBid: "360 EGP",
    startTime: "2025-07-04T12:00:00.000Z",
    endTime: "2025-07-09T22:00:00.000Z",
    image: `${import.meta.env.BASE_URL}products/agriProducts/CropsAndFreshProduces/bananas.jpg`,
  },
];

export const myAuctions = [
  {
    id: 1,
    title: "Compact Utility Tractor 45HP",
    images: [
      `${import.meta.env.BASE_URL}products/agriTech/CompactUtilityTractor45HP.jpg`,
      `${import.meta.env.BASE_URL}products/agriTech/CompactUtilityTractor45HP.jpg`,
      `${import.meta.env.BASE_URL}products/agriTech/CompactUtilityTractor45HP.jpg`,
    ],
    status: "Live",
    highestBid: "68,000 EGP",
    bids: 21,
    startTime: "2025-07-03T08:00:00.000Z", // started 2 days ago
    endTime: "2025-07-08T18:00:00.000Z", // ends in 3 days
  },
  {
    id: 2,
    title: "Organic Red Apples (10kg)",
    images: [
      `${import.meta.env.BASE_URL}products/agriProducts/CropsAndFreshProduces/redApple.jpg`,
      `${import.meta.env.BASE_URL}products/agriProducts/CropsAndFreshProduces/redApple.jpg`,
      `${import.meta.env.BASE_URL}products/agriProducts/CropsAndFreshProduces/redApple.jpg`,
    ],
    status: "Ended",
    highestBid: "230 EGP",
    bids: 8,
    startTime: "2025-06-20T10:00:00.000Z", // older auction
    endTime: "2025-06-25T17:00:00.000Z", // already ended
  },
  {
    id: 3,
    title: "Organic Red Apples (10kg)",
    images: [
      `${import.meta.env.BASE_URL}products/agriProducts/CropsAndFreshProduces/redApple.jpg`,
      `${import.meta.env.BASE_URL}products/agriProducts/CropsAndFreshProduces/redApple.jpg`,
      `${import.meta.env.BASE_URL}products/agriProducts/CropsAndFreshProduces/redApple.jpg`,
    ],
    status: "Ended",
    highestBid: "230 EGP",
    bids: 8,
    startTime: "2025-06-20T10:00:00.000Z", // older auction
    endTime: "2025-06-25T17:00:00.000Z", // already ended
  },
  {
    id: 4,
    title: "Organic Red Apples (10kg)",
    images: [
      `${import.meta.env.BASE_URL}products/agriProducts/CropsAndFreshProduces/redApple.jpg`,
      `${import.meta.env.BASE_URL}products/agriProducts/CropsAndFreshProduces/redApple.jpg`,
      `${import.meta.env.BASE_URL}products/agriProducts/CropsAndFreshProduces/redApple.jpg`,
      `${import.meta.env.BASE_URL}products/agriProducts/CropsAndFreshProduces/redApple.jpg`,
      `${import.meta.env.BASE_URL}products/agriProducts/CropsAndFreshProduces/redApple.jpg`,
    ],
    status: "Ended",
    highestBid: "230 EGP",
    bids: 8,
    startTime: "2025-06-20T10:00:00.000Z", // older auction
    endTime: "2025-06-25T17:00:00.000Z", // already ended
  },
];

// export const myAuctions = [
//   {
//     id: 1,
//     title: "Compact Utility Tractor 45HP",
//     images: [
//       "/products/agriTech/CompactUtilityTractor45HP.jpg",
//       "/products/agriTech/CompactUtilityTractor45HP.jpg",
//       "/products/agriTech/CompactUtilityTractor45HP.jpg",
//     ],
//     status: "Live",
//     highestBid: "68,000 EGP",
//     bids: 21,
//     startTime: "2025-07-03T08:00:00.000Z", // started 2 days ago
//     endTime: "2025-07-08T18:00:00.000Z", // ends in 3 days
//   },
//   {
//     id: 2,
//     title: "Organic Red Apples (10kg)",
//     images: [
//       "/products/agriProducts/CropsAndFreshProduces/redApple.jpg",
//       "/products/agriProducts/CropsAndFreshProduces/redApple.jpg",
//       "/products/agriProducts/CropsAndFreshProduces/redApple.jpg",
//       "/products/agriProducts/CropsAndFreshProduces/redApple.jpg",
//       "/products/agriProducts/CropsAndFreshProduces/redApple.jpg",
//     ],
//     status: "Ended",
//     highestBid: "230 EGP",
//     bids: 8,
//     startTime: "2025-06-20T10:00:00.000Z", // older auction
//     endTime: "2025-06-25T17:00:00.000Z", // already ended
//   },
// ];

export const userBids = [
  {
    id: 1,
    title: "Compact Utility Tractor 45HP",
    currentBid: "68,000 EGP",
    startTime: "2025-07-03T10:00:00.000Z", // started 2 days ago
    endTime: "2025-07-09T18:00:00.000Z", // ✅ live
    image: `${import.meta.env.BASE_URL}products/agriTech/CompactUtilityTractor45HP.jpg`,
    userBid: "3,000 EGP",
  },
  {
    id: 2,
    title: "Diesel Irrigation Pump",
    currentBid: "9,800 EGP",
    startTime: "2025-06-25T09:00:00.000Z", // started long ago
    endTime: "2025-07-02T13:48:00.000Z", // ✅ ended
    image: `${import.meta.env.BASE_URL}products/agriTech/DieselIrrigationPump.webp`,
    userBid: "750 EGP", // outbid
  },
  {
    id: 3,
    title: "Mini Harvester",
    currentBid: "42,500 EGP",
    startTime: "2025-07-01T08:00:00.000Z", // started 4 days ago
    endTime: "2025-07-08T17:48:00.000Z", // ✅ live
    image: `${import.meta.env.BASE_URL}products/agriTech/MiniHarvester.png`,
    userBid: "2,800 EGP", // tied
  },
  {
    id: 7,
    title: "Fresh Carrots (10kg)",
    currentBid: "120 EGP",
    startTime: "2025-06-24T14:00:00.000Z", // old auction
    endTime: "2025-07-01T05:48:00.000Z", // ✅ ended
    image: `${import.meta.env.BASE_URL}products/agriProducts/CropsAndFreshProduces/carrot1.jpg`,
    userBid: "1,200 EGP",
  },
  {
    id: 8,
    title: "Sweet Yellow Corn (100 ears)",
    currentBid: "340 EGP",
    startTime: "2025-07-04T12:00:00.000Z", // started yesterday
    endTime: "2025-07-09T23:48:00.000Z", // ✅ live
    image: `${import.meta.env.BASE_URL}products/agriProducts/CropsAndFreshProduces/corn.jpg`,
    userBid: "3,500 EGP",
  },
];
