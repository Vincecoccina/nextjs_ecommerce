import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/constants";
import React from "react";

export default function Navbar() {
  return (
    <header className="w-full py-8 px-4">
      <nav className="flex items-center justify-between">
        <Link href="/">
          <Image
            src="/img/header-logo.svg"
            width={129}
            height={29}
            alt="logo"
          />
        </Link>
        <ul className="flex-1 flex justify-center items-center gap-16">
          {navLinks.map((link: any, i) => (
            <li key={i}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <div>
          <Link href="/" className="text-[13px]">S'inscrire / Se connecter</Link>
        </div>
      </nav>
    </header>
  );
}
