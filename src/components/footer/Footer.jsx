import React from "react";
import Link from "next/link";
import Logo from "@/assets/logo.png";
import Image from "next/image";

const Footer = () => {
  const footerMenu = [
    {
      id: 0,
      text: "Home",
      url: "#",
    },
    {
      id: 1,
      text: "Shop",
      url: "#",
    },
    {
      id: 2,
      text: "About",
      url: "#",
    },
    {
      id: 3,
      text: "Contact",
      url: "#",
    },
    {
      id: 4,
      text: "Blog",
      url: "#",
    },
  ];

  const footerHelp = [
    {
      id: 0,
      text: "Payment Options",
      url: "#",
    },
    {
      id: 1,
      text: "Returns",
      url: "#",
    },
    {
      id: 2,
      text: "Privacy Policies",
      url: "#",
    },
  ];

  return (
    <footer className="pt-12 pb-8">
      <div className="max-w-container mx-auto">
       <div className="flex flex-col gap-y-12">
       <div className="grid grid-cols-4 justify-between">
          <div className="flex flex-col gap-y-50">
            <Link href="/">
              <Image src={Logo} alt="Logo" quality={100} />
            </Link>
            <p className="text-base capitalize text-footerH hover:text-black">
              400 University Drive Suite
              <br /> 200 Coral Gables,
              <br />
              <span className="uppercase">FL 33134 USA</span>
            </p>
          </div>
          <div>
            <h4 className="capitalize text-lg font-semibold pb-50">Links</h4>
            <ul className="flex flex-col justify-between gap-y-40 ">
              {footerMenu.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.url}
                    className="text-base font-medium capitalize text-footerH hover:text-black"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="capitalize text-lg font-semibold pb-50">Help</h4>
            <ul className="flex flex-col justify-between gap-y-40 ">
              {footerHelp.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.url}
                    className="text-base font-medium capitalize text-footerH hover:text-black"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
          <h4 className="capitalize text-lg font-semibold pb-50">Newsletter</h4>
           <div className="flex justify-between items-center gap-x-2">
              <input type="email" placeholder="Enter Your Email Address" className=" outline-none border-b-2 border-black w-[215px]"/>
              <p className=" uppercase relative after:absolute after:content-[''] after:w-full after:h-[2px] after:bottom-0 after:left-0 after:bg-black cursor-pointer">SUBSCRIBE</p>
           </div>
          </div>
        </div>
        <p className="text-base">2024 furino. All rights reverved</p>
       </div>
      </div>
    </footer>
  );
};

export default Footer;
