import React, { useEffect } from "react";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

import {
  LayoutGrid,
  PiggyBank,
  ReceiptText,
  ShieldCheck,
  CircleDollarSign,
  Menu,
  X,
} from "lucide-react";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { useState } from "react";

function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const menu = [
    {
      id: 1,
      name: "Dashboard",
      icon: LayoutGrid,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Incomes",
      icon: CircleDollarSign,
      path: "/dashboard/incomes",
    },
    {
      id: 3,
      name: "Budgets",
      icon: PiggyBank,
      path: "/dashboard/budgets",
    },
    {
      id: 4,
      name: "Expenses",
      icon: ReceiptText,
      path: "/dashboard/expenses",
    },
  ];

  const path = usePathname();

  return (
    // <div className="h-screen p-5 border-r-2 shadow-sm flex flex-col justify-between">
    <div className="w-screen p-5 z-10 flex justify-between">
      {/* Logo */}
      <Link href="/dashboard">
        <div className="flex flex-row items-center">
          <Image src={"/logo.svg"} alt="logo" width={50} height={25} />
          <span className="text-black-800 font-bold text-xl">Sage Wallet</span>
        </div>
      </Link>
      {/* Menu */}
      <div className="lg:flex items-center hidden">
        {menu.map((menu, index) => (
          <Link href={menu.path} key={index}>
            <h2
              className={`flex gap-2 items-center
                        text-gray-500 font-medium
                        rounded-lg
                        mx-2
                        p-4 cursor-pointer
                        hover:text-primary hover:bg-violet-500/10
                        ${path == menu.path && "text-primary bg-violet-800/20"}
                        `}
            >
              <menu.icon />
              {menu.name}
            </h2>
          </Link>
        ))}
      </div>

      {/* Profile */}
      <div className="lg:flex items-center hidden">
        <UserButton />
        <p className="p-5">My Profile</p>
      </div>

      {/* HAMBURGER BUTTON FOR MOBILE */}
      <div className="lg:hidden">
        <button
          className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
          onClick={() => setNavbar(!navbar)}
        >
          {navbar ? (
            <X className="text-violet-600" />
          ) : (
            <Menu className="text-violet-600" />
          )}
        </button>
      </div>

      <div
        className={`lg:hidden flex flex-col justify-center text-center  ${
          navbar ? "mt-12 mr-5" : "hidden"
        }`}
      >
        <div>
          {menu.map((menu, index) => (
            <Link
              href={menu.path}
              key={index}
              onClick={() => setNavbar(!navbar)}
            >
              <h2
                className={`flex gap-2 items-center
                        text-gray-500 font-medium
                        rounded-lg
                        m-1 z-20
                        p-4 cursor-pointer
                        hover:text-primary hover:bg-violet-500/10
                        ${path == menu.path && "text-primary bg-violet-800/20"}
                        `}
              >
                <menu.icon />
                {menu.name}
              </h2>
            </Link>
          ))}
          {/* Profile */}
          <UserButton />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
