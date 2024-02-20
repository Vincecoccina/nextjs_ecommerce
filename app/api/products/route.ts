import { NextResponse } from "next/server";
import prisma from "@/lib/connect";

export const GET = async (req: Request) => {
  try {
    const { searchParams } = new URL(req.url);
    const catSlug = searchParams.get("cat");

    const products = await prisma.product.findMany({
      where: {
        ...(catSlug && catSlug !== "null" && catSlug !== "" && { catSlug }),
      },
    });

    return NextResponse.json(products, {status : 200})
  } catch (error) {
    return NextResponse.json("Something went wrong", {status : 500})
  }
};
