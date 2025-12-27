import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Index() {
  return (
    <section id="hero" className="flex">
      <div className=" ">
        <div className="p-3 bg-linear-to-r from-primary/10 dark:from-primary/5 to-transparent -ml-3 mb-4 sm:mb-6">
          <div className="rounded-l-full px-4 py-2.5 sm:px-6 sm:py-3.5 inline-flex items-center gap-4 bg-linear-to-r from-primary/70 to-transparent">
            <span className="shrink-0 rounded-full block size-2 bg-background shadow-[0_0_5px_rgba(var(--primary-rgb),0.4),0_0_10px_rgba(var(--primary-rgb),0.3)]"></span>
            <div>
              <span className="font-bold italic">MERN</span> Stack Developer |
              <span className="text-primary-500 font-medium">
                {" "}
                @Open to Work
              </span>
            </div>
            <Image src="/iconic.webp" alt="" width={20} height={20} />
          </div>
        </div>

        <div>
          <h2 className="font-bold text-5xl mb-2 md:mb-4">
            <span>Hi I am</span>{" "}
            <span className="text-primary-500 relative">
              Anamul
              <svg
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-6"
                viewBox="0 0 400 20"
                fill="none"
              >
                <path
                  d="M5 15C100 5 300 5 395 15"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  className="text-primary-300"
                ></path>
                <path
                  d="M5 10C150 2 250 2 395 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="text-primary-400"
                ></path>
              </svg>
            </span>
          </h2>
          <div className="text-secondary-foreground">
            <p className="mb-4">
              I work with Rust & Backend Ecosystem, and helping developers
              rebuild and redefine fundamental concepts through powerful mental
              models.
            </p>
            <p>
              Need a modern high performance, scalable software that stands out?{" "}
              <Link href="/" className="text-primary-500 hover:underline">
                Hire me?
              </Link>
            </p>
          </div>
        </div>

        <div>
          <button className="inline-flex px-4 py-3 cursor-pointer font-medium text-foreground items-center gap-3 transition-all hover:translate-y-0.5 shadow-feature-card border border-foreground/5 rounded-xl bg-background">
            <span>Learn More</span>
            <span>
              <ArrowDown />
            </span>
          </button>
          <button>More about me</button>
        </div>
      </div>

      {/* image */}
      <div className="hidden md:flex items-center justify-center w-full max-w-37.5 sm:max-w-45 md:max-w-50 lg:max-w-62.5 shrink-0 "></div>
    </section>
  );
}

export default Index;
