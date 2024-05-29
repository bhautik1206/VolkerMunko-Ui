import React from "react";
import {
  StyledNavbarSection,
  StyledNavbarWrapper,
  StyledNavbarInner,
  StyledNavbarFlexHeader,
  StyledNavbarLogo,
  StyledNavbarLogoWrapper,
  StyledNavbarBoxWrapper,
  StyledNavbarWhyWrapper,
  StyledContactButton,
  StyledNavbarAboutWrapper,
  StyledNavbarContactWrapper,
  StyledHamburgerNavbar,
} from "./Navbar.styled";
import { NavbarLogo, HamburgerNavbar } from "../../index";
import { ContainerStyled } from "../../Global.styled";

export const Navbar = () => {
  return (
    <>
      <StyledNavbarSection>
        <ContainerStyled>
          <StyledNavbarWrapper>
            <StyledNavbarInner>
              <StyledNavbarFlexHeader>
                <StyledNavbarLogoWrapper>
                  <StyledNavbarLogo src={NavbarLogo} alt="volker munko" />
                </StyledNavbarLogoWrapper>
                <StyledNavbarBoxWrapper>
                  <StyledNavbarWhyWrapper>
                    Why asset management
                  </StyledNavbarWhyWrapper>
                  <StyledNavbarAboutWrapper>About Us</StyledNavbarAboutWrapper>
                  <StyledContactButton>
                    <StyledNavbarContactWrapper>
                      contact
                    </StyledNavbarContactWrapper>
                  </StyledContactButton>
                  <StyledHamburgerNavbar
                    src={HamburgerNavbar}
                    alt="movile navigation"
                  />
                </StyledNavbarBoxWrapper>
              </StyledNavbarFlexHeader>
            </StyledNavbarInner>
          </StyledNavbarWrapper>
        </ContainerStyled>
      </StyledNavbarSection>
    </>
  );
};
