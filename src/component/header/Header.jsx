import Image from "next/image";
import React from "react";
import Logo from "@/../../public/assert/logo.webp";
import localFont from "next/font/local";
import { GiHamburgerMenu } from "react-icons/gi";

export const boldOblique = localFont({
  src: "../../../public/font/Gemsbuck01BoldOblique.ttf",
});

export const gemsbuckBold = localFont({
  src: "../../../public/font/Gemsbuck01Bold.ttf",
});

const Header = () => {
  return (
    <header
      aria-label="header"
      className="max-w-5xl flex items-center mx-auto w-full px-2 py-2 border-b-[1px] border-[#00ffff]/60 bg-gradient-to-tr from-[#00FFFF]/70 to-white to-35%
      justify-between
    "
    >
      <div className="flex items-end">
        <Image
          src={Logo}
          alt="Buchains Logo"
          width={40}
          height={40}
          quality={100}
          className={`min-h-[35px] max-h-[35px] max-w-[35px] min-w-[35px] bg-contain `}
        />
        <h1 className={`${gemsbuckBold.className} -mb-[6.8px] text-xl`}>
          uchains
        </h1>
      </div>
      <div className="text-3xl"><GiHamburgerMenu /></div>
    </header>
  );
};

export default Header;
