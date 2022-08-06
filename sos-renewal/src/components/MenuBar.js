import React, {  useState } from 'react';
import {
  MenuBarWrapper,
  MenuBarTitleWrapper,
  MenuBarTitle,
  MenuBarActivatedWrapper,
  MenuBarActivatedBox,
  MenuBarActivatedDetail,
  MenuBarActivatedVertical,
} from './StyledComponent';
const MenuBar = () => {
  const [isHovering, setIsHovering] = useState(0);

  return (
    <>
    <MenuBarWrapper 
      onMouseOver={() => setIsHovering(1)}
      onMouseOut={() => setIsHovering(0)}
    >
      <MenuBarTitleWrapper>
        <MenuBarTitle>학부 소개</MenuBarTitle>
        <MenuBarTitle>학사 정보</MenuBarTitle>
        <MenuBarTitle>대학원</MenuBarTitle>
        <MenuBarTitle>SW중심대학</MenuBarTitle>
        <MenuBarTitle>공학 인증</MenuBarTitle>
        <MenuBarTitle>서울 어코드</MenuBarTitle>
        <MenuBarTitle>커뮤니티</MenuBarTitle>
      </MenuBarTitleWrapper>
  
      {isHovering ? (
        <MenuBarActivatedWrapper>
        <MenuBarActivatedBox class="introduce">
          <MenuBarActivatedDetail>학부장 인사말</MenuBarActivatedDetail>
          <MenuBarActivatedDetail>연혁</MenuBarActivatedDetail>
          <MenuBarActivatedDetail>시설</MenuBarActivatedDetail>
          <MenuBarActivatedDetail>교수진</MenuBarActivatedDetail>
          <MenuBarActivatedDetail>연구활동</MenuBarActivatedDetail>
          <MenuBarActivatedDetail>찾아오시는 길</MenuBarActivatedDetail>
        </MenuBarActivatedBox>

        <MenuBarActivatedVertical />

        <MenuBarActivatedBox class="information">
          <MenuBarActivatedDetail>교육 목표</MenuBarActivatedDetail>
          <MenuBarActivatedDetail>전공 트랙</MenuBarActivatedDetail>
          <MenuBarActivatedDetail>교과 과정</MenuBarActivatedDetail>
          <MenuBarActivatedDetail>과목 개요</MenuBarActivatedDetail>
          <MenuBarActivatedDetail>Sos프로그램</MenuBarActivatedDetail>
        </MenuBarActivatedBox>

        <MenuBarActivatedVertical />

        <MenuBarActivatedBox class="master">
          <MenuBarActivatedDetail>입학 안내</MenuBarActivatedDetail>
          <MenuBarActivatedDetail>연구실 소개</MenuBarActivatedDetail>
          <MenuBarActivatedDetail>과목 개요</MenuBarActivatedDetail>
        </MenuBarActivatedBox>

        <MenuBarActivatedVertical />

        <MenuBarActivatedBox class="swUniversity">
          <MenuBarActivatedDetail>스파르탄SW교육원</MenuBarActivatedDetail>
        </MenuBarActivatedBox>

        <MenuBarActivatedVertical />

        <MenuBarActivatedBox class="certification">
          <MenuBarActivatedDetail>제도소개</MenuBarActivatedDetail>
          <MenuBarActivatedDetail>이수체계도</MenuBarActivatedDetail>
          <MenuBarActivatedDetail>인증대상과 기준</MenuBarActivatedDetail>
          <MenuBarActivatedDetail>포트폴리오</MenuBarActivatedDetail>
          <MenuBarActivatedDetail>학생윤리헌장</MenuBarActivatedDetail>
          <MenuBarActivatedDetail>공학인증 FAQ</MenuBarActivatedDetail>
        </MenuBarActivatedBox>

        <MenuBarActivatedVertical />

        <MenuBarActivatedBox class="seoulAccord">
          <MenuBarActivatedDetail>사업개요</MenuBarActivatedDetail>
          <MenuBarActivatedDetail>사업추진체계</MenuBarActivatedDetail>
          <MenuBarActivatedDetail>인재상</MenuBarActivatedDetail>
          <MenuBarActivatedDetail>중장기 로드맵</MenuBarActivatedDetail>
        </MenuBarActivatedBox>

        <MenuBarActivatedVertical />

        <MenuBarActivatedBox class="community">
          <MenuBarActivatedDetail>학부 공지사항</MenuBarActivatedDetail>
          <MenuBarActivatedDetail>대학원 공지사항</MenuBarActivatedDetail>
          <MenuBarActivatedDetail>보도자료</MenuBarActivatedDetail>
          <MenuBarActivatedDetail>갤러리</MenuBarActivatedDetail>
          <MenuBarActivatedDetail>취업정보</MenuBarActivatedDetail>
        </MenuBarActivatedBox>
      </MenuBarActivatedWrapper>
      ) : (
        ""
      )}

    </MenuBarWrapper>
    
    </>
  );
}

export default MenuBar;