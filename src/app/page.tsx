import { Repo } from "@/components/Repo";
import { User } from "@/components/User";
import Link from "next/link";
import { Suspense } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

import Image from "next/image";

import { stripe } from "../lib/stripe";

import * as S from "./styles";

import Stripe from "stripe";
import ProductsCarousel from "@/components/Carousel";

export const revalidate = 10;
// export const revalidate = 60 * 60 * 2;

export interface Products {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
}

export default async function Home() {
  // const router = useRouter();

  // function handleClick() {
  //   router.push("/product/123");
  // }

  // router.refresh();

  const products: Products[] = await getProducts();

  return <ProductsCarousel products={products} />;
}

const getProducts = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  console.log("chamou home pelo servidor");

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(price.unit_amount! / 100),
    };
  });

  return products;
};

// <S.Title>Home</S.Title>
// {/* <Link href="/product/123">product</Link> */}

// <Suspense fallback={<div>Loading...</div>}>
//   {/* @ts-expect-error Server Component */}
//   <User />
// </Suspense>
// <Suspense fallback={<div>Loading...</div>}>
//   {/* @ts-expect-error Server Component */}
//   <Repo />
// </Suspense>
