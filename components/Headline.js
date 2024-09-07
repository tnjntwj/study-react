import React from "react"
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Headline(props) {
  return (
    <div>
    
      <h1 className>{props.title}</h1>
      
    </div>
  );
}
    