import React from "react";
import { InputWrap } from "../../styles";
import { theme } from "../../theme";

const Input = ({ name, type, placeHolder, register, errors }) => {
  return (
    <InputWrap>
      {name === "email" ? (
        <input
          {...register("email", {
            required: "This does not look like an email",
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "This does not look like an email",
            },
          })}
          name={name}
          type={type}
          placeholder={!errors[name] ? placeHolder : "email@example/com"}
          style={{
            background: !errors[name] && "none",
            border: errors[name] && `2px solid ${theme.colors.mainRed}`,
          }}
        />
      ) : (
        <input
          {...register(`${name}`, { required: `${name} cannot be empty` })}
          type={type}
          name={name}
          placeholder={!errors[name] && placeHolder}
          style={{
            background: !errors[name] && "none",
            border: errors[name] && `2px solid ${theme.colors.mainRed}`,
          }}
        />
      )}

      {errors[name] && <p>{errors[name]?.message}</p>}
    </InputWrap>
  );
};

export default Input;
