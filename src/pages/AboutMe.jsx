import { useTranslation } from "react-i18next";
import myPhoto from "../img/my-photo.jpg";
import { FaLaptopCode, FaLightbulb, FaUsers, FaRocket } from "react-icons/fa";

export default function AboutMe() {
  const { t } = useTranslation();

  return (
    <section className="about-me">
      <div className="container">
        <h2 className="title-1">{t("about.title")}</h2>
        <div className="about-me__wrapper">
          <img src={myPhoto} alt="Anastasia" className="about-me__photo" />
          <div className="about-me__content">
            <h3 className="title-2">{t("about.subtitle")}</h3>

            <div className="about-me__block">
              <FaLaptopCode className="about-me__icon" />
              <p>{t("about.text1")}</p>
            </div>

            <div className="about-me__block">
              <FaLightbulb className="about-me__icon" />
              <p>{t("about.text2")}</p>
            </div>

            <div className="about-me__block">
              <FaUsers className="about-me__icon" />
              <p>{t("about.text3")}</p>
            </div>

            <div className="about-me__block">
              <FaRocket className="about-me__icon" />
              <p>{t("about.text4")}</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
