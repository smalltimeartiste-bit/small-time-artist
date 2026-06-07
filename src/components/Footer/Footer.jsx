import { BiLogoTelegram } from "react-icons/bi";
import Heading from "../Heading/Heading";
import { ImFacebook2 } from "react-icons/im";
import { IoCall } from "react-icons/io5";
import { SiInstagram } from "react-icons/si";
import css from "./Footer.module.css";
import flower from "../../assets/page/footer/flowers.png";
import footerBg from "../../assets/page/footer/footer.png";

function Footer() {
  const socialLinks = [
    {
      label: "Facebook",
      icon: <ImFacebook2 />,
      href: "https://www.facebook.com/smalltime.artiste", // Replace with actual URL
    },
    {
      label: "Instagram",
      icon: <SiInstagram />,
      href: "https://www.instagram.com/smalltime.artiste", // Replace with actual URL
    },
    {
      label: "Email",
      icon: <BiLogoTelegram />,
      href: "mailto:smalltime.artiste@gmail.com", // Replace with actual email
    },
    {
      label: "Call",
      icon: <IoCall />,
      href: "tel:+919007485114", // Replace with actual phone number
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
