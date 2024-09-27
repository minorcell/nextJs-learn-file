import { useRouter } from "next/router";

export default function RewiewCate() {
  const router = useRouter();
  const bookId = router.query.bookId;

  return <h1>第{bookId}本书的评论目录</h1>;
}
