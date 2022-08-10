import Header from './components/Header';
import MenuBar from './components/MenuBar';
import MainTop from './components/MainTop';
import MainCon from './components/MainCon';
import ShortCuts from './components/Shortcuts';
import Footer from './components/Footer';


// 컴포넌트 자체를 감싸는 용도라서
// 여기에 styled-component 써서 사용했는데
// StyledComponent 파일로 보내버려도 돼,,,,
import styled from 'styled-components';
const ContentsWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 115px;
`

function App() {
  return (
    <>
      <Header />
      <MenuBar />
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
