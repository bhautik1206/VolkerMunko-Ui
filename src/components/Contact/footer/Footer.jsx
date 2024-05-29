import {
  StyledSection,
  StyledWrapper,
  StyledWrapperInner,
  StyledFooterWrapper,
  StyledFooterIcon,
  StyledFooterDescription,
  StyledFooterHorizontalLine,
  StyledFooterDetails,
  StyledRightFooter,
  StyledRightInner,
  StyledFooterText,
} from "./Footer.styled";
import { footerlogo } from "../../index";
import { ContainerStyled } from "../../Global.styled";

export const Footer = () => {
  return (
    <>
      <StyledSection>
        <StyledWrapper>
          <ContainerStyled>
            <StyledWrapperInner>
              <StyledFooterWrapper>
                <StyledFooterIcon src={footerlogo} alt="volker munko" />
                <StyledFooterDescription>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters
                </StyledFooterDescription>
              </StyledFooterWrapper>
            </StyledWrapperInner>
            <StyledFooterHorizontalLine />
            <StyledFooterDetails>
              @2020 Volker Munko
              <StyledRightFooter>
                <StyledRightInner>
                  <StyledFooterText>Privacy policy</StyledFooterText>
                </StyledRightInner>
                <StyledRightInner>
                  <StyledFooterText>Imprint</StyledFooterText>
                </StyledRightInner>
                <StyledRightInner>
                  <StyledFooterText>Cookie Policy</StyledFooterText>
                </StyledRightInner>
              </StyledRightFooter>
            </StyledFooterDetails>
          </ContainerStyled>
        </StyledWrapper>
      </StyledSection>
    </>
  );
};
