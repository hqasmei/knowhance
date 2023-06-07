import Image from "next/image";

import Icon from "@/public/logo.svg";
import PeopleGrid from "@/components/people-grid";

import getPeople from "@/actions/getPeople";

export default async function Home() {
  const data = await getPeople();

  return (
    <main>
      <section className="items-center flex flex-col justify-center pt-24">
        <div className="flex flex-row space-x-2 items-center mb-2">
          <Image src={Icon} alt="" width={40} height={40} />
          <h1 className="text-2xl font-semibold">Knowhance</h1>
        </div>

        <PeopleGrid data={data} />
      </section>
    </main>
  );
}
