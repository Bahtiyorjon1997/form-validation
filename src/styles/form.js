import styled from "styled-components";
import { theme } from "../theme";

export const FormWrap = styled.form`
  & > div {
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 7px rgb(0, 0, 0, 0.18);
    padding: 22px;
    text-align: center;
  }

  /* form div */
  & > div:nth-child(2) {
    padding: 35px;

    small {
      bottom: -20px;
      color: rgb(203, 162, 161);
      font-size: ${theme.fontSizes.small};
      font-weight: 500;
      position: absolute;
      right: 0;
      text-align: center;
    }
    /* terms and conditions */
    span > a {
      color: rgb(204, 76, 82);
      font-weight: 700;
      text-decoration: none;
    }
    span {
      color: rgb(203, 162, 161);
      font-size: 11px;
      font-weight: 600;
      opacity: 0.6;
    }
  }
  /* mobile */
  @media (max-width: 600px) {
    & > div {
      padding: 15px;
    }
    & > div:nth-child(2) {
      padding: 20px;

      span {
        font-size: 10px;
        letter-spacing: 0.5px;
        margin: 0rem 1rem;
      }
    }
  }
  /*  */
  @media (min-width: 600px) {
    & > div {
      padding: 15px;
    }
    & > div:nth-child(2) {
      padding: 25px;
    }
  }

  /* medium */
  @media (min-width: 811px) {
    & > div {
      padding: 10px;
      box-shadow: 0 3px rgb(0, 0, 0, 0.18);
    }
    & > div:nth-child(2) {
      padding: 22px;

      span {
        font-size: 6px;
      }
    }
  }

  /* large screen */
  @media (min-width: 992px) {
    & > div {
      padding: 22px;
      box-shadow: 0 5px rgb(0, 0, 0, 0.18);
    }
    & > div:nth-child(2) {
      padding: 35px;

      span {
        font-size: 11px;
      }
    }
  }
`;
