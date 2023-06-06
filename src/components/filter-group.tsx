import React from "react";

import { tags } from "@/utils/constants";

type FilterGroupProps = {
  category: string;
  handleTagClick: (tag: string) => void;
};

const FilterGroup = ({ category, handleTagClick }: FilterGroupProps) => {
  return (
    <div className="py-4 flex flex-row space-x-2 items-center overflow-x-auto">
      {tags.map((tag) => {
        // Capitalize the first letter
        const capitalizedTag = tag.charAt(0).toUpperCase() + tag.slice(1);

        // Replace "-" with a space
        const formattedTag = capitalizedTag.replace(/-/g, " ");

        return (
          <button
            key={tag}
            className={`${
              tag === category ? "bg-gray-500 text-white" : "bg-gray-200"
            } rounded-lg px-4 py-2 hover:bg-gray-300 whitespace-nowrap flex-shrink-0`}
            onClick={() => handleTagClick(tag)}
          >
            {formattedTag}
          </button>
        );
      })}
    </div>
  );
};

export default FilterGroup;
