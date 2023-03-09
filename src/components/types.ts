import { MessageProps } from "reactchatt";

export type UserNames =
  | "pasternak"
  | "me"
  | "mandelstam"
  | "brodsky"
  | "shakespeare";
export type User = { [key in "id" | "avatar" | "name"]: string };
export type UserObject = User & {
  generateMessage: (type: "text" | "files" | "file") => MessageProps;
};
export type Users = {
  [key in UserNames]: UserObject;
};
