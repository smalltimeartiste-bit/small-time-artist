import { BiLogoTelegram } from "react-icons/bi";
import Heading from "../Heading/Heading";
import { ImFacebook2 } from "react-icons/im";
import { IoCall } from "react-icons/io5";
import { SiInstagram } from "react-icons/si";
import css from "./Footer.module.css";
import flower from "../../assets/page/footer/flowers.png";
import footerBg from "../../assets/page/footer/footer.png";

function Footer() {
  const whatsappPhone = import.meta.env.VITE_WHATSAPP_PHONE;
  const socialLinks = [
    {
      label: "Facebook",
      icon: <ImFacebook2 />,
      href: "https://www.facebook.com/smalltime.artiste",
    },
    {
      label: "Instagram",
      icon: <SiInstagram />,
      href: "https://www.instagram.com/smalltime.artiste",
    },
    {
      label: "Email",
      icon: <BiLogoTelegram />,
      href: "mailto:smalltime.artiste@gmail.com",
    },
    {
      label: "Call",
      icon: <IoCall />,
      href: `tel:${whatsappPhone}`,
    },
  ];
  return (
    <footer className={css.footer}>
      <div className={css.footerContentContainer}>
        <Heading className={css.footerHeading} level="2">
          Say <span>Hello</span>
        </Heading>
        <div className={css.socialsCont}>
          {socialLinks.map(({ label, icon, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={css.link}
            >
              <span className={css.icon}>{icon}</span>
              <span>{label}</span>
            </a>
          ))}
        </div>
      </div>
      <img className={css.bg} src={footerBg} alt="" />
      <img className={css.flow} src={flower} alt="" />
    </footer>
  );
}

export default Footer;
