import styled from 'styled-components';
import MainLogo from '../icons/MainLogo.png';
import MainPicture4 from '../icons/MainPicture4.jpg';
import { HiOutlineSearch } from 'react-icons/hi';
import { FiArrowRightCircle } from 'react-icons/fi';

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
  z-index: 1;
`;

export const HeaderLogo = styled.div`
  //position: fixed;
  background-image: url(${MainLogo});
  background-size: 200px 50px;
  background-repeat: no-repeat;
  width: 240px;
  height: 48px;
  margin-left: 120px;
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
  top: 60px;
  cursor: pointer;
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
  width: 220px;
  height: 55px;
  background: #08517A;
  font-size: 20px;
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
  z-index: 1;
`;

export const MenuBarActivatedBox = styled.div`
  width: 220px;
  height: 300px;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

export const MenuBarActivatedDetail = styled.div`
  width: 100%;
  height: 50px;
  margin-left: 60px;
  display: flex;
  align-items: center;

  font-size: 15px;
  font-weight: 100;
  color: #6C6C6C;

  background-color: white;

  &:hover {
    font-size: 16px;
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

//////////////////// MainTop ////////////////////

export const MainTopWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 650px;
  // margin-top: 0px;
  top: 115px;
  overflow: hidden;
`;

export const MainTopImage = styled.div`
  position: absolute;
  background-image: url(${MainPicture4});
  background-size: 100% 100%;
  width: 120%;
  height: 100%;
`

export const MainTopBox = styled.div`
  position: absolute;
  width: 630px;
  height: 100%;
  background-color: rgba(102, 151, 172, 0.7);
`

export const MainTopBoxTitle = styled.div`
  position: absolute;
  left: 40px;
  top: 40px;
  font-size: 50px;
`

export const MainTopBoxDetail = styled.div`
  position: absolute;
  left: 40px;
  bottom: 40px;

  color: #FFFFFF;
  font-weight: 400;
  font-size: 22px;
  line-height: 40px;
`


//////////////////// MainCon ////////////////////

export const MainConWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 600px;
  top: 750px;
  margin-top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainConBox = styled.div`
  width: 35%;
  height: 80%;
  margin: 50px;
  // overflow: hidden;
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

export const MainConList = styled.div`
  height: 400px;
  margin-top: 10px;
  border: 1px solid gray;
`;

//////////////////// Shortcuts ////////////////////

export const ShortCutsWrapper = styled.div`

`;

export const ShrotCutsBox = styled.div`

`;

export const ShortCutsTitle = styled.div`


`;

export const ShortCutsSubTitle = styled.div`

`;

export const ShortCutsIcon = styled.div`

`;

export const ShortCutsContents = styled.div`

`;
