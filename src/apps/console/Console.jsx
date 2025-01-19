import React, { useState, useRef, useEffect } from "react";
import "./Console.css";
import { cmds } from "./shared";

const welcomeMessage =
  "Консоль еще в разработке.\nВведите `help` для справки.\n";

export default function Console() {
  const inputRef = useRef(null);
  const containerRef = useRef(null);
  const [log, setLog] = useState(welcomeMessage);

  useEffect(() => {
    if (!containerRef?.current) return;
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }, [log]);

  const handleCommand = (cmdRaw = "") => {
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

  const handleKeyDown = (event) => {
    if (!inputRef?.current) return;
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
