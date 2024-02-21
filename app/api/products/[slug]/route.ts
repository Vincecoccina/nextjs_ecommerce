import { NextResponse } from "next/server";
import prisma from "@/lib/connect";

export const GET = async (
  req: Request,
  { params }: { params: { slug: string } }
) => {
  const { slug } = params;

  try {
    const product = await prisma.product.findUnique({
      where: {
        slug,
      },
    });
    return NextResponse.json(product, {status: 200})
  } catch (error) {
    return NextResponse.json("Something went wrong", {status: 500})
  }
};
