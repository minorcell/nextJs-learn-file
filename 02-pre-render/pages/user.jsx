import User from "../components/user";

export default function UserList({ users }) {
  return (
    <>
      <h1>UserList</h1>
      {users.map((user) => {
        return <User user={user} />;
      })}
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);

  return {
    props: {
      users: data,
    },
  };
}
