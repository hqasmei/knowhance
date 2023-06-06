import PeopleGrid from "@/components/people-grid";
import Image from "next/image";

import Icon from "@/public/logo.svg";

export default function Home() {
  return (
    <main>
      <section className="items-center flex flex-col justify-center pt-24">
        <div className="flex flex-row space-x-2 items-center mb-2">
          <Image src={Icon} alt="" width={40} height={40} />
          <h1 className="text-2xl font-semibold">Knowhance</h1>
        </div>

        <div className="mx-auto max-w-5xl w-full ">
          <PeopleGrid />
        </div>
      </section>
    </main>
  );
}
