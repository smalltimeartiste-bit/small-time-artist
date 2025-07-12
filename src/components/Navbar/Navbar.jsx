import logo from "/logo.svg";
import css from "./Navbar.module.css";
import CustomButton from "../Buttons/Buttons";
import classNames from "classnames";
import { useEffect, useState } from "react";

const Navbar = () => {
  const navList = ["Home", "About", "Product", "Reviews"];
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY >= 8 && !isScrolled) {
        setIsScrolled(true);
      } else if (scrollY === 0 && isScrolled) {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  return (
    <nav className={classNames(css.nav, { [css.navScroll]: isScrolled })}>
      <div className={css.navContainer}>
        <div className={css.logo}>
          <img src={logo} alt="logo" loading="lazy" />
        </div>
        <div>
          <ul>
            {navList.map((list, i) => (
              <li key={i}>
                <CustomButton className={css.navButton}>{list}</CustomButton>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
