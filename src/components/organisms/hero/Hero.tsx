import { Swiper, SwiperSlide } from "swiper/react";

import { ChevronLeft, ChevronRight, Minus } from "lucide-react";
import { cn } from "cn";

import css from "./Hero.module.css";
import { products, SLIDE_DURATION_MS } from "./Hero.data";
import { Headline } from "../../atoms/headline/Headline";
import { useHeroSlides } from "./Hero.hooks";

export function Hero(): React.JSX.Element {
  return (
    <article>
      <SmallScreen />
      <WideScreen />
    </article>
  );
}

function SmallScreen(): React.JSX.Element {
  const { activeIndex, autoplay, onBeforeInit, onSlideChange } =
    useHeroSlides("small");

  return (
    <div className="md:hidden">
      <div className="relative">
        <Swiper
          slidesPerView={1.12}
          spaceBetween={2}
          onBeforeInit={onBeforeInit}
          onSlideChange={onSlideChange}
        >
          {products.map((product) => (
            <SwiperSlide key={product.name}>
              <div className="h-full">
                <img
                  src={product.imagePath}
                  alt={product.name}
                  className="w-full h-full"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-11/12 flex items-center gap-3 z-10 md:hidden">
          <div className="w-[80%] flex gap-1">
            {products.map((product, index) => (
              <ProgressBar
                index={index}
                activeIndex={activeIndex}
                autoplay={autoplay}
                key={product.name}
              />
            ))}
          </div>
          <p>
            {(activeIndex + 1).toString().padStart(2, "0")} /{" "}
            {products.length.toString().padStart(2, "0")}
          </p>
        </div>
      </div>
      <div className="py-7 px-5">
        <div className="">
          <div className="flex items-center justify-between">
            <strong className="font-light text-black">
              {(activeIndex + 1).toString().padStart(2, "0")}{" "}
              {products[activeIndex].name.toUpperCase()}
            </strong>
            <p>{products[activeIndex].quantity} pieces</p>
          </div>
          <Headline tag="h1">{products[activeIndex].headline}</Headline>
          <p>{products[activeIndex].description}</p>
        </div>
        <button className="bg-black text-white block w-full py-3.75 mt-4">
          Shop the coat - &#8373;{products[activeIndex].price}
        </button>
      </div>
    </div>
  );
}

function WideScreen(): React.JSX.Element {
  const { activeIndex, autoplay, swiperRef, onBeforeInit, onSlideChange } =
    useHeroSlides("wide");

  return (
    <div className="hidden md:flex border-b border-b-gray-300">
      <div className="min-w-0 md:basis-[calc(100vw-50%)]">
        <Swiper
          slidesPerView={1}
          spaceBetween={2}
          onBeforeInit={onBeforeInit}
          onSlideChange={onSlideChange}
          className="w-full h-full"
        >
          {products.map((product) => (
            <SwiperSlide key={product.name}>
              <div className="w-full h-full">
                <img
                  src={product.imagePath}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="md:basis-1/2 md:p-4 lg:p-6 xl:p-8 md:space-y-10 lg:space-y-8 xl:space-y-15 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <strong className="font-light text-black">
            {(activeIndex + 1).toString().padStart(2, "0")}{" "}
            {products[activeIndex].name.toUpperCase()}
          </strong>
          <div className="flex gap-4 items-center">
            <p>
              {(activeIndex + 1).toString().padStart(2, "0")} /{" "}
              {products.length.toString().padStart(2, "0")}
            </p>
            <div className="flex">
              <button
                type="button"
                className="inline-block p-3 border border-gray-200 border-r-0 disabled:cursor-not-allowed"
                onClick={() => swiperRef.current?.slidePrev()}
                disabled={activeIndex === 0}
              >
                <ChevronLeft width={16} height={16} />
              </button>
              <button
                type="button"
                className="inline-block p-3 bg-black disabled:cursor-not-allowed"
                onClick={() => swiperRef.current?.slideNext()}
                disabled={activeIndex === products.length - 1}
              >
                <ChevronRight width={16} height={16} className="text-white" />
              </button>
            </div>
          </div>
        </div>
        <div className="space-y-7 md:space-y-3">
          <Headline tag="h1">{products[activeIndex].headline}</Headline>
          <p>{products[activeIndex].description}</p>
          <button className="inline-flex gap-1 px-5 py-3.25 bg-black text-white">
            Shop now <Minus /> &#8373;{products[activeIndex].price}
          </button>
        </div>
        <div className="flex items-center justify-between gap-2.5 xl:gap-5">
          {products.map((product, index) => (
            <div className="basis-1/4 flex flex-col gap-3" key={product.name}>
              <ProgressBar
                index={index}
                className="w-full"
                activeIndex={activeIndex}
                autoplay={autoplay}
              />
              <div className="flex flex-col xl:flex-row xl:items-center gap-1.25 xl:gap-2.5">
                <div className="xl:w-1/2">
                  <img
                    src={product.imagePath}
                    alt={product.name}
                    className="object-cover block"
                    sizes="100%"
                  />
                </div>
                <div className="flex flex-col">
                  <strong className="font-light text-black">
                    {product.name}
                  </strong>
                  <p className="text-[0.75em]">{product.quantity} pieces</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

type ProgressBarProps = {
  index: number;
  activeIndex: number;
  autoplay: boolean;
  className?: string;
};

function ProgressBar({
  index,
  className,
  activeIndex,
  autoplay,
}: ProgressBarProps): React.JSX.Element {
  const isActive = index === activeIndex;
  const isComplete = index < activeIndex;
  const animate = isActive && autoplay;
  const filled = isComplete || (isActive && !autoplay);

  return (
    <div
      className={cn("h-0.75 w-3/12 overflow-hidden bg-gray-400/50", className)}
      aria-hidden="true"
    >
      <div
        key={animate ? `run-${activeIndex}` : `fill-${index}`}
        className={cn(
          "h-full w-full origin-left bg-black",
          animate && css["hero-progress"],
        )}
        style={{
          transform: filled ? "scaleX(1)" : "scaleX(0)",
          ...(animate
            ? { animationDuration: `${SLIDE_DURATION_MS}ms` }
            : undefined),
        }}
      />
    </div>
  );
}
