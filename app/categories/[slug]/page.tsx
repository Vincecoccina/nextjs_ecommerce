import React from "react";
import formatSlug from "@/utils/FormatSlug";
import ProductList from "@/components/ProductList";

type Props = {
  params: {
    slug: string;
  };
};

const getData = async (slug: string) => {
  const res = await fetch(`${process.env.URL}/api/products?cat=${slug}`, {
    cache: "no-store",
  });

  return res.json();
};

const categoryPage = async ({ params }: Props) => {
  const { slug } = params;
  const products = await getData(slug);

  return (
    <main className="py-10 px-4">
      <div className="flex items-center gap-6 mb-6">
        <h1 className="text-[25px] font-semibold text-black dark:text-slate-300 capitalize italic">
          {formatSlug(slug)}
        </h1>
      </div>
      <ProductList products={products} />
    </main>
  );
};

export default categoryPage;
