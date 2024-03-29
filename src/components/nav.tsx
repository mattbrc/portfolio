import Link from "next/link";
import * as React from "react";
import { ModeToggle } from "./mode-toggle";
import { contactConfig } from "@/config/contact";
import { Button } from "./ui/button";

export function Nav() {
  return (
    <div className="bg-background/60 fixed top-0 left-0 p-2 flex items-end w-full flex-col gap-2 tracking-tighter">
      <nav className="items-center font-mono ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href={contactConfig.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          X
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href={contactConfig.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          Telegram
        </Link>
        <Button asChild>
          <Link href="">Buy on UNISWAP</Link>
        </Button>
        {/* <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href={contactConfig.strava}
          target="_blank"
          rel="noopener noreferrer"
        >
          Strava
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href={contactConfig.instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href={contactConfig.x}
          target="_blank"
          rel="noopener noreferrer"
        >
          X
        </Link> */}
        <ModeToggle />
      </nav>
    </div>
  );
}
