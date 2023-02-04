import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <h1 className="font-bold text-center text-8xl">Hello Next + Tailwind !</h1>
    </>
  );
}
