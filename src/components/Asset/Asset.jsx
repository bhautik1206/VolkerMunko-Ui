import React from "react";
import {
  StyledSection,
  StyledWrapper,
  StyledInner,
  StyledNavbarContent,
  StyledLeftContent,
  StyledLeftContentHeading,
  StyledLeftContentText,
  StyledLeftButtonWrapper,
  StyledLeftBtn,
  StyledBannerImageWrapper,
  StyledBannerImage,
} from "./Asset.styled";
import { Navbar } from "./Navbar/Navbar";
import { BannerImage } from "../index";
import { ContainerStyleds } from "../Global.styled";

export const AssetManagement = () => {
  return (
    <>
      <StyledSection>
        <Navbar />
        <StyledWrapper>
          <StyledInner>
          <ContainerStyleds>
          <StyledNavbarContent>
              <StyledLeftContent>
                <StyledLeftContentHeading>
                  Asset Management
                </StyledLeftContentHeading>
                <StyledLeftContentText>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution
                </StyledLeftContentText>
                <StyledBannerImageWrapper>
                  <StyledBannerImage src={BannerImage} alt="navigations" />
                </StyledBannerImageWrapper>
                <StyledLeftButtonWrapper>
                  <StyledLeftBtn>Contact Us</StyledLeftBtn>
                </StyledLeftButtonWrapper>
              </StyledLeftContent>
            </StyledNavbarContent>
          </ContainerStyleds>
          </StyledInner>
        </StyledWrapper>
      </StyledSection>
    </>
  );
};
