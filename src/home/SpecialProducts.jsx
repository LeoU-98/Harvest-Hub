import {
  cropAndFreshProducesData,
  dairyAndLivestockProducts,
  seedAndSaplingProducts,
} from "../assets/AgriDataPLP";
import { H2 } from "../ui/Heading";

import ProductsCarousel from "../shared/ProductsCarousel";

function SpecialProducts() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <H2>special products</H2>

        <ProductsCarousel
          data={[
            ...cropAndFreshProducesData,
            ...dairyAndLivestockProducts,
            ...seedAndSaplingProducts,
          ]}
        />
      </div>
    </section>
  );
}

export default SpecialProducts;
