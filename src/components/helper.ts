import { fileMessages, imageMessages, textMessages, Image } from "./Dummies";
import { User } from "./types";

export const randomizer = (type: "img" | "file" | "text"): number => {
  let min = 1,
    max;
  let ret;

  switch (type) {
    case "img":
      ret = imageMessages;
      max = imageMessages.length - 1;
      break;
    case "text":
      ret = textMessages;
      max = textMessages.length - 1;
      break;
    case "file":
      ret = fileMessages;
      max = fileMessages.length - 1;
      break;
  }

  let random = Math.floor(Math.random() * (max - min + 1) + min);

  return random;
};

export const createTextMessage = (content: string, user: User) => {
  let ret = {
    date: new Date(new Date().getTime()),
    edited: false,
    pending: false,
    position: "right",
    status: 2,
    id: uuid4(),
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
) => {
  let ret = {
    date: new Date(new Date().getTime()),
    edited: false,
    pending: false,
    position: "right",
    status: 2,
    id: uuid4(),
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
  content: { caption?: string; needTitle?: boolean; files: Array<File> },
  user: User
) => {
  let ret = {
    id: uuid4(),
    date: new Date(new Date().getTime()),
    edited: false,
    pending: false,
    position: "right",
    status: 2,
    caption: content.caption,
    files: content.files,
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
