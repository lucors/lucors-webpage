import IconAppManager from "#apps/manager/IconAppManager.jsx";
import IconAppCalc from "#apps/calc/IconAppCalc.jsx";
import IconAppPaint from "#apps/paint/IconAppPaint.jsx";
import IconAppTrash from "#apps/trash/IconAppTrash.jsx";
import IconAppChat from "#apps/chat/IconAppChat.jsx";
import "./IconsList.css";

export default function IconsList() {
  return (
    <div className="desktop-icons">
      <IconAppManager />
      <IconAppChat />
      <IconAppCalc />
      <IconAppPaint />

      <IconAppTrash />
    </div>
  );
}
