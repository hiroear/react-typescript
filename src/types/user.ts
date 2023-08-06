export type User = {
  name: string;
  hobbies?: Array<string>;
  //↑ 趣味がない可能性もあるので ? をつけてオプションに。 趣味が複数ある場合もあるので、配列の string型
};
