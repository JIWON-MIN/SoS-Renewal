import {
  MainConWrapper,
  MainConBox,
  MainConList,
  MainConTitle,
  MainConButton,
} from './StyledComponent';

const MainCon = () => {
  return (
    <>
      <MainConWrapper>
        <MainConBox>
          <MainConTitle>학부 공지사항<MainConButton /></MainConTitle>
          <MainConList></MainConList>
        </MainConBox>
        <MainConBox>
          <MainConTitle>보도 자료<MainConButton /></MainConTitle>
          <MainConList></MainConList>
        </MainConBox>
      </MainConWrapper>
    </>
  );
}

export default MainCon;