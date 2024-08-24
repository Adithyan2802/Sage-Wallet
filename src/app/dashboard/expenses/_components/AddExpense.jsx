import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { db } from "/utils/dbConfig";
import { Budgets, Expenses } from "/utils/schema";
import { Loader } from "lucide-react";
import moment from "moment";
import React, { useState } from "react";
import { toast } from "sonner";

function AddExpense({ budgetId, user, refreshData }) {
  const [name, setName] = useState();
  const [amount, setAmount] = useState();
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState();
  /**
   * Used to Add New Expense
   */
  const addNewExpense = async () => {
    setLoading(true);
    const result = await db
      .insert(Expenses)
      .values({
        name: name,
        amount: amount,
        budgetId: budgetId,
        createdAt: date,
      })
      .returning({ insertedId: Budgets.id });

    setAmount("");
    setName("");
    if (result) {
      setLoading(false);
      refreshData();
      toast("New Expense Added!");
    }
    setLoading(false);
  };
  return (
    <div className="border p-5 rounded-2xl">
      <h2 className="font-bold text-2xl">Add Expense</h2>
      <div className="mt-4">
        <h2 className="text-white font-medium my-1">Expense Name</h2>
        <Input
          placeholder="e.g. Home Essentials"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mt-4">
        <h2 className="text-white font-medium my-1">Expense Amount</h2>
        <Input
          placeholder="e.g. 500"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="mt-4">
        <h2 className="text-white font-medium my-1">Date of Expense</h2>
        <Input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <Button
        disabled={!(name && amount) || loading || amount < 0}
        onClick={() => addNewExpense()}
        className="mt-5 w-full rounded bg-violet-800/40 text-white hover:bg-violet-600/40"
      >
        {loading ? <Loader className="animate-spin" /> : "Add New Expense"}
      </Button>
    </div>
  );
}

export default AddExpense;
