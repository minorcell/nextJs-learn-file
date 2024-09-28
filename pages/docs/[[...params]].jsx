import { useRouter } from "next/router";

export default function Docs() {
  const router = useRouter();
  const { params = [] } = router.query;

  if (params.length === 2) {
    return (
      <h1>
        You are viewing the [{params[0]} - {params[1]}] page.
      </h1>
    );
  } else if (params.length === 1) {
    return <h1>You are viewing the [{params[0]}] page.</h1>;
  }

  return <h1>Doc Home.</h1>;
}
