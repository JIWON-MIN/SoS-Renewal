import {
  ShortCutsWrapper,
  ShortCutsBox,
  ShortCutsTitle,
  ShortCutsMainTitle,
  ShortCutsSubTitle,
  ShortCutsContents,
  ShortCutsIcon1,
  ShortCutsIcon2,
  ShortCutsIcon3,
  ShortCutsIcon4,
  
} from './StyledComponent';

const ShortCuts = () => {
  return (
    <>

      <ShortCutsWrapper>
        <ShortCutsBox>
          <ShortCutsTitle>
            <ShortCutsMainTitle>교수소개</ShortCutsMainTitle>
            <ShortCutsSubTitle>Faculty</ShortCutsSubTitle>
          </ShortCutsTitle>
          <ShortCutsContents>숭실대학교 소프트웨어학부의<br />최고의 교수진을 소개합니다.</ShortCutsContents>
          <ShortCutsIcon1/>
        </ShortCutsBox>
          
        <ShortCutsBox style={{borderLeft : "none"}}>
          <ShortCutsTitle>
            <ShortCutsMainTitle>교과과정</ShortCutsMainTitle>
            <ShortCutsSubTitle>Curriculum</ShortCutsSubTitle>
          </ShortCutsTitle>
          <ShortCutsContents>숭실대학교 소프트웨어학부의<br />주요 교과목을 보실 수 <br />있습니다.</ShortCutsContents>
          <ShortCutsIcon2/>
        </ShortCutsBox>

        <ShortCutsBox style={{borderLeft : "none"}}>
          <ShortCutsTitle>
            <ShortCutsMainTitle>SoS프로그램</ShortCutsMainTitle>
            <ShortCutsSubTitle>Program</ShortCutsSubTitle>
          </ShortCutsTitle>
          <ShortCutsContents>당신의 열정에 힘을 실어줄<br />지원 프로그램입니다.</ShortCutsContents>
          <ShortCutsIcon3/>
        </ShortCutsBox>

        <ShortCutsBox style={{borderLeft : "none"}}>
          <ShortCutsTitle>
            <ShortCutsMainTitle>전공트랙</ShortCutsMainTitle>
            <ShortCutsSubTitle>Track</ShortCutsSubTitle>
          </ShortCutsTitle>
          <ShortCutsContents>시스템 소프트웨어,<br />데이터 사이언스, 정보보호에<br />대해 소개합니다.</ShortCutsContents>
          <ShortCutsIcon4/>
        </ShortCutsBox>
      </ShortCutsWrapper>
    </>
  );
}

export default ShortCuts;