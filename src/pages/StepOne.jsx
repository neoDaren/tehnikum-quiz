import React from "react";
import { AppH2 } from "../components/AppH2";
import { AppLabel } from "../components/AppLabel";
import { AppBtn } from "../components/AppBtn";
import { AppSpan } from "../components/AppSpan";
import { AppSpan2 } from "../components/AppSpan2";

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
           <AppH2/>
            <AppLabel attValue={'text'}  attName={'name'} inputName={'Номер'} inputHolder={'Ваш ответ'}/>
            <AppBtn/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
