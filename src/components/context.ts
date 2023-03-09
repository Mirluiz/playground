import React, { useContext } from "react";
import {
  MessageFileProps,
  MessageImageProps,
  MessageProps,
  MessageTextProps,
} from "./types";

export const useChat = () => {
  return useContext(ChatContext);
};

export const ChatContext = React.createContext<{
  themeMode: "dark" | "light";
  updateThemeMode: () => void;
  mode: "mobile" | "web";
  updateMode: (m: "mobile" | "web") => void;

  avatar: boolean;
  title: boolean;
  days: boolean;
  typing: boolean;
  messages: Array<MessageProps>;
  addNewMessage: (m: MessageProps) => void;
  loading: boolean;

  updateDays: () => void;
  updateLoading: () => void;
  updateAvatar: () => void;
  updateTitle: () => void;
  updateTyping: () => void;

  clearChat: () => void;

  onMessageSystemDateClick?: (date: Date) => void;
  onMessageClick?: (id: string) => void;
  onMessageDblClick?: (id: string) => void;
  onMessageItemClick?: (message: string, id: string | false) => void;
  onMessageLongTouch?: (id: string) => void;
  onPulled?: (id: string) => void;
  onMessageContext?: (id: string, messageItself?: boolean) => void;
  onReplyMessageClick?: (messageId: string, parentId?: string) => void;
  onEdgeReach?: () => void;

  onTextChange: (text: string) => void;
  onSendClick: () => void;
  onComposerReplyCancel: () => void;
  composerReplyMessage?: MessageProps;

  generateFake: (amount: number) => void;

  reply: (id: number) => void;
  scrollTo: (i: number) => void;
  highlight: (i: number) => void;
}>({
  themeMode: "light",
  updateThemeMode: () => {},
  mode: "mobile",
  updateMode: () => {},
  avatar: true,
  days: true,
  typing: false,
  title: false,
  messages: [],
  loading: false,
  addNewMessage: (m) => {},
  updateAvatar: () => {},
  updateTitle: () => {},
  updateLoading: () => {},
  updateDays: () => {},
  updateTyping: () => {},
  clearChat: () => {},
  onMessageDblClick: () => {},
  onMessageClick: () => {},
  onMessageLongTouch: () => {},
  onTextChange: () => {},
  onSendClick: () => {},
  onPulled: () => {},
  onComposerReplyCancel: () => {},
  onMessageItemClick: () => {},
  onEdgeReach: () => {},
  onMessageSystemDateClick: () => {},
  composerReplyMessage: undefined,
  generateFake: () => {},
  reply: () => {},
  scrollTo: () => {},
  highlight: () => {},
});

export default useChat;
