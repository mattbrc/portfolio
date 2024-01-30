import Link from "next/link";
import * as React from "react";
import { ModeToggle } from "./mode-toggle";

export function Nav() {
  return (
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
        href="/projects"
      >
        Projects
      </Link>
      <Link
        className="text-sm font-medium hover:underline underline-offset-4"
        href="/contact"
      >
        Connect
      </Link>
      <ModeToggle />
    </nav>
  );
}
