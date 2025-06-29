/////////////////////////////////////
///   blog posters

import poster1 from "../images/blogitem/consectetur-adipiscing.jpg";
import poster2 from "../images/blogitem/lorem-ipsum-dolo.jpg";
import poster3 from "../images/blogitem/lorem-ipsum-dolor-sit-amet.jpg";
import poster4 from "../images/blogitem/lorem-ipsum-dolor.jpg";

/////////////////////////////////////
///   blog preview poster

import previewPoster1 from "../images/blog/consectetur-adipiscing.jpg";
import previewPoster2 from "../images/blog/lorem-ipsum-dolo.jpg";
import previewPoster3 from "../images/blog/lorem-ipsum-dolor.jpg";

/////////////////////////////////////
///   Blog Page  data

export const blogItemData = [
  {
    id: 1,
    blogImage: poster1,
    blogAuthor: "Sarah Greenfield",
    blogComments: 48,
    blogReviews: 1342,
    blogHeading: "5 Innovative Technologies Transforming Farming in 2025",
    blogDesc:
      "Explore how AI, IoT sensors, and precision agriculture tools are reshaping modern farming practices for better yields and efficiency.",
  },
  {
    id: 2,
    blogImage: poster2,
    blogAuthor: "Ahmed Farouk",
    blogComments: 76,
    blogReviews: 1890,
    blogHeading: "The Rise of Organic Farming in Egypt",
    blogDesc:
      "Organic farming is gaining ground across Egypt's Nile Delta and Upper Egypt regions. Learn what’s driving the shift and what it means for the future.",
  },
  {
    id: 3,
    blogImage: poster3,
    blogAuthor: "Emily Waters",
    blogComments: 31,
    blogReviews: 1044,
    blogHeading: "Sustainable Irrigation Techniques Every Farmer Should Know",
    blogDesc:
      "Water conservation is crucial. Discover drip irrigation, soil moisture monitoring, and rainwater harvesting tips for sustainable agriculture.",
  },
  {
    id: 4,
    blogImage: poster4,
    blogAuthor: "Dr. Tarek Hossam",
    blogComments: 90,
    blogReviews: 2301,
    blogHeading: "How Crop Rotation Improves Soil Health",
    blogDesc:
      "Crop rotation isn't just traditional—it's scientifically proven to restore nutrients and reduce pests. Learn rotation patterns and crop pairings.",
  },
];

export const asideData = [
  {
    sectionTitle: "Popular Articles",
    sectionItems: [
      {
        id: 1,
        itemImage: poster1,
        itemTitle: "Farming Technologies 2025",
        itemDate: "Feb 14, 2025",
      },
      {
        id: 2,
        itemImage: poster4,
        itemTitle: "Crop Rotation Benefits",
        itemDate: "Mar 03, 2025",
      },
    ],
  },
  {
    sectionTitle: "Recent Articles",
    sectionItems: [
      {
        id: 1,
        itemImage: poster2,
        itemTitle: "Organic Growth in Egypt",
        itemDate: "Jun 21, 2025",
      },
      {
        id: 2,
        itemImage: poster3,
        itemTitle: "Smart Irrigation Practices",
        itemDate: "Jun 10, 2025",
      },
    ],
  },
];

/////////////////////////////////////
///   Blog Preview

export const blogPreviewData = [
  {
    id: 5,
    image: previewPoster1,
    title: "Farming Technologies 2025",
    descryption:
      "AI drones, soil analytics, and real-time crop monitoring are changing the way we farm. Here’s what’s coming next...",
    date: "14 February 2025",
  },
  {
    id: 6,
    image: previewPoster2,
    title: "Organic Growth in Egypt",
    descryption:
      "Local farms are switching to pesticide-free, eco-friendly methods. Find out why organic is booming...",
    date: "21 June 2025",
  },
  {
    id: 7,
    image: previewPoster3,
    title: "Smart Irrigation Practices",
    descryption:
      "Modern irrigation systems can save up to 60% water. Discover the techniques adopted by farmers worldwide...",
    date: "10 June 2025",
  },
];

/////////////////////////////////////
///   Blog Details Page DAta

export const blogDetailsData = [
  {
    id: 1,
    blogImage: poster1,
    blogAuthor: "Sarah Greenfield",
    blogDate: "01/10/2025 09:45:12",
    blogComments: 48,
    blogHeading: "5 Innovative Technologies Transforming Farming in 2025",
    blogDesc:
      "Explore how AI, IoT sensors, and precision agriculture tools are reshaping modern farming practices.",
    blogContent:
      "In 2025, farming is being revolutionized by AI-powered sensors, GPS-guided tractors, and real-time soil analysis tools. These technologies help reduce waste, improve yields, and lower labor costs. Farmers now rely on data dashboards to make fast and smart decisions, making agriculture more resilient and efficient.",
    comments: [
      {
        id: 1,
        author: "Ali",
        text: "This is the future of agriculture. Impressive stuff!",
        date: "01/11/2025 10:12:45",
        replies: [
          {
            id: 11,
            author: "Sarah",
            text: "Absolutely! We're already testing drones on our field.",
            date: "01/11/2025 12:30:00",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    blogImage: poster2,
    blogAuthor: "Ahmed Farouk",
    blogDate: "03/22/2025 14:30:05",
    blogComments: 76,
    blogHeading: "The Rise of Organic Farming in Egypt",
    blogDesc:
      "Organic farming is rapidly expanding in the Nile Delta and Upper Egypt.",
    blogContent:
      "With growing awareness about health and sustainability, Egyptian farmers are shifting towards organic methods. These include composting, natural pest control, and biodiversity-friendly crop rotations. Markets are also responding with increased demand and better prices for organic produce.",
    comments: [
      {
        id: 2,
        author: "Mona",
        text: "Happy to see local organic products becoming available!",
        date: "03/23/2025 09:00:00",
        replies: [],
      },
      {
        id: 3,
        author: "Farid",
        text: "Any tips on getting organic certification in Egypt?",
        date: "03/23/2025 10:05:12",
        replies: [
          {
            id: 12,
            author: "Ahmed",
            text: "You can contact the Egyptian Organic Agriculture Association (EOAA).",
            date: "03/23/2025 11:47:30",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    blogImage: poster3,
    blogAuthor: "Emily Waters",
    blogDate: "04/08/2025 16:12:33",
    blogComments: 31,
    blogHeading: "Sustainable Irrigation Techniques Every Farmer Should Know",
    blogDesc:
      "Drip irrigation and smart water sensors are transforming farm water use.",
    blogContent:
      "Irrigation systems in 2025 are smarter than ever. With IoT sensors, farmers can monitor soil moisture in real-time and adjust irrigation accordingly. Drip systems deliver water directly to plant roots, reducing waste by up to 70%. Harvest water collection is also becoming standard in dry regions.",
    comments: [
      {
        id: 4,
        author: "Youssef",
        text: "I implemented drip irrigation last year — massive water savings!",
        date: "04/09/2025 08:30:00",
        replies: [],
      },
    ],
  },
  {
    id: 4,
    blogImage: poster4,
    blogAuthor: "Dr. Tarek Hossam",
    blogDate: "06/15/2025 11:03:50",
    blogComments: 90,
    blogHeading: "How Crop Rotation Improves Soil Health",
    blogDesc:
      "Learn how rotating crops helps restore nutrients and control pests.",
    blogContent:
      "Crop rotation is a time-tested technique that enhances soil fertility. For example, planting legumes after cereals adds nitrogen to the soil. It also disrupts pest life cycles and reduces disease buildup. Strategic rotation helps increase long-term yields and lowers dependency on chemical fertilizers.",
    comments: [
      {
        id: 5,
        author: "Salma",
        text: "Rotation helped reduce root rot issues on my land.",
        date: "06/16/2025 10:00:00",
        replies: [
          {
            id: 13,
            author: "Dr. Tarek",
            text: "That’s the power of natural recovery cycles.",
            date: "06/16/2025 12:45:00",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    blogImage: previewPoster1,
    blogAuthor: "Layla Morgan",
    blogDate: "02/14/2025 08:20:00",
    blogComments: 62,
    blogHeading: "Farming Technologies 2025",
    blogDesc:
      "AI drones, soil analytics, and real-time crop monitoring are changing the way we farm.",
    blogContent:
      "Farming in 2025 is more data-driven than ever. AI-powered drones survey crop health with multispectral cameras, while soil sensors transmit moisture and nutrient data in real time. Predictive analytics help farmers plan harvests and minimize losses. This digital transformation is enabling smarter, more sustainable agriculture.",
    comments: [
      {
        id: 6,
        author: "Hassan",
        text: "I’m testing soil sensors in my greenhouse. Super efficient.",
        date: "02/15/2025 10:11:00",
        replies: [],
      },
      {
        id: 7,
        author: "Mariam",
        text: "We need these in Upper Egypt!",
        date: "02/15/2025 13:32:11",
        replies: [
          {
            id: 71,
            author: "Layla",
            text: "Absolutely. They work well even with basic irrigation systems.",
            date: "02/15/2025 14:45:00",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    blogImage: previewPoster2,
    blogAuthor: "Omar El Saeed",
    blogDate: "06/21/2025 09:10:33",
    blogComments: 39,
    blogHeading: "Organic Growth in Egypt",
    blogDesc:
      "Local farms are switching to pesticide-free, eco-friendly methods.",
    blogContent:
      "The demand for organic produce is growing rapidly in Egypt, driven by health-conscious consumers and export opportunities. Farmers are embracing composting, intercropping, and natural pest deterrents to cultivate chemical-free crops. Organic cooperatives and government support are making the transition easier for small-scale farms.",
    comments: [
      {
        id: 8,
        author: "Nour",
        text: "Is there a specific certification body in Egypt for organic farms?",
        date: "06/22/2025 11:40:00",
        replies: [
          {
            id: 81,
            author: "Omar",
            text: "Yes! Look up COAE Egypt — they handle organic certifications.",
            date: "06/22/2025 12:30:15",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    blogImage: previewPoster3,
    blogAuthor: "Lina El Araby",
    blogDate: "06/10/2025 15:44:28",
    blogComments: 26,
    blogHeading: "Smart Irrigation Practices",
    blogDesc:
      "Modern irrigation systems can save up to 60% water. Discover the techniques adopted by farmers worldwide.",
    blogContent:
      "Irrigation is no longer guesswork. With the adoption of smart controllers, weather-based adjustments, and zoned watering, farmers are optimizing every drop. In arid regions, buried drip irrigation is gaining popularity, preventing evaporation and improving soil absorption.",
    comments: [
      {
        id: 9,
        author: "Ali K.",
        text: "Drip irrigation transformed my olive orchard yields.",
        date: "06/11/2025 09:00:00",
        replies: [],
      },
      {
        id: 10,
        author: "Rasha",
        text: "Any solar-powered options?",
        date: "06/11/2025 10:20:00",
        replies: [
          {
            id: 101,
            author: "Lina",
            text: "Yes, solar pumps paired with timers are quite effective.",
            date: "06/11/2025 11:15:00",
          },
        ],
      },
    ],
  },
];
