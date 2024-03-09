import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text cursor-pointer bg-fuchsia-950">gacor</h1>
      <Link href="/post">pencet</Link>
      <h1>
        <Link href="/hub">halaman</Link>
      </h1>
    </>
  );
}
