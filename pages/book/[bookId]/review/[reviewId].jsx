import { useRouter } from "next/router";

export default function Rewiew() {
  const router = useRouter();
  const { bookId, reviewId } = router.query;

  return (
    <h1>
      This is the - {reviewId}th - review for the {bookId}th book.
    </h1>
  );
}
