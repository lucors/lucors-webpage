import { setWindowQuery } from "#common/QueryButton.jsx";

export default function TrashcanIcon() {
  function showTrash() {
    setWindowQuery("Trash zone", "trashcan");
  }
  return <a id="trashcan" onClick={showTrash}></a>;
}
