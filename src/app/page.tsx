import { Footer } from "@/components/footer";
import { ModeToggle } from "@/components/mode-toggle";
import { Nav } from "@/components/nav";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function Home() {
  return (
    <div className="pt-4 px-8">
      <h1 className="font-mono text-xl pb-2">Projects</h1>
      <div className="flex items-center pt-4">
        <Link
          href="https://github.com/mattbrc/studio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="mr-3 underline decoration-red-500 underline-offset-4 font-semibold">
            AG Studio
          </p>
        </Link>
        <Badge>TypeScript</Badge>
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
          <p className="mr-3 decoration-red-500 underline underline-offset-4 font-semibold">
            Heatmaps
          </p>
        </Link>
        <Badge>TypeScript</Badge>
      </div>
      <p className="py-2">Custom strava heatmaps.</p>
      <div className="flex items-center pt-4">
        <Link
          href="https://github.com/mattbrc/gastimate"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="mr-3 decoration-red-500 underline underline-offset-4 font-semibold">
            Gastimate
          </p>
        </Link>
        <Badge>Solidity</Badge>
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
          <p className="mr-3 decoration-red-500 underline underline-offset-4 font-semibold">
            AG Links
          </p>
        </Link>
        <Badge>TypeScript</Badge>
      </div>
      <p className="py-2">Acid Gambit Linktree.</p>
    </div>
  );
}
