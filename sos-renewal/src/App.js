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

    </>
  );
}

export default App;
