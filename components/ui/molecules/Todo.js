export default function Todo({ username, todo, status, due }) {
  return (
    <article className="flex space-x-2 my-2">
      <div className="todo">
        <div className="font-bold">{username}</div>
        <div>{todo}</div>
      </div>
    </article>
  );
}
