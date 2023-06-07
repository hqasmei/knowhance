import React from "react";
import Link from "next/link";
import Image from "next/image";

import { FiArrowLeft } from "react-icons/fi";

import { people } from "@/utils/constants";

const Person = ({ params }: { params: { personId: string } }) => {
  const info = people.find((item) => item._id === params.personId);
  return (
    <main className="min-h-screen">
      <div className="p-8">
        <Link href="/" className="flex flex-row space-x-1 items-center group">
          <FiArrowLeft
            size={18}
            className="group-hover:-translate-x-1 group-hover:text-gray-600 transition-transform"
          />
          <span className="group-hover:text-gray-600">Back</span>
        </Link>
      </div>
      <div className="mx-auto px-8  md:max-w-6xl">
        {info && (
          <section className="mt-24">
            <div className="flex flex-col md:flex-row  w-full md:space-x-12 md:space-y-0 space-y-6">
              <div className="md:w-1/2 flex   h-full">
                <Image
                  src={info?.image}
                  alt=""
                  width={400}
                  height={100}
                  className="rounded-xl"
                />
              </div>

              <div className="flex flex-col space-y-4 md:w-1/2">
                <div className="flex flex-col space-y-2">
                  <span className="text-3xl font-medium">{info.name}</span>
                  <div className="flex flex-row space-x-2">
                    {info.areasOfExpertise.map((item, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 p-2 rounded-lg text-sm font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <span className="text-lg text-gray-600">{info.bio}</span>
                </div>
                <div className="flex flex-col space-y-2">
                  <span className="text-2xl">Works</span>

                  <div className="flex flex-col space-y-4">
                    {info.works.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-4 border rounded-lg flex flex-col space-y-2"
                      >
                        <span className="text-xs  tracking-wider">
                          {item.medium.toUpperCase()}
                        </span>
                        <span className="text-xl">{item.title}</span>
                        <span>{item.description}</span>
                        <span>{item.url}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default Person;
