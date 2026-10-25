import { useEffect, useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper/types";

import { products, SLIDE_DURATION_MS, WIDE_SCREEN_QUERY } from "./Hero.data";

function useHeroSlides(variant: "small" | "wide") {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    const widthQuery = window.matchMedia(WIDE_SCREEN_QUERY);
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => {
      const visible =
        variant === "wide" ? widthQuery.matches : !widthQuery.matches;
      setAutoplay(visible && !motionQuery.matches);
    };

    update();
    widthQuery.addEventListener("change", update);
    motionQuery.addEventListener("change", update);

    return () => {
      widthQuery.removeEventListener("change", update);
      motionQuery.removeEventListener("change", update);
    };
  }, [variant]);

  useEffect(() => {
    if (!autoplay) return;

    const timeoutId = window.setTimeout(() => {
      const swiper = swiperRef.current;
      if (!swiper) return;

      const nextIndex = (swiper.activeIndex + 1) % products.length;
      swiper.slideTo(nextIndex, nextIndex === 0 ? 0 : undefined);
    }, SLIDE_DURATION_MS);

    return () => window.clearTimeout(timeoutId);
  }, [activeIndex, autoplay]);

  return {
    activeIndex,
    autoplay,
    swiperRef,
    onBeforeInit: (swiper: SwiperType) => {
      swiperRef.current = swiper;
    },
    onSlideChange: (swiper: SwiperType) => {
      setActiveIndex(swiper.activeIndex);
    },
  };
}

export { useHeroSlides };
