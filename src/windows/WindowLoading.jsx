import Window from "./Window";
import {useTranslation} from "react-i18next";

export default function WindowLoading() {
  const {t} = useTranslation();
  return (
    <Window data={{id: -1}} title={t("loading")} content={
      <img className="window-loader" src="img/loading.gif" />
    }/>
  )
}
