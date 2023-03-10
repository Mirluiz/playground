import React, { FC, memo, useEffect, useState } from "react";
import { ReactChat } from "reactchatt";
import { Box, Paper } from "@mui/material";
import "./assets/view.css";
import { users } from "./helpers/Dummies";
import { useController, useModel } from "./hooks/context";

const View = () => {
	const {
		avatar,
		title,
		messages,
		loading,
		composerReplyMessage,
		mode,
		themeMode,
		days,
		typing,
	} = useModel();

	const { logEvent } = useController();

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
													onBackground: "#f4f4f5",
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
													contrast: "#45af5424",
													onContrast: "#fff",
													text: "#000",
													reply: "#3390ecff",
													onReply: "#fff",
												},
										  }
										: {
												palette: {
													background: "#0f0f10",
													onBackground: "#aaaaaaff",
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
								typing={typing}
								typingInfo={users.shakespeare.name}
								days={days}
								title={title}
								avatar={avatar}
								messages={messages}
								me="1"
								loading={loading}
								onMessageDblClick={(message) =>
									logEvent({ log: "onMessageDblClick", messageId: message })
								}
								onMessageClick={(message) =>
									logEvent({ log: "onMessageClick", messageId: message })
								}
								onMessageLongTouch={(message) =>
									logEvent({ log: "onMessageLongTouch", messageId: message })
								}
								onTextChange={(text) => logEvent({ log: "onTextChange" })}
								onSendClick={() => logEvent({ log: "onSendClick" })}
								onPulled={(message) =>
									logEvent({ log: "onPulled", messageId: message })
								}
								onComposerReplyCancel={() =>
									logEvent({ log: "onComposerReplyCancel" })
								}
								onMessageItemClick={(message) =>
									logEvent({ log: "onMessageItemClick", messageId: message })
								}
								onEdgeReach={() => logEvent({ log: "onEdgeReach" })}
								onMessageSystemDateClick={() =>
									logEvent({ log: "onMessageSystemDateClick" })
								}
								composerReplyMessage={composerReplyMessage}
								onReplyMessageClick={(replyMessageId, messageId) =>
									logEvent({
										log: "onReplyMessageClick",
										messageId: replyMessageId,
									})
								}
								onMessageContext={(message) =>
									logEvent({ log: "onMessageContext", messageId: message })
								}
								onLeftIconClick={() => logEvent({ log: "onLeftIconClick" })}
								onRightIconClick={() => logEvent({ log: "onRightIconClick" })}
								renderAny={(m, order) => {
									return (
										<Paper
											sx={{
												width: 150,
												height: 50,
												display: "flex",
												justifyContent: "center",
												alignItems: "center",
												textAlign: "center",
											}}>
											Customizable message
										</Paper>
									);
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
						onMessageDblClick={(message) =>
							logEvent({ log: "onMessageDblClick", messageId: message })
						}
						onMessageClick={(message) =>
							logEvent({ log: "onMessageClick", messageId: message })
						}
						onMessageLongTouch={(message) =>
							logEvent({ log: "onMessageLongTouch", messageId: message })
						}
						onTextChange={(text) => logEvent({ log: "onTextChange" })}
						onSendClick={() => logEvent({ log: "onSendClick" })}
						onPulled={(message) =>
							logEvent({ log: "onPulled", messageId: message })
						}
						onComposerReplyCancel={() =>
							logEvent({ log: "onComposerReplyCancel" })
						}
						onMessageItemClick={(message) =>
							logEvent({ log: "onMessageItemClick", messageId: message })
						}
						onEdgeReach={() => logEvent({ log: "onEdgeReach" })}
						onMessageSystemDateClick={() =>
							logEvent({ log: "onMessageSystemDateClick" })
						}
						composerReplyMessage={composerReplyMessage}
						onReplyMessageClick={(replyMessageId, messageId) =>
							logEvent({
								log: "onReplyMessageClick",
								messageId: replyMessageId,
							})
						}
						onMessageContext={(message) =>
							logEvent({ log: "onMessageContext", messageId: message })
						}
						renderAny={(m: { id: string }, o) => {
							return <></>;
						}}
					/>
				</Box>
			)}
		</>
	);
};

export default memo(View);
