import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  XCircleIcon,
} from "@heroicons/react/16/solid";
import Logo from "../../assets/images/nav-logo.png";
import { Container } from "../../Atoms";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Gallery", href: "/#gallery" },
  { name: "About Us", href: "/#about-us" },
  { name: "Classes", href: "/#program" },
  { name: "Pages", href: "/#pages" },
  { name: "Shop", href: "/#shop" },
  { name: "Blog", href: "/#blog" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const handleMobileMenu = () => setIsMobileMenu(!isMobileMenu);
  let location = useLocation();
  let checkIsActive = `${location.pathname}${location.hash}`;
  console.log(checkIsActive);
  return (
    <Container className={"relative"}>
      <div className="flex flex-rows justify-between items-center p-4">
        <Bars3BottomLeftIcon
          className="h-7 w-7 text-black cursor-pointer hidden md:hidden lg:hidden sm:block xs:block"
          onClick={handleMobileMenu}
        />
        <div className="inline-flex items-center gap-x-2">
          <img src={Logo} alt="Logo" className="w-9 h-9 object-cover" />
          <div className="text-xl md:text-2xl lg:text-3xl text-blackfont-fira-sans font-extrabold capitalize ">
            Fit<span className="text-red-500">hubb</span>
          </div>
        </div>
        <div className="inline-flex items-center gap-x-4">
          <ul className="inline-flex gap-x-2 md:gap-x-3 lg:gap-x-4 md:inline-flex xmd:hidden sm:hidden xs:hidden">
            {navigation.map((item, index) => (
              <li key={index}>
                {item.href.split("").includes("#") ? (
                  <a
                    href={item.href}
                    className={clsx(
                      "font-fira-sans font-medium uppercase lg:text-lg md:text-md sm:text-sm",
                      {
                        "text-red-600": checkIsActive === item.href,
                        "text-slate-600": !(checkIsActive === item.href),
                      }
                    )}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    to={item.href}
                    className={clsx(
                      "font-fira-sans font-medium uppercase lg:text-lg md:text-md sm:text-sm",
                      {
                        "text-red-600": checkIsActive === item.href,
                        "text-slate-600": !(checkIsActive === item.href),
                      }
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <MagnifyingGlassIcon className="h-6 w-6 text-slate-600 cursor-pointer" />
          <ShoppingCartIcon className="h-6 w-6 text-slate-600 cursor-pointer" />
        </div>
      </div>

      {/* Mobile Menue */}
      {isMobileMenu && (
        <div className="z-[100] w-full h-[100vh] fixed top-0 left-0 bg-slate-100 text-black pt-4 flex flex-col">
          <div className="w-full inline-flex justify-between items-start">
            <div className="inline-flex items-center gap-x-3 pl-3 mb-4">
              <img src={Logo} alt="Logo" className="w-10 h-10 object-cover" />
              <div className="text-xl md:text-2xl lg:text-3xl text-blackfont-fira-sans font-extrabold capitalize ">
                Fit<span className="text-red-500">hubb</span>
              </div>
            </div>
            <XCircleIcon
              className="h-6 w-6 mt-1 mr-2 text-black cursor-pointer hover:text-red-550"
              onClick={handleMobileMenu}
            />
          </div>

          <ul className="inline-block leading-10 w-full">
            {navigation.map((item, index) => (
              <li key={index} className="border border-b w-full pl-5">
                {item.href.split("").includes("#") ? (
                  <a
                    href={item.href}
                    onClick={handleMobileMenu}
                    className={clsx(
                      "font-fira-sans font-medium uppercase lg:text-lg md:text-md sm:text-sm",
                      {
                        "text-red-600": checkIsActive === item.href,
                        "text-slate-600": !(checkIsActive === item.href),
                      }
                    )}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    to={item.href}
                    onClick={handleMobileMenu}
                    className={clsx(
                      "font-fira-sans font-medium uppercase lg:text-lg md:text-md sm:text-sm",
                      {
                        "text-red-600": checkIsActive === item.href,
                        "text-slate-600": !(checkIsActive === item.href),
                      }
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </Container>
  );
}
