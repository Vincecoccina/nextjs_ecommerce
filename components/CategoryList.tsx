import React from "react";
import ComponentsContainer from "./ComponentsContainer";
import { Category } from "@prisma/client";
import Link from "next/link";
import Image from "next/image";

const getData = async () => {
  const res = await fetch(`${process.env.URL}/api/categories`, {
    cache: "no-store",
  });

  return res.json();
};

const CategoryList = async()=> {
  const categories = await getData();

  return (
    <ComponentsContainer>
      <section className="mt-[100px]">
        <h3 className="font-montserrat text-[25px] font-semibold text-[#1e1e1e] mb-5">
          Nos catégories
        </h3>
        <div className="gap-2 mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {categories?.map((category: Category) => (
            <Link href={`categories/${category.slug}`} key={category.id}>
              <div className="rounded-xs border border-[#d6d6d6] h-[100%]">
                <div className="rounded-xs aspect-square relative overflow-hidden">
                  <Image
                    src={category.image || "/img/bg.jpg"}
                    fill
                    alt={category.title}
                    className="rounded-xs aspect-square object-cover transition-all duration-700 hover:scale-110"
                  />
                </div>
                <div className="py-3 px-3">
                  <p className="font-semibold capitalize text-yellow-700">
                    {category.title}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </ComponentsContainer>
  );
}

export default CategoryList;
