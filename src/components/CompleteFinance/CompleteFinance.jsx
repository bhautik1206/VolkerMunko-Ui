import React from "react";
import {
  StyledSection,
  StyledWrapper,
  StyledInnerWrapper,
  StyledLeftCompleteFinance,
  StyledLeftInner,
  StyledHeadingWrapper,
  StyledHeading,
  StyledCompleteTextWrapper,
  StyledCompleteText,
  StyledButtonWrapper,
  StyledButton,
  StyledRightInner,
  StyledRightContent,
  StyledExcellentHeadingWrapper,
  StyledExcellentHeading,
  StyledRightBox,
  StyledImageBoxWrapper,
  StyledImageWrapper,
  StyledBookImage,
  StyledLine,
  StyledDescriptionWrapper,
  StyledDescription,
} from "./CompleteFinance.styled";
import { Topservice } from "../index";
import { exzellent } from "../index";
import { ContainerStyleds } from "../Global.styled";

export const CompleteFinance = () => {
  return (
    <>
      <StyledSection>
        <StyledWrapper>
          <ContainerStyleds>
            <StyledInnerWrapper>
              <StyledLeftCompleteFinance>
                <StyledLeftInner>
                  <StyledHeadingWrapper>
                    <StyledHeading>Competence for your finances</StyledHeading>
                  </StyledHeadingWrapper>
                  <StyledCompleteTextWrapper>
                    <StyledCompleteText>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English
                    </StyledCompleteText>
                  </StyledCompleteTextWrapper>
                  <StyledButtonWrapper>
                    <StyledButton>Contact now!</StyledButton>
                  </StyledButtonWrapper>
                </StyledLeftInner>
                <StyledRightInner>
                  <StyledRightContent>
                    <StyledExcellentHeadingWrapper>
                      <StyledExcellentHeading>
                        EXCELLENT ADVICE
                      </StyledExcellentHeading>
                    </StyledExcellentHeadingWrapper>
                    <StyledRightBox>
                      <StyledImageBoxWrapper>
                        <StyledImageWrapper>
                          <StyledBookImage
                            src={Topservice}
                            alt="top service"
                          />
                        </StyledImageWrapper>
                        <StyledLine>&nbsp;</StyledLine>
                        <StyledImageWrapper>
                          <StyledBookImage src={exzellent} alt="exzellent" />
                        </StyledImageWrapper>
                      </StyledImageBoxWrapper>
                      <StyledDescriptionWrapper>
                        <StyledDescription>
                          We regularly receive awards from independent
                          institutes for our quality in customer advice and
                          service.
                        </StyledDescription>
                      </StyledDescriptionWrapper>
                    </StyledRightBox>
                  </StyledRightContent>
                </StyledRightInner>
              </StyledLeftCompleteFinance>
            </StyledInnerWrapper>
          </ContainerStyleds>
        </StyledWrapper>
      </StyledSection>
    </>
  );
};
