import styled from "styled-components";
import { backgroundImageContact } from "../index";
import { theme } from "../theme";

export const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  position: relative;

  &::before {
    content: "";
    background: url(${backgroundImageContact}) no-repeat;
    height: 100px;
    width: 100%;
    background-size: 100%;
    background-position: center top;
    position: absolute;
    top: -50px;
    z-index: -1;
  }
`;

export const StyledWrapper = styled.div`
  max-height: 1180px;
  height:100%;
  background-image: ${theme.whiteLightGrandient};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 20px;
  }

  @media screen and (min-width: 747px) and (max-width: 1200px) {
    max-width: 1100px;
    width: 100%;
    max-height: 1180x;
    height:100%;
  }
`;

export const StyledWrapperInner = styled.div``;

export const StyledProductContent = styled.div``;

export const StyledProductHeadingWrapper = styled.div``;

export const StyledProductHeading = styled.h3`
  text-align: center;
  font-family: Quicksand-bold;
  font-size: 51px;
  line-height: 78px;
  color: ${theme.darkBlue};
`;

export const StyledProductContentText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  font-family: Nunito-Regular;
  font-size: 16px;
  line-height: 36px;
  text-align: center;
  color: ${theme.gulfBlue};

  @media screen and (max-width: 991px) {
    margin: 24px 2px 22px 1px;
    font-family: Nunito-Regular;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    color: ${theme.gulfBlue};
  }
`;

export const StyledProductServicesWrapper = styled.div``;

export const StyledProductServices = styled.div``;

export const StyledProductServicesList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  position:relative;
  list-style-type: none;
`;

export const StyledProductCustom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledPrivateBox = styled.div`
  width: 100%;
  max-width: 244px;
  height: 41px;
  border-radius: 36px;
  background-color: ${theme.grayPayne};
`;

export const StyledPrivateWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 10px 0;
  color: ${theme.white};
  margin: 0;
  text-shadow: 4px 4px 20px ${theme.white};
  font-family: Nunito-Regular;

  @media screen and (max-width: 991px) {
    font-size: 9px;
  }
`;

export const StyledProductCustomWrapper = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  width: 100%;
  max-width: 493px;
  height: 41px;
  border-radius: 36px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.03);
  border: 1px solid ${theme.pinkLight};
  background-color: ${theme.white};

  @media screen and (max-width: 991px) {
    max-width: 331px;
    font-size: 12px;
  }
`;

export const StyledCustomIcon = styled.img`
  width: 100%;
  max-width: 13px;
`;

export const StyledCorporateWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 10px 22px;
  color: ${theme.black};
  margin: 0;
  text-shadow: 4px 4px 20px ${theme.white};
  font-family: Nunito-Regular;
`;
