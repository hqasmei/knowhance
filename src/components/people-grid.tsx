"use client";

import React, { useState } from "react";

import PeopleCard from "./people-card";

type ContactInformation = {
  website: string | null;
  twitter: string | null;
};

type Person = {
  id?: string;
  name?: string | null;
  image?: string | null;
  bio?: string | null;
  areasOfExpertise?: string[] | null;
  contactInformation?: ContactInformation | null;
};

type PeopleGridProps = {
  people: Person[];
};

const PeopleGrid = ({ people }: PeopleGridProps) => {
  const [category, setCategory] = useState("all");

  return (
    <>
      <div className="mx-auto md:max-w-5xl w-full ">
        <div className="min-h-screen px-8">
          <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-14">
            {people?.map((item, idx) => (
              <PeopleCard
                key={idx}
                id={item.id}
                name={item.name}
                image={item.image}
                bio={item.bio}
                areasOfExpertise={item.areasOfExpertise}
                contactInformation={item.contactInformation}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PeopleGrid;
