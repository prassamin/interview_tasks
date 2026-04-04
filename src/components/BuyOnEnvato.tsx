import React from "react";
import Image from "next/image";

const BuyOnEnvato = () => {
  return (
    <button className="hidden md:flex items-center justify-center fixed left-10 bottom-10 z-1000 font-bold text-white gap-1.5 text-sm py-2 px-3.75 bg bg-muted rounded-full animate-shadow-pulse">
      <span>Buy on</span>
      <Image src="/envato.png" alt="Envato" width={100} height={100}  className="w-16"/>
    </button>
  );
};

export default BuyOnEnvato;
