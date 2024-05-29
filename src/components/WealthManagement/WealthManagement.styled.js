import styled from "styled-components";
import { house, backgroundWealthmanagement } from "../index";
import { theme } from "../theme";

export const StyledSection = styled.section`
  position: relative;
  background: url(${backgroundWealthmanagement});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  height: 1260px;

  &:before {
    content: "";
    background: url(${house});
    background-repeat: no-repeat;
    background-position: center top;
    background-size: 560px 620px;
    max-width: 560px;
    width:100%;
    height: 620px;
    position: absolute;
    right: 0;
    top: 167px;

    @media screen and (max-width: 991px) {
      max-width: 270px;
      width:100%;
      height: 290px;
      background-size: 270px 290px;
      top: 230px;
    }
  }

  @media screen and (max-width: 991px) {
    height: auto;
    margin: auto;
  }
`;

export const StyledWrapper = styled.div``;

export const StyledInner = styled.div`
  @media only screen and (max-width: 1199px) {
    padding: 0 20px;
  }
`;

export const StyledInnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media screen and (max-width: 991px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const StyledWealthLeft = styled.div`
  max-width: 530px;
  width: 100%;
`;

export const StyledWealthLeftWrapper = styled.div``;

export const StyledHeading = styled.div`
  position: relative;
  max-width: 565px;
  width: 100%;
  max-height:300px;
  height:100%;
  font-family: Nunito-Bold;
  font-size: 52px;
  font-weight: 500;
  line-height: 74px;
  color: ${theme.white};

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 230px ;
    height: 5px;
    max-width: 190px;
    width:100%;
    background: ${theme.white};

    @media screen and (max-width: 991px) {
      width: 95px;
      height: 3px;
      bottom: -30px;
    }
  }

  @media screen and (max-width: 991px) {
    font-size: 23px;
    line-height: 30px;
    margin: 0 0 30px 0;
  }
`;

export const StyledWealthListWrapper = styled.ul`
  list-style: none;
`;

export const StyledWealthList = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0;
  max-width: 490px;
  width: 100%;
  font-family: Nunito-Regular;

  @media screen and (max-width: 991px) {
    margin: 0 0 20px -30px;
  }
`;

export const StyledWealthCorrectIcon = styled.div`
  margin: 30px 30px 0 0;
`;

export const StyledWealthListText = styled.p`
  font-family: Nunito-Regular;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  color: ${theme.whiteLight};

  @media screen and (max-width: 991px) {
    font-size: 14px;
  }
`;

export const StyledWealthRight = styled.div`
  max-width: 500px;
  width: 100%;
  height: 950px;
  margin: 0 0 0 30px;

  @media screen and (max-width: 991px) {
    margin: 0;
  }
`;

export const StyledWealthRightInner = styled.div`
  height: 100%;

  @media screen and (max-width: 991px) {
    height: none;
  }
`;

export const StyledWealthRightList = styled.ul`
  display: flex;
  flex-flow: column;
  align-items: end;
  height: 100%;
  justify-content: end;
  list-style: none;

  @media screen and (max-width: 991px) {
    margin: 0 0 0 -30px;
    justify-content: flex-start;
  }
`;
