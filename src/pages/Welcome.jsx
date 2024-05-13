import React from "react";
import { AppHeader } from "../components/AppHeader";
import { AppLabel } from "../components/AppLabel";
import { AppBtn } from "../components/AppBtn";

const Welcome = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
         <AppHeader 
              headerText={'Добро пожаловать в квиз от лучшего учебного центра'}
              headerType={'h1'}/> 
          <form className="welcome__form">
            <AppLabel 
              inputLabel='Ваше имя'
              inputPlaceHolder={'Напишите свое имя'} 
              id={'username'} 
              inputType={'text'}
              errorText='Введите правильный формат Имени'/>
            <AppLabel 
              inputLabel={'Ваш номер телефона'} 
              inputPlaceHolder={'+998 9_ ___-__-__'} 
              inputType={'tel'} 
              id={'phone'}
              errorText={'Введите номер в правильном формате'}
              />
            <AppBtn 
            isDisable={false} 
            buttonType='button' 
            buttonText='Далее'/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
