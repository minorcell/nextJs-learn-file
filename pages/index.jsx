import Link from "next/link";

export default function () {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <Link href={"/blog"}>Blog</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/book"}>Book</Link>
        </li>
        <li>
          <Link href={"/docs"}>Docs</Link>
        </li>
      </ul>
    </div>
  );
}
