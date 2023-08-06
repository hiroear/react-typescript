/* eslint-disable @typescript-eslint/no-unused-vars */

/* Typescriptの基本の型 */

// boolean (変数の後に型を指定)
let bool: boolean = true;

// number 数値
let num: number = 0;

// string 文字列
let str: string = "A";

// Array 配列 (2通り ・ 変数の後に 何の型が入った配列なのかどうかを指定)
let arr1: Array<number> = [0, 1, 2, 3];
let arr2: number[] = [0, 1, 2, 3];

// tuple ([数値,文字列...]と交互に別の型が入っている配列であることを表す )
let tuple: [number, string] = [0, "A", 1, "B"];

// any (何でも屋さん。 どんな型を入れてもエラーにならない。逆に型を指定する意味はない　)
let any1: any = false;

// void (関数に使われる。 何も返却値がない事を表す型。 エディタが自動で補完してくれている場合は書かなくてOK)
const funcA = (): void => {
  const test = "TEST"; // 関数に何も返り値がない
};

// null
let null1: null = null;

// undefined (javascriptで、何も設定されていない状態)
let undefined1: undefined = undefined;

// object (明示的に object型であることを指定しているが、あまり使わない)
let obj1: object = {};
// propsの時などは以下のように使われる
let obj2: { id: number; name: string } = { id: 0, name: "AAA" };
