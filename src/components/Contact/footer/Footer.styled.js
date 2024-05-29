import styled from "styled-components";
import { footerBackground } from "../../index";
import { theme } from "../../theme";

export const StyledSection = styled.section`
  background-image: url(${footerBackground});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const StyledWrapper = styled.div``;

export const StyledWrapperInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  @media screen and (max-width: 991px) {
    margin: 0;
  }
`;

export const StyledFooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 1000px;
`;

export const StyledFooterIcon = styled.img`
  padding: 48px 0 0 0;
  width: 100%;
  max-width: 188px;
  height: 112px;

  @media screen and (max-width: 991px) {
    max-width: 86px;
    width: 100%;
    max-height: 67px;
    height:100%;
    margin: 30px 0 0 0;
  }
`;

export const StyledFooterDescription = styled.div`
  padding: 12px 0 0 0;
  text-align: center;
  color: ${theme.white};
  line-height: 32px;
  font-family: Quicksand-Bold;
`;

export const StyledFooterHorizontalLine = styled.hr`
  margin: 50px 0 0 0;
  background-color: ${theme.white};
`;

export const StyledFooterDetails = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${theme.white};
  padding: 32px 0;
  font-family: Nunito-Regular;

  @media screen and (max-width: 991px) {
    margin: 0;
    padding: 0;
    flex-direction: column;
  }
`;

export const StyledRightFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: 991px) {
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`;

export const StyledRightInner = styled.div`
  padding: 0 10px;
  position: relative;

  &:not(:last-child)::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 1px;
    background-color: ${theme.black};
    left: 0;
    top: 0;
  }

  @media screen and (max-width: 991px) {
    padding: 0 16px 0 0;
  }
`;

export const StyledFooterText = styled.p`
  font-family: Nunito-Regular;
  font-size: 16px;
  line-height: 20px;

  @media screen and (max-width: 991px) {
    font-family: 12px;
  }
`;
