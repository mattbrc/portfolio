import { Footer } from "@/components/footer";
import { ModeToggle } from "@/components/mode-toggle";
import { Nav } from "@/components/nav";
import Link from "next/link";

export default function Home() {
  return (
    <div className="pt-4">
      <h1 className="font-extrabold text-xl underline decoration-red-400 underline-offset-4">
        Home
      </h1>
      <p className="py-2">hello</p>
    </div>
  );
}
