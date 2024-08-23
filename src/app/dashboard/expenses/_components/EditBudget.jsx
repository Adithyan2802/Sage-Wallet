"use client";
import { Button } from "../../../../components/ui/button";
import { PenBox } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Loader } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../../components/ui/dialog";
import EmojiPicker from "emoji-picker-react";
import { useUser } from "@clerk/nextjs";
import { Input } from "../../../../components/ui/input";
import { db } from "/utils/dbConfig";
import { Budgets } from "/utils/schema";
import { eq } from "drizzle-orm";
import { toast } from "sonner";

function EditBudget({ budgetInfo, refreshData }) {
  const [emojiIcon, setEmojiIcon] = useState(budgetInfo?.icon);
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState();
  const [amount, setAmount] = useState();

  const { user } = useUser();

  useEffect(() => {
    if (budgetInfo) {
      setEmojiIcon(budgetInfo?.icon);
      setAmount(budgetInfo.amount);
      setName(budgetInfo.name);
    }
  }, [budgetInfo]);

  const onUpdateBudget = async () => {
    setLoading(true);
    const result = await db
      .update(Budgets)
      .set({
        name: name,
        amount: amount,
        icon: emojiIcon,
      })
      .where(eq(Budgets.id, budgetInfo.id))
      .returning();

    if (result) {
      setLoading(false);
      refreshData();
      toast("Budget Updated!");
    }
    setLoading(false);
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="flex space-x-2 gap-2 rounded">
            {" "}
            <PenBox className="w-4" /> Edit
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-bold text-2xl">
              Update Budget
            </DialogTitle>
            <DialogDescription>
              <div className="mt-2">
                <h2 className="text-white font-medium my-1">Budget Emoji</h2>
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
                  <h2 className="text-white font-medium my-1">Budget Name</h2>
                  <Input
                    placeholder="e.g. Home Decor"
                    defaultValue={budgetInfo?.name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mt-4">
                  <h2 className="text-white font-medium my-1">Budget Amount</h2>
                  <Input
                    type="number"
                    defaultValue={budgetInfo?.amount}
                    placeholder="e.g. 500$"
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button
                disabled={!(name && amount) || amount < 0 || loading}
                onClick={() => onUpdateBudget()}
                className="mt-5 w-full rounded bg-violet-800/40 hover:bg-violet-600/40 text-white"
              >
                {loading ? (
                  <Loader className="animate-spin" />
                ) : (
                  "Update Budget"
                )}
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default EditBudget;
