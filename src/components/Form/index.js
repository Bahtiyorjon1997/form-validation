import React from "react";
import { useForm } from "react-hook-form";
import Input from "../FormElements/Input";
import Button from "../FormElements/Button";
import { FormWrap, Box } from "../../styles";
import { inputs } from "./data";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  return (
    <FormWrap
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      {/* blue top div */}
      <Box>
        <span>
          <strong>Try it free for 7 days</strong> then $20/mo. thereafter
        </span>
      </Box>

      {/* form div */}
      <div>
        {inputs.map((input) => {
          return (
            <Input
              key={input.id}
              register={register}
              name={input.name}
              type={input.type}
              placeHolder={input.placeHolder}
              errors={errors}
            ></Input>
          );
        })}
        <Button type="submit" text="claim your free trial" />
      </div>
    </FormWrap>
  );
};

export default Form;
