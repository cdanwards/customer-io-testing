"use client";
import { useEffect } from "react";
import CustomerIOTracker from "./components/CustomerIOHandler";
import { customerIoIdentify } from "./components/customerIoUtils";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Customer IO Testing
        </p>
      </div>
      <button
        className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-150 ease-in-out"
        onClick={() =>
          customerIoIdentify({
            email: "testingemailforaaron@test.com",
            id: "324312",
          })
        }
      >
        Click me
      </button>
    </main>
  );
}
