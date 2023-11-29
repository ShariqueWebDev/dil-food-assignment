import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";

import Wrapper from "./Wrapper";

const Header = () => {
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScrollbar = () => {
    if (window.scrollY > 500 && window.scrollY > lastScrollY) {
      setShow("-translate-y-[80px]");
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollbar);
    return () => {
      window.removeEventListener("scroll", handleScrollbar);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`w-full h-[60px] md:[80px] bg-white shadow-md text-red-600 flex justify-center items-center z-20 sticky top-0 transition-transform duration-300  ${show} `}
    >
      <Wrapper className={`h-[60px] flex justify-between items-center`}>
        <Link href={"/"}>
            <h1 className="text-[30px] font-bold max-md:text-[25px]">{"Wal-Cart"}</h1>
        </Link>

        <div className="flex">  
            <ul className="flex gap-10 font-medium max-md:hidden">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">About</li>
                <li className="cursor-pointer">Contact</li>
            </ul>
        </div>
        <div className="flex justify-center items-center gap-5 text-black mr-3">
          {/* RIGHT ICONS SECTIONS */}
          <div className="cursor-pointer flex justify-center items-center relative ">
            <Link href={"/cart"}>
              <IoMdHeartEmpty className="" size={18} />
            </Link>
            <div className="absolute text-xs bottom-[12px] left-[10px] bg-red-600 w-5  rounded-full text-center px-1">
              51
            </div>
          </div>
          <div className="cursor-pointer flex justify-center items-center relative ">
            <Link href={"/cart/cart"}>
              <BsCart className="" size={18} />
            </Link>
              <div className="absolute text-xs bottom-[12px] left-[10px] bg-red-600 w-5  rounded-full text-center">
                {10}
              </div>
            
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
