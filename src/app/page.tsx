import Todo from "./components/Todo";
import { useTodoStore } from "./store/TodoStore";

export default async function Home() {

  const data =  await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos = await data.json();

  const setTodos = useTodoStore.getState().setTodos;
  setTodos(todos);

  const storedTodos = useTodoStore((state) => state.todos);

  return (
    <div>
      <h1>Test SSR with Nextjs</h1>

      {todos.map((todo: any) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </div>
  );
}
