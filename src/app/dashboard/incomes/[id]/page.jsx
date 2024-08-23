"use client";

import React, { useEffect, useState } from "react";
import { db } from "/utils/dbConfig";
import { Incomes } from "/utils/schema";
import { useUser } from "@clerk/nextjs";
import EditIncomes from "../_components/EditIncomes";
import { eq, getTableColumns } from "drizzle-orm";

function Income({ params }) {
  const { user } = useUser();
  const [incomeInfo, setincomeInfo] = useState();
  useEffect(() => {
    user && getincomeInfo();
  }, [user]);
  /*
   * Get Income Information
   */
  const getincomeInfo = async () => {
    const result = await db
      .select()
      .from(Incomes)
      .where(eq(Incomes.id, params.id));

    setincomeInfo(result[0]);
  };

  return (
    <div className="p-10">
      {incomeInfo && (
        <EditIncomes
          incomeInfo={incomeInfo}
          refreshData={() => getincomeInfo()}
        />
      )}
    </div>
  );
}

export default Income;
