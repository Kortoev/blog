import React from "react";
import Button from "../Button/Button";
import cls from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={cls.wrap}>
      <div className={cls.container}>
        <div className={cls.logo}></div>
        <div className={cls.buttons}>
          <div className={cls.entranceButton}>
            <Link className={cls.link} to="/">
              <Button value="Войти" />
            </Link>
          </div>

          <div className={cls.registButton}>
            <Link className={cls.link} to="/registr">
              <Button value="Регистрация" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
