import { TodoType } from "../types/todo"; // App.tsxと共通の型定義
import { FC } from "react";
/* ↓ 通常、propsの型指定は (props: Props) のように書くが、子コンポーネントが、関数コンポーネントの場合は、コンポーネント名の後に
    : FC と書き、明示的に関数コンポーネントである事を示す。その後ろに propsの型を<Props>のように書く。 */

/* ↓ <Omit<TodoType, "id">
   親コンポーネントと子コンポーネント共通の型定義を impportしたとき、子コンポーネントではいらないプロパティがある("id")
   Omitは省略という意味で、以下の例だと、型定義 TodoTypeから "id"プロパティのみを省く という意味になる。
   反対に、(props: Pick<TodoType, "UserId" | "title" | "completed">) と書くと Todotypeから、"UserId" "title" "completed" をピックアップする意味になる */
export const Todo: FC<Omit<TodoType, "id">> = (props) => {
  // ↓ 初期値として completed = false などとしておくと propsとして親コンポーネントから渡ってこない場合など、undefined などを避けることができる
  const { title, userId, completed = false } = props;

  const completeMark = completed ? "[完]" : "[未]";

  return <p>{`${completeMark} ${title}(ユーザー:${userId})`}</p>;
};
