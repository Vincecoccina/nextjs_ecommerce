import { Category } from "@/types";
import { accesoire, shoes, cloth, sport, nouveaute} from "../public/img";

export const CATEGORIES: Category[] = [
  {
    id: 1,
    name: "Chaussures",
    slug: "chaussures",
    image: shoes
  },
  {
    id: 2,
    name: "Vêtements",
    slug: "vetements",
    image: cloth
  },
  {
    id: 3,
    name: "Sport",
    slug: "sport",
    image: sport
  },
  {
    id: 4,
    name: "Accesoires",
    slug: "accesoires",
    image: accesoire
  },
  {
    id: 5,
    name: "Tendances",
    slug: "tendances",
    image: nouveaute
  },
];
