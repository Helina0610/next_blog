"use client";

import { Input } from "@/components/ui/input";
import { useState } from "react";

interface SearchInputProps {
  onSearch: (keyword: string) => void;
}

export default function SearchInput({ onSearch }: SearchInputProps) {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const keyword = e.target.value;
    setValue(keyword);
    onSearch(keyword);
  };

  return (
    <Input
      type="text"
      placeholder="검색어를 입력하세요"
      value={value}
      onChange={handleChange}
      className="mb-4"
    />
  );
}
