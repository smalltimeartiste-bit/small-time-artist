import { Link, useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";

import CustomButton from "../Buttons/Buttons";
import { FiSearch } from "react-icons/fi";
import Modal from "../Modal/Modal";
import { TbMenu2 } from "react-icons/tb";
import classNames from "classnames";
import css from "./Navbar.module.css";
import logo from "/logo.png";

const Navbar = () => {
  const navList = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/products", name: "Product" },
    { path: "/reviews", name: "Reviews" },
    { path: "/blog", name: "Blog" },
  ];
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const handleSearchClick = () => navigate("/products?focus=1");

  useEffect(() => {
    const rootEl = document.getElementById("root");

    if (!rootEl) return;

    const handleScroll = () => {
      const scrollTop = rootEl.scrollTop;

      if (scrollTop >= 8 && !isScrolled) {
        setIsScrolled(true);
      } else if (scrollTop === 0 && isScrolled) {
        setIsScrolled(false);
      }
    };

    rootEl.addEventListener("scroll", handleScroll, { passive: true });

    return () => rootEl.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  return (
    <>
      <nav className={classNames(css.nav, { [css.navScroll]: isScrolled })}>
        <div className={css.navContainer}>
          <div className={css.logo}>
            <img
              onClick={() => navigate("/")}
              src={logo}
              alt="logo"
              loading="lazy"
            />
          </div>
          <div className={css.cont}>
            <ul>
              {navList.map((list, i) => (
                <li key={i}>
                  <Link className={css.navLink} to={list.path}>
                    <CustomButton
                      className={classNames(css.navButton, {
                        [css.isActive]:
                          location.pathname === list.path ||
                          (list.path !== "/" &&
                            location.pathname.startsWith(`${list.path}/`)),
                      })}
                    >
                      {list.name}
                    </CustomButton>
                  </Link>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className={css.searchNavBtn}
              onClick={handleSearchClick}
              aria-label="Search products"
              title="Search products"
            >
              <FiSearch />
            </button>
            <TbMenu2
              className={css.svg}
              onClick={() => setIsOpen((prev) => !prev)}
            />
          </div>
        </div>
      </nav>
      <Modal
        isOpen={isOpen}
        onClose={(url) => {
          if (!url) {
            setIsOpen(false);
          } else {
            setIsOpen(false);
            navigate(url);
          }
        }}
        list={navList}
      />
    </>
  );
};

export default Navbar;
