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
  avatar: boolean;
  title: boolean;
  days: boolean;
  messages: Array<MessageProps>;
  addNewMessage: (m: MessageProps) => void;
  loading: boolean;

  updateDays: () => void;
  updateLoading: () => void;
  updateAvatar: () => void;
  updateTitle: () => void;

  onMessageDblClick: () => void;
  onMessageClick: () => void;
  onMessageLongTouch: () => void;
  onTextChange: (text: string) => void;
  onSendClick: () => void;
  onPulled: () => void;
  onComposerReplyCancel: () => void;
  composerReplyMessage?: MessageProps;
  onMessageItemClick: () => void;
  onEdgeReach: () => void;
  onMessageSystemDateClick: () => void;
}>({
  avatar: true,
  days: true,
  title: false,
  messages: [],
  loading: false,
  addNewMessage: (m) => {},
  updateAvatar: () => {},
  updateTitle: () => {},
  updateLoading: () => {},
  updateDays: () => {},
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
});

export default useChat;
