import { CardDataSchema } from "@/types/card";
import { z } from "zod";
import { promises as fs } from "fs";
import path from "path";

export async function GET() {
  try {
    const dataPath = path.join(process.cwd(), "src", "data", "cardData.json");
    const file = await fs.readFile(dataPath, "utf-8");
    const parsed = JSON.parse(file);

    const data = z.array(CardDataSchema).parse(parsed);

    return Response.json(data);
  } catch (error) {
    console.error(error);
    return Response.json(
      { error: "리소스팩 데이터 형식이 올바르지 않습니다." },
      { status: 500 }
    );
  }
}