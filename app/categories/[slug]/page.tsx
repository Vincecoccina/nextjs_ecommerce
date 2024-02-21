"use client";
import React, { useEffect, useState } from "react";
import formatSlug from "@/utils/FormatSlug";
import ProductList from "@/components/ProductList";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Product } from "@prisma/client";
import { Button } from "@/components/ui/button";

type Props = {
  params: {
    slug: string;
  };
};

const categoryPage = ({ params }: Props) => {
  const { slug } = params;
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`/api/products?cat=${slug}`);
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      const products = await response.json();

      setProducts(products);
      setFilteredProducts(products);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const handleFilter = (value: string) => {
    const filtered = products.filter((product) => product.color === value);
    setFilteredProducts(filtered);
  };

  const handleResetFilters = () => {
    setFilteredProducts(products);
  };

  return (
    <main className="py-10 px-4">
      <div className="flex gap-4">
        <div className="w-1/4 h-[500px] border border-[#c4c4c4] rounded-sm px-3">
          <p className="text-[25px] font-semibold text-black dark:text-slate-300 capitalize italic">
            Filtres
          </p>

          <div className="flex flex-col">
            {/* Filtre couleur*/}
            <div className="flex flex-col">
              <p className="text-[18px] mt-3">Couleur</p>
              <div className="mt-3 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div
                    onClick={() => handleFilter("black")}
                    className="w-[30px] h-[30px] bg-black rounded-full"
                  />
                  <Label htmlFor="black">Noir</Label>
                </div>

                <div className="flex items-center gap-3">
                  <div
                    onClick={() => handleFilter("white")}
                    className="w-[30px] h-[30px] border border-black rounded-full"
                  />
                  <Label htmlFor="white">Blanc</Label>
                </div>

                <div className="flex items-center gap-3">
                  <div
                    onClick={() => handleFilter("red")}
                    className="w-[30px] h-[30px] border bg-red-800 rounded-full"
                  />
                  <Label htmlFor="white">Rouge</Label>
                </div>
              </div>
            </div>

            <Button className="mt-5 rounded-full bg-black font-semibold" onClick={() => handleResetFilters()}>
              Réinitialiser le filtres
            </Button>
          </div>
        </div>
        <div className="flex-1">
          <h1 className="text-[25px] font-semibold text-black dark:text-slate-300 capitalize italic">
            {formatSlug(slug)}
          </h1>
          <ProductList products={filteredProducts} />
        </div>
      </div>
    </main>
  );
};

export default categoryPage;
