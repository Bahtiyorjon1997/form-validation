import styled from "styled-components";
import { theme } from "../theme";
import bgImg from "../assets/bg-intro-desktop.png";
import mobileBgImg from "../assets/bg-intro-mobile.png";

export const Wrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,700;1,200;1,300;1,500&display=swap");

  background-color: ${theme.colors.mainRed};
  background-image: url(${bgImg});
  color: white;
  font-family: ${theme.fonts[0]}, sans-serif;
  min-height: 100vh;
  width: 100vw;

  /* mobile */
  @media (max-width: 600px) {
    background-image: url(${mobileBgImg});
  }
`;
