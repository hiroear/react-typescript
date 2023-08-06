import { FC } from "react";

// 親コンポーネントから渡ってくる propsの型を定義
type Props = {
  color: string;
  fontSize: string;
};

/* ↓ 通常、propsの型指定は (props: Props) のように書くが、子コンポーネントが、関数コンポーネントの場合は、コンポーネント名の後に
  : FC と書き、明示的に関数コンポーネントである事を示す。その後ろに propsの型を<Props>のように書く。 */
export const Text: FC<Props> = (props) => {
  const { color, fontSize } = props; // propsを分割代入

  return <p style={{ color, fontSize }}>テキストです</p>;
};
