import React from "react";
import {
  StyledFront,
  StyledBack,
  StyledProductList,
  StyledProductMoreInfoImgWrapper,
  StyledProductMoreInfoImg,
  StyledServiceImageWrapper,
  StyledServiceImage,
  StyledServiceHeadingWrapper,
  StyledServiceHeading,
  StyledServiceContactBtnWrapper,
  StyledServiceContactBtn,
  StyledBackCard,
  StyledBackDescription,
  StyledWrapper,
} from "./Service.styled";

export const Service = (props) => {
  return (
    <StyledWrapper>
      <StyledFront>
        <StyledProductList>
          <StyledProductMoreInfoImgWrapper>
            <StyledProductMoreInfoImg src={props.moreinfosrc} alt="more-info" />
          </StyledProductMoreInfoImgWrapper>
          <StyledServiceImageWrapper>
            <StyledServiceImage src={props.serviceimg} alt="service" />
          </StyledServiceImageWrapper>
          <StyledServiceHeadingWrapper>
            <StyledServiceHeading>{props.title}</StyledServiceHeading>
          </StyledServiceHeadingWrapper>
          <StyledServiceContactBtnWrapper>
            <StyledServiceContactBtn>Contact</StyledServiceContactBtn>
          </StyledServiceContactBtnWrapper>
        </StyledProductList>
      </StyledFront>
      <StyledBack>
      <StyledBackCard>
        <StyledProductMoreInfoImgWrapper >
          <StyledProductMoreInfoImg src={props.moreinfosrc} alt="more-info" />
        </StyledProductMoreInfoImgWrapper>
        <StyledBackDescription>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable EnglishLorem Ipsum is that it has a more-or-less
          normal distribution of letters, as opposed to using 'Content here,
          content here', making it look like readable Englishthat it has a
          more-or-less normal distribution of letters, as opposed to using
          'Content here, content here', making it look
        </StyledBackDescription>
      </StyledBackCard>
      </StyledBack>

    </StyledWrapper>
  );
};
