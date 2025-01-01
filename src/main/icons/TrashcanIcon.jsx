import { createApp } from "#apps/trash/WindowTrash.jsx";

export default function TrashcanIcon() {
  return <a id="trashcan" onClick={createApp}></a>;
}
