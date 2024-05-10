import React from "react";
export const StepOneLabel = () => {
    return (
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
    )
}