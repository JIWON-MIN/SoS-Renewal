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
      setIsIntroduceOpen(0);
      setIsInformationOpen(0);
      setIsMasterOpen(0);
      setIsSwUniversityOpen(0);
      setIsCertificationOpen(0);
      setIsSeoulAccordOpen(0);
      setIsCommunityOpen(0);
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
        <SideMenuTitleWrapper onClick={sideMenuIntroduceOpen}>?????? ??????</SideMenuTitleWrapper>
        <SideMenuDetailWrapper isMenuOpen={isIntroduceOpen}>
          <SideMenuDetail>????????? ?????????</SideMenuDetail>
          <SideMenuDetail>??????</SideMenuDetail>
          <SideMenuDetail>??????</SideMenuDetail>
          <SideMenuDetail>?????????</SideMenuDetail>
          <SideMenuDetail>????????????</SideMenuDetail>
          <SideMenuDetail>??????????????? ???</SideMenuDetail>
        </SideMenuDetailWrapper>

        <SideMenuTitleWrapper onClick={sideMenuInformationOpen}>?????? ??????</SideMenuTitleWrapper>
        <SideMenuDetailWrapper isMenuOpen={isInformationOpen}>
          <SideMenuDetail>?????? ??????</SideMenuDetail>
          <SideMenuDetail>?????? ??????</SideMenuDetail>
          <SideMenuDetail>?????? ??????</SideMenuDetail>
          <SideMenuDetail>?????? ??????</SideMenuDetail>
          <SideMenuDetail>????????????</SideMenuDetail>
          <SideMenuDetail>Sos????????????</SideMenuDetail>
        </SideMenuDetailWrapper>

        <SideMenuTitleWrapper onClick={sideMenuMasterOpen}>?????????</SideMenuTitleWrapper>
        <SideMenuDetailWrapper isMenuOpen={isMasterOpen}>
          <SideMenuDetail>?????? ??????</SideMenuDetail>
          <SideMenuDetail>????????? ??????</SideMenuDetail>
          <SideMenuDetail>?????? ??????</SideMenuDetail>
        </SideMenuDetailWrapper>

        <SideMenuTitleWrapper onClick={sideMenuSwUniversityOpen}>SW????????????</SideMenuTitleWrapper>
        <SideMenuDetailWrapper isMenuOpen={isSwUniversityOpen}>
          <SideMenuDetail>????????????SW?????????</SideMenuDetail>
        </SideMenuDetailWrapper>

        <SideMenuTitleWrapper  onClick={sideMenuCertificationOpen}>?????? ??????</SideMenuTitleWrapper>
        <SideMenuDetailWrapper isMenuOpen={isCertificationOpen}>
          <SideMenuDetail>????????????</SideMenuDetail>
          <SideMenuDetail>???????????????</SideMenuDetail>
          <SideMenuDetail>??????????????? ??????</SideMenuDetail>
          <SideMenuDetail>???????????????</SideMenuDetail>
          <SideMenuDetail>??????????????????</SideMenuDetail>
          <SideMenuDetail>???????????? FAQ</SideMenuDetail>
        </SideMenuDetailWrapper>

        <SideMenuTitleWrapper onClick={sideMenuSeoulAccordOpen}>?????? ?????????</SideMenuTitleWrapper>
        <SideMenuDetailWrapper isMenuOpen={isSeoulAccordOpen}>
          <SideMenuDetail>????????????</SideMenuDetail>
          <SideMenuDetail>??????????????????</SideMenuDetail>
          <SideMenuDetail>?????????</SideMenuDetail>
          <SideMenuDetail>????????? ?????????</SideMenuDetail>
        </SideMenuDetailWrapper>

        <SideMenuTitleWrapper onClick={sideMenuCommunityOpen}>????????????</SideMenuTitleWrapper>
        <SideMenuDetailWrapper isMenuOpen={isCommunityOpen}>
          <SideMenuDetail>?????? ????????????</SideMenuDetail>
          <SideMenuDetail>????????? ????????????</SideMenuDetail>
          <SideMenuDetail>????????????</SideMenuDetail>
          <SideMenuDetail>?????????</SideMenuDetail>
          <SideMenuDetail>????????????</SideMenuDetail>
        </SideMenuDetailWrapper>
      </SideMenuWrapper>
    </>
  );
}

export default SideMenu;