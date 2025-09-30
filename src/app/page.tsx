'use client'
import Image from "next/image";
import Header from "./components/header";
import Products from "./components/products";
import Sidebar from "./components/Sidebar";

export default function Example() {

  return (
    <>
    <Header />
    <Sidebar/>
    <Products/>
    </>
  )
    
}
