import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import Stripe from "stripe";
import { stripe } from "../../../lib/stripe";

import * as S from "./styles";

export const revalidate = 10;

interface SuccessProps {
  costumerName: string;
  product: {
    name: string;
    imageUrl: string;
  };
}

export async function generateMetadata() {
  return {
    title: `Compra efetuada`,
    robots: {
      index: false,
    },
  };
}

export default async function Success({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) {
  if (!searchParams.session_id) {
    redirect("/");
    return;
  }

  const success: SuccessProps = await getCheckoutSession(
    searchParams.session_id
  );

  return (
    <S.SuccessContainer>
      <h1>Compra efetuada</h1>

      <S.ImageContainer>
        <Image src={success.product.imageUrl} width={120} height={110} alt="" />
      </S.ImageContainer>

      <p>
        Uhuul <strong>{success.costumerName}</strong>, sua{" "}
        <strong>{success.product.name}</strong> já está a caminho da sua casa.
      </p>

      <Link href="/">Voltar ao catálogo</Link>
    </S.SuccessContainer>
  );
}

const getCheckoutSession = async (session_id: string) => {
  const sessionId = session_id;

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  console.log("chamou checkout session pelo servidor");

  const costumerName = session.customer_details?.name || "";
  const product = session.line_items?.data[0].price?.product as Stripe.Product;

  return {
    costumerName,
    product: {
      name: product.name,
      imageUrl: product.images[0],
    },
  };
};
