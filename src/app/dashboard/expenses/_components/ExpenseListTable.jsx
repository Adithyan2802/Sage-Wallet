import { db } from "/utils/dbConfig";
import { Expenses } from "/utils/schema";
import { eq } from "drizzle-orm";
import { Trash } from "lucide-react";
import React from "react";
import { toast } from "sonner";
import { Button } from "../../../../components/ui/button";

function ExpenseListTable({ expensesList, refreshData }) {
  const deleteExpense = async (expense) => {
    const result = await db
      .delete(Expenses)
      .where(eq(Expenses.id, expense.id))
      .returning();

    if (result) {
      toast("Expense Deleted!");
      refreshData();
    }
  };
  return (
    <div className="mt-3 p-4 rounded-xl bg-neutral-900">
      <div className="grid grid-cols-4  text-white rounded-xl bg-violet-800/20 p-3 ">
        <h2 className="font-bold">NAME</h2>
        <h2 className="font-bold">AMOUNT</h2>
        <h2 className="font-bold">DATE</h2>
        <h2 className="font-bold">ACTION</h2>
      </div>
      {expensesList.map((expenses, index) => (
        <div className="grid grid-cols-4 items-center rounded-xl text-white p-2 m-2">
          <h2>{expenses.name}</h2>
          <h2>${expenses.amount}</h2>
          <h2>{expenses.createdAt}</h2>
          <h2>
            <Button
              onClick={() => deleteExpense(expenses)}
              variant="destructive"
              className="items-center"
            >
              Delete
              <Trash className="text-white ml-2" />
            </Button>
          </h2>
        </div>
      ))}
    </div>
  );
}

export default ExpenseListTable;
