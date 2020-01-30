import React, { useRef, useLayoutEffect } from "react";
import { Box, Text } from "grommet";
import { Button } from "@blueprintjs/core";
import { users } from "../../../data/users";
import { User } from '../../../ui/User';
import { FeatherIcon } from "../../../ui/FeatherIcon";
import { AudioRecording } from "../AudioRecording";
import { useEntity } from '../../../data/useLoadingState';
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
    text: "That is not said right",
    date: new Date("2020-01-03T03:29:00"),
  },
  {
    id: id++,
    type: "outgoing",
    text: "Not quite right, I’m afraid",
    date: new Date("2020-01-03T03:30:01"),
  },
  {
    id: id++,
    type: "incoming",
    text: "It is wrong from beginning to end",
    date: new Date("2020-01-03T03:30:22"),
  },
  {
    id: id++,
    type: "incoming",
    text:
      "One side will make you grow taller, and the other side will make you grow shorter",
    date: new Date("2020-01-03T03:40:03"),
  },
  {
    id: id++,
    type: "outgoing",
    text: "One side of what? The other side of what?",
    date: new Date("2020-01-03T03:40:13"),
  },
  {
    id: id++,
    type: "incoming",
    text: "Of the mushroom",
    date: new Date("2020-01-03T03:51:00"),
  },
  {
    id: id++,
    type: "outgoing",
    text: "And now which is which?",
    date: new Date("2020-01-03T03:51:30"),
  },
  {
    id: id++,
    type: "incoming",
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
    text: "So how was your day?",
    date: new Date("2020-01-03T04:24:24"),
  },
  {
    id: id++,
    type: "incoming",
    text:
      "One side will make you grow taller, and the other side will make you grow shorter",
    date: new Date("2020-01-03T03:40:03"),
  },
  {
    id: id++,
    type: "outgoing",
    text: "One side of what? The other side of what?",
    date: new Date("2020-01-03T03:40:13"),
  },
  {
    id: id++,
    type: "incoming",
    text: "Of the mushroom",
    date: new Date("2020-01-03T03:51:00"),
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
      flex={{ shrink: 0 }}
    >
      <User size={40} user={users['1']} />
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
  const ref = useRef<HTMLDivElement>();
  useLayoutEffect(() => {
    if (!ref.current) {
      return;
    }
    ref.current.scrollTop = ref.current.scrollHeight;
  }, []);
  const { loading } = useEntity('api/messages')
  if (loading) {
    return null;
  }
  return (
    <Box
      border="all"
      justify="between"
      flex={{ shrink: 0 }}
      style={{ maxHeight: 500 }}
    >
      <MessengerHeader />
      <div ref={ref} style={{ flexGrow: 1, overflowY: "auto" }}>
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
