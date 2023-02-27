import { createTextMessage } from "./helper";
import { Users, File } from "./types";

export const users: Users = {
  me: {
    id: "1",
    name: "You",
    avatar: "",
  },
  brodsky: {
    id: "2",
    name: "Joseph",
    avatar: "",
  },
  shakespeare: {
    id: "3",
    name: "William",
    avatar: "/images/william.png",
  },
  alighieri: {
    id: "4",
    name: "Dante",
    avatar: "",
  },
};

export const textMessages: Array<{ [key in any]: any }> = [
  createTextMessage(
    "Sweet are the uses of adversity which, like the toad, ugly and venomous, wears yet a precious jewel in his head.",
    users.shakespeare
  ),
  createTextMessage(
    "Be not afraid of greatness. Some are born great, some achieve greatness, and others have greatness thrust upon them",
    users.shakespeare
  ),
];

export const fileMessages: Array<File> = [
  {
    id: "",
    url: "",
    type: "doc",
    title: "",
    secondary: "",
  },
];

export type Image = {
  id: string;
  title: string;
  url: string;
  width: number;
  height: number;
};
export const imageMessages = [];
