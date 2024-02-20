import React from "react";

export default function Footer() {
  return (
    <footer className="mt-[100px] bg-[#151515] w-full flex justify-between py-11 px-11">
      <div className="text-white flex flex-col gap-2">
        <h4 className="font-semibold uppercase">Aide</h4>
        <ul className="text-[12px] text-[#8a8a8a] flex flex-col gap-2">
          <li>Statut de commande</li>
          <li>Expédition et livraison</li>
          <li>Retours</li>
          <li>Modes de paiement</li>
          <li>Nous contacter</li>
          <li>Aide - Codes promo Nike</li>
        </ul>
      </div>
      <div className="text-white flex flex-col gap-2">
        <h4 className="font-semibold uppercase">à propos de nike</h4>
        <ul className="text-[12px] text-[#8a8a8a] flex flex-col gap-2">
          <li>Actualités</li>
          <li>Carrières</li>
          <li>Investisseurs</li>
          <li>Développement durable</li>
          <li>Mission</li>
        </ul>
      </div>
      <div className="text-white flex flex-col gap-2">
        <h4 className="font-semibold uppercase">Rejoins-nous</h4>
        <ul className="text-[12px] text-[#8a8a8a] flex flex-col gap-2">
          <li>Nike App</li>
          <li>Nike Run Club</li>
          <li>Nike Training Club</li>
          <li>SNKRS</li>
        </ul>
      </div>
      <div className="text-white">
        <h4>Social</h4>
      </div>
    </footer>
  );
}
