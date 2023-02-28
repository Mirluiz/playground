import React, { FC, useEffect, useState } from "react";
import { ReactChat } from "reactchatt";
import useChat from "./context";
import { MessageProps } from "./types";
import { uuid4 } from "./helper";
import { users } from "./Dummies";

const View: FC<{
	mode: "mobile" | "large";
}> = ({ mode }) => {
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
	} = useChat();

	return (
		<>
			{mode === "mobile" && (
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
							/>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default View;
