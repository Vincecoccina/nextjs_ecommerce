import React from "react";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section>
      <div
        className="aspect-square md:aspect-[3/1] overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url("/img/hero.jpg")`,
        }}
      ></div>
      <div className="flex flex-col items-center justify-center mt-5">
        <h1 className="text-[16px] font-semibold">Nike Flash</h1>
        <p className="text-[60px] uppercase font-oswald font-bold">
          Des sentations incroyables
        </p>
        <p className="text-[18px]">
          Notre chaussure de running sur route avec le meilleur amorti, pour des
          kilomètres de bonheur.
        </p>
        <div className="mt-5">
          <Button className="bg-black rounded-3xl text-[17px] px-5">Acheter</Button>
        </div>
      </div>
    </section>
  );
}
