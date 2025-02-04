import BigPromo from "./BigPromo";
import BlogPreview from "../Blog/BlogPreview";
import CategoryCarousel from "./CategoryCarousel";
import DealOfTheDay from "./DealOfTheDay";
import FeaturePromo from "./FeaturePromo";
import IntroCarousel from "./IntroCarousel";
import NewsLetter from "./NewsLetter";

import SpecialProducts from "./SpecialProducts";
import Testimonial from "./Testimonial";

function Home() {
  return (
    <main>
      <IntroCarousel />
      <CategoryCarousel />
      <SpecialProducts />
      <BigPromo />
      <FeaturePromo />
      <DealOfTheDay />
      <div className="py-10">
        <NewsLetter />
        <Testimonial />
      </div>
      <BlogPreview />
    </main>
  );
}

export default Home;
