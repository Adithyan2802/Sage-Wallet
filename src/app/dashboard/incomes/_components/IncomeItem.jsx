import Link from "next/link";
import React from "react";

function IncomeItem({ income }) {
  return (
    <Link href={"/dashboard/incomes/" + income?.id}>
      <div
        className="p-5 hover:border rounded-xl bg-neutral-900
    hover:bg-black cursor-pointer h-[170px]"
      >
        <div className="flex gap-2 items-center justify-between">
          <div className="flex gap-2 items-center">
            <h2
              className="text-2xl p-3 px-4
              bg-slate-100 rounded-full 
              "
            >
              {income?.icon}
            </h2>
            <div>
              <h2 className="font-bold">{income.name}</h2>
            </div>
          </div>
          <h2 className="font-bold text-primary text-lg"> ${income.amount}</h2>
        </div>
      </div>
    </Link>
  );
}

export default IncomeItem;
