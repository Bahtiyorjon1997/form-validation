import React from "react";
import Form from "../../components/Form";
import Info from "../../components/Info";
import { SignUpWrapper, BodyWrap } from "../../styles";

const SignUp = () => {
  return (
    <SignUpWrapper>
      <BodyWrap>
        <Info />
        <Form />
      </BodyWrap>
    </SignUpWrapper>
  );
};

export default SignUp;
