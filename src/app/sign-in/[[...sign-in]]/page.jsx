import { SignIn, SignUp } from "@clerk/nextjs";
import { SparklesCore } from "../../../components/ui/sparkles";
import { FlipWords } from "../../../components/ui/flip-words";
import Image from "next/image";

export default function Page() {
  const words = ["Budgets", "Expenses", "Incomes", "Financial Health"];
  return (
    <main>
      <div className="w-full absolute inset-0 h-screen -z-10">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={50}
          className="w-full h-full"
          particleColor="#facc15"
        />
      </div>
      <div className="lg:grid lg:min-h-screen lg:grid-cols-2">
        <section className="relative flex flex-col justify-center items-center">
          <div className="flex flex-row items-center text-3xl mt-2">
            <Image src={"/logo.svg"} alt="logo" width={50} height={25} />
            <span className="text-black-800 font-bold">Sage Wallet</span>
          </div>
          <div className="p-4">
            <div className="absolute inset-x-20 bg-gradient-to-r from-transparent via-indigo-600 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 bg-gradient-to-r from-transparent via-indigo-600 to-transparent h-px w-3/4" />
            <div className="absolute bg-gradient-to-r from-transparent via-violet-800 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute bg-gradient-to-r from-transparent via-violet-800 to-transparent h-px w-1/4" />
          </div>
          <div className="text-4xl p-10 mx-auto font-normal text-neutral-600 dark:text-neutral-400">
            Take control of your
            <FlipWords words={words} />
            with us.
          </div>
        </section>
        <section className="flex items-center justify-center px-8 py-8 ">
          <div className="max-w-xl lg:max-w-3xl">
            <SignIn />
          </div>
        </section>
      </div>
    </main>
  );
}
