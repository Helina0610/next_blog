import Link from "next/link";
import { ModeToggle } from "../ui/ModeToggle";
import { Button } from "../ui/button";
import { Search } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full border-b py-4 px-6 flex justify-between items-center bg-background">
      <Link href="/" className="text-xl font-bold">HJ Blog</Link>
			<div className="flex items-center gap-2">
				<Button variant="outline" size="icon">
					<Search className="size-4" aria-hidden="true" />
				</Button>
        <ModeToggle />
      </div>
    </header>
  );
}
