import { contactConfig } from "@/config/contact";
import Link from "next/link";

export default function Page() {
  return (
    <div className="pt-4">
      <h1 className="font-extrabold text-xl">Connect</h1>
      <ul className="py-2">
        <li>
          <Link href={contactConfig.instagram}>Instagram</Link>
        </li>
        <li>
          <Link href={contactConfig.strava}>Strava</Link>
        </li>
        <li>
          <Link href={contactConfig.x}>X</Link>
        </li>
        <li>
          <Link href={contactConfig.github}>Github</Link>
        </li>
        <li>
          <Link href={contactConfig.linkedin}>LinkedIn</Link>
        </li>
      </ul>
    </div>
  );
}
