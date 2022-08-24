import React, { useState } from 'react';
import {
  SideMenuIcon,
  SideMenuWrapper,
  SideMenuTitleWrapper,
  SideMenuDetailWrapper,
  SideMenuDetail,
} from './StyledComponent';


const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(0);
  const [isIntroduceOpen, setIsIntroduceOpen] = useState(0);
  const [isInformationOpen, setIsInformationOpen] = useState(0);
  const [isMasterOpen, setIsMasterOpen] = useState(0);
  const [isSwUniversityOpen, setIsSwUniversityOpen] = useState(0);
  const [isCertificationOpen, setIsCertificationOpen] = useState(0);
  const [isSeoulAccordOpen, setIsSeoulAccordOpen] = useState(0);
  const [isCommunityOpen, setIsCommunityOpen] = useState(0);

  const sideMenuOpen = () => {
    if (isOpen) {
      setIsOpen(0);
    } else {
      setIsOpen(1);
    }
  }
  const sideMenuIntroduceOpen = () => {
    if (isIntroduceOpen) {
      setIsIntroduceOpen(0);
    } else {
      setIsIntroduceOpen(1);
    }
  }
  const sideMenuInformationOpen = () => {
    if (isInformationOpen) {
      setIsInformationOpen(0);
    } else {
      setIsInformationOpen(1);
    }
  }
  const sideMenuMasterOpen = () => {
    if (isMasterOpen) {
      setIsMasterOpen(0);
    } else {
      setIsMasterOpen(1);
    }
  }
  const sideMenuSwUniversityOpen = () => {
    if (isSwUniversityOpen) {
      setIsSwUniversityOpen(0);
    } else {
      setIsSwUniversityOpen(1);
    }
  }
  const sideMenuCertificationOpen = () => {
    if (isCertificationOpen) {
      setIsCertificationOpen(0);
    } else {
      setIsCertificationOpen(1);
    }
  }
  const sideMenuSeoulAccordOpen = () => {
    if (isSeoulAccordOpen) {
      setIsSeoulAccordOpen(0);
    } else {
      setIsSeoulAccordOpen(1);
    }
  }
  const sideMenuCommunityOpen = () => {
    if (isCommunityOpen) {
      setIsCommunityOpen(0);
    } else {
      setIsCommunityOpen(1);
    }
  }


  return (
    <>
      <SideMenuIcon onClick={sideMenuOpen} />
      <SideMenuWrapper isOpen={isOpen}>
        <SideMenuTitleWrapper isOpen={isOpen} onClick={sideMenuIntroduceOpen}>학부 소개</SideMenuTitleWrapper>
        <SideMenuDetailWrapper isOpen={isOpen} isMenuOpen={isIntroduceOpen}>
          <SideMenuDetail>학부장 인사말</SideMenuDetail>
          <SideMenuDetail>연혁</SideMenuDetail>
          <SideMenuDetail>시설</SideMenuDetail>
          <SideMenuDetail>교수진</SideMenuDetail>
          <SideMenuDetail>연구활동</SideMenuDetail>
          <SideMenuDetail>찾아오시는 길</SideMenuDetail>
        </SideMenuDetailWrapper>

        <SideMenuTitleWrapper isOpen={isOpen} onClick={sideMenuInformationOpen}>학사 정보</SideMenuTitleWrapper>
        <SideMenuDetailWrapper isOpen={isOpen} isMenuOpen={isInformationOpen}>
          <SideMenuDetail>교육 목표</SideMenuDetail>
          <SideMenuDetail>전공 트랙</SideMenuDetail>
          <SideMenuDetail>교과 과정</SideMenuDetail>
          <SideMenuDetail>과목 개요</SideMenuDetail>
          <SideMenuDetail>연구활동</SideMenuDetail>
          <SideMenuDetail>Sos프로그램</SideMenuDetail>
        </SideMenuDetailWrapper>

        <SideMenuTitleWrapper isOpen={isOpen} onClick={sideMenuMasterOpen}>대학원</SideMenuTitleWrapper>
        <SideMenuDetailWrapper isOpen={isOpen} isMenuOpen={isMasterOpen}>
          <SideMenuDetail>입학 안내</SideMenuDetail>
          <SideMenuDetail>연구실 소개</SideMenuDetail>
          <SideMenuDetail>과목 개요</SideMenuDetail>
        </SideMenuDetailWrapper>

        <SideMenuTitleWrapper isOpen={isOpen} onClick={sideMenuSwUniversityOpen}>SW중심대학</SideMenuTitleWrapper>
        <SideMenuDetailWrapper isOpen={isOpen} isMenuOpen={isSwUniversityOpen}>
          <SideMenuDetail>스파르탄SW교육원</SideMenuDetail>
        </SideMenuDetailWrapper>

        <SideMenuTitleWrapper isOpen={isOpen} onClick={sideMenuCertificationOpen}>공학 인증</SideMenuTitleWrapper>
        <SideMenuDetailWrapper isOpen={isOpen} isMenuOpen={isCertificationOpen}>
          <SideMenuDetail>제도소개</SideMenuDetail>
          <SideMenuDetail>이수체계도</SideMenuDetail>
          <SideMenuDetail>인증대상과 기준</SideMenuDetail>
          <SideMenuDetail>포트폴리오</SideMenuDetail>
          <SideMenuDetail>학생윤리헌장</SideMenuDetail>
          <SideMenuDetail>공학인증 FAQ</SideMenuDetail>
        </SideMenuDetailWrapper>

        <SideMenuTitleWrapper isOpen={isOpen} onClick={sideMenuSeoulAccordOpen}>서울 어코드</SideMenuTitleWrapper>
        <SideMenuDetailWrapper isOpen={isOpen} isMenuOpen={isSeoulAccordOpen}>
          <SideMenuDetail>사업개요</SideMenuDetail>
          <SideMenuDetail>사업추진체계</SideMenuDetail>
          <SideMenuDetail>인재상</SideMenuDetail>
          <SideMenuDetail>중장기 로드맵</SideMenuDetail>
        </SideMenuDetailWrapper>

        <SideMenuTitleWrapper isOpen={isOpen} onClick={sideMenuCommunityOpen}>커뮤니티</SideMenuTitleWrapper>
        <SideMenuDetailWrapper isOpen={isOpen} isMenuOpen={isCommunityOpen}>
          <SideMenuDetail>학부 공지사항</SideMenuDetail>
          <SideMenuDetail>대학원 공지사항</SideMenuDetail>
          <SideMenuDetail>보도자료</SideMenuDetail>
          <SideMenuDetail>갤러리</SideMenuDetail>
          <SideMenuDetail>취업정보</SideMenuDetail>
        </SideMenuDetailWrapper>
      </SideMenuWrapper>
    </>
  );
}

export default SideMenu;