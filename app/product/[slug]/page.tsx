import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import Image from "next/image";
import React from "react";

const getData = async (slug: string) => {
  const res = await fetch(`${process.env.URL}/api/products/${slug}`, {
    cache: "no-store",
  });

  return res.json();
};

const productPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const product = await getData(slug);
  return (
    <main className="py-5">
      <div className="flex justify-center gap-[100px]">
        <div className="aspect-square">
          <Image
            src={product.image}
            alt={product.title}
            width={600}
            height={600}
            className="object-fit"
          />
        </div>
        <div className="w-1/4 flex flex-col gap-[100px]">
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-semibold">{product.title}</h1>
            <p className="font-semibold">{product.price} €</p>
          </div>
          <div className="flex flex-col gap-3">
            <Button className="bg-black py-7 rounded-full text-[15px] font-semibold">
              Ajouter au panier
            </Button>
            <Button
              variant="outline"
              className="py-7 rounded-full text-[15px] font-semibold flex items-center gap-2"
            >
              Ajouter au panier
              <Heart color="black" strokeWidth={1.5} size={15} />
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default productPage;
