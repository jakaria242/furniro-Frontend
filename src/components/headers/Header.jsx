import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo.png"
import { FaRegUser } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import MenuBar from "./MenuBar";





const Header = () => {
  return (
    <div className="py-30">
      <div className="max-w-container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <Link href="/">
              <Image src={Logo} alt="Logo" quality={100}/>
            </Link>
          </div>
          <div>
            <MenuBar/>
          </div>
          <div className="flex justify-between items-center gap-x-35 text-xl">
            <FaRegUser className="cursor-pointer"/>
            <FiSearch className="cursor-pointer"/>
            <FaRegHeart className="cursor-pointer"/>
            <MdOutlineShoppingCart className="text-2xl cursor-pointer"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
