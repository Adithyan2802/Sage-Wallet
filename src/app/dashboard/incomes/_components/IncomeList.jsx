"use client";
import React, { useEffect, useState } from "react";
import CreateIncomes from "./CreateIncomes";
import { db } from "/utils/dbConfig";
import { desc, eq, getTableColumns, sql } from "drizzle-orm";
import { Incomes, Expenses } from "/utils/schema";
import { useUser } from "@clerk/nextjs";
import IncomeItem from "./IncomeItem";

function IncomeList() {
  const [incomelist, setIncomelist] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);
  const { user } = useUser();
  useEffect(() => {
    user && getIncomelist();
  }, [user]);

  const getIncomelist = async () => {
    let totalIncome_ = 0;
    const result = await db.select().from(Incomes);
    setIncomelist(result);
    result.forEach((element) => {
      totalIncome_ += parseInt(element.amount);
    });
    setTotalIncome(totalIncome_);
  };

  return (
    <div className="mt-7">
      <div
        className="grid grid-cols-1
        md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        <CreateIncomes refreshData={() => getIncomelist()} />
        {console.log("test" + totalIncome)}
        {incomelist?.length > 0
          ? incomelist.map((income, index) => (
              <IncomeItem
                income={income}
                totalIncome={totalIncome}
                key={index}
              />
            ))
          : [1, 2, 3, 4, 5].map((item, index) => (
              <div
                key={index}
                className="w-full bg-neutral-400 rounded-lg
                h-[150px] animate-pulse"
              ></div>
            ))}
      </div>
    </div>
  );
}

export default IncomeList;
