import { MessageProps } from "./types";
import { users } from "./Dummies";
import { uuid4 } from "./helper";
const generateFakeImage = (): string => {
  const baseUrl = "https://fakeimg.pl/";

  let randomResolutionLeft =
    Math.round((Math.floor(Math.random() * (60 - 15) + 15) / 50) * 10) * 50;

  let randomResolutionRight =
    Math.round((Math.floor(Math.random() * (60 - 15) + 15) / 50) * 10) * 50;

  let ret = `https://fakeimg.pl/${randomResolutionLeft}x${randomResolutionRight}`;

  return ret;
};

const generateFakeText = (maxL: number, minL: number): string => {
  const fullText = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae 
    ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur 
    aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui 
    dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore 
    magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut 
    aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, 
    vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
  `;

  const textArray = fullText.split(" ");

  let randomIndex = Math.floor(Math.random() * textArray.length - 2);
  let randomQ = Math.floor(Math.random() * (maxL - minL) + minL);
  let _ = textArray.slice(randomIndex, randomIndex + randomQ);

  return _.join(" ");
};

export const generateFake = (q: number): Array<MessageProps> => {
  let messages: Array<MessageProps> = [];
  let _i = 0;

  while (_i < q) {
    let isImage = byChance(50);
    let isLeft = byChance(50);
    let needReply = byChance(70);

    messages.push({
      date: getDay(-2),
      edited: false,
      files: undefined,
      images: isImage
        ? [
            {
              id: _i + "image",
              title: "image" + _i,
              url: generateFakeImage(),
              height: 100,
              width: 100,
            },
          ]
        : undefined,
      pending: false,
      status: 2,
      text: generateFakeText(10, 1),
      owner: isLeft ? users.brodsky : users.me,
      type: isImage ? "img" : "text",
      id: _i.toString(),
      repliedMessage: needReply ? messages[_i - 1] : undefined,
    });
    _i++;
  }

  addStatic(messages, _i);

  return messages;
};

const byChance = (percent: number) => {
  return Math.floor(Math.random() * (100 - 1) + 1) < percent;
};

const getDay = (day?: number): Date => {
  return new Date(Date.now() + 84000000 * (day ?? 0));
};

const addStatic = (messages: Array<MessageProps>, _i: number) => {
  //image
  messages.push({
    id: uuid4(),
    date: getDay(-1),
    edited: false,
    pending: false,
    owner: users.me,
    type: "img",
    images: [
      {
        id: uuid4(),
        title: "image.jpg",
        url: generateFakeImage(),
        height: 100,
        width: 100,
      },
    ],
    status: 2,
  });

  //images
  messages.push({
    id: uuid4(),
    date: getDay(-1),
    edited: false,
    pending: false,
    images: [
      {
        id: uuid4(),
        title: "image.jpg",
        url: generateFakeImage(),
        height: 100,
        width: 100,
      },
      {
        id: uuid4(),
        title: "image.jpg",
        url: generateFakeImage(),
        height: 100,
        width: 100,
      },
      {
        id: uuid4(),
        title: "image.jpg",
        url: generateFakeImage(),
        height: 100,
        width: 100,
      },
    ],
    status: 2,
    owner: users.me,
    type: "img",
  });

  //text with image reply
  messages.push({
    id: uuid4(),
    date: getDay(-1),
    edited: false,
    files: undefined,
    pending: false,
    status: 2,
    text: "esse ",
    owner: users.me,
    type: "text",
    repliedMessage: messages[messages.length - 1],
  });

  //doc
  messages.push({
    id: uuid4(),
    date: getDay(-1),
    edited: false,
    files: [
      {
        id: uuid4(),
        title: "image.jpg",
        url: generateFakeImage(),
        type: "doc",
        secondary: "2MB",
      },
    ],
    pending: false,
    status: 2,
    owner: users.me,
    type: "text",
  });

  //docs
  messages.push({
    id: uuid4(),
    date: getDay(-1),
    edited: false,
    files: [
      {
        id: uuid4(),
        title: "image.pdf",
        url: generateFakeImage(),
        type: "doc",
        secondary: "2MB",
      },
      {
        id: uuid4(),
        title: "image.pdf",
        url: generateFakeImage(),
        type: "doc",
        secondary: "2MB",
      },
    ],
    pending: false,
    status: 2,
    owner: users.me,
    type: "file",
  });

  messages.push({
    id: uuid4(),
    date: getDay(-1),
    edited: false,
    files: undefined,
    pending: false,
    status: 2,
    text: generateFakeText(10, 5),
    owner: users.me,
    type: "text",
    repliedMessage: messages[messages.length - 1],
  });

  //text
  messages.push({
    id: uuid4(),
    date: getDay(-1),
    edited: false,
    files: undefined,
    pending: false,
    status: 2,
    text: generateFakeText(30, 10),
    owner: users.me,
    type: "text",
  });

  //text with reply
  messages.push({
    id: uuid4(),
    date: getDay(-1),
    edited: true,
    pending: false,
    status: 2,
    text: generateFakeText(30, 10),
    owner: users.me,
    type: "text",
    repliedMessage: messages[messages.length - 1],
  });
};
