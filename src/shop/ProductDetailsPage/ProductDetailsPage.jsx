import BreadCrumb from "../../ui/BreadCrumb";
import ProductImagePreview from "../../Shared/ProductImagePreview";
import ProductSpecifications from "./ProductSpecifications";
import ProductReviews from "../Reviews/ProductReviews";
import RelatedProducts from "./RelatedProducts";
import { useParams } from "react-router-dom";
import { productDetailsData } from "../../utils/ProductStaticData";
import { splitCommonPrefix } from "../../utils/helpers";

//////////////////////////////////////////////////////////

function ProductView() {
  const { id } = useParams();
  const product = productDetailsData.find((p) => p.id === Number(id));

  const specifications = {
    id: id,
    productName: product.productName,
    stock: product.stock,
    description: product.description,
    rating: product.rating,
    discountPrice: product.discountPrice,
    originalPrice: product.originalPrice,
    specs: product.specs,
    numberOfReviews: product.reviews.length,
  };

  const images = {
    prefix: splitCommonPrefix(product.images).prefix,
    variables: splitCommonPrefix(product.images).variables,
  };

  console.log(images);

  return (
    <>
      <BreadCrumb />
      <main className="container mx-auto mb-16 px-2">
        <div className="flex flex-col items-center rounded-2xl bg-white p-4 lg:flex-row">
          <ProductImagePreview data={images} />
          <ProductSpecifications data={specifications} />
        </div>
        <div className="my-5 overflow-hidden rounded-3xl">
          <ProductReviews data={product.reviews} />
        </div>
        <RelatedProducts />
      </main>
    </>
  );
}

export default ProductView;
