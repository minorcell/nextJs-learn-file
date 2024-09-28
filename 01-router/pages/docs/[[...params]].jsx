import { useRouter } from "next/router";
import { useState } from "react";

export default function Docs() {
  const [search, setSearch] = useState({
    first: "",
    second: "",
  });
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

  function handleSearch() {
    if (!search.first && !search.second) return alert("Please enter complete.");
    else if (!search.first && search.second)
      return alert("Please input the tech stack name.");
    else if (search.first && !search.second) {
      router.push(`/docs/${search.first}`);
    } else {
      router.push(`/docs/${search.first}/${search.second}`);
    }
    setSearch({
      first: "",
      second: "",
    });
  }

  return (
    <div>
      <h1>Doc Home.</h1>
      <div>
        <label htmlFor="first">技术栈</label>
        <input
          type="text"
          name="first"
          placeholder="请输入技术栈"
          onChange={(e) =>
            setSearch({
              ...search,
              first: e.target.value,
            })
          }
        />
      </div>
      <div>
        <label htmlFor="second">知识点</label>
        <input
          type="text"
          name="second"
          placeholder="请输入知识点"
          onChange={(e) =>
            setSearch({
              ...search,
              second: e.target.value,
            })
          }
        />
      </div>
      <div>
        <button onClick={handleSearch}>Seaech To</button>
      </div>
    </div>
  );
}
