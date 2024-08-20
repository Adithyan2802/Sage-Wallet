import React, { useEffect } from "react";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

import {
  LayoutGrid,
  PiggyBank,
  ReceiptText,
  ShieldCheck,
  CircleDollarSign,
} from "lucide-react";

import { usePathname } from "next/navigation";
import Link from "next/link";

function SideNav() {
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

  useEffect(() => {
    console.log(path);
  }, [path]);

  return (
    <div className="h-screen p-5 border-r-2 shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex flex-row items-center">
          <Image src={"/logo.svg"} alt="logo" width={50} height={25} />
          <span className="text-black-800 font-bold text-xl">Sage Wallet</span>
        </div>

        <div className="mt-4">
          {menu.map((menu, index) => (
            <Link href={menu.path} key={index}>
              <h2
                className={`flex gap-2 items-center
                        text-gray-500 font-medium
                        rounded-lg
                        mb-2
                        p-4 cursor-pointer
                        hover:text-primary hover:bg-sky-600/20
                        ${path == menu.path && "text-primary bg-sky-600/20"}
                        `}
              >
                <menu.icon />
                {menu.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex">
        <UserButton />
        <p className="p-5">My Profile</p>
      </div>
    </div>
  );
}

export default SideNav;
