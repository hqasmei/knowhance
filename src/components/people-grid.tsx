"use client";
import React, { useState } from "react";

import Image from "next/image";

import { tags, people } from "@/utils/constants";
import Link from "next/link";

const PeopleGrid = () => {
  const [category, setCategory] = useState("all");

  const handleTagClick = (tag: string) => {
    setCategory(tag);
  };

  const filteredPeople =
    category === "all"
      ? people
      : people.filter((person) => person.tags.includes(category));

  return (
    <>
      <div className="py-4 flex flex-row space-x-2 items-center justify-center">
        {tags.map((tag) => {
          return (
            <button
              key={tag}
              className={`${
                tag === category ? "bg-gray-500 text-white" : "bg-gray-200"
              } rounded-lg px-4 py-2`}
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </button>
          );
        })}
      </div>
      <div className="pt-12 grid grid-cols-3 gap-14">
        {filteredPeople.map((item, idx) => (
            <Link href={`/person/${item.person}`}>
            <div key={idx} className="flex flex-col items-center">
              <div className="h-48 w-48 rounded-full">
                <Image
                  src={item.image}
                  alt={item.person}
                  width={200}
                  height={200}
                  className="h-full w-full bg-center bg-cover rounded-full"
                />
              </div>

              <span className="font-medium mt-2">{item.person}</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default PeopleGrid;
