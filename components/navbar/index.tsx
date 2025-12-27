import Link from "next/link";
import React from "react";
import { Theme } from "./Theme";

function Index() {
  return (
    <nav className="w-full flex-between p-6  gap-6 bg-background/30 fixed top-0 left-0 right-0 z-20 max-w-250  mx-auto">
      <Link href="/">
        <p className="font-space-grotesk h2-bold text-dark-100 dark:text-light-900 ">
          <span className="text-primary-500">A</span>namuL
          <span className="text-primary-500 text-[35px]">.</span>
        </p>
      </Link>
      <div className="flex items-center gap-6">
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
        <div>
          <Theme />
        </div>
      </div>
    </nav>
  );
}

export default Index;
