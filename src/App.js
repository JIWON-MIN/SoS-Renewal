import GlobalStyle from './global';
import Header from './components/Header';
import MenuBar from './components/MenuBar';
import SideMenu from './components/SideMenu';
import MainTop from './components/MainTop';
import MainCon from './components/MainCon';
import ShortCuts from './components/Shortcuts';
import Footer from './components/Footer';

import styled from 'styled-components';
const ContentsWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 115px;

  @media screen and (max-width: 1200px) {
    top: 60px;
  }
  @media screen and (max-width: 500px) {
    display: none;
  }
`

//Mobile WIP
const WIP = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 115px;

  @media screen and (max-width: 500px) {
    display: block;
  }
`

function App() {


  return (
    <>
      <GlobalStyle />
      <Header />
      <MenuBar />
      <SideMenu />
      <ContentsWrapper>
        <MainTop />
        <MainCon />
        <ShortCuts />
        <Footer />
      </ContentsWrapper>

      {/* Mobile WIP */}
      <WIP> 모바일 기기 지원 예정입니다! </WIP>

    </>
  );
}

export default App;
