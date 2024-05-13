import React from "react";

export const AppBtn = ({buttonText, isDisable, buttonType}) => {
    return (
        <button type={buttonType === 'submit' ? 'submit': 'button'} disable={isDisable} id="next-btn">
              {buttonText}
            </button>
    )
}
