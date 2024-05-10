import React from "react";
import { AppHeader } from "../components/AppHeader";
import { AppLabel } from "../components/AppLabel";
import { AppBtn } from "../components/AppBtn";

const Welcome = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
         <AppHeader/> 
          <form className="welcome__form">
            <AppLabel inputLabel={'Ваше имя'} inputHolder={'Напишите свое имя'} inputName={'имя'} attValue={'text'}/>
            <AppLabel inputLabel={'Ваш номер телефона'} inputHolder={'+998 9_ ___-__-__'} inputName={'номер'} attName={'name'}/>
            <AppBtn/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
