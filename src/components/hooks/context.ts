import React, { useContext } from "react";
import {
	MessageFileProps,
	MessageImageProps,
	MessageProps,
	MessageTextProps,
} from "reactchatt";
import { prePend } from "../helpers/fake";

const useController = () => {
	return useContext(ControllerContext);
};

const useModel = () => {
	return useContext(ModelContext);
};
const ModelContext = React.createContext(
	<
		{
			themeMode: "dark" | "light";
			mode: "mobile" | "web";
			avatar: boolean;
			title: boolean;
			days: boolean;
			typing: boolean;
			messages: Array<MessageProps>;
			loading: boolean;
			composerReplyMessage?: MessageProps;
			logs?: Array<{ log: string; message?: MessageProps }>;
		}
	>{}
);

const ControllerContext = React.createContext(
	<
		{
			logEvent: (info: { log: string; messageId?: string }) => void;
			updateThemeMode: () => void;
			updateMode: (m: "mobile" | "web") => void;
			addNewMessage: (m: MessageProps) => void;
			updateDays: () => void;
			updateLoading: () => void;
			updateAvatar: () => void;
			updateTitle: () => void;
			updateTyping: () => void;
			clearChat: () => void;
			generateFake: (amount: number) => void;
			prePend: () => void;
			reply: (id: number) => void;
			scrollTo: (i: number) => void;
			highlight: (i: number) => void;
		}
	>{}
);

export { useModel, useController, ControllerContext, ModelContext };
