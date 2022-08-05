import styled from 'styled-components';
import MainLogo from '../icons/MainLogo.png';

//////////////////// Header ////////////////////
export const HeaderWrapper = styled.div`
  position: fixed;
  //background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;

`;

export const HeaderLogo = styled.div`
  background-image: url(${MainLogo});
  background-size: 240px 60px;
  width: 240px;
  height: 60px;
  margin-left: 100px;
`

export const HeaderSearchBox = styled.div`
  width: 240px;
  height: 30px;
  margin-right: 100px;
  background: #FFFFFF;
  border: 1px solid #BBBBBB;
  border-radius: 10px;

`