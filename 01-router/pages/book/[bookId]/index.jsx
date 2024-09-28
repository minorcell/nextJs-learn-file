import { useRouter } from "next/router";
import Link from "next/link";

export default function () {
  const router = useRouter();
  const bookId = router.query.bookId;

  return (
    <div>
      <h1>This is details page for{bookId}th book.</h1>
      <p>Book reviews will be shown here.</p>
      <ul>
        <li>
          <Link href={`/book/${bookId}/review/1`}>Review one.</Link>
        </li>
        <li>
          <Link href={`/book/${bookId}/review/2`}>Review two.</Link>
        </li>
        <li>
          <Link href={`/book/${bookId}/review/3`}>Review three.</Link>
        </li>
      </ul>
    </div>
  );
}
