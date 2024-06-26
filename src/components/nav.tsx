import Link from "next/link";
import * as React from "react";
import { ModeToggle } from "./mode-toggle";
import { contactConfig } from "@/config/contact";

export function Nav() {
  return (
    <div className="bg-background/60 fixed top-0 left-0 p-2 flex items-end w-full flex-col gap-2 tracking-tighter">
      <nav className="items-center font-mono ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/"
        >
          Home
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/about"
        >
          About
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href={contactConfig.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href={contactConfig.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href={contactConfig.instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          IG
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href={contactConfig.x}
          target="_blank"
          rel="noopener noreferrer"
        >
          X
        </Link>
        <ModeToggle />
      </nav>
    </div>
  );
}
