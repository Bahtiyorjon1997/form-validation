import styled from "styled-components";
import { theme } from "../theme";
// import bgMobile from "../assets/bg-intro-mobile.png";
export { ButtonWrap } from "./button";
export { InputWrap } from "./input";
export { FormWrap } from "./form";
export { Wrapper } from "./app";

export const SignUpWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 80px 160px;
  display: flex;
  align-items: center;
  justify-content: center;

  /* mobile */
  @media (max-width: 600px) {
    padding: 10px 20px;
    height: fit-content;
  }

  /*  */
  @media (min-width: 600px) {
    padding: 40px 80px;
  }

  /* medium */
  @media (min-width: 811px) {
    padding: 66px 92px;
  }

  /* large screen */
  @media (min-width: 992px) {
    padding: 80px 160px;
  }
`;

export const BodyWrap = styled.div`
  align-items: center;
  width: auto;
  max-width: 100%;
  min-height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4.5rem;
  justify-content: center;

  /* mobile */
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
    height: auto;
    margin-bottom: 3.5rem;
  }

  /*  */
  @media (min-width: 600px) {
    grid-gap: 3rem;
  }

  /* medium */
  @media (min-width: 811px) {
    grid-gap: 3rem;
  }

  /* large screen */
  @media (min-width: 992px) {
    grid-gap: 4rem;
  }
`;

export const InfoWrap = styled.div`
  h1 {
    font-size: ${theme.fontSizes.large};
    letter-spacing: 0.03rem;
    line-height: 55px;
    font-weight: 800;
    margin-bottom: 2rem;
  }

  p {
    font-size: ${theme.fontSizes.medium};
    opacity: 0.8;
    letter-spacing: 0.05rem;
    line-height: 25px;
  }

  /* mobile */
  @media (max-width: 600px) {
    h1 {
      font-size: 24px;
      letter-spacing: 0.05rem;
      line-height: 30px;
      font-weight: 900;

      padding-top: 5rem;
      margin: 0 1.5rem 1.5rem 1.5rem;
      text-align: center;
    }

    p {
      font-size: 14px;
      line-height: 24px;
      letter-spacing: 0.04rem;
      text-align: center;
      padding-bottom: 1rem;
    }
  }

  /*  */
  @media (min-width: 600px) {
    h1 {
      font-size: 35px;
      letter-spacing: 0.02rem;
      line-height: 35px;
      font-weight: 600;
      margin-bottom: 1.1rem;
    }

    p {
      font-size: 13px;
      line-height: 15px;
      letter-spacing: 0.03rem;
    }
  }

  /* medium */
  @media (min-width: 811px) {
    h1 {
      font-size: 30px;
      letter-spacing: 0.02rem;
      line-height: 30px;
      font-weight: 700;
      margin-bottom: 24px;
    }

    p {
      font-size: 8px;
      line-height: 12px;
      letter-spacing: 0.04rem;
    }
  }

  /* large screen */
  @media (min-width: 992px) {
    h1 {
      font-size: ${theme.fontSizes.large};
      letter-spacing: 0.03rem;
      line-height: 55px;
      font-weight: 800;
      margin-bottom: 2rem;
    }

    p {
      font-size: 16px;
      line-height: 25px;
      letter-spacing: 0.05rem;
    }
  }
`;

export const Box = styled.div`
  background-color: ${theme.colors.colorBlue} !important;
  margin-bottom: 20px;
  cursor: pointer;

  /* mobile */
  @media (max-width: 600px) {
    margin-bottom: 1.1rem;
    font-size: 14px;
    span {
      text-align: center;
      letter-spacing: 0.5px;
    }
  }

  /*  */
  @media (min-width: 600px) {
    margin-bottom: 1rem;
    font-size: 13px;
  }

  /* medium */
  @media (min-width: 811px) {
    margin-bottom: 10px;
    font-size: 14px;
    padding: 10px 60px;
    span {
      font-size: 8px;
    }
  }
  /* large */
  @media (min-width: 992px) {
    margin-bottom: 20px;
    span {
      font-size: 16px;
      margin: 0 2rem;
    }
  }
`;
