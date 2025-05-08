import Image from "next/image";

interface PostListProps {
	keyword: string;
}

export default function PostList({keyword}: PostListProps) {

	console.log("PostList keyword: ", keyword);
  return (
    <div className="space-y-4">
      {[1, 2, 3].map((id) => (
        <div key={id} className="border rounded-xl p-4 shadow-sm bg-card">
					<Image src="/images/images.jpg" alt="" width="50" height="50" />
          <h2 className="text-lg font-bold">Post Title {id}</h2>
          <p className="text-sm text-muted-foreground">
            Post description or preview content...
          </p>
        </div>
      ))}
    </div>
  );
}
