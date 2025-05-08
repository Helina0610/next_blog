"use client";

import PostList from "@/components/layout/PostList";
import ProfileCard from "@/components/layout/ProfileCard";
import Sidebar from "@/components/layout/Sidebar";
import SearchInput from "@/components/utils/SearchInput";
import { useState } from "react";


export default function Home() {
	const [keyword, setKeyword] = useState("");

  return (
    <div className="grid grid-cols-12 gap-6 max-w-7xl mx-auto px-4 py-6">
      {/* Sidebar (좌측) */}
      <aside className="col-span-2 hidden lg:block">
        <div className="sticky top-20">
          <Sidebar />
        </div>
      </aside>

      {/* Post List (중앙, 가장 넓음) */}
      <section className="col-span-12 lg:col-span-8">
				<SearchInput onSearch={setKeyword} />
        <PostList keyword={keyword}/>
      </section>

      {/* ProfileCard (우측) */}
      <aside className="col-span-2 hidden xl:block">
        <div className="sticky top-20">
          <ProfileCard />
        </div>
      </aside>
    </div>
  );
}
