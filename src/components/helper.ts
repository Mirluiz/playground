import { files, images, texts } from "./Dummies";
import {
  User,
  UserNames,
  File,
  Image,
  MessageProps,
  MessageFileProps,
  MessageImageProps,
  MessageTextProps,
} from "./types";

export const randomizer = (
  type: "img" | "file" | "text",
  user: UserNames
): number => {
  let min = 1,
    max;
  switch (type) {
    case "img":
      max = images[user].length - 1;
      break;
    case "text":
      max = texts[user].length - 1;
      break;
    case "file":
      max = files[user].length - 1;
      break;
  }

  let random = Math.floor(Math.random() * (max - min + 1) + min);

  return random;
};

export const createTextMessage = (
  content: string,
  user: User
): MessageTextProps => {
  let ret: MessageTextProps = {
    date: new Date(new Date().getTime()),
    edited: false,
    pending: false,
    position: "right",
    status: 2,
    id: uuid4(),
    text: content,
    type: "text",
    owner: {
      id: user.id,
      avatar: user.avatar,
      name: user.name,
    },
  };

  return ret;
};

export const createImageMessage = (
  content: { caption?: string; images: Array<Image> },
  user: User
): MessageImageProps => {
  let ret: MessageImageProps = {
    date: new Date(new Date().getTime()),
    edited: false,
    pending: false,
    position: "right",
    status: 2,
    id: uuid4(),
    type: "image",
    caption: content.caption,
    images: content.images,
    owner: {
      id: user.id,
      avatar: user.avatar,
      name: user.name,
    },
  };

  return ret;
};

export const createFileMessage = (
  content: { caption?: string; files: Array<File> },
  user: User
): MessageFileProps => {
  let ret: MessageFileProps = {
    id: uuid4(),
    date: new Date(new Date().getTime()),
    edited: false,
    pending: false,
    position: "right",
    status: 2,
    caption: content.caption,
    files: content.files,
    type: "file",
    owner: {
      id: user.id,
      avatar: user.avatar,
      name: user.name,
    },
  };

  return ret;
};

export const uuid4 = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};
