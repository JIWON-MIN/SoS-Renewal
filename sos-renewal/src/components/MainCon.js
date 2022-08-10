import {
  MainConWrapper,
  MainConBox,
  MainConTitle,
  MainConButton,

  MainConListWrapper,
  MainConListElement,
  MainConListTitle,
  MainConListDate,

  
} from './StyledComponent';

const MainCon = () => {

  const MainConListElementCreator = ({list}) => {
    return(
      <>
        <MainConListElement>
          <MainConListTitle>{list.title}</MainConListTitle> 
          <MainConListDate>{list.date}</MainConListDate>
        </MainConListElement>
      </>
    );
  }

  const MainConListCreator = ({lists}) => {
    return(
      <>
        {lists.map(list =>(
            <MainConListElementCreator list={list} key={list.id}/>
        ))}
      </>
    );
  }


  const MainConNoticeElement = [
    {
      id: 1,
      title: '22-2학기 전체수강신청일 대상외수강제한 해제 과목 안내',
      date: '22-08-09',
    },
    {
      id: 2,
      title: '2022-2학기 공학교육인증 선수교과목 미이수자 후수교과목 수강신청 안내 ',
      date: '22-08-02	',
    },
    {
      id: 3,
      title: '2022학년도 1학기 특별장학금 선발 안내',
      date: '22-07-18',
    },
    {
      id: 4,
      title: '2022-2학기 백마성적우수장학생 선발 안내 및 유의사항',
      date: '22-07-15	',
    },
    {
      id: 5,
      title: '제16회 학생포트폴리오 경진대회 개최 안내',
      date: '22-07-13',
    },
    {
      id: 6,
      title: '소프트웨어학부 소프트웨어공모전 참여안내',
      date: '22-07-11',
    },
    {
      id: 7,
      title: '[관세청-숭실대 AI융합] 우범화물 탐지 AI경진대회 참여 안내',
      date: '22-07-05',
    },
    {
      id: 8,
      title: '2022학년도 2학기 농촌출신대학생 학자금융자 시행 안내 홍보 ',
      date: '22-07-05',
    },

  ];

  const MainConNewsElement = [
    {
      id: 1,
      title: '제1회 운당학술상 시상식 ',
      date: '21-12-29',
    },
    {
      id: 2,
      title: '산업계관점 대학평가 최우수·우수 등급 선정',
      date: '21-10-21',
    },
    {
      id: 3,
      title: '소프트웨어학부, 한국정보보호학회 하계학술대회서 과기정통부 장관상 등 수상',
      date: '21-10-13',
    },
    {
      id: 4,
      title: '과기정통부 기초연구실 사업에 3팀 선정',
      date: '21-10-13',
    },
    {
      id: 5,
      title: '소프트웨어학부 최대선 교수 연구팀, 과기정통부 엣지 AI 보안 기술 개발 과제에 선정',
      date: '21-10-13',
    },
    {
      id: 6,
      title: '숭실대 조효진교수 연구팀, K-사이버 시큐리티 챌린지 2020서 1위 수상',
      date: '21-10-13',
    },
    {
      id: 7,
      title: '이정현 지식정보처장, 과학기술정보통신부장관 표창 수상',
      date: '21-10-13',
    },
    {
      id: 8,
      title: '본교 대학ICT연구센터(ITRC) 지원사업에 선정, 45억 원 지원받아',
      date: '21-10-13',
    },

  ];



  return (
    <>
      <MainConWrapper>
        <MainConBox>
          <MainConTitle>학부 공지사항<MainConButton /></MainConTitle>
            <MainConListWrapper>
              <MainConListCreator lists = {MainConNoticeElement}></MainConListCreator>
            </MainConListWrapper>
        </MainConBox>
        <MainConBox>
          <MainConTitle>보도 자료<MainConButton /></MainConTitle>
            <MainConListWrapper>
              <MainConListCreator lists = {MainConNewsElement}></MainConListCreator>
            </MainConListWrapper>
        </MainConBox>




      </MainConWrapper>
    </>
  );
}

export default MainCon;