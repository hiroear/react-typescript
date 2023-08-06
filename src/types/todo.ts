// 共通の型定義を一つにまとめる
export type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

/**  App.tsx に書いていた type
* type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  };
 */

/* Todo.tsx に書いていた type 
   type TodoType = {
   userId: number;
   title: string;
   completed?: boolean;
   ↑ 型指定の際、propsの後に ? をつけることで任意の propsにできる(親コンポーネントから propsとして渡ってこなくてもエラーにならない)
};  */
