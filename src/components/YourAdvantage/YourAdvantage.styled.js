import styled from "styled-components";
import { theme } from "../theme";

export const StyledSection = styled.section`
  padding: 100px 0;

  @media screen and (max-width: 991px) {
    padding: 50px 0;
  }
`;

export const StyledInner = styled.div`
  margin: 0 auto;
  background-color: ${theme.white};
`;

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 24px;
  box-shadow: 0 8px 40px 0 rgba(0, 0, 0, 0.1);
  height: 590px;

  @media screen and (max-width: 991px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledLeftYourAdvantage = styled.div``;

export const StyledRightImage = styled.img`
  max-width: 506px;
  width: 100%;
  position: relative;
  top: -7px;

  @media screen and (max-width: 991px) {
    max-width: 400px;
    width:100%;
  }
`;

export const StyledRightWrapper = styled.div`
  margin: 0 50px 0 0;

  @media screen and (max-width: 991px) {
    margin: 30px 0 0;
  }
`;

export const StyledRightYourAdvantage = styled.div`
  width: 50%;

  @media screen and (max-width: 991px) {
    width: 100%;
  }
`;

export const StyledHeading = styled.div`
  font-family: Quicksand-Bold;
  font-size: 51px;
  line-height: 72px;
  color: ${theme.darkBlue};
  max-width: 565px;
  width: 100%;
  margin: 50px 0 20px;
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    max-width: 427px;
    width: 100%;
    height: 68px;
    z-index: -1;
    background: ${theme.pinkGraindentLight};

    @media screen and (max-width: 991px) {
      width: 100%;
      max-width: 260px;
    }
  }

  @media screen and (max-width: 991px) {
    text-align: center;
    font-size: 22px;
    line-height: 27px;
    margin: 0 0 20px 0;
  }
`;

export const StyledDescription = styled.p`
  font-family: Nunito-Regular;
  font-size: 16px;
  line-height: 22px;
  color: ${theme.blackThird};
  max-width: 565px;
  width: 100%;

  @media screen and (max-width: 991px) {
    text-align: center;
    font-size: 12px;
    line-height: 22px;
    margin: 40px 0 0 0;
  }
`;

export const StyledRightContent = styled.ul`
  margin: 50px 0 0;
  list-style-type: none;

  @media screen and (max-width: 991px) {
    margin: 20px 0 0;
  }
`;

export const StyledCard = styled.div`
  display: flex;
  width: 100%;
  height: 590px;
  margin: 18px 0 1px;
  border-radius: 24px;
  box-shadow: 0 8px 40px 0 rgba(0, 0, 0, 0.1);
  background-color: ${theme.white};

  @media screen and (max-width: 991px) {
    flex-direction: column;
    width: 100%;
    height: 720px;
    margin: 0 auto;
  }
`;

export const StyledContentList = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media screen and (max-width: 991px) {
    margin: 0 0 14px 0;
  }
`;

export const StyledContentNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${theme.blackGrandient};
  width: 34px;
  height: 34px;
  border-radius: 50px;
  margin: 0 26px 0 0;
  font-family: Nunito-Regular;
  font-size: 16px;
  line-height: 12px;
  color: ${theme.white};

  @media screen and (max-width: 991px) {
    font-size: 12px;
    width: 16px;
    height: 16px;
    margin: 0 16px 0 0;
    padding: 10px;
  }
`;

export const StyledContent = styled.p`
  font-family: Nunito-Regular;
  font-size: 20px;
  font-weight: 600;
  line-height: 34px;
  color: ${theme.gulfBlue};

  @media screen and (max-width: 991px) {
    font-size: 13px;
    line-height: 22px;
  }
`;
