import React from "react";

import { AppLabel } from "../components/AppLabel";
import { AppBtn } from "../components/AppBtn";
import { AppSpan } from "../components/AppSpan";
import { AppSpan2 } from "../components/AppSpan2";
import { AppHeader } from "../components/AppHeader";

const StepOne = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <div className="indicator">
            <div className="indicator__text">
              <AppSpan/>
              <AppSpan2/>
            </div>
            <div className="indicator__progressbar">
              <div className="indicator__unit indicator__unit-1"></div>
              <div className="indicator__unit indicator__unit-2"></div>
              <div className="indicator__unit indicator__unit-3"></div>
              <div className="indicator__unit indicator__unit-4"></div>
            </div>
          </div>
          <div className="question">
          <AppHeader 
              headerText={'1. Занимательный вопрос'}
              headerType={'h2'}/> 
            <AppLabel 
              isRequired={true}
              inputType={'text'}
              id={'answer'}
              inputPlaceHolder={'Ваш ответ'}
              errorText={'Введите номер в правильном формате например'}
            />
            <AppBtn
              isDisable={false}
              buttonType={'button'}
              buttonText={'Далее'}
            />
            {/* <h2>1. Занимательный вопрос</h2>
            <label className="input-wrapper">
              <input
                required
                type="text"
                name="answer"
                placeholder="Ваш ответ"
              />
              <span id="error-message">
                Введите номер в правильном формате например
              </span>
            </label>
            <button type="button" disabled id="next-btn">
              Далее
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
