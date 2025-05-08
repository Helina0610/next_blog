
import { ModeToggle } from "../ui/ModeToggle";
import { SidebarTrigger } from "../ui/sidebar";

export default function Header() {
  return (
		<header className="sticky top-0 flex h-16 shrink-0 items-center gap-2 border-b bg-background px-4">
			<SidebarTrigger className="-ml-1" />
			<div className="ml-auto flex items-center gap-2">
				<ModeToggle />
			</div>
		</header>
  );
}
