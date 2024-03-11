import React from "react";
import cls from "./Registr.module.css";
import Button from "../../components/Button/Button";

export const Regisrt = () => {
  return (
    <div className={cls.wrap}>
      <div className={cls.form}>
        <h1>Регистрация</h1>
        <div className={cls.inputs}>
          <input type="text" placeholder="EMAIL" />
          <input type="password" placeholder="Password" />
        </div>
        <div className={cls.entrance}>
          <Button value="Регистрация" />
        </div>
      </div>
    </div>
  );
};
