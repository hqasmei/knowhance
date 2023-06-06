import React from "react";
import Link from "next/link";
import Image from "next/image";

import { FiArrowLeft } from "react-icons/fi";

import { people } from "@/utils/constants";

const Person = ({ params }: { params: { personId: string } }) => {
  const info = people.find((item) => item.id === params.personId);
  return (
    <main className="min-h-screen">
      <div className="p-8">
        <Link href="/" className="flex flex-row space-x-1 items-center group">
          <FiArrowLeft
            size={18}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span>Back</span>
        </Link>
      </div>
      <div className="mx-auto max-w-6xl">
        {info && (
          <section className="items-center flex flex-col justify-center pt-24">
            <div className="flex flex-col md:flex-row  w-full space-x-20 justify-center">
              <Image
                src={info?.image}
                alt=""
                width={500}
                height={100}
                className="rounded-xl"
              />
              <div className="flex flex-col space-y-8">
                <span className="text-3xl font-medium">
                  {info.person}
                </span>
                <span className="text-lg text-gray-600">{info.description}</span>
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default Person;
