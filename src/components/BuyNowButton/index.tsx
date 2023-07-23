"use client";
import axios from "axios";
import { useState } from "react";

import * as S from "./styles";

export default function BuyNowButton({ priceId }: { priceId: string }) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);

  async function handleBuyButton() {
    try {
      setIsCreatingCheckoutSession(true);

      const response = await axios.post("/api/checkout", {
        priceId,
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (err) {
      setIsCreatingCheckoutSession(false);

      alert("Falha ao redirecionar ao checkout!");
    }
  }

  return (
    <S.Button disabled={isCreatingCheckoutSession} onClick={handleBuyButton}>
      Comprar agora
    </S.Button>
  );
}
