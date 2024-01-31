import { Footer } from "@/components/footer";
import { ModeToggle } from "@/components/mode-toggle";
import { Nav } from "@/components/nav";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function Home() {
  return (
    <div className="pt-4 px-8">
      <h1 className="font-mono text-xl pb-1">Projects</h1>
      <Separator />
      <div className="flex items-center pt-4">
        <Link
          href="https://app.acidgambit.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="mr-3 underline underline-offset-4 font-semibold">
            AG Studio
          </p>
        </Link>
        <Badge variant="typescript">TypeScript</Badge>
      </div>
      <p className="py-2">
        Performance training app focused on building freak athletes with 200
        users and growing.
      </p>
      <div className="flex items-center pt-4">
        <Link
          href="https://github.com/mattbrc/endurance-is-art"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="mr-3 underline underline-offset-4 font-semibold">
            Heatmaps
          </p>
        </Link>
        <Badge variant="typescript">TypeScript</Badge>
      </div>
      <p className="py-2">Custom strava heatmaps.</p>
      <div className="flex items-center pt-4">
        <Link
          href="https://github.com/mattbrc/endurance-is-art"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="mr-3 underline underline-offset-4 font-semibold">
            AG Blog
          </p>
        </Link>
        <Badge variant="astro">Astro</Badge>
      </div>
      <p className="py-2">
        Backup to the{" "}
        <Link href="https://acidgambit.substack.com">AG Substack blog</Link>{" "}
        written in Astro.
      </p>
      <div className="flex items-center pt-4">
        <Link
          href="https://github.com/mattbrc/gastimate"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="mr-3 underline underline-offset-4 font-semibold">
            Gastimate
          </p>
        </Link>
        <Badge variant="solidity">Solidity</Badge>
      </div>
      <p className="py-2">
        A method of computing gas cost in USD for foundry users. Convert
        estimated function gas usage to USD.
      </p>
      <div className="flex items-center pt-4">
        <Link
          href="https://github.com/mattbrc/ag-links"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="mr-3 underline underline-offset-4 font-semibold">
            AG Links
          </p>
        </Link>
        <Badge variant="typescript">TypeScript</Badge>
      </div>
      <p className="py-2">Acid Gambit Linktree.</p>
      {/* <div className="pt-4">
        <Separator />
      </div> */}

      <h1 className="font-mono text-xl py-1 pt-4">Work</h1>
      <Separator />
      {/* <div className="flex items-center pt-4">
        <Link
          href="https://app.acidgambit.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="mr-3 underline underline-offset-4 font-semibold">
            AG Studio
          </p>
        </Link>
      </div> */}
      <p className="pt-4 pb-1">
        Currently a program manager at the Pentagon with a focus on data
        analytics and engineering improvements for the Army&apos;s largest HR
        system with 1M+ users.
      </p>
      <Badge variant="typescript">US Army</Badge>
    </div>
  );
}
