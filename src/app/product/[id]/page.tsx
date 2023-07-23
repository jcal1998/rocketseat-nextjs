import BuyNowButton from "@/components/BuyNowButton";
import Image from "next/image";
import Stripe from "stripe";
import { stripe } from "../../../lib/stripe";

import * as S from "./styles";

export const revalidate = 10;
export const dynamicParams = true;

interface ProductProps {
  params: {
    id: string;
  };
}

export async function generateMetadata() {
  // const posts = await fetch('https://.../posts', { next: { revalidate: 60 } ).then((res) => res.json())

  return {
    title: `Product`,
  };
}

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  description: string;
  defaultPriceId: string;
}

export async function generateStaticParams() {
  return [
    {
      id: "prod_OJ8uLdQUCcwXPW",
    },
  ];
}

export default async function Product({ params }: ProductProps) {
  const product: Product = await getProduct(params.id);

  return (
    <S.ProductContainer>
      <S.ImageContainer>
        <Image src={product.imageUrl} width={520} height={480} alt="" />
      </S.ImageContainer>

      <S.ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>

        <p>{product.description}</p>

        <BuyNowButton priceId={product.defaultPriceId} />
      </S.ProductDetails>
    </S.ProductContainer>
  );
}

const getProduct = async (id: string) => {
  const productId = id;

  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });

  console.log("chamou product pelo servidor");

  const price = product.default_price as Stripe.Price;

  return {
    id: product.id,
    name: product.name,
    imageUrl: product.images[0],
    price: new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price.unit_amount! / 100),
    description: product.description || "",
    defaultPriceId: price.id,
  };
};
