import { useRouter } from "next/router";

export default function Rewiew() {
  const router = useRouter();
  const { bookId, reviewId } = router.query;

  return (
    <h1>
      第{bookId}本书的第{reviewId}条评论
    </h1>
  );
}
