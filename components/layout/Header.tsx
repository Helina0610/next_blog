import Link from "next/link";
import { ModeToggle } from "../ui/ModeToggle";

export default function Header() {
  return (
    <header className="w-full border-b py-4 px-6 flex justify-between items-center bg-background">
      <Link href="/" className="text-xl font-bold">HJ Blog</Link>
      <ModeToggle />
    </header>
  );
}
