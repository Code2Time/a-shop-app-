import React from "react";

export interface Iproducts {
  id: number;
  name: string;
  thumbnail: string;
  title: string;
  description: string;
  price: number;
  image: string;
  images: string;
  rating: number;
  brand: string;
  storage: string;
  resolution: string;
  games_included: number;
}

export interface Icategory {
  id: number;
  image: string;
  name: string;
}

export interface Idatapaginat {
  selected: number;
}

export interface IExclusivitydata {
  id: number;
  title: string;
  desc: string;
  icon: React.ReactNode;
}
export interface Iallproducts {
  id: number;
  name: string;
  img: string;
  description: string;
  price: string;
  discount: string;
  category: string;
}
