import Link from "next/link";

export default function Page() {
  return (
    <div className="pt-4 px-8">
      <h1 className="font-extrabold text-xl underline decoration-red-400 underline-offset-4">
        Projects
      </h1>
      <p className="pt-4 font-bold text-lg">AG Studio</p>
      <p className="py-2">
        Performance training app focused on building freak athletes with 200
        users and growing.
      </p>
      <Link
        className="hover:underline decoration-red-400 underline-offset-4"
        href="https://github.com/mattbrc/studio"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </Link>
      <p className="pt-4 font-bold text-lg">Heatmaps</p>
      <p className="py-2">Custom strava heatmaps.</p>
      <Link
        className="hover:underline decoration-red-400 underline-offset-4"
        href="https://github.com/mattbrc/endurance-is-art"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </Link>
    </div>
  );
}
