import React from "react";

import Link from "next/link";
import Image from "next/image";

import { FiArrowRight } from "react-icons/fi";

type ContactInformation = {
  website: string | null;
  twitter: string | null;
};

type PeopleCardProps = {
  id?: string;
  name?: string | null;
  image?: string | null;
  bio?: string | null;
  areasOfExpertise?: string[] | null;
  contactInformation?: ContactInformation | null;
};

const PeopleCard = ({
  id,
  name,
  image,
  bio,
  areasOfExpertise,
  contactInformation,
}: PeopleCardProps) => {
  return (
    <div className="flex flex-col  items-center border rounded-xl p-4 shadow-lg">
      <div className="h-48 w-48 rounded-full">
        {image && name && (
          <Image
            src={image}
            alt={name}
            width={200}
            height={200}
            className="h-full w-full bg-center bg-cover rounded-full border"
          />
        )}
      </div>

      <span className="font-medium mt-2 text-xl">{name}</span>
      <span className="text-gray-600 mt-2 items-left line-clamp-2">{bio}</span>

      <Link
        href={`/person/${id}`}
        className="flex flex-row items-center group space-x-1 justify-end mt-2 w-full"
      >
        <span className="font-medium py-2 group-hover:text-gray-600">
          Learn More
        </span>
        <FiArrowRight size={18} className="group-hover:text-gray-600" />
      </Link>
    </div>
  );
};

export default PeopleCard;
