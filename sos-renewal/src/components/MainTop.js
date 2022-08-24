import React from "react";
import {
  MainTopWrapper,
  MainTopImage,
  MainTopBox,
  MainTopBoxTitle,
  MainTopBoxDetail,
  MainTopBoxTitleWhite,
  MainTopImageSlideWrapper,
} from './StyledComponent';
import ImageSlider, { Slide } from "react-auto-image-slider";
import MainPicture3 from '../icons/MainPicture3.jpg';
import MainPicture4 from '../icons/MainPicture4.jpg';
import MainPicture5 from '../icons/MainPicture5.jpg';


const MainTop = () => {

  return (
    <>
    <MainTopWrapper>
      <MainTopBox>
        <MainTopBoxTitle>
          <MainTopBoxTitleWhite>꿈</MainTopBoxTitleWhite>과 <MainTopBoxTitleWhite>열정</MainTopBoxTitleWhite>이 있는 <br />
          그대를 위한 <MainTopBoxTitleWhite>SoS</MainTopBoxTitleWhite>
        </MainTopBoxTitle>
        <MainTopBoxDetail>
          1970년 국내 최초의<br />
          소프트웨어 전공학과인<br />
          전자계산학과의 DNA를 물려받은<br />
          소프트웨어전문 고급인력 양성<br />
        </MainTopBoxDetail>
      </MainTopBox>
      <ImageSlider effectDelay={700} autoPlayDelay={3000}>
        <Slide>
          <MainTopImage img = {MainPicture3}/>
        </Slide>
        <Slide>
          <MainTopImage img = {MainPicture4}/>
        </Slide>
        <Slide>
          <MainTopImage img = {MainPicture5}/>
        </Slide>
      </ImageSlider>
    </MainTopWrapper>
    </>
  );
}

export default MainTop;