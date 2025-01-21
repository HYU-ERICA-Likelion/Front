import Link from "next/link";

export default function PhotoPage() {
  return (
    <>
      <h1>Photo List</h1>
      <Link href="/photo/1" className="underline">
        Navigate to Photo 1
      </Link>
    </>
  );
}
