import React, {useEffect} from "react";
import Image from "next/image";

import {
    LayoutGrid,
    PiggyBank,
    ReceiptText,
    ShieldCheck,
    CircleDollarSign,
} from 'lucide-react';

import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import Link from "next/link";

function SideNav() {
    const menu = [
        {
            id:1,
            name: "Dashboard",
            icon: LayoutGrid,
            path: "/dashboard",
        },
        {
            id:2,
            name: "Incomes",
            icon: CircleDollarSign,
            path: "/dashboard/incomes",
        },
        {
            id:3,
            name: "Budgets",
            icon: PiggyBank,
            path: "/dashboard/budgets",
        },
        {
            id:4,
            name: "Expenses",
            icon: ReceiptText,
            path: "/dashboard/expenses",
        },
    ];

    const path = usePathname()

    useEffect(() => {console.log(path);}, [path]);
    
      return (
        <div className="h-screen p-5 border shadow-sm">
          <div className="flex flex-row items-center">
            <Image src={'/logo.svg'} alt='logo' width={50} height={25}/>
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
                        hover:text-primary hover:bg-gray-100
                        ${path == menu.path && "text-primary bg-gray-100"}
                        `}
                >
                  <menu.icon />
                  {menu.name}
                </h2>
              </Link>
            ))}
          </div>
          <div
            className="fixed bottom-10 p-5 flex gap-2
                items-center"
          >
            <UserButton />
            Profile
          </div>
        </div>
      );
}
    
export default SideNav;