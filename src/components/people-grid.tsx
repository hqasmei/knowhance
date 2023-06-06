"use client";
import React, { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { people } from "@/utils/constants";

import { FiArrowRight } from "react-icons/fi";

import FilterGroup from "./filter-group";

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
      <FilterGroup category={category} handleTagClick={handleTagClick} />

      <div className="flex min-h-screen">
        <div className="pt-12 grid grid-cols-3 gap-14 flex-grow">
          {filteredPeople.map((item, idx) => (
            <div key={idx} className="flex flex-col  items-center border rounded-xl p-4">
              <div className="h-48 w-48 rounded-full">
                <Image
                  src={item.image}
                  alt={item.person}
                  width={200}
                  height={200}
                  className="h-full w-full bg-center bg-cover rounded-full border"
                />
              </div>

              <span className="font-medium mt-2 text-xl">{item.person}</span>
              <span className="text-gray-600 mt-2 items-left line-clamp-2">
                {item.description}
              </span>

              <Link
                href={`/person/${item.id}`}
                className="flex flex-row items-center group space-x-1 justify-end mt-2 w-full"
              >
                <span className="font-medium py-2">Learn More</span>
                <FiArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PeopleGrid;
