import BigPromo from "./BigPromo";
import CategoryCarousel from "./CategoryCarousel";
import DealOfTheDay from "./DealOfTheDay";
import FeaturePromo from "./FeaturePromo";
import IntroCarousel from "./IntroCarousel";
import NewsLetter from "./NewsLetter";
import BlogPreview from "../blog/BlogPreview";
import SpecialProducts from "./SpecialProducts";
import Testimonial from "./Testimonial";

function Home() {
  return (
    <main>
      <IntroCarousel />
      <div>
        <CategoryCarousel />
        <SpecialProducts />
      </div>
      <BigPromo />
      <div className="bg-[url(/dealOfTheDay.jpg)] bg-cover bg-fixed">
        <FeaturePromo />
        <DealOfTheDay />
      </div>
      <div className="pb-10">
        <NewsLetter />
        <Testimonial />
      </div>
      <BlogPreview />
    </main>
  );
}

export default Home;
