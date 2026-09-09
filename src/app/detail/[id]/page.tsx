"use client";

import { useParams } from "next/navigation";

import DetailPage from "@/components/DetailPage";

export default function DetailPageRoute() {
  const params = useParams();
  const id = params.id as string;

  return <DetailPage id={id} />;
}
