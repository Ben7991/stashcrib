import {
  ProductStage,
  RelatedProducts,
  SiteShell,
  featuredProduct,
  listingProducts,
  productGalleryImages,
  relatedProducts,
} from "@repo/ui";
import { useParams } from "react-router-dom";

export const ProductPage = () => {
  const { slug } = useParams();
  const product =
    listingProducts.find((item) => item.slug === slug) ?? featuredProduct;

  return (
    <SiteShell>
      <ProductStage
        product={{ ...featuredProduct, ...product }}
        images={productGalleryImages}
      />
      <RelatedProducts products={relatedProducts} />
    </SiteShell>
  );
};
