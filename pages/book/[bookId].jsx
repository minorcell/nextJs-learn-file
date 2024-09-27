import { useRouter } from "next/router";

export default function () {
  const router = useRouter();
  const bookId = router.query.bookId;

  return <h1>这是第{bookId}本书的详情页面</h1>;
}
