import React, { FC, useEffect, useState } from "react";
import { ReactChat } from "reactchatt";
import useChat from "./context";
import { Box } from "@mui/material";
import "./view.css";

const View = () => {
	const {
		avatar,
		title,
		messages,
		loading,
		onMessageDblClick,
		onMessageClick,
		onMessageLongTouch,
		onTextChange,
		onPulled,
		onComposerReplyCancel,
		composerReplyMessage,
		onMessageItemClick,
		onEdgeReach,
		onMessageSystemDateClick,
		onSendClick,
		mode,
		themeMode,
		days,
	} = useChat();

	return (
		<>
			{mode === "mobile" ? (
				<div className="marvel-device iphone-x">
					<div className="notch">
						<div className="camera"></div>
						<div className="speaker"></div>
					</div>
					<div className="top-bar"></div>
					<div className="sleep"></div>
					<div className="bottom-bar"></div>
					<div className="volume"></div>
					<div className="overflow">
						<div className="shadow shadow--tr"></div>
						<div className="shadow shadow--tl"></div>
						<div className="shadow shadow--br"></div>
						<div className="shadow shadow--bl"></div>
					</div>
					<div className="inner-shadow"></div>
					<div className="screen">
						<div
							style={{
								position: "absolute",
								top: "30px",
								bottom: "0",
								left: "0",
								right: "0",
							}}>
							<ReactChat
								theme={
									themeMode === "light"
										? {
												palette: {
													background: "#95c48a",
													left: "#ffffff",
													leftTitle: "#e17076",
													onLeft: "#000000",
													onLeftSecondary: "#686c72ff",
													right: "#eeffde",
													rightTitle: "#6ec9cb",
													onRight: "#000000",
													onRightSecondary: "#45Af54ff",
													composer: "#fff",
													onComposer: "#707579cc",
													accent: "#3390ecff",
													onAccent: "#fff",
													contrast: "#45af544d",
													onContrast: "#fff",
													text: "#000",
													reply: "#3390ecff",
													onReply: "#fff",
												},
										  }
										: {
												palette: {
													background: "#0f0f10",
													left: "#212121",
													leftTitle: "#766ac8ff",
													onLeft: "#fff",
													onLeftSecondary: "#aaaaaaff",
													right: "#766ac8ff",
													rightTitle: "#fff",
													onRight: "#eeeeee",
													onRightSecondary: "#ffe",
													composer: "#212121ff",
													onComposer: "#aaaaaacc",
													onAccent: "#212121",
													accent: "#766ac8ff",
													contrast: "#0000004c",
													onContrast: "#ffe",
													text: "#fff",
													reply: "#fff",
													onReply: "#3390ecff",
												},
										  }
								}
								days={days}
								title={title}
								avatar={avatar}
								messages={messages}
								me="1"
								loading={loading}
								onMessageDblClick={onMessageDblClick}
								onMessageClick={onMessageClick}
								onMessageLongTouch={onMessageLongTouch}
								onTextChange={onTextChange}
								onSendClick={onSendClick}
								onPulled={onPulled}
								onComposerReplyCancel={onComposerReplyCancel}
								onMessageItemClick={onMessageItemClick}
								onEdgeReach={onEdgeReach}
								onMessageSystemDateClick={onMessageSystemDateClick}
								composerReplyMessage={composerReplyMessage}
								onReplyMessageClick={(
									replyMessageId: string,
									messageId: string
								) => {
									console.log("reply checked", replyMessageId, messageId);
								}}
							/>
						</div>
					</div>
				</div>
			) : (
				<Box
					sx={{
						width: "100%",
						height: "812px",
					}}>
					<ReactChat
						theme={
							themeMode === "light"
								? {
										palette: {
											background: "#95c48a",
											left: "#ffffff",
											leftTitle: "#e17076",
											onLeft: "#000000",
											onLeftSecondary: "#95c48a",
											right: "#eeffde",
											rightTitle: "#6ec9cb",
											onRight: "#000000",
											onRightSecondary: "rgb(69,175,84)",
										},
								  }
								: {
										palette: {
											background: "#95c48a",
											left: "#ffffff",
											leftTitle: "#e17076",
											onLeft: "#000000",
											onLeftSecondary: "#95c48a",
											right: "#eeffde",
											rightTitle: "#6ec9cb",
											onRight: "#000000",
											onRightSecondary: "rgb(69,175,84)",
										},
								  }
						}
						days={days}
						title={title}
						avatar={avatar}
						messages={messages}
						me="1"
						loading={loading}
						onMessageDblClick={onMessageDblClick}
						onMessageClick={onMessageClick}
						onMessageLongTouch={onMessageLongTouch}
						onTextChange={onTextChange}
						onSendClick={onSendClick}
						onPulled={onPulled}
						onComposerReplyCancel={onComposerReplyCancel}
						onMessageItemClick={onMessageItemClick}
						onEdgeReach={onEdgeReach}
						onMessageSystemDateClick={onMessageSystemDateClick}
						composerReplyMessage={composerReplyMessage}
					/>
				</Box>
			)}
		</>
	);
};

export default View;
