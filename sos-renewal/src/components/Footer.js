import {
  FooterWrapper,
  FooterSiteBox,
  FooterSiteBoxTitle,
  FooterSiteBoxEle,
  FooterInform,
  FooterBrochure,
  FooterBox,
} from './StyledComponent';

const Footer = () => {
  return (
    <>
    <FooterWrapper>
      <FooterBox>
      <FooterSiteBox>
        <FooterSiteBoxTitle>관련 사이트</FooterSiteBoxTitle>
        <FooterSiteBoxEle>입시 요강</FooterSiteBoxEle>
        <FooterSiteBoxEle>e-Campus</FooterSiteBoxEle>
        <FooterSiteBoxEle>학생회</FooterSiteBoxEle>
        <FooterSiteBoxEle>융합SW대학원</FooterSiteBoxEle>
        <FooterSiteBoxEle>숭실대학교</FooterSiteBoxEle>
      </FooterSiteBox>
      <FooterInform>서울특별시 동작구 상도로 369 숭실대학교 IT대학 소프트웨어학부 TEL : 02-820-0940<br/></FooterInform>
      <FooterInform>COPYRIGHT(C) 2014 Soongsil University. ALL RIGHTS RESERVED.</FooterInform>
      {/* <a href="/src/icons/sos.pdf" target="_blank"> */}
      <a href="https://sw.ssu.ac.kr/images/common/sos.pdf" target="_blank">
        <FooterBrochure />
      </a>
      </FooterBox>
    </FooterWrapper>
    </>
  );
}

export default Footer;