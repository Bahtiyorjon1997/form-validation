import styled from "styled-components";
import { theme } from "../theme";

export const ButtonWrap = styled.div`
  button {
    background-color: ${theme.colors.buttonGreen};
    border: 1px solid ${theme.colors.borderColor};
    box-shadow: 0 3px ${theme.colors.borderColor};
    border-radius: 5px;
    color: #ffffffe4;
    cursor: pointer;
    display: block;
    font-weight: 520;
    font-size: 16px;
    margin-bottom: 1rem;
    padding: 18px 30px;
    text-transform: uppercase;
    width: 100%;

    /* mobile */
    @media (max-width: 600px) {
      font-weight: 500;
      font-size: 13px;
      margin-bottom: 0.35rem;
      padding: 12px 30px;
      letter-spacing: 0.5px;
    }

    @media (min-width: 600px) {
      font-weight: 500;
      font-size: 12px;
      margin-bottom: 0.4rem;
      padding: 13px 30px;
      letter-spacing: 0.5px;
    }
    /* medium size screen */
    @media (min-width: 811px) {
      font-weight: 500;
      font-size: 8px;
      margin-bottom: 6px;
      padding: 8px 36px;
      letter-spacing: 0.3px;
    }
    /* larger screen */
    @media (min-width: 992px) {
      padding: 16px;
      font-size: 14px;
      margin-bottom: 12px;
    }
  }
`;
