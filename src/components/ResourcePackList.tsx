"use client";

import { useEffect, useState } from "react";

import Card from "@/components/card";
import type { CardData } from "@/types/card";

export default function ResourcePackList() {
  const [cards, setCards] = useState<CardData[]>([]);

  useEffect(() => {
    if (cards.length === 0) {
      fetch("/api/resourcepacks")
        .then((response) => response.json())
        .then((data) => setCards(data));
    }
  }, [cards]);

  return (
    <div>
      {cards.map((card) => (
        <Card key={card.id} data={card} />
      ))}
    </div>
  );
}
