import { useEffect } from "react";
import NanoEvents from "nanoevents";

const data = {
  prefix: null,
  title: "Extensible Apps",
};
const emitter = new NanoEvents();

export function subscribe(listener: (d: typeof data) => void) {
  return emitter.on("change", () => listener(data));
}

export function setPrefix(prefix: string | null) {
  if (prefix === data.prefix) {
    return;
  }
  data.prefix = prefix;
  emitter.emit("change");
}

export function setTitle(title: string) {
  if (title === data.title) {
    return;
  }
  data.title = title;
  emitter.emit("change");
}

export function useDocumentPrefix(prefix: string | null) {
  useEffect(() => {
    setPrefix(prefix);
  }, [prefix]);
}

export function useDocumentTitle(title: string) {
  useEffect(() => {
    setTitle(title);
  }, [title]);

  function writeDocumentTitle(documentData: typeof data) {
    const { prefix, title } = documentData;
    console.log("setting title", prefix, title);
    document.title = prefix ? `${prefix} | ${title}` : title;
  }

  useEffect(() => {
    // write immediately on first render
    writeDocumentTitle(data);
  }, []);

  useEffect(() => {
    return subscribe(writeDocumentTitle);
  });
}
