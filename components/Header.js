import React from "react"
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";


const inter = Inter({ subsets: ["latin"] });

export default function Header() {
  return (
    <header>
        <Link href="/">
            Index
        </Link>
        <Link href="/about">
            About
        </Link>
    </header>
  );
}
    