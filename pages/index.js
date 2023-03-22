import Login from "@/components/ui/organisms/Login";
import Head from "next/head";
import HomeLayout from "../components/layouts/HomeLayout";
import Todo from "../components/ui/molecules/Todo";
import NewTodo from "../components/ui/organisms/NewTodo";
import { Todos } from "../components/assets/Todos";
import { selectAuthState } from "../store/slices/authSlice";
import { useSelector } from "react-redux";
import { selectTodos } from "@/store/slices/todoSlice";

export default function Home() {
  const authState = useSelector(selectAuthState);
  const todos = useSelector(selectTodos);

  return (
    <div>
      <Head>
        <title>Todo</title>
        <meta name="description" content="Make a todo list" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeLayout>
        <section className="py-5">
          {todos.map((obj, idx) => (
            <Todo key={idx} todo={obj.todo} username={obj.username} />
          ))}
        </section>
        {authState ? <NewTodo /> : <Login />}
      </HomeLayout>
    </div>
  );
}
