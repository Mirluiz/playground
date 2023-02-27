import {
  createFileMessage,
  createImageMessage,
  createTextMessage,
  randomizer,
} from "./helper";
import { Users, File, User, UserNames, Image, MessageProps } from "./types";

export const users: Users = {
  me: {
    id: "1",
    name: "You",
    avatar: "",
    generateMessage: (type) => createMessage("me", type),
  },
  mandelstam: {
    id: "2",
    name: "Joseph",
    avatar: "",
    generateMessage: (type) => createMessage("mandelstam", type),
  },
  shakespeare: {
    id: "3",
    name: "William",
    avatar: "/images/william.png",
    generateMessage: (type) => createMessage("shakespeare", type),
  },
  alighieri: {
    id: "4",
    name: "Dante",
    avatar: "",
    generateMessage: (type) => createMessage("alighieri", type),
  },
};

const createMessage = (
  user: UserNames,
  type: "image" | "images" | "text" | "file" | "files"
): MessageProps => {
  let ret;

  switch (type) {
    case "text":
      ret = createTextMessage(
        texts[user][randomizer("text", user)],
        users[user]
      );
      break;
    case "image":
      ret = createImageMessage(
        {
          caption: "test",
          images: [images[user][randomizer("img", user)]],
        },
        users[user]
      );
      break;
    case "images":
      ret = createImageMessage(
        {
          caption: "test",
          images: Array.apply(
            null,
            Array(Math.floor(Math.random() * (12 - 2 + 1) + 2))
          ).map(() => {
            return images[user][randomizer("img", user)];
          }),
        },
        users.alighieri
      );
      break;
    case "file":
      ret = createFileMessage(
        {
          caption: "test",
          files: [files[user][randomizer(type, user)]],
        },
        users[user]
      );
      break;
    case "files":
      ret = createFileMessage(
        {
          caption: "test",
          files: Array.apply(
            null,
            Array(Math.floor(Math.random() * (12 - 2 + 1) + 2))
          ).map(() => {
            return files[user][randomizer("file", user)];
          }),
        },
        users[user]
      );
      break;
  }

  return ret;
};

export const texts: { [key in UserNames]: Array<string> } = {
  me: [
    "Tomorrow you’ll forget that I have crowned you, that I burned my flowering soul with love, and the whirling carnival of trivial days will ruffle the pages of my books",
    "The attitude of the American to the dollar contains poetry.",
    "Vorrei essere tagliente come un eccomi",
    "The love boat has crashed against the everyday.",
    "To us love says humming that the heart's stalled motor has begun working again.",
  ],
  shakespeare: [
    "Sweet are the uses of adversity which, like the toad, ugly and venomous, wears yet a precious jewel in his head.",
    "Be not afraid of greatness. Some are born great, some achieve greatness, and others have greatness thrust upon them",
    "Give every man thy ear, but few thy voice.",
    "Nothing can come of nothing.",
    "The devil can cite Scripture for his purpose.",
  ],
  alighieri: [
    "The customs and fashions of men change like leaves on the bough, some of which go and others come.",
    "No one thinks of how much blood it costs.",
    "Will cannot be quenched against its will.",
    "He listens well who takes notes.",
    "There is no greater sorrow than to recall happiness in times of misery.",
    "Art, as far as it is able, follows nature, as a pupil imitates his master; thus your art must be, as it were, God's grandchild.",
  ],
  mandelstam: [
    "My turn shall also come. I sense the spreading of a wing.",
    "Only in Russia poetry is respected--it gets people killed.",
    "I carry Sorrow, a grey bird, sluggish, in my chest.",
    `
      Я счастлив жестокой обидою,
      И в жизни поxожей на сон,
      Я каждому тайно завидую
      И в каждого тайно влюблен.
    `,
  ],
};

export const files: { [key in UserNames]: Array<File> } = {
  me: [],
  shakespeare: [],
  alighieri: [],
  mandelstam: [],
};

export const images: { [key in UserNames]: Array<Image> } = {
  me: [],
  shakespeare: [],
  alighieri: [],
  mandelstam: [],
};
