import React from "react";
export const AppLabel = ({inputLabel, inputHolder, inputName, attValue, attName}) => {
    return (
        <label className="input-wrapper" htmlFor="username">
              {inputLabel}
              <input
                required
                type={attValue}
                name={attName}
                id="username"
                placeholder={inputHolder}
              />
              <span id="error-message">
                Введите {inputName} в правильном формате например
              </span>
            </label>
    )
}