import { contactConfig } from "@/config/contact";
import Link from "next/link";

export default function Page() {
  return (
    <div className="pt-4 px-8">
      <h1 className="font-extrabold text-xl underline decoration-red-400 underline-offset-4">
        Connect
      </h1>
      <ul className="py-2">
        <li className="mb-1">
          <Link
            href={contactConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline decoration-red-400 underline-offset-4"
          >
            Instagram
          </Link>
        </li>
        <li className="mb-1">
          <Link
            href={contactConfig.strava}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline decoration-red-400 underline-offset-4"
          >
            Strava
          </Link>
        </li>
        <li className="mb-1">
          <Link
            href={contactConfig.x}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline decoration-red-400 underline-offset-4"
          >
            X
          </Link>
        </li>
        <li className="mb-1">
          <Link
            href={contactConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline decoration-red-400 underline-offset-4"
          >
            Github
          </Link>
        </li>
        <li className="mb-1">
          <Link
            href={contactConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline decoration-red-400 underline-offset-4"
          >
            LinkedIn
          </Link>
        </li>
      </ul>
    </div>
  );
}
