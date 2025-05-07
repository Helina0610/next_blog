export default function Footer() {
  return (
    <footer className="w-full border-t text-center text-sm text-muted-foreground py-4 bg-background">
      © {new Date().getFullYear()} Tech Blog. All rights reserved.
    </footer>
  );
}
