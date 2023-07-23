"use client";

import Image from "next/image";

import { useKeenSlider } from "keen-slider/react";
import { stripe } from "../../lib/stripe";

import * as S from "./styles";
import "keen-slider/keen-slider.min.css";
import { Products } from "@/app/page";
import Link from "next/link";

export default function ProductsCarousel({
  products,
}: {
  products: Products[];
}) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <S.HomeContainer ref={sliderRef} className="keen-slider">
      {products.map((product) => {
        return (
          <Link
            href={`/product/${product.id}`}
            key={product.id}
            prefetch={false}
          >
            <S.Product className="keen-slider__slide">
              <Image src={product.imageUrl} width={520} height={480} alt="" />

              <footer>
                <strong>{product.name}</strong>
                <span>{product.price}</span>
              </footer>
            </S.Product>
          </Link>
        );
      })}
    </S.HomeContainer>
  );
}
