import styled from "styled-components";
import { theme } from "../theme";
import Icon from "../assets/icon-error.svg";

export const InputWrap = styled.div`
  input {
    border-radius: 5px;
    border: 1px solid hsl(246, 25%, 77%);
    display: block;
    font-weight: 600;
    font-size: 16px;
    font-style: italic;
    opacity: 0.8;
    width: 100%;
    padding: 18px 30px;
    letter-spacing: 1px;
    margin-bottom: 20px;

    background-image: url(${Icon});
    background-repeat: no-repeat;
    background-position: bottom 50% right 1.5rem;
    position: relative;
  }

  input:focus {
    border: 1px solid hsl(249, 10%, 26%);
    outline: none;
    opacity: 1;
  }

  /* error msg */
  p {
    font-size: 10px;
    font-weight: 550;
    text-align: right;
    margin: -0.7rem 0.1rem 1rem 0;
    color: ${theme.colors.mainRed} !important;
    font-style: italic;
    opacity: 0.8;
  }

  /* mobile */
  @media (max-width: 600px) {
    input {
      padding: 15px 16px;
      font-size: 11px;
      font-weight: 650;
      letter-spacing: 0.3px;
      margin-bottom: 14px;
    }
  }

  /*  */
  @media (min-width: 600px) {
    input {
      padding: 10px 20px;
      font-size: 12px;
      font-weight: 650;
      margin-bottom: 14px;
    }
  }

  /* medium */
  @media (min-width: 811px) {
    input {
      padding: 10px 16px;
      font-size: 8px;
      font-weight: 650;
      margin-bottom: 8px;
      background-position: bottom 50% right 1rem;
      background-size: 1rem;
    }
    p {
      margin: -0.3rem 0.3rem 1rem 0;
    }
  }

  /* large */
  @media (min-width: 992px) {
    input {
      padding: 18px 30px;
      font-size: 16px;
      margin-bottom: 16px;
      background-position: bottom 50% right 1.5rem;
      background-size: 1.5rem;
    }
    p {
      font-size: 0.8rem;
      margin: -0.5rem 0.2rem 1.2rem 0;
    }
  }
`;
