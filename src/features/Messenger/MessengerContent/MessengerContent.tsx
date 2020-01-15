import React from "react";
import { Box, Text } from "grommet";
import { Button } from "@blueprintjs/core";
import { Avatar } from "../../../ui/Avatar";
import { FeatherIcon } from "../../../ui/FeatherIcon";
import { AudioRecording } from '../AudioRecording';
import audioSrc from "./hl.mp3";

Object.assign(window, { audioSrc });

const timeFormatter = new Intl.DateTimeFormat("ru-RU", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});

interface Message {
  id: number;
  type: "incoming" | "outgoing";
  text?: string;
  date: Date;
  voice?: {
    duration: number;
    src: string;
  };
}

let id = 0;
const messages: Message[] = [
  {
    id: id++,
    type: "incoming",
    text: "Hello",
    date: new Date("2020-01-03T00:00:17"),
  },
  {
    id: id++,
    type: "outgoing",
    text: "Hi...",
    date: new Date("2020-01-03T03:25:00"),
  },
  {
    id: id++,
    type: "incoming",
    text: "Hi...",
    date: new Date("2020-01-03T03:25:00"),
    voice: {
      duration: 10300,
      src: audioSrc,
    },
  },
  {
    id: id++,
    type: "incoming",
    text: "Can you develop a messenger in one week?",
    date: new Date("2020-01-03T03:27:59"),
  },
  {
    id: id++,
    type: "outgoing",
    text: "Yeah, but I won't",
    date: new Date("2020-01-03T04:03:09"),
  },
  {
    id: id++,
    type: "outgoing",
    text: "Yeah, but I won't",
    date: new Date("2020-01-03T04:24:24"),
  },
  {
    id: id++,
    type: "incoming",
    text: "It's okay to eat fish, 'cause it don't have any feeling",
    date: new Date("2020-01-03T04:42:00"),
  },
];

function MessengerHeader() {
  return (
    <Box
      border="bottom"
      direction="row"
      gap="xsmall"
      align="center"
      pad="small"
    >
      <Avatar size={40} />
      <Text>Sub Zero</Text>
    </Box>
  );
}

function Message({ text, date, type }) {
  const textColor = type === "incoming" ? "white" : "black";
  return (
    <Box
      pad="xsmall"
      border="all"
      style={{ backgroundColor: type === "incoming" ? "black" : "white" }}
    >
      <Text color={textColor}>{text}</Text>
      <div
        style={{
          textAlign: "right",
          fontFamily: "monospace",
          color: textColor,
        }}
      >
        {timeFormatter.format(date)}
      </div>
    </Box>
  );
}

function MessageRow({
  type,
  children,
}: {
  type: "incoming" | "outgoing";
  children: React.ReactNode;
}) {
  return (
    <Box
      pad="xsmall"
      direction="row"
      justify={type === "incoming" ? "start" : "end"}
      style={{ marginBottom: 10 }}
      fill
    >
      <div style={{ maxWidth: "40%", width: "100%" }}>{children}</div>
    </Box>
  );
}

export const MessengerContent: React.FunctionComponent<{}> = () => {
  return (
    <Box
      border="all"
      justify="between"
      flex={{ shrink: 0 }}
      style={{ maxHeight: 500 }}
    >
      <MessengerHeader />
      <div style={{ flexGrow: 1, overflowY: "auto" }}>
        {messages.map(message => (
          <MessageRow key={message.id} type={message.type}>
            {message.voice ? (
              <AudioRecording src={message.voice.src} />
            ) : (
              <Message
                type={message.type}
                text={message.text}
                date={message.date}
              ></Message>
            )}
          </MessageRow>
        ))}
      </div>

      <Box border="top" flex={{ shrink: 0 }} direction="row">
        <input
          type="text"
          name="message"
          style={{
            border: "none",
            display: "block",
            flexGrow: 1,
            paddingLeft: 6,
            paddingRight: 6,
          }}
          placeholder="Write a message..."
        />
        <Button minimal icon={<FeatherIcon name="send"></FeatherIcon>}></Button>
      </Box>
    </Box>
  );
};
