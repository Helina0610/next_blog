"use client";

import PostList from "@/components/layout/PostList";
import SearchInput from "@/components/utils/SearchInput";
import { useState } from "react";


export default function Home() {
	const [keyword, setKeyword] = useState("");

  return (
    <div className="grid grid-cols-12 gap-6 max-w-7xl mx-auto px-4 py-6">
      {/* Sidebar (좌측) */}


      {/* Post List (중앙, 가장 넓음) */}
      <section className="col-span-12">
				<SearchInput onSearch={setKeyword} />
        <PostList keyword={keyword}/>
      </section>

    </div>
  );
}
