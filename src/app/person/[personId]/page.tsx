import React from "react";
import Link from "next/link";

const Person = ({ params }: { params: { personId: string } }) => {
  return (
    <main>
      <Link href="/">Back</Link>
      <section className="items-center flex flex-col justify-center pt-24">
        {params.personId}
      </section>
    </main>
  );
};

export default Person;
