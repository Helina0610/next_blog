import Image from "next/image";

export default function ProfileCard() {
  return (
    <div className="p-4 border rounded-xl bg-card text-center shadow-sm">
			<Image src="/images/images.jpg" alt="Profile Picture" width={100} height={100} className="rounded-full mx-auto mb-4" />
      <div className="text-lg font-semibold">Your Name</div>
      <p className="text-sm text-muted-foreground">Frontend Developer</p>
    </div>
  );
}
