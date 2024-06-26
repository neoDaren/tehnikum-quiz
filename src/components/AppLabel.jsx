import React from "react";
export const AppLabel = ({
    inputLabel,
    inputPlaceHolder, 
    isRequired, 
    inputType, 
    id, 
    errorText, 
    inputValue, 
    inputChange,
    hasError
  }) => {
    return (
        <label className={`input-wrapper ${hasError && '_error'} `} htmlFor={id}>
              {inputLabel}
              <input
                required={isRequired}
                type={inputType}
                name={id}
                id={id}
                placeholder={inputPlaceHolder}
                value={inputValue}
                onChange={(e) => inputChange(e.target.value)}
              />
              {hasError && <span id="error-message">{errorText}</span>}
        </label>
    )
}