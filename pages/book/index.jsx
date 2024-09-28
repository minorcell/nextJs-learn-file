import Link from "next/link";

export default function () {
  return (
    <>
      <Link href={"/book/1"}>
        <h1>The first book.</h1>
      </Link>
      <Link href={"/book/2"}>
        <h1>The second book.</h1>
      </Link>
      <Link href={"/book/3"}>
        <h1>The third book.</h1>
      </Link>
    </>
  );
}
