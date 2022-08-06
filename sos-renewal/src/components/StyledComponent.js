import styled from 'styled-components';
import MainLogo from '../icons/MainLogo.png';
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
  width: 25px;
  height: 25px;
  margin-right: 10px;
  color: gray;
`;

//////////////////// MenuBar ////////////////////
export const MenuBarWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 80px;
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
  
`
export const MenuBarActivatedWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;

  background-color: white;
  //background-color: lightgray;
`
export const MenuBarActivatedBox = styled.div`
  width: 250px;
  height: 300px;
  padding: 10px 0;
  display: flex;
  flex-direction: column;

  background-color: white;
  //background-color: pink;
`
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
`

export const MenuBarActivatedVertical = styled.div`
  height: 280px;
  width: 1px;
  margin-top: 20px;
  background-color: #CECECE;

`


