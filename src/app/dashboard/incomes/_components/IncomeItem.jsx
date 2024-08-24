import Link from "next/link";
import React from "react";

function IncomeItem({ income, totalIncome }) {
  const calculateProgressPerc = () => {
    const perc = (income.amount / totalIncome) * 100;
    console.log(perc);
    return perc > 100 ? 100 : perc.toFixed(2);
  };
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
        <div className="mt-5">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xs text-neutral-400">
              {calculateProgressPerc()}% of Total
            </h2>
          </div>
          <div
            className="w-full
            bg-neutral-600 h-2 rounded-full"
          >
            <div
              className="
            bg-yellow-500 h-2 rounded-full"
              style={{
                width: `${calculateProgressPerc()}%`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default IncomeItem;
