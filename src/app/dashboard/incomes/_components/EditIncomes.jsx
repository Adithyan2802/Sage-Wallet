"use client";
import { Button } from "../../../../components/ui/button";
import React, { useEffect, useState } from "react";
import EmojiPicker from "emoji-picker-react";
import { Input } from "../../../../components/ui/input";
import { db } from "/utils/dbConfig";
import { Incomes } from "/utils/schema";
import { eq } from "drizzle-orm";
import { toast } from "sonner";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Trash } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../../../components/ui/alert-dialog";

function EditIncomes({ incomeInfo, refreshData }) {
  const [emojiIcon, setEmojiIcon] = useState(incomeInfo?.icon);
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState();
  const [amount, setAmount] = useState();
  const route = useRouter();

  useEffect(() => {
    if (incomeInfo) {
      setEmojiIcon(incomeInfo?.icon);
      setAmount(incomeInfo.amount);
      setName(incomeInfo.name);
    }
  }, [incomeInfo]);

  const onUpdateIncome = async () => {
    setLoading(true);
    const result = await db
      .update(Incomes)
      .set({
        name: name,
        amount: amount,
        icon: emojiIcon,
      })
      .where(eq(Incomes.id, incomeInfo.id))
      .returning();

    if (result) {
      setLoading(false);
      refreshData();
      toast("Income Updated!");
      route.replace("/dashboard/incomes");
    }
    setLoading(false);
  };

  /*
   * Used to Delete income
   */

  const deleteIncome = async () => {
    const deleteIncomeResult = await db
      .delete(Incomes)
      .where(eq(Incomes.id, incomeInfo.id))
      .returning();

    if (deleteIncomeResult) {
      setLoading(false);
      refreshData();
      toast("Income Deleted!");
      route.replace("/dashboard/incomes");
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <span className="flex gap-2 items-center my-2">
          <ArrowLeft onClick={() => route.back()} className="cursor-pointer" />
          <h2 className="font-bold text-2xl"> Modify Income Source</h2>
        </span>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button className="flex gap-2 rounded" variant="destructive">
              <Trash className="w-4" /> Delete
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This will permanently delete your income record and remove from
                our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                className="text-red-600"
                onClick={() => deleteIncome()}
              >
                DELETE
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
      <div className="mt-4">
        <h2 className="text-white font-medium my-1">Income Emoji</h2>
        <Button
          variant="outline"
          className="text-lg"
          onClick={() => setOpenEmojiPicker(!openEmojiPicker)}
        >
          {emojiIcon}
        </Button>
        <div className="absolute z-20">
          <EmojiPicker
            theme="dark"
            open={openEmojiPicker}
            onEmojiClick={(e) => {
              setEmojiIcon(e.emoji);
              setOpenEmojiPicker(false);
            }}
          />
        </div>
        <div className="mt-4">
          <h2 className="text-white font-medium my-1">Income Name</h2>
          <Input
            placeholder="e.g. Salary"
            defaultValue={incomeInfo?.name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <h2 className="text-white font-medium my-1">Income Amount</h2>
          <Input
            type="number"
            defaultValue={incomeInfo?.amount}
            placeholder="e.g. 2000$"
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
      </div>

      <Button
        disabled={!(name && amount) || amount < 0 || loading}
        onClick={() => onUpdateIncome()}
        className="mt-5 w-full rounded bg-violet-800/40 hover:bg-violet-600/40 text-white"
      >
        {loading ? <Loader className="animate-spin" /> : "Update Income"}
      </Button>
    </div>
  );
}

export default EditIncomes;
