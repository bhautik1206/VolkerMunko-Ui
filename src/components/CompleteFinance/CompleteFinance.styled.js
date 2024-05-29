import styled from "styled-components";
import { theme } from "../theme";

export const StyledSection = styled.section``;

export const StyledWrapper = styled.div`
  @media only screen and (max-width: 1199px) {
    padding: 0 20px;
  }
`;

export const StyledInnerWrapper = styled.div`
  padding: 50px 0 100px;
  display: flex;
  align-items:center;
  justify-content: space-between;

  @media screen and (max-width: 991px) {
    padding: 0;
  }
`;

export const StyledLeftCompleteFinance = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 991px) {
    flex-direction: column;
  }
`;

export const StyledLeftInner = styled.div``;

export const StyledHeadingWrapper = styled.div`
  position: relative;
  font-family: Quicksand-Bold;
  font-size: 51px;
  line-height: 72px;
  color: ${theme.darkBlue};
  max-width: 565px;
  width: 100%;
  margin: 0 0 40px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    max-width: 427px;
    width: 100%;
    height: 68px;
    z-index: -1;
    background: ${theme.pinkGraindient};

    @media screen and (max-width: 991px) {
      max-width: 327px;
      width: 100%;
    }
  }

  @media screen and (max-width: 991px) {
    font-size: 24px;
    line-height: 64px;
    margin: 0 0 40px 0;
  }
`;

export const StyledHeading = styled.div`
  @media screen and (max-width: 991px) {
    line-height: 38px;
  }
`;

export const StyledCompleteTextWrapper = styled.div`
  font-family: Nunito-Regular;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  color: ${theme.blackThird};
  max-width: 565px;
  width: 100%;

  @media screen and (max-width: 991px) {
    font-size: 12px;
    line-height: 28px;
  }
`;

export const StyledCompleteText = styled.div``;

export const StyledButtonWrapper = styled.button`
  position: relative;
  background: ${theme.grayGrandient};
  max-width: 210px;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  border: transparent;
  margin: 50px 0 20px;
  padding: 10px 20px;
  font-family: Nunito-Bold;
  font-size: 18px;
  line-height: 18px;
  color: ${theme.darkBlue};

  &:hover {
    background: ${theme.black};
    color: ${theme.white};
  }
`;

export const StyledButton = styled.div`
  margin: 0;
  padding: 0;
`;

export const StyledRightInner = styled.div``;

export const StyledRightContent = styled.div`
  max-width: 440px;
  width: 100%;
  margin: 0 0 0 100px;

  @media screen and (max-width: 991px) {
    margin: 0;
  }
`;

export const StyledExcellentHeadingWrapper = styled.div`
  font-family: Quicksand-Bold;
  font-size: 29px;
  line-height: 44px;
  color: ${theme.darkBlue};
  position: relative;
  padding: 0 0 0 50px;
  margin: 0 0 40px 0;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    height: 2px;
    width: 50px;
    background: ${theme.blackThird};

    @media screen and (max-width: 991px) {
      max-width: 327px;
    }
  }

  @media screen and (max-width: 991px) {
    font-size: 17px;
    padding: 0 0 0 50px;
    margin: 40px 0 20px;
  }
`;

export const StyledExcellentHeading = styled.div``;

export const StyledRightBox = styled.div`
  padding: 40px;
  border-radius: 23px;
  border: 1px solid ${theme.grayLight};

  @media screen and (max-width: 991px) {
    padding: 30px;
    margin: 30px;
  }
`;

export const StyledImageBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledBookImage = styled.img`
  width: 100%;
  max-width:70%;
`;

export const StyledLine = styled.div`
  background: ${theme.grayLight};
  width: 1px;
  height: 130px;
  margin: 0 30px;
`;

export const StyledDescriptionWrapper = styled.div`
  font-family: Nunito-Regular;
  font-size: 16px;
  line-height: 28px;
  color: ${theme.graySlate};
  text-align: center;
  margin: 40px 0 0;

  @media screen and (max-width: 991px) {
    font-size: 12px;
  }
`;

export const StyledDescription = styled.div`
  margin: 0;
  padding: 0;
`;
