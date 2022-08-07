import {
  MainTopWrapper,
  MainTopImage,
  MainTopBox,
  MainTopBoxTitle,
  MainTopBoxDetail,

} from './StyledComponent';

const MainTop = () => {
  return (
    <>
    <MainTopWrapper>
      <MainTopImage />
      <MainTopBox>
        <MainTopBoxTitle>
          꿈과 열정이 있는 <br />
          그대를 위한 SoS
        </MainTopBoxTitle>
        <MainTopBoxDetail>
          1970년 국내 최초의<br />
          소프트웨어 전공학과인<br />
          전자계산학과의 DNA를 물려받은<br />
          소프트웨어전문 고급인력 양성<br />
        </MainTopBoxDetail>
      </MainTopBox>
    </MainTopWrapper>
    </>
  );
}

export default MainTop;