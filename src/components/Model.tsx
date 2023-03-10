import { Grid } from "@mui/material";
import React, { memo, useEffect, useState } from "react";
import { MessageProps } from "reactchatt";
import View from "./View";
import PanelView from "./PanelView";
import { ControllerContext, ModelContext } from "./hooks/context";
import { generateFake, prePend as prePendFake } from "./helpers/fake";
import EventView from "./EventView";

const Model = () => {
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
	const [logs, setLogs] = useState<
		Array<{ log: string; message?: MessageProps }>
	>([]);

	useEffect(() => {
		setMessages(generateFake(10));
	}, []);

	return (
		<ModelContext.Provider
			value={{
				logs: logs,
				typing: typing,
				mode: mode,
				days: days,
				avatar: avatar,
				title: title,
				messages: messages,
				loading: loading,
				themeMode: themeMode,
				composerReplyMessage: composerReplyMessage,
			}}>
			<ControllerContext.Provider
				value={{
					logEvent: (event) => {
						let { log, messageId } = event;
						let msg = messages.find((m) => m.id === messageId);

						setLogs([...logs, { log, message: msg }]);
					},
					prePend: () => {
						setMessages(prePendFake(messages));
					},
					reply: (index) => {
						let msg = messages[index];
						if (msg) setComposerReplyMessage(msg);
					},
					updateDays: () => {
						setDays(!days);
					},
					highlight: () => {
						alert("Coming soon");
					},
					scrollTo: () => {
						alert("Coming soon");
					},
					clearChat: () => {
						setMessages([]);
					},
					updateTyping: () => {
						setTyping(!typing);
					},
					updateMode: (m) => {
						setMode(m);
					},
					updateThemeMode: () => {
						setThemeMode(themeMode === "light" ? "dark" : "light");
					},
					updateAvatar: () => {
						setAvatar(!avatar);
					},
					updateLoading: () => {
						setLoading(!loading);
					},
					updateTitle: () => {
						setTitle(!title);
					},
					addNewMessage: (newMessage) => {
						messages.push(newMessage);
						setMessages([...messages]);
					},
					generateFake: (amount) => {
						setMessages([]);
						setMessages(generateFake(amount));
					},
				}}>
				<Grid
					container
					sx={{
						border: "2px solid whitesmoke",
					}}>
					<Grid
						item
						md={5}
						sx={{
							display: "flex",
							justifyContent: "center",
						}}>
						<View />
					</Grid>
					<Grid
						item
						md={4}
						sx={{
							borderRight: "2px solid whitesmoke",
						}}>
						<PanelView />
					</Grid>
					<Grid item md={3} sx={{}}>
						<EventView />
					</Grid>
				</Grid>
			</ControllerContext.Provider>
		</ModelContext.Provider>
	);
};

export default memo(Model);
