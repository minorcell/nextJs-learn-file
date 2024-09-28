export default function User({ user }) {
  return (
    <>
      <div key={user.id}>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
      </div>
    </>
  );
}
