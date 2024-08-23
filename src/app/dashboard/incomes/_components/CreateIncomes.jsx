"use client";
import React, { useState } from "react";
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
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { db } from "/utils/dbConfig";
import { Incomes } from "/utils/schema";
import { useUser } from "@clerk/nextjs";
import { toast } from "sonner";
import { Loader } from "lucide-react";

function CreateIncomes({ refreshData }) {
  const [emojiIcon, setEmojiIcon] = useState("😀");
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState();
  const [amount, setAmount] = useState();

  const { user } = useUser();

  /**
   * Used to Create New Income
   */
  const onCreateIncomes = async () => {
    setLoading(true);
    const result = await db
      .insert(Incomes)
      .values({
        name: name,
        amount: amount,
        createdBy: user?.primaryEmailAddress?.emailAddress,
        icon: emojiIcon,
      })
      .returning({ insertedId: Incomes.id });

    if (result) {
      setLoading(false);
      refreshData();
      toast("New Income Source Created!");
    }
    setLoading(false);
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <div
            className="bg-neutral-400/20 hover:bg-neutral-200/20  p-5 rounded-xl
            items-center flex flex-col border-2 border-dashed
            cursor-pointer h-[170px] justify-center"
          >
            <h2 className="text-3xl">+</h2>
            <h2>Create New Income Source</h2>
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-bold text-2xl">
              Create New Income Source
            </DialogTitle>
            <DialogDescription>
              <div className="mt-2">
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
                  <h2 className="text-white font-medium my-1">Source Name</h2>
                  <Input
                    placeholder="e.g. Salary"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mt-4">
                  <h2 className="text-white font-medium my-1">Montly Amount</h2>
                  <Input
                    type="number"
                    placeholder="e.g. 2000$"
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
                onClick={() => onCreateIncomes()}
                className="mt-5 w-full rounded bg-violet-800/40 text-white"
              >
                {loading ? (
                  <Loader className="animate-spin" />
                ) : (
                  "Create Income Source"
                )}
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CreateIncomes;
