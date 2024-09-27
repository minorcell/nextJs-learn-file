import { useRouter } from "next/router";

export default function () {
  const router = useRouter();
  const bookId = router.query.bookId;

  return <h1>This is details page for{bookId}th book.</h1>;
}
