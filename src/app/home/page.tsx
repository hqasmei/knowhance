import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <Link href="/admin">admin.knowhance.com</Link>
      <Link href="/app">app.knowhance.com</Link>
    </main>
  );
}
