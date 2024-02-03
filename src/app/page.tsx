import { Footer } from "@/components/footer";
import { ModeToggle } from "@/components/mode-toggle";
import { Nav } from "@/components/nav";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function Home() {
  return (
    <div className="px-8 pt-4">
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
      <p className="pt-2">
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
      <p className="pt-2">Custom strava heatmaps.</p>
      <div className="flex items-center pt-4">
        <Link
          href="https://blog.acidgambit.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="mr-3 underline underline-offset-4 font-semibold">
            Astro Blog
          </p>
        </Link>
        <Badge variant="astro">Astro</Badge>
      </div>
      <p className="pt-2">
        Minimalist blog inspired by Bearblog and backup to the AG Substack Blog
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

      <h1 className="font-mono text-xl py-1 pt-3">Work</h1>
      <Separator />

      <p className="pt-4 pb-1">
        Currently a program manager at the Pentagon with a focus on data
        analytics and engineering improvements for the Army&apos;s largest HR
        system with 1M+ users.
      </p>
      <Badge variant="army">US Army</Badge>
    </div>
  );
}
