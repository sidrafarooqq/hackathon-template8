import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BsCartDash } from "react-icons/bs";
import ProductComp from "@/components/(pages)/ProductComp";

export interface Product {
  name: string;
  price: number;
  image: string;
}

export const products: Product[] = [
  { name: "Chair1", price: 23, image: "/products/1.jpeg" },
  { name: "Chair2", price: 23, image: "/products/2.jpeg" },
  { name: "Chair3", price: 23, image: "/products/3.jpeg" },
  { name: "Chair4", price: 23, image: "/products/4.jpeg" },
  { name: "Chair5", price: 23, image: "/products/5.jpeg" },
  { name: "Chair6", price: 23, image: "/products/6.jpeg" },
  { name: "Chair7", price: 23, image: "/products/7.jpeg" },
  { name: "Chair8", price: 23, image: "/products/8.jpeg" },
  { name: "Chair9", price: 23, image: "/products/9.jpeg" },
  { name: "Chair10", price: 23, image: "/products/10.jpeg" },
  { name: "Chair11", price: 23, image: "/products/11.jpeg" },
  { name: "Chair12", price: 23, image: "/products/12.jpeg" },
];

export default function Products() {
  return (
    <div>
      <div className="flex flex-row ml-8 lg:ml-[135px] lg:py-14">
        <p className="font-bold text-[32px]">All Products</p>
      </div>

      <div className="mb-32 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-9 mx-2 xl:mx-24 xl:gap-10">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white w-[312px] h-[377px] overflow-hidden xl:px-7"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              className="w-full h-[312px] object-cover"
            />
            <div className="p-0 flex flex-row justify-between mt-3">
              <span>
                <h3 className="text-lg hover:text-[#029FAE] text-black font-normal">
                  {product.name}
                </h3>
                <p className="text-black text-xl font-bold">${product.price}</p>
              </span>
              <span className="text-gray-500">
                <Link href={`/products/${product.name}`}>
                <Button variant="outline" className="hover:bg-[#029FAE] text-black hover:text-white border border-slate-300 bg-slate-300 hover:border rounded-xl"><BsCartDash size={22} /></Button>
                 
                </Link>
              </span>
            </div>
          </div>
        ))}
      </div>

      <ProductComp />
    </div>
  );
}