import PeopleGrid from "@/components/people-grid";

export default function Home() {
  return (
    <main>
      <section className="items-center flex flex-col justify-center pt-24">
        <h1 className="text-2xl font-semibold">Knowhance</h1>

        <div className="mx-auto max-w-5xl w-full ">
          <PeopleGrid />
        </div>
      </section>
    </main>
  );
}
