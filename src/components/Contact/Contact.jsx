import React from "react";
import {
  StyledSection,
  StyledWrapper,
  StyledInnerWrapper,
  StyledContactLeft,
  StyledMapWrapper,
  StyledMapIframe,
  StyledContactRight,
  StyledContactRightWrapper,
  StyledContact,
  StyledContactHeadingWrapper,
  StyledContactHeading,
  StyledContactAddressWrapper,
  StyledLink,
  StyledMapIcon,
  StyledMapAddress,
  StyledPhoneNumberWrapper,
  StyledPhoneIcon,
  StyledPhoneNumber,
  StyledMailWrapper,
  StyledMailIcon,
  StyledMail,
} from "./Contact.styled";
import { Footer } from "./footer/Footer";
import { map, mail, phone } from "../index";

export const Contact = () => {
  return (
    <>
      <StyledSection>
        <StyledWrapper>
          <StyledInnerWrapper>
            <StyledContactLeft>
              <StyledMapWrapper>
                <StyledMapIframe
                  title="Google Map"
                  width="480px"
                  height="510px"
                  loading="lazy"
                  allowFullScreen
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.811733323151!2d73.12992577388097!3d22.285120379697574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc7dd361f0625%3A0x59326ccefe144813!2sAdrixus%20Tech%20Studio%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1705559938492!5m2!1sen!2sin"
                />
              </StyledMapWrapper>
            </StyledContactLeft>
            <StyledContactRight>
              <StyledContactRightWrapper>
                <StyledContact>Contact</StyledContact>
                <StyledContactHeadingWrapper>
                  <StyledContactHeading>Volker Munko</StyledContactHeading>
                </StyledContactHeadingWrapper>
                <div>
                  <StyledContactAddressWrapper>
                    <StyledMapIcon src={map} alt="map" />
                    <StyledMapAddress>
                      Office for Allfinanz German investment advice On the heath
                      8 32602 Vlotho
                    </StyledMapAddress>
                  </StyledContactAddressWrapper>
                  <StyledPhoneNumberWrapper>
                    <StyledPhoneIcon src={phone} alt="phone" />
                    <StyledLink href="tel:05733881883">
                      <StyledPhoneNumber>05733 881883</StyledPhoneNumber>
                    </StyledLink>
                  </StyledPhoneNumberWrapper>
                  <StyledMailWrapper>
                    <StyledMailIcon src={mail} alt="mail" />
                    <StyledLink href="mailto:Volker.Munko@allfinanz.ag">
                      <StyledMail>Volker.Munko@allfinanz.ag</StyledMail>
                    </StyledLink>
                  </StyledMailWrapper>
                </div>
              </StyledContactRightWrapper>
            </StyledContactRight>
          </StyledInnerWrapper>
        </StyledWrapper>
      </StyledSection>
      <Footer />
    </>
  );
};
