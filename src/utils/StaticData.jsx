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
///   users profile pic

import profile1 from "../images/testimonial/sample-1.jpg";
import profile2 from "../images/testimonial/sample-2.jpg";
import profile3 from "../images/testimonial/sample-3.jpg";

/////////////////////////////////////
///  intro banners

import banner1 from "../images/banner-11.png";
import banner2 from "../images/banner-22.webp";
import banner3 from "../images/banner-33.webp";
import banner4 from "../images/banner-44.jpg";
import banner5 from "../images/banner-55.png";
import banner6 from "../images/banner-66.jpg";
import banner7 from "../images/banner-77.jpg";

/////////////////////////////////////
///  category carousel thumbs

import thumb1 from "../images/category_carousel/thumb-1.png";
import thumb2 from "../images/category_carousel/thumb-2.png";
import thumb3 from "../images/category_carousel/thumb-3.png";
import thumb4 from "../images/category_carousel/thumb-4.png";
import thumb5 from "../images/category_carousel/thumb-5.png";
import thumb6 from "../images/category_carousel/thumb-6.png";

/////////////////////////////////////
///  there promo images

import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { BsShop } from "react-icons/bs";
import { PiGiftBold } from "react-icons/pi";
import { MdOutlineQueryStats } from "react-icons/md";
import { TfiHeadphoneAlt } from "react-icons/tfi";

/////////////////////////////////////
///   category carousel data
export const CategoryCarouselArray = [
  {
    id: 1,
    image: thumb1,
    text: "Plants",
  },
  {
    id: 2,
    image: thumb2,
    text: "Shovel & Rake",
  },
  {
    id: 3,
    image: thumb3,
    text: "Fertilizer",
  },
  {
    id: 4,
    image: thumb4,
    text: "Seed Bag",
  },
  {
    id: 5,
    image: thumb5,
    text: "Watering Can",
  },
  {
    id: 6,
    image: thumb6,
    text: "Accessories",
  },
];
/////////////////////////////////////
///   intro data

export const introData = [
  {
    id: 1,
    promoTitle: "Best Quality Gardenning Tools",
    textPosition: "center",
    overlay: false,
    promoDesc: "Discount Up To 40% Off",
    promoBanner: banner1,
    promoLink: "link1",
  },
  {
    id: 2,
    promoTitle: "Latest Garden Flowring Plants",
    textPosition: "left",
    overlay: false,
    promoDesc: "Shipping & Cash on Delivery Avaliable",
    promoBanner: banner2,
    promoLink: "link2",
  },
  {
    id: 3,
    promoTitle: "Latest Garden Flowring Plants",
    textPosition: "left",
    overlay: false,
    promoDesc: "Shipping & Cash on Delivery Avaliable",
    promoBanner: banner3,
    promoLink: "link2",
  },
  {
    id: 4,
    promoTitle: "Latest Garden Flowring Plants",
    textPosition: "center",
    overlay: true,
    promoDesc: "Shipping & Cash on Delivery Avaliable",
    promoBanner: banner4,
    promoLink: "link2",
  },
  {
    id: 5,
    promoTitle: "Latest Garden Flowring Plants",
    textPosition: "center",
    overlay: true,
    promoDesc: "Shipping & Cash on Delivery Avaliable",
    promoBanner: banner5,
    promoLink: "link2",
  },
  {
    id: 6,
    promoTitle: "Latest Garden Flowring Plants",
    textPosition: "left",
    overlay: true,
    promoDesc: "Shipping & Cash on Delivery Avaliable",
    promoBanner: banner6,
    promoLink: "link2",
  },
  {
    id: 7,
    promoTitle: "Latest Garden Flowring Plants",
    textPosition: "left",
    overlay: true,
    promoDesc: "Shipping & Cash on Delivery Avaliable",
    promoBanner: banner7,
    promoLink: "link2",
  },
];

/////////////////////////////////////
///   products data

export const productData = [
  {
    id: 1,
    productImage: product1,
    productName: "wheel barrows",
    discountPrice: "43",
    originalPrice: "56",
  },
  {
    id: 2,
    productImage: product2,
    productName: "micro rain",
    discountPrice: "22",
    originalPrice: "35",
  },
  {
    id: 3,
    productImage: product3,
    productName: "pulsating sprinklers",
    discountPrice: "40",
    originalPrice: "60",
  },
  {
    id: 4,
    productImage: product4,
    productName: "drive sprinkler",
    discountPrice: "43",
    originalPrice: "60",
  },

  {
    id: 5,
    productImage: product6,
    productName: "pruninig saw",
    discountPrice: "41",
    originalPrice: "60",
  },

  {
    id: 6,
    productImage: product8,
    productName: "garden fork",
    discountPrice: "20",
    originalPrice: "33",
  },
  {
    id: 7,
    productImage: product9,
    productName: "husqvarna LC 140S husqvarna LC 140S",
    // productName: "husqvarna LC 140S",
    discountPrice: "25",
    originalPrice: "50",
  },
  {
    id: 8,
    productImage: product10,
    productName: "cutco garden trowel",
    discountPrice: "10",
    originalPrice: "32",
  },
  {
    id: 9,
    productImage: product11,
    productName: "camping shovel",
    discountPrice: "15",
    originalPrice: "27",
  },
];

/////////////////////////////////////
///   Mega Menu Data

export const megaMenuData = [
  {
    categoryItem: "Agricultural Products",
    categoryLink: "Products/AgriculturalProducts",
    items: [
      {
        itemTitle: "Crops & Fresh Produce",
        itemLink: "Products/AgriculturalProducts/Crop&FreshProduce",
      },
      {
        itemTitle: "Seeds & Saplings",
        itemLink: "Products/AgriculturalProducts/Seeds&Saplings",
      },
      {
        itemTitle: "Organic & Sustainable Products",
        itemLink: "Products/AgriculturalProducts/Organic&SustainableProducts",
      },
    ],
  },
  {
    categoryItem: "Farming Equipments",
    categoryLink: "Products/FarmingEquipments",
    items: [
      {
        itemTitle: "Machinery & Tools",
        itemLink: "Products/FarmingEquipments/Machinery&Tools",
      },
      {
        itemTitle: "Agri-Tech Solutions",
        itemLink: "Products/FarmingEquipments/Agri-TechSolution",
      },
      {
        itemTitle: "Storage & Processing ",
        itemLink: "Products/FarmingEquipments/Storage&Processing ",
      },
    ],
  },
  {
    categoryItem: "Farm Supplies",
    categoryLink: "Products/FarmSupplies",
    items: [
      {
        itemTitle: "Irrigation & Water Management",
        itemLink: "Products/FarmSupplies/Irrigation",
      },
      {
        itemTitle: "Livestock & Poultry Supplies",
        itemLink: "Products/FarmSupplies/Livestock",
      },
      {
        itemTitle: "Protective Gear & Packaging",
        itemLink: "Products/FarmSupplies/Packaging",
      },
    ],
  },
];

/////////////////////////////////////
///   Feature Promo

export const featurePromoData = [
  {
    svg: <BsShop className="size-7 group-hover:fill-white" />,
    title: "Marketplace",
    descryption: "Buy, sell, or rent farming Needs",
  },
  {
    svg: <TfiHeadphoneAlt className="size-7 group-hover:fill-white" />,
    title: "24/7 Online Support",
    descryption: "Contact us 24/7",
  },
  {
    svg: <MdOutlineQueryStats className="size-7 group-hover:fill-white" />,
    title: "Real-Time Insights",
    descryption:
      "crop analytics, and market trends for smarter farming decisions.",
  },
  {
    svg: <PiGiftBold className="size-7 group-hover:fill-white" />,
    title: "special gift cards",
    descryption: "offer special bonuses with gifts",
  },
];

/////////////////////////////////////
///   Blog Page  data

export const blogItemData = [
  {
    blogImage: poster4,
    blogAuthor: "LeoU",
    blogComments: 98,
    blogReviews: 9999,
    blogHeading: "Lorem Ipsum Dolor",
    blogDesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type an",
    blogLink: "blog link",
  },
  {
    blogImage: poster3,
    blogAuthor: "Deez",
    blogComments: 99,
    blogReviews: 10000,
    blogHeading: "Lorem Ipsum Dolor",
    blogDesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type an",
    blogLink: "blog link",
  },
  {
    blogImage: poster2,
    blogAuthor: "Nuts",
    blogComments: 55,
    blogReviews: 2500,
    blogHeading: "Lorem Ipsum Dolor",
    blogDesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type an",
    blogLink: "blog link",
  },
  {
    blogImage: poster1,
    blogAuthor: "Woah Woah",
    blogComments: 89,
    blogReviews: 5000,
    blogHeading: "Lorem Ipsum Dolor",
    blogDesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type an",
    blogLink: "blog link",
  },
];

export const asideData = [
  {
    sectionTitle: "Popular Articles",
    sectionItems: [
      {
        itemImage: poster1,
        itemTitle: "Lorem Ipsum Dolo",
        itemDate: "Apr 21, 2022",
        itemLink: "Lorem Ipsum Dolo",
      },
      {
        itemImage: poster2,
        itemTitle: "Lorem Ipsum Dolo",
        itemDate: "Apr 21, 2022",
        itemLink: "Lorem Ipsum Dolo",
      },
    ],
  },
  {
    sectionTitle: "Recent Articles",
    sectionItems: [
      {
        itemImage: poster3,
        itemTitle: "Lorem Ipsum Dolo",
        itemDate: "Apr 21, 2022",
        itemLink: "Lorem Ipsum Dolo",
      },
      {
        itemImage: poster4,
        itemTitle: "Lorem Ipsum Dolo",
        itemDate: "Apr 21, 2022",
        itemLink: "Lorem Ipsum Dolo",
      },
    ],
  },
];

/////////////////////////////////////
///   Blog Preview

export const blogPreviewData = [
  {
    image: previewPoster1,
    title: "Consectetur Adipiscing",
    descryption:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ...",

    date: "21 April 2022",
  },
  {
    image: previewPoster2,
    title: "Lorem Ipsum Dolo",
    descryption:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ...",

    date: "24 June 2022",
  },
  {
    image: previewPoster3,
    title: "The Standard Lorem Ipsum",
    descryption:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ...",
    date: "8 December 2022",
  },
];

/////////////////////////////////////
///   Testimonial Data

export const testimonialData = [
  {
    image: profile1,
    name: "sandra",
    role: "customer",
    feedback:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    image: profile2,
    name: "scarlet",
    role: "engineer",
    feedback:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    image: profile3,
    name: "mai",
    role: "farmer",
    feedback:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

////////////////////////////////////////
//////////  Merchant Features

export const merchantFeatures = [
  {
    featureIcon: <CheckCircleIcon className="size-5" />,
    featureDesc: "AI Features To Enhance Your Bussiness ",
  },
  {
    featureIcon: <CheckCircleIcon className="size-5" />,
    featureDesc: "Ability To Expand Your Business By Reaching More Clients",
  },
  {
    featureIcon: <CheckCircleIcon className="size-5" />,
    featureDesc: "Access to a large customer base",
  },
  {
    featureIcon: <CheckCircleIcon className="size-5" />,
    featureDesc: "Tools for promoting products within the marketplace",
  },
  {
    featureIcon: <CheckCircleIcon className="size-5" />,
    featureDesc: "Unlimited product listings",
  },
  {
    featureIcon: <CheckCircleIcon className="size-5" />,
    featureDesc: "Basic analytics on sales and traffic",
  },
];

////////////////////////////////////////
//////////  Customer Features

export const customerFeatures = [
  {
    featureIcon: <CheckCircleIcon className="size-5" />,
    featureDesc: "AI Features To Enhance Your Bussiness ",
  },
  {
    featureIcon: <CheckCircleIcon className="size-5" />,
    featureDesc: "Ability To Expand Your Business By Reaching More Clients",
  },
  {
    featureIcon: <CheckCircleIcon className="size-5" />,
    featureDesc: "Access to a large customer base",
  },
  {
    featureIcon: <CheckCircleIcon className="size-5" />,
    featureDesc: "Tools for promoting products within the marketplace",
  },
  {
    featureIcon: <CheckCircleIcon className="size-5" />,
    featureDesc: "Unlimited product listings",
  },
  {
    featureIcon: <CheckCircleIcon className="size-5" />,
    featureDesc: "Basic analytics on sales and traffic",
  },
];
