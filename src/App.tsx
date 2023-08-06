import "./styles.css";
import axios from "axios";
import { useState } from "react";
import { Todo, Text, UserProfile } from "./components";
import { TodoType } from "./types/todo"; // todosの型定義
import { User } from "./types/user";

// UserProfile コンポーネントに渡す値
const user: User = {
  name: "荒木",
  hobbies: ["映画", "ゲーム"]
};

export default function App() {
  // todosには jsonplaceholderからの todosアイテムが配列で入るので、型指定は <Array<TodoType>>
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  // [データ取得]ボタンを押すと jsonplaceholderから todosアイテムを配列で取得 → setTodosに入れ込む
  const onClickFetchData = () => {
    axios // get関数の間に型指定
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      });
  };

  return (
    <div className="App">
      <UserProfile user={user} />
      <Text color="red" fontSize="18px" />
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => (
        <Todo
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
          key={todo.id}
        />
      ))}
    </div>
  );
}
