import React from "react";
import cls from "./Entrance.module.css";
import Button from "../../components/Button/Button";

const Entrance = () => {
  return (
    <div className={cls.wrap}>
      <div className={cls.form}>
        <h1>Войти</h1>
        <div className={cls.inputs}>
          <input type="text" placeholder="EMAIL" />
          <input type="password" placeholder="Password" />
        </div>
        <div className={cls.entrance}>
          <Button value="Войти" />
        </div>
      </div>
    </div>
  );
};

export default Entrance;
