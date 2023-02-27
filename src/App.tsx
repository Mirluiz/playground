import React, { useState } from "react";
import Playground from "./components/Playground";
import "./devices.css";
import { ChatContext } from "./components/context";
import { MessageProps } from "./components/types";
import { users } from "./components/Dummies";
import { uuid4 } from "./components/helper";

function App() {
  const [messages, setMessages] = useState<Array<MessageProps>>([]);
  const [composerText, setComposerText] = useState<string>("");

  const addMessage = (text: string) => {
    let newMessage: MessageProps = {
      date: new Date(),
      edited: false,
      id: uuid4(),
      pending: false,
      position: "right",
      status: 1,
      text: text,
      title: users.me.name,
      type: "text",
      owner: users.me.id,
    };

    messages.push(newMessage);
    setMessages([...messages]);
  };

  return (
    <ChatContext.Provider
      value={{
        loading: false,
        messages: messages,
        onTextChange: (text: string) => {
          setComposerText(text);
        },
        onMessageDblClick: () => {},
        onSendClick: () => {
          addMessage(composerText);
          setComposerText("");
        },
        composerReplyMessage: () => {},
        onComposerReplyCancel: () => {},
        onEdgeReach: () => {},
        onMessageClick: () => {},
        onMessageItemClick: () => {},
        onMessageLongTouch: () => {},
        onMessageSystemDateClick: () => {},
        onPulled: () => {},
      }}
    >
      <Playground />
    </ChatContext.Provider>
  );
}

export default App;
