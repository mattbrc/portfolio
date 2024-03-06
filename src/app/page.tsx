import { Footer } from "@/components/footer";
import { ModeToggle } from "@/components/mode-toggle";
import { Nav } from "@/components/nav";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";
import CopyButton from "@/components/copyButton";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="px-8 pt-4">
      <div className="text-center py-4">
        <h1 className="font-extrabold text-3xl pb-1">
          Welcome to{" "}
          <span className="font-mono tracking-tighter text-emerald-400">
            $ADYN
          </span>
        </h1>

        <p>
          The $ADYN token is designed to bring innovation to the world. $ADYN is
          more than just a token - it's a symbol of progress and possibility.
        </p>
        <Image
          className="rounded-lg py-4 mx-auto"
          src="/adyn_landing.jpeg"
          width={500}
          height={500}
          alt="Picture of American Dynamism"
        />
        {/* <p>
          $ADYN is a memecoin with no intrinsic value or expectation of
          financial return. There is no formal team or roadmap. the coin is for
          entertainment purposes only to show our support for a return to
          American Dominance.
        </p> */}
        <section className="py-4">
          <CopyButton textToCopy="0xaA34cdeE7b057cb47364AE8c81f6b3E522d19200" />
          <div className="pt-4">
            <Button asChild>
              <Link href="">Buy on UNISWAP</Link>
            </Button>
          </div>
        </section>
        {/* <div>
          <Separator />
        </div>
        <section className="py-4 grid grid-cols-1 gap-2">
          <h2 className="text-xl font-bold">Links</h2>
          <p>links here</p>
        </section> */}
        <div>
          <Separator />
        </div>
        <section className="pb-20 py-4 grid grid-cols-1 gap-2">
          <h2 className="text-xl font-bold">About</h2>
          <p>
            The American Dynamism token is a symbol of innovation and progress.
            It represents the community's commitment to positive change and
            growth. With a focus on inclusivity and collaboration, the $ADYN
            token aims to empower individuals and organizations to contribute to
            a brighter future.
          </p>
          <p>
            It's built on the principles of transparency, trust, and
            transformation, aiming to inspire positive action and drive
            meaningful change. As a symbol of innovation and progress, the
            American Dynamism token represents the collective effort to create a
            better world, where everyone has the opportunity to thrive.
          </p>
          <p>
            Last, it's more than just a digital asset - it is a symbol of the
            collective potential of humanity, a token of optimism and
            possibility. With the American Dynamism token, the community is
            embarking on a journey to unlock new opportunities, foster
            innovation, and drive progress.
          </p>
        </section>
      </div>
    </div>
  );
}
