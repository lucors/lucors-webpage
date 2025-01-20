import QueryButton from "./QueryButton";
import { useTranslation } from "react-i18next";
import { WINDOW_APP_MANAGER } from "./shared";
import i18next from "i18next";

i18next.addResourceBundle("en", WINDOW_APP_MANAGER, {
  w1: "Welcome!",
  w2: "Welcome to my website.",
  w3: "You have chose, or choose for you, this is the 'finest' remaining website. I thought so much of this site that I elected to post my contact information here, in the section",
  contacts: "contacts",
  contactsTitle: "Contacts",
  w5: ", so thoughtfully provided by our developers.",
  w6: "I have been proud to call this website my home.",
  w7: "And so, whether you are here to stay, or passing through on your way to parts unknown, welcome to my website.",
  w8: "It's safer here.",
});
i18next.addResourceBundle("ru", WINDOW_APP_MANAGER, {
  w1: "Добро пожаловать!",
  w2: "Добро пожаловать на мой сайт.",
  w3: "Сами вы его выбрали, или его выбрали за вас — это 'лучший' сайт из оставшихся. Я такого высокого мнения об этом сайте, что решил разместить свои контактные данные здесь, в разделе",
  contacts: "контакты",
  contactsTitle: "Контакты",
  w5: ", столь заботливо предоставленным нашим разработчиком.",
  w6: "Я горжусь тем, что называю этот сайт своим домом.",
  w7: "Итак, собираетесь ли вы остаться здесь, или же вас ждут неизвестные дали, добро пожаловать на этот сайт.",
  w8: "Здесь безопасно.",
});

export default function Welcome() {
  const { t } = useTranslation(WINDOW_APP_MANAGER);

  return (
    <div className="section mwem30">
      {t("w1")}<br />
      {t("w2")}<br />
      {t("w3")}{" "}
      <QueryButton
        title={t("contactsTitle")}
        query="contacts"
        subActionAllow={false}
        inline={true}
      >
        {t("contacts")}
      </QueryButton>
      {t("w5")} <br />
      {t("w6")} <br />
      {t("w7")} <br />
      {t("w8")}
    </div>
  );
}
