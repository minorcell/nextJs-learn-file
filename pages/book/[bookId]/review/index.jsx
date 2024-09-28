import { useRouter } from "next/router";

export default function RewiewCate() {
  const router = useRouter();
  const bookId = router.query.bookId;

  return <h1>This is reviews page for the - {bookId}th - book.</h1>;
}
