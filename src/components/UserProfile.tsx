import { FC } from "react";
import { User } from "../types/user"; //別ファイルに定義した型情報

type Props = {
  // userという名前で、別ファイルに定義した User(2つのプロパティの型定義)をまるごと受け取る
  user: User;
};

export const UserProfile: FC<Props> = (props) => {
  // ↓親コンポーネントから user という props名で渡ってきた propsを分割代入。 user=User
  const { user } = props;

  return (
    <dl>
      <dt>名前</dt>
      <dt>{user.name}</dt> {/* propsから受け取った user(=User)を展開 */}
      <dt>趣味</dt>
      <dt>{user.hobbies?.join(" / ")}</dt>{" "}
      {/* hobbiesは配列なので、joinを使って、 / 区切りで連結させて文字列にする */}
      {/* ↑ 親コンポーネントから渡ってきた userの、趣味データが空だった場合　、空の配列に対して joinメソッドは使えないよというエラーが起きる。
          そういう時に hobbies の後ろの ? オプショナルチェイニングが使われる。 
          前からドットで繋げてプロパティを参照していく中で、要素がない場合は ? を書いたその時点で undefined を返し、エラーを防いでくれる。
          userの hobbies が存在しない可能性を考えて その直後に ? (オプショナルチェイニング) をつける */}
    </dl>
  );
};
