import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Next.js Pre-Render.</h1>
      <Link href="/user">UserList</Link>
      <br />
      <Link href="/posts">Posts</Link>
    </>
  );
}
