import { useDispatch, useSelector } from "react-redux"; //updated
import { selectAuthUser, setAuthState } from "../../../store/slices/authSlice"; // updated
import { addTodo } from "../../../store/slices/todoSlice"; // updated
import Button from "../atoms/Button";
import Input from "../atoms/Input";

export default function NewTodo() {
  const dispatch = useDispatch(); // updated
  const user = useSelector(selectAuthUser); // updated

  // Updated function
  function handleNewTodo(e) {
    e.preventDefault();
    dispatch(
      addTodo({
        todo: e.target.todo.value,
        username: user,
      })
    );
    e.target.todo.value = "";
  }

  return (
    <section>
      <form
        className="flex space-x-2 items-center h-full"
        onSubmit={handleNewTodo}
      >
        <div className="input-box">
          <Input id={`todo`} type={`text`} placeholder={`${user}'s todo`} />
        </div>
        <Button type={`submit`}>send</Button>
      </form>
      <div className="py-2">
        <Button onClick={() => dispatch(setAuthState(false))}>logout</Button>
      </div>
    </section>
  );
}
