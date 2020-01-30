import NanoEvents from "nanoevents";
import { useEffect, useState, useRef } from "react";

const cache = new Map<string, boolean>();
const emitter = new NanoEvents();

function finishLoading(endpoint: string) {
  if (!cache.has(endpoint) || cache.get(endpoint)) {
    cache.set(endpoint, false);

    // named "change" events are like old-school "selectors" :)
    emitter.emit(`change:${endpoint}`);
    emitter.emit("change");
  }
}

function load(endpoint: string) {
  if (!cache.has(endpoint) || cache.get(endpoint)) {
    cache.set(endpoint, true);

    // named "change" events are like old-school "selectors" :)
    emitter.emit(`change:${endpoint}`);
    emitter.emit("change");

    setTimeout(() => {
      finishLoading(endpoint);
    }, 600);
  }
}

function isSomethingLoading() {
  return Array.from(cache.values()).some(Boolean);
}

function useEmitter(event: string, callback: () => void) {
  const callbackRef = useRef<() => void>(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    return emitter.on(event, () => {
      callbackRef.current();
    });
  }, [event]);
}

export function useEntity(endpoint: string) {
  const [loading, setLoading] = useState(
    cache.has(endpoint) ? cache.get(endpoint) : true,
  );
  useEffect(() => {
    load(endpoint);
  }, [endpoint]);
  useEmitter(`change:${endpoint}`, () => {
    setLoading(cache.has(endpoint) ? cache.get(endpoint) : true);
  });
  return { loading };
}

export function useLoadingState() {
  const [loading, setLoading] = useState(isSomethingLoading());
  useEmitter("change", () => {
    setLoading(isSomethingLoading());
  });
  return loading;
}
