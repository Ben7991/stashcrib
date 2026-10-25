'use client';

import { act, useRef, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper/types';
import { ChevronLeft, ChevronRight, Minus } from 'lucide-react';

import { products } from './Hero.utils';
import { Headline } from '../../atoms/headline/Headline';
import { cn } from 'cn';

export function Hero(): React.JSX.Element {
  return (
    <article>
      <SmallScreen />
      <WideScreen />
    </article>
  );
}

function SmallScreen(): React.JSX.Element {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="md:hidden">
      <div className="relative">
        <Swiper
          slidesPerView={1.12}
          spaceBetween={2}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {products.map((product) => (
            <SwiperSlide key={product.name}>
              <div className="">
                <Image
                  src={product.imagePath}
                  alt={product.name}
                  width={425}
                  height={350}
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
                key={product.name}
              />
            ))}
          </div>
          <p>
            {(activeIndex + 1).toString().padStart(2, '0')} /{' '}
            {products.length.toString().padStart(2, '0')}
          </p>
        </div>
      </div>
      <div className="py-7 px-5">
        <div className="">
          <div className="flex items-center justify-between">
            <strong className="font-light text-black">
              {(activeIndex + 1).toString().padStart(2, '0')}{' '}
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
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType>(null);

  return (
    <div className="hidden md:flex">
      <div className="min-w-0 md:basis-[calc(100vw-50%)]">
        <Swiper
          slidesPerView={1.12}
          spaceBetween={2}
          onBeforeInit={(swiper: SwiperType): void => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="w-full"
        >
          {products.map((product) => (
            <SwiperSlide key={product.name}>
              <div className="relative w-full h-125">
                <Image
                  src={product.imagePath}
                  alt={product.name}
                  sizes="50%"
                  className="object-cover"
                  fill
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="md:basis-1/2 md:p-4 lg:p-6 xl:p-8 md:space-y-15 lg:space-y-12 xl:space-y-15 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <strong className="text-black font-light">
            {(activeIndex + 1).toString().padStart(2, '0')}{' '}
            {products[activeIndex].name.toUpperCase()}
          </strong>
          <div className="flex gap-4 items-center">
            <p>
              {(activeIndex + 1).toString().padStart(2, '0')} /{' '}
              {products.length.toString().padStart(2, '0')}
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
        <div className="space-y-7 xl:space-y-3">
          <Headline tag="h1">{products[activeIndex].headline}</Headline>
          <p>{products[activeIndex].description}</p>
          <button className="inline-flex gap-1 px-5 py-3.25 bg-black text-white">
            Shop now <Minus /> ${products[activeIndex].price}
          </button>
        </div>
        <div className="flex items-center justify-between gap-2.5 xl:gap-5">
          {products.map((product, index) => (
            <div className="basis-1/4 flex flex-col gap-3" key={product.name}>
              <ProgressBar
                key={product.name}
                index={index}
                className="w-full"
                activeIndex={activeIndex}
              />
              <div className="flex flex-col xl:flex-row xl:items-center gap-1.25 xl:gap-2.5">
                <div className="relative xl:w-1/2 h-18.5">
                  <Image
                    src={product.imagePath}
                    alt={product.name}
                    className="object-cover"
                    fill
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
  className?: string;
};

function ProgressBar({
  index,
  className,
  activeIndex,
}: ProgressBarProps): React.JSX.Element {
  return (
    <div className={cn('w-3/12 h-0.75 bg-gray-400/50', className)}>
      <div
        className={`w-1/2 h-full ${index === activeIndex ? 'bg-black' : ''}`}
      />
    </div>
  );
}
