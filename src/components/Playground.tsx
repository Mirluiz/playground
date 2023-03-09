import React, { useEffect, useState } from "react";
import ControlPanel from "./ControlPanel";
import View from "./View";
import { Box, Container, Grid } from "@mui/material";
import { MessageProps } from "reactchatt";
import { ChatContext } from "./context";
import { uuid4 } from "./helper";
import { users } from "./Dummies";
import "./devices.css";
import { generateFake } from "./fake";

const Playground = () => {
  const [messages, setMessages] = useState<Array<MessageProps>>([]);
  const [composerText, setComposerText] = useState<string>("");
  const [avatar, setAvatar] = useState<boolean>(true);
  const [title, setTitle] = useState<boolean>(false);
  const [days, setDays] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [composerReplyMessage, setComposerReplyMessage] =
    useState<MessageProps>();
  const [mode, setMode] = useState<"mobile" | "web">("mobile");
  const [typing, setTyping] = useState<boolean>(false);
  const [themeMode, setThemeMode] = useState<"dark" | "light">("light");

  useEffect(() => {
    setMessages(generateFake(0));
  }, []);

  const addMessage = (text: string) => {
    let newMessage: MessageProps = {
      date: new Date(),
      id: uuid4(),
      status: 2,
      text: text,
      type: "text",
      owner: users.me,
    };

    messages.push(newMessage);
    setMessages([...messages]);
  };

  return (
    <ChatContext.Provider
      value={{
        typing: typing,
        mode: mode,
        themeMode: themeMode,
        updateThemeMode: () => {
          setThemeMode(themeMode === "light" ? "dark" : "light");
        },
        updateMode: (m) => {
          setMode(m);
        },
        updateTyping: () => {
          setTyping(!typing);
        },
        loading: loading,
        days: days,
        avatar: avatar,
        title: title,
        messages: messages,
        updateAvatar: () => {
          setAvatar(!avatar);
        },
        updateLoading: () => {
          setLoading(!loading);
        },
        updateDays: () => {
          setDays(!days);
        },
        updateTitle: () => {
          setTitle(!title);
        },
        addNewMessage: (newMessage: MessageProps) => {
          messages.push(newMessage);
          setMessages([...messages]);
        },
        onTextChange: (text: string) => {
          setComposerText(text);
        },
        onMessageDblClick: (id: string) => {
          console.log("onMessageDblClick", id);
          // let msg = messages.find((m) => m.id === id);
          // if (msg) setComposerReplyMessage(msg);
        },
        onSendClick: () => {
          addMessage(composerText);
          setComposerText("");
        },
        onEdgeReach: () => {},
        onMessageClick: (id) => {
          console.log("onMessageClick", id);
        },
        onMessageItemClick: (item, id) => {
          console.log("onMessageItemClick", item, id);
        },
        onMessageLongTouch: (id) => {
          console.log("onMessageLongTouch", id);
        },
        onMessageSystemDateClick: (date) => {
          console.log("onMessageSystemDateClick", date);
        },
        onPulled: (id) => {
          console.log("onPulled", id);
        },
        onMessageContext: (id) => {
          console.log("onMessageContext", id);
        },
        onReplyMessageClick: (messageId, parentId) => {
          console.log("onReplyMessageClick", messageId, parentId);
        },
        clearChat: () => {
          setMessages([]);
        },
        generateFake: (amount) => {
          setMessages([]);
          setMessages(generateFake(amount));
        },
        scrollTo: (index) => {
          alert("coming soon");
          // scrollTo(messages[index].id);
        },
        highlight: (index) => {
          alert("coming soon");
          // highlightMessage(messages[index].id);
        },
        reply: (index) => {
          let msg = messages[index];
          if (msg) setComposerReplyMessage(msg);
        },
        composerReplyMessage: composerReplyMessage,
        onComposerReplyCancel: () => {
          setComposerReplyMessage(undefined);
        },
      }}
    >
      <Grid
        container
        sx={{
          border: "2px solid whitesmoke",
        }}
      >
        <Grid
          item
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <View />
        </Grid>
        <Grid
          item
          md={5}
          sx={{
            borderRight: "2px solid whitesmoke",
          }}
        >
          <ControlPanel />
        </Grid>
      </Grid>
    </ChatContext.Provider>
  );
};

export default Playground;
