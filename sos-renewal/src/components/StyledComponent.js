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