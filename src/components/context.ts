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
  messages: Array<MessageProps>;
  loading: boolean;
  onMessageDblClick: () => void;
  onMessageClick: () => void;
  onMessageLongTouch: () => void;
  onTextChange: (text: string) => void;
  onSendClick: () => void;
  onPulled: () => void;
  onComposerReplyCancel: () => void;
  composerReplyMessage: () => void;
  onMessageItemClick: () => void;
  onEdgeReach: () => void;
  onMessageSystemDateClick: () => void;
}>({
  messages: [],
  loading: false,
  onMessageDblClick: () => {},
  onMessageClick: () => {},
  onMessageLongTouch: () => {},
  onTextChange: () => {},
  onSendClick: () => {},
  onPulled: () => {},
  onComposerReplyCancel: () => {},
  composerReplyMessage: () => {},
  onMessageItemClick: () => {},
  onEdgeReach: () => {},
  onMessageSystemDateClick: () => {},
});

export default useChat;
