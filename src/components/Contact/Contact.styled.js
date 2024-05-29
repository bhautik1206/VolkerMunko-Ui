import styled from "styled-components";
import { theme } from "../theme";

export const StyledSection = styled.section``;

export const StyledWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const StyledInnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 991px) {
    flex-direction: column;
    align-items: flex-start;
    margin: 0 auto;
  }
`;
export const Iframe = styled.iframe`
  width: 400px;
  height: 400px;
  border-radius: 20px;
`;

export const StyledContactLeft = styled.div`
  max-width: 49%;
  width: 100%;
  margin: 50px 0 0 46px;

  @media screen and (max-width: 991px) {
    margin: 0 auto;
    max-width: 500px;
    width: 100%;
  }
`;

export const StyledMapWrapper = styled.div`
  width: 100%;
  max-width: 50%;

  @media screen and (max-width: 991px) {
    max-width: 100%;
  }
`;

export const StyledMapIframe = styled.iframe`
  width: 450px;
  border: 0;
  border-radius: 22px;

  @media screen and (max-width: 991px) {
    max-width: 300px;
    width: 100%;
    height: 300px;
  }
`;

export const StyledContactRight = styled.div`
  max-width: 49%;
  width: 100%;

  @media screen and (max-width: 991px) {
    margin: 0 auto;
  }
`;

export const StyledContactRightWrapper = styled.div``;

export const StyledContact = styled.h3`
  font-family: Nunito-Regular;
  font-weight: 600;
  margin: 0 0 0 22px;
  line-height: 28px;
  text-align: left;
  color: ${theme.darkBlue};

  &:before {
    content: "";
    position: absolute;
    margin: 12px 0 0 -30px;
    height: 2px;
    width: 22px;
    background: ${theme.blackThird};

    @media screen and (max-width: 991px) {
      max-width: 20px;
      width: 100%;
    }
  }

  @media screen and (max-width: 991px) {
    font-size: 17px;
    padding: 0 0 0 30px;
    margin: 50px 0 20px;
  }
`;

export const StyledContactHeadingWrapper = styled.div`
  position: relative;
`;

export const StyledContactHeading = styled.h2`
  margin: 0 0 9px;
  font-family: Nunito-Bold;
  font-size: 51px;
  font-weight: 700;
  line-height: 76px;
  text-align: left;
  color: ${theme.darkBlue};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    max-width: 327px;
    width: 100%;
    height: 68px;
    z-index: -1;
    background: ${theme.pinkGraindentLight};

    @media screen and (max-width: 991px) {
      height: 30px;
    }
  }

  @media screen and (max-width: 991px) {
    font-size: 24px;
    line-height: 31px;
    margin: 0 0 30px 0;
  }
`;

export const StyledContactAddressWrapper = styled.div`
  display: flex;
  margin: 34px 0;
  align-items: flex-start;

  @media screen and (max-width: 991px) {
    margin: 0 0 10px -40px;
  }
`;

export const StyledMapIcon = styled.img`
  max-width: 60px;
`;

export const StyledMapAddress = styled.p`
  margin: 10px 0 0 34px;
  font-family: Nunito-Bold;
  font-size: 20px;

  @media screen and (max-width: 991px) {
    font-size: 14px;
  }
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: ${theme.darkBlue};
`;

export const StyledPhoneNumberWrapper = styled.div`
  display: flex;
  margin: 35px 0;
  align-items: flex-start;

  @media screen and (max-width: 991px) {
    margin: 0 0 10px -40px;
  }
`;

export const StyledPhoneIcon = styled.img`
  max-width: 60px;
`;

export const StyledPhoneNumber = styled.p`
  margin: 10px 0 0 34px;
  font-family: Nunito-Bold;
  font-size: 20px;

  @media screen and (max-width: 991px) {
    font-size: 14px;
  }
`;

export const StyledMailWrapper = styled.div`
  display: flex;
  justify-content:center;
  align-items: flex-start;
  margin: 34px 0;

  @media screen and (max-width: 991px) {
    margin: 0 0 10px -40px;
  }
`;

export const StyledMailIcon = styled.img`
  max-width: 60px;
`;

export const StyledMail = styled.p`
  margin: 10px 0 0px 34px;
  font-size: 20px;
  font-family: Nunito-Bold;

  @media screen and (max-width: 991px) {
    font-size: 11px;
  }
`;
