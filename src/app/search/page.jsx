"use client";
import * as React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import movieAPIs from "@/apis/movieAPIs";
import Link from "next/link";
import { Card } from "@/components/Card/Card";
import { useEffect } from "react";

const Search = () => {
  // const router = useRouter();
  const [searchResult, setSearchResult] = React.useState([]);
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("search");
  useEffect(() => {
    const search = async () => {
      try {
        const searchResult = await movieAPIs.searchMovies(searchTerm);
        setSearchResult(searchResult.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    search();
  }, [searchTerm]);
  // console.log(searchResult);
  return (
    <div className="py-[64px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-5 gap-4">
          {searchResult &&
            searchResult.map((result, index) => (
              <Card movie={result} key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
