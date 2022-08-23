import styled, {keyframes} from 'styled-components';
import MainLogo from '../icons/MainLogo.png';
import brochure from '../icons/brochure.gif';
import { HiOutlineSearch } from 'react-icons/hi';
import { FiArrowRightCircle, FiMenu } from 'react-icons/fi';



//////////////////// Header ////////////////////
export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  background-color: white;
  z-index: 99999;   // 가장 앞에 쌓임
`;

export const HeaderLogo = styled.div`
  background-image: url(${MainLogo});
  background-size: 200px 50px;
  background-repeat: no-repeat;
  width: 240px;
  height: 48px;
  margin-left: 120px;
  cursor : pointer;
`;

export const HeaderSearchBox = styled.div`
  width: 230px;
  height: 30px;
  margin-right: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #FFFFFF;
  border: 1px solid #BBBBBB;
  border-radius: 10px;
`;

export const HeaderSearchInput = styled.input`
  width: 180px;
  height: 20px;
  margin-left: 10px;
  border: none;
  outline: none;
`;

export const HeaderSearchIcon = styled(HiOutlineSearch)`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  color: gray;
  cursor: pointer;
`;

//////////////////// MenuBar ////////////////////
export const MenuBarWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 60px;    // Header height만큼 떨어진 위치 고정
  cursor: pointer;
  z-index: 10;  // MainTop 위에 쌓이도록

  @media screen and (max-width: 1200px) {
    display: none;
  }

`;

export const MenuBarTitleWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 55px;
  background: #08517A;
  display: flex;
  justify-content: center;
`;

export const MenuBarTitle = styled.div`
  width: 200px;
  height: 55px;
  background: #08517A;
  font-size: 18px;
  font-weight: 400;
  color: white;
  display : flex;
  justify-content : center;
  align-items : center;

  &:hover {
    font-weight: 500;
  }
`;

export const MenuBarActivatedWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: white;
`;

export const MenuBarActivatedBox = styled.div`
  width: 200px;
  height: 300px;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

export const MenuBarActivatedDetail = styled.div`
  width: 100%;
  height: 50px;
  margin-left: 40px;
  display: flex;
  align-items: center;

  font-size: 14px;
  font-weight: 100;
  color: #6C6C6C;

  background-color: white;

  &:hover {
    font-size: 15px;
    font-weight: 800;
    color: black;
  }
  
`;

export const MenuBarActivatedVertical = styled.div`
  height: 280px;
  width: 1px;
  margin-top: 20px;
  background-color: #CECECE;
`;

//////////////////// SideMenu ////////////////////
export const SideMenuIcon = styled(FiMenu)`
  display: none;
  position: fixed;
  top: 12px;
  right: 10px;
  width: 36px;
  height: 36px;
  color: rgba(8, 81, 122, 1);
  cursor: pointer;
  z-index: 99999;

  @media screen and (max-width: 1200px) {
    display: block;
  }

`;

export const SideMenuWrapper = styled.div`
  display: none;
  position: fixed;
  top: 60px;
  right: 0px;
  width: 500px;
  height: 100%;
  background-color: rgba(8, 81, 122, 0.8);
  z-index: 99999;
  ${(props)=>props.isOpen == 0 ? `transition:.3s; height: 0;`:`transition:.3s; height: 100%;`}

  @media screen and (max-width: 1200px) {
    display: block;
  }
`;




//////////////////// MainTop ////////////////////
export const MainTopWrapper = styled.div`
  width: 100%;
  height: 70%;
  overflow: hidden;
`;

export const MainTopImage = styled.div`
  position: absolute;
  width: 120%;
  height: 70%;
  background-position: bottom;
  ${(props) => {
    const img = props.img;
    return`
      background-image: url(${img});
      background-size: cover;
    `;
  }}
`;


// Box-animation //
const fadeIn = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`
const MainTopBoxConSlide = keyframes`
  from {
    transform: translateX(-300px);
  }
  to {
    transform: translateX(0px);
  }
`

export const MainTopBox = styled.div`
  position: absolute;
  width: 40%;
  height: 70%;
  background: 
    linear-gradient(to right, rgba(102, 151, 172, 0.7) 70% ,  rgba(102, 151, 172, 0));

  font-family: 'Gowun Batang', serif;
  z-index: 5;
  animation: ${fadeIn} 0.8s ease-in-out forwards;

  @media screen and (max-width: 1000px) {
    width: 50%;
  }
  @media screen and (max-width: 700px) {
    display: none;
  }
`

export const MainTopBoxTitle = styled.div`
  position: absolute;
  left: 100px;
  top: 40px;
  font-size: 60px;
  font-weight: 600;
  color: rgb(0, 93, 129);

  animation: ${MainTopBoxConSlide} 1.0s ease-out forwards;

  @media screen and (max-width: 1400px) {
    left: 30px;
    font-size: 45px;
  }
  @media screen and (max-width: 1000px) {
    left: 30px;
    font-size: 30px;
  }

`

export const MainTopBoxTitleWhite = styled.span`
  color: #FFFFFF;
  font-size: 80px;

  @media screen and (max-width: 1400px) {
    font-size: 70px;
  }
  @media screen and (max-width: 1000px) {
    font-size: 60px;
  }
`;

export const MainTopBoxDetail = styled.div`
  position: absolute;
  left: 100px;
  bottom: 40px;
  color: #FFFFFF;
  font-weight: 500;
  font-size: 22px;
  line-height: 35px;

  animation: ${MainTopBoxConSlide} 1.5s ease-out forwards;
  
  @media screen and (max-width: 1400px) {
    left: 40px;
    font-size: 20px;
    line-height: 35px;
  }
  @media screen and (max-width: 1000px) {
    left: 40px;
    font-size: 18px;
    line-height: 30px;
  }

`

//////////////////// MainCon ////////////////////
export const MainConWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 30px 0px 30px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;

  @media screen and (max-width: 1200px) {
    position: relative;
    display: block;
  }

`;

export const MainConBox = styled.div`
  width: 600px;
  height: 500px;
  margin: 30px;

  @media screen and (max-width: 1200px) {
    width: 800px;
    margin: 30px auto;
  }

`;

export const MainConTitle = styled.div`
  font-size: 26px;
  font-weight: 600;
  padding: 20px 0 10px 15px;
  border-bottom: 5px solid rgb(8,81,122);
`;

export const MainConButton = styled(FiArrowRightCircle)`
  float: right;
  margin-right: 15px;
  width: 36px;
  height: 36px;
  color: rgb(8,81,122);
  cursor: pointer;
`;

export const MainConListWrapper = styled.div`
  position: relative;
  height: 400px;
  margin-top: 10px;
`;

export const MainConListElement = styled.div`
  position: relative;
  height: 50px;
  border-bottom: 1px solid rgba(205, 205, 205, 1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const MainConListTitle = styled.div`
  width: 500px;
  margin-left: 15px;
  font-size: 16px;
  overflow: hidden;
  white-space:nowrap;
  text-overflow:ellipsis;

  @media screen and (max-width: 1200px) {
    width: 700px;
  }
`;


export const MainConListDate = styled.div`
  margin-right: 15px;
  font-size: 14px;
  color: rgba(119, 119, 119, 1);
`;


//////////////////// Shortcuts ////////////////////
export const ShortCutsWrapper = styled.div`
  //position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;

`;

export const ShortCutsBox = styled.div`
  position: relative;
  width: 315px;
  height: 150px;
  border: 1px solid rgba(205, 205, 205, 1);
  cursor : pointer;

  @media screen and (max-width: 1200px) {
    width: 250px;
    height: 130px;
  }
`;

export const ShortCutsTitle = styled.div`
  margin : 15px;
  font-size: 19px;
  font-weight: 600;
  display: flex;
  @media screen and (max-width: 1200px) {
    font-size: 17px;
    margin : 10px;
  }
`;

export const ShortCutsMainTitle = styled.div`
  color: rgba(74, 74, 74, 1);
`;

export const ShortCutsSubTitle = styled.div`
  margin : 0px 10px;
  color: rgba(0, 128, 190, 1);
  z-index: 999; //아이콘에 가려지지 않도록
`;

export const ShortCutsContents = styled.div`
  position: relative;
  width: 250px;
  margin: 0px 15px;
  font-size: 14px;
  line-height: 25px;
  color: rgba(119, 119, 119, 1);
  z-index: 999; //아이콘에 가려지지 않도록

  @media screen and (max-width: 1200px) {
    font-size: 13px;
    margin : 0 10px;
    line-height: 23px;
  }
`;

export const ShortCutsIcon = styled.div`
  position: absolute;
  width: 120px;
  height: 120px;
  right: 5px;
  bottom: 10px;
  ${(props) => {
    const logo = props.logo;
    return `
      background-image: url(${logo});
      background-size: 120px;
    `;
  }}

  @media screen and (max-width: 1200px) {
    width: 84px;
    height: 84px;
    ${(props) => {
      const logo = props.logo;
      return `
        background-image: url(${logo});
        background-size: 84px;
      `;
    }}
  }
`;

//////////////////// Footer ////////////////////
export const FooterWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 130px;
  background-color: rgba(233, 233, 233, 1);
`

export const FooterBox = styled.div`
  width: 1260px;
  margin: 0 auto;

  @media screen and (max-width: 1200px) {
    width: 1000px;
  }

`;


export const FooterSiteBox = styled.div`
  position: relative;
  height: 40px;
  background-color: white;
  border: 1px solid rgb(219,219,219);
  top: 20px;
  line-height: 40px;
  font-size: 16px;
  font-weight: 600;

  @media screen and (max-width: 1200px) {
    font-size: 14px;
  }

`;

export const FooterSiteBoxTitle = styled.span`
  color: rgb(60, 93, 144);
  padding: 0 50px 0;
  border-right: 3px solid rgb(219,219,219);

  @media screen and (max-width: 1200px) {
    padding: 0 40px 0;
  }

`;

export const FooterSiteBoxEle = styled.span`
  color: rgb(121, 121, 121);
  padding: 0 65px 0;
  cursor: pointer;

  &:hover {
    font-weight: 800;
    color: black;
  }

  @media screen and (max-width: 1200px) {
    padding: 0 50px 0;
  }
`;

export const FooterInform = styled.span`
  position: relative;
  top: 30px;
  width: 1260px;
  margin: 0 auto;
  color: rgb(74, 74, 74);
  @media screen and (max-width: 1200px) {
    font-size: 14px;
  }
`

export const FooterBrochure = styled.div`
  background-image: url(${brochure});
  width: 150px;
  height: 40px;
  background-position: bottom;
  float: right;
  margin-top: 10px;
  cursor: pointer;
`