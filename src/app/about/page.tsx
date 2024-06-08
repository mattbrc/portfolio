import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="px-8 pt-4">
      <h1 className="font-mono text-xl pb-1">About</h1>
      <Separator />
      <div className="flex items-center pt-4">
        <ul>
          <li>
            Hey and welcome to my portfolio! I&apos;m a driven Army Officer
            preparing to transition out. Originally from NC, I started out at 16
            with a car detailing company going door to door for sales.
          </li>
          <li>
            I realized I had a passion for technical projects and decided to
            pursue electrical engineering in college. To pay for my education
            and gain diverse experiences, I joined the army, where I jumped out
            of planes and moved 7 times in 5 years, eventually landing in
            washington d.c. at the pentagon.
          </li>
          <li>
            With a love for fitness and health, I started a fitness brand on
            instagram called @acidgambit. Using the t3 stack (typescript,
            tailwind, trpc, next.js) I built a webapp for AG, which has gained
            traction with 13k instagram followers, 500 app users, 2000 blog
            subscribers, and 100 paying subscribers.
          </li>
          <li>
            Currently I&apos;m running a major DoD program, running Acid Gambit,
            and experimenting with the concept of reshaping white label ticket
            events and invites
          </li>
          <li>
            Finally, I&apos;m currently in a major transition point in my
            career, leaving the Army in less than a year. I&apos;m open to
            working full-time for a startup as an engineer or product manager
            and am eager to connect with others who share my passions and goals.
          </li>
        </ul>
      </div>
    </div>
  );
}
