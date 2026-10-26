import { Swiper, SwiperSlide } from "swiper/react";

import { Shop } from "@/components/layouts/shop/Shop";
import { Hero } from "@/components/organisms/hero/Hero";
import { Grid } from "@/components/atoms/grid/Grid";
import { Headline } from "@/components/atoms/headline/Headline";
import { products } from "@/components/organisms/hero/Hero.data";

export default function LandingPage(): React.JSX.Element {
  return (
    <Shop>
      <Hero />
      <SampleProducts />
      <NewArrivals />
    </Shop>
  );
}

function SampleProducts(): React.JSX.Element {
  return (
    <article className="py-10 md:py-24 border-b border-b-gray-300">
      <Grid>
        <Grid.Container className="mb-6">
          <small className="inline-block uppercase text-[0.75em] tracking-widest">
            Shop By Cloth
          </small>
          <Headline tag="h2">Start with what it is made of.</Headline>
        </Grid.Container>
        <Grid.Container>
          <Swiper
            slidesPerView={1.3}
            spaceBetween={24}
            breakpoints={{ 768: { slidesPerView: 3, spaceBetween: 24 } }}
          >
            {products.slice(0, 3).map((product) => (
              <SwiperSlide key={product.name}>
                <div className="flex flex-col border-b border-b-gray-400">
                  <img
                    src={product.imagePath}
                    alt={product.name}
                    className=""
                  />
                  <div className="flex items-center justify-between py-4">
                    <p>
                      <strong className="font-light text-black">
                        {product.name}
                      </strong>
                    </p>
                    <small className="inline-block">
                      {product.quantity} pieces
                    </small>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid.Container>
      </Grid>
    </article>
  );
}

function NewArrivals(): React.JSX.Element {
  return (
    <article className="py-10 md:py-24">
      <Grid>
        <Grid.Container className="mb-6">
          <Headline tag="h2">New this week</Headline>
        </Grid.Container>
        <Grid.Container>
          <Grid.Row className="gap-8">
            {products.map((product) => (
              <Grid.Col
                key={product.name}
                className="basis-full md:basis-[calc(25%-24px)]"
              >
                <div className="w-full h-62.5">
                  <img
                    src={product.imagePath}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="pt-4">
                  <Headline tag="h5">{product.name}</Headline>
                  <p>&#8373;{product.price}</p>
                </div>
              </Grid.Col>
            ))}
          </Grid.Row>
        </Grid.Container>
      </Grid>
    </article>
  );
}
