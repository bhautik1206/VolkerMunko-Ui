import React from "react";
import {
  StyledSection,
  StyledWrapper,
  StyledWrapperInner,
  StyledProductContent,
  StyledProductHeadingWrapper,
  StyledProductHeading,
  StyledProductContentText,
  StyledProductCustom,
  StyledProductCustomWrapper,
  StyledPrivateBox,
  StyledPrivateWrapper,
  StyledCustomIcon,
  StyledCorporateWrapper,
  StyledProductServicesWrapper,
  StyledProductServices,
  StyledProductServicesList,
} from "./Product.styled";
import { ProductData } from "../Data";
import { Service } from "./Service";
import { man, corporateman } from "../index";
import { ContainerStyled } from "../Global.styled";

export const Product = () => {
  return (
    <>
      <StyledSection>
        <ContainerStyled>
        <StyledWrapper>
          <StyledWrapperInner>
            <StyledProductContent>
              <StyledProductHeadingWrapper>
                <StyledProductHeading>Product & Solutions</StyledProductHeading>
              </StyledProductHeadingWrapper>
              <StyledProductContentText>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point aseof using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters
              </StyledProductContentText>
              <StyledProductCustom>
                <StyledProductCustomWrapper>
                  <StyledPrivateBox>
                    <StyledPrivateWrapper>
                      <StyledCustomIcon src={man} alt="private" />
                      Private Customer
                    </StyledPrivateWrapper>
                  </StyledPrivateBox>
                  <StyledCorporateWrapper>
                    <StyledCustomIcon src={corporateman} alt="corporate" />
                    Corporate Customers
                  </StyledCorporateWrapper>
                </StyledProductCustomWrapper>
              </StyledProductCustom>
              <StyledProductServicesWrapper>
                <StyledProductServices>
                  <StyledProductServicesList>
                    {ProductData.map((item) => (
                      <Service
                        key={item.id}
                        moreinfosrc={item.moreinfosrc}
                        serviceimg={item.serviceimg}
                        title={item.title}
                      />
                    ))}
                  </StyledProductServicesList>
                </StyledProductServices>
              </StyledProductServicesWrapper>
            </StyledProductContent>
          </StyledWrapperInner>
        </StyledWrapper>
        </ContainerStyled>
      </StyledSection>
    </>
  );
};
