import React, { useState, useRef, useEffect } from "react";
import "./Console.css";
import { cmds } from "./shared";

const welcomeMessage =
  "Консоль еще в разработке.\nВведите `help` для справки.\n";

export default function Console() {
  const inputRef = useRef(null);
  const containerRef = useRef(null);
  const [log, setLog] = useState(welcomeMessage);
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  useEffect(() => {
    if (!containerRef?.current) return;
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }, [log]);

  const addHistory = (cmd) => {
    setHistory([cmd, ...history]);
  }

  const handleCommand = (cmdRaw = "") => {
    addHistory(cmdRaw);
    const _log = log + "\n> " + cmdRaw;
    const args = cmdRaw.trim().toLowerCase().split(" ");
    if (args[0] === "clear") {
      setLog("");
      return;
    }
    const handler = cmds.get(args[0]);
    if (!handler) {
      setLog(_log + "\nНеизвестная команда");
      return;
    }
    setLog(_log + "\n" + handler(args.slice(1)));
  };

  const setFromHistory = (i) => {
    setHistoryIndex(i);
    inputRef.current.value = history?.[i] ?? "";
  }

  const handleKeyDown = (event) => {
    if (!inputRef?.current) return;
    if (event.key === "ArrowUp") {
      let i = historyIndex + 1;
      if (i >= history.length) i = history.length-1; 
      setFromHistory(i);
      return;
    }
    if (event.key === "ArrowDown") {
      let i = historyIndex - 1;
      if (i < 0) i = 0; 
      setFromHistory(i);
      return;
    }
    setHistoryIndex(-1);
    if (inputRef.current.value && event.key === "Enter") {
      handleCommand(inputRef.current.value);
      inputRef.current.value = "";
    }
  };

  return (
    <div className="console-container" ref={containerRef}>
      <pre>{log}</pre>
      <input ref={inputRef} type="text" onKeyDown={handleKeyDown} />
    </div>
  );
}
