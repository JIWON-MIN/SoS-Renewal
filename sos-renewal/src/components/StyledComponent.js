import styled from 'styled-components';
import MainLogo from '../icons/MainLogo.png';
import MainPicture1 from '../icons/MainPicture1.png';
import { HiOutlineSearch } from 'react-icons/hi';

//////////////////// Header ////////////////////
export const HeaderWrapper = styled.div`
  position: fixed;
  //background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;

`;

export const HeaderLogo = styled.div`
  background-image: url(${MainLogo});
  background-size: 240px 60px;
  width: 240px;
  height: 60px;
  margin-left: 80px;
`;

export const HeaderSearchBox = styled.div`
  width: 230px;
  height: 30px;
  margin-right: 80px;
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
  top: 80px;
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
  width: 250px;
  height: 55px;
  background: #08517A;
  font-size: 23px;
  font-weight: 300;
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
  //background-color: lightgray;
  z-index: 1;


`;
export const MenuBarActivatedBox = styled.div`
  width: 250px;
  height: 300px;
  padding: 10px 0;
  display: flex;
  flex-direction: column;

  background-color: white;
  //background-color: pink;
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
  top: 135px;
  //background-color: gray;
`;

export const MainTopImage = styled.div`
  position: absolute;
  background-image: url(${MainPicture1});
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
`

export const MainTopBox = styled.div`
  position: absolute;
  width: 630px;
  height: 100%;
  background-color: rgba(102, 151, 172, 0.7);
`