import styled from "styled-components";
import { person } from "../index";
import { theme } from "../theme";

export const StyledSection = styled.section`
  background: ${theme.whiteLightGradient};
  position: relative;

  @media screen and (max-width: 991px) {
    margin: 10px;
  }
`;

export const StyledWrapper = styled.div`
  background: url(${person}) no-repeat;
  background-size: 660px 640px;
  background-position: right 20px bottom 10px;
  height: 650px;

  @media screen and (min-width: 992px) and (max-width: 1200px) {
    background-size: contain;
    height: auto;
  }

  @media screen and (max-width: 991px) {
    background: none;
  }
`;

export const StyledInner = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: 991px) {
    flex-direction: column;
  }
`;

export const StyledNavbarContent = styled.div`
  @media screen and (max-width:991px){
    margin:0 0 0 20px;
  }
`;

export const StyledLeftContent = styled.div``;

export const StyledLeftContentHeading = styled.h3`
  font-family: Quicksand-Bold;
  font-size: 54px;
  line-height: 76px;
  color: ${theme.darkBlue};
  max-width: 565px;
  width: 100%;
  position: relative;
  z-index: 1;

  &::after {
    content: "";
    position: absolute;
    top: 1px;
    left: 0;
    max-width: 427px;
    width: 100%;
    height: 68px;
    z-index: -1;
    background: ${theme.pinkGraindient};
  }

  @media screen and (max-width: 991px) {
    font-size: 24px;
    line-height: 31px;
    margin: 0 0 40px 0;
  }
`;

export const StyledLeftContentText = styled.div`
  font-family: Nunito-Regular;
  font-size: 16px;
  line-height: 27px;
  color: ${theme.blackLight};
  max-width: 565px;
  width: 100%;

  @media screen and (max-width: 991px) {
    font-size: 10px;
    line-height: 21px;
  }
`;
export const StyledBannerImageWrapper = styled.div`
  display: none;

  @media screen and (max-width: 991px) {
    display: block;
    width: 100%;
  }
`;

export const StyledBannerImage = styled.img`
  width: 100%;
  max-width: 600px;
  margin: 30px 0 0;

  @media screen and (max-width: 991px) {
    max-width: 270px;
    width: 100%;
  }
`;

export const StyledLeftButtonWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 210px;
  height: 50px;
  border-radius: 12px;
  margin: 50px 0 20px;
  padding: 10px 20px;
  font-family: Nunito-Bold;
  font-size: 21px;
  line-height: 27px;
  color: ${theme.white};

  @media screen and (max-width: 991px) {
    height: 50px;
    font-size: 14px;
  }
`;

export const StyledLeftBtn = styled.button`
  text-align: center;
  font-family: Nunito-Regular;
  font-size: 18px;
  font-weight: 500;
  color: ${theme.white};
  background-image: ${theme.blackGrandient};
  border-radius: 10px;
  padding: 14px 50px;
  cursor: pointer;
`;
