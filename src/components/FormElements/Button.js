import React from "react";
import { ButtonWrap } from "../../styles";

const Button = ({ type, text }) => {
  return (
    <ButtonWrap>
      <button type={type}>{text}</button>
      <span className="last">
        By clicking this button, you are agreeing to our
        <a href="wiki"> Terms and Conditions</a>
      </span>
    </ButtonWrap>
  );
};

export default Button;
