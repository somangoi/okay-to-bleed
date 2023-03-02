import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const teamMembers = [
  {
    name: 'Tchetche Tryphen',
    link: 'https://www.linkedin.com/in/tchetche-gbakui-tryphen-a8865a245',
    message:
      'Hello, I am Tchetche Tryphen from Côte d’Ivoire. I participate in English-French translation for OTB project. At the outset of my career in international development, it has been a real privilege contributing to the OTB project :)',
  },
  {
    name: '이은샘',
    link: 'www.linkedin.com/in/eunsaem-estelle-lee',
    message:
      '국제개발협력 컨설턴트 및 커리어 코치로 일하고 있습니다. 시공간적으로 더 큰 가치를 만드는 일에 관심이 있습니다. 공사모를 통해 Okay to Bleed를 알게 되어 프랑스어 번역을 맡았어요. 언제든 새로운 기회를 기다립니다.',
  },
  {
    name: '김도아',
    link: 'https://www.instagram.com/doa_in.nepal/',
    message:
      '공사모에서 디자인도 하고 에세이도 쓰는 네팔소녀입니다! 국제개발협력 분야(그중에서도 네팔과 교육분야)에 관심이 많고, 선한 세상을 만드는데 도움이 되고 싶어요! Okay to bleed에서는 네팔친구(익명 요청)와 함께 네팔어 번역을 맡았습니다!',
  },
  {
    name: '황소미',
    link: 'https://somangoi.notion.site/Hello-world-I-m-Somi-3ad2c06957ce4919b41621ee9f70fd9c',
    message:
      '스타트업의 웹 프론트엔드 개발자이자 국제개발협력 공적인사적모임에서 테츠오로 활동중입니다. 소수자와 소외된 분들을 위하는 개발자가 되겠다는 목표를 가지고 개발을 하고 있습니다. Okay to Bleed에서는 PM과 웹개발을 맡았습니다.',
  },
  {
    name: '김민선',
    link: 'https://www.instagram.com/minseon.keem/',
    message:
      '인터랙션 디자인과 프로덕트 디자인 사이에서 유영하는 디자이너입니다. 누군가가 ‘좋아서’ 더 나은 경험을 할 수 있도록 돕는 일이 디자이너의 역할이라고 생각합니다. 그래서, 저도 좋아서 합니다. Okay to Bleed에서는 애니메이션을 맡았습니다.',
  },
  {
    name: '정예람',
    link: 'https://brunch.co.kr/@2eejung',
    message:
      '글쓰기를 좋아하는 사람. 늘 재밌는 일을 하며 인생을 살아가기를 원합니다. 지금은 고객의 소리를 듣고 서비스를 기획하는 프로덕트 매니저(PM)가 되기 위해서 공부중입니다. Okay to Bleed에서는 콘텐츠 기획을 맡았습니다. 좋은 기회를 언제든지 기다립니다!',
  },
  {
    name: '임슬아',
    link: 'http://blog.naver.com/lsalji',
    message:
      '🇨🇳중국 대학에서 한국어를 가르치다 개발협력으로 커리어를 전환하게 된 계기는 바로 중국에서 운명과도 같이 만난 DRC콩고와의 인연 때문입니다.🇨🇩 콩고에 대한 관심과 사랑 그리고 궁금증은 개발협력이라는 새로운 세상을 마주하는 것으로 확대되었습니다. 귀국 후 국내 기관에서 YP로 근무 중이며 DRC콩고 고마 지역 사업과 탄자니아 아루샤 지역 사업을 보조하고 있습니다. Okay to Bleed에서는 콘텐츠 기획을 맡았습니다.',
  },
  {
    name: '박혜경',
    link: '',
    message:
      'NGO에서 국제교류와 국제개발 사업을 담당해왔고, 현재는 사기업에서 국제개발 업무를 하고 있습니다. 젠더와 환경에 관심이 많고, 작은 행동으로 세상을 변화시킬 수 있다는 신념을 가지고 있습니다.  Okay to bleed에서는 번역을 맡았습니다. ',
  },
  {
    name: '전혜진',
    link: 'https://github.com/ette9844',
    message:
      'SI 업체에서 풀스택 개발자로 일하고 있습니다. 언어/플랫폼에 국한되지 않고 다양한 개발 경험을 쌓는 것을 즐깁니다. Okay to Bleed에서는 웹개발을 맡았습니다. 어디선가 즐거운 개발 프로젝트로 다시 만나길 바랍니다.',
  },
  {
    name: '조하연',
    link: 'https://blog.naver.com/miracleapril',
    message:
      'IO에서 도시개발 및 기후변화 사업을 지원하고 있으며, 국제개발협력 공적인사적모임에서 짠망으로 활동중입니다. 젠더, 기후환경, 커뮤니티 참여를 중심으로 개발협력 활동을 이어나가고 있습니다. 본 프로젝트가 우리 모든 이웃 여성을 위해 월경에 대한 올바른 인식을 세우는데 조금이나마 기여하길 바랍니다. Okay to Bleed에서는 번역을 맡았습니다.',
  },
  {
    name: '김주연',
    link: '',
    message:
      'CS 분야에서 일을 하다 웹 개발, 데이터 분석, 비즈니스 컨설팅 등 여러 분야에서 경험을 쌓고 있습니다. 월경에 대한 올바른 이해를 돕고자 하는 소미님의 취지에 동감하여 참여하였으며 많은 사람들에게 도움이 되길 바랍니다. Okay to Bleed에서는 웹개발은 맡았습니다.',
  },
  {
    name: '안예진',
    link: '',
    message:
      '공사모의 뉴스클리퍼로 활동하고 있어요! 모두를 위한 개발협력을 꿈꾸고 있으며, 그 중에서도 젠더와 다양성 이슈에 관심이 많아요! Okay to Bleed의 콘텐츠 제작과 번역을 함께 했어요.',
  },
  {
    name: '이민혜',
    link: 'https://www.instagram.com/minhye2ee/?igshid=YmMyMTA2M2Y%3D',
    message:
      '이것저것 재밌는 일들에 기웃거리기를 좋아합니다. 세상을 조금이나마 바꿀 수 있는 일이라면 더욱요. Okay to Bleed에는 일러스트레이터로 참여했습니다.',
  },
];

const About = () => {
  const { t } = useTranslation('Period');

  const shuffleArray = (
    array: {
      name: string;
      link: string;
      message: string;
    }[],
  ) => {
    array.sort(() => Math.random() - 0.5);
    return array;
  };

  return (
    <TeamContainer>
      <TeamTitle>{t('TeamTitle')}</TeamTitle>
      <TeamIntro>
        {t('TeamIntro')}
        <br />
        <ListLink href={t('NewsletterLink')} target="_blank">
          Click here
        </ListLink>
      </TeamIntro>
      <ListWrapper>
        {shuffleArray(teamMembers).map(item => {
          return (
            <ListItem key={item.name}>
              <ListName>
                {item.name}{' '}
                <ListLink href={item.link} target="_blank">
                  Learn more
                </ListLink>
              </ListName>
              <ListContent> {item.message}</ListContent>
            </ListItem>
          );
        })}
      </ListWrapper>
    </TeamContainer>
  );
};

const TeamContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 0;
  flex-direction: column;
`;

const TeamTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;

  @media (max-width: 600px) {
    font-size: 1.3rem;
  }
`;

const TeamIntro = styled.p`
  margin-bottom: 5rem;
  text-align: center;
  width: 90%;
  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const ListWrapper = styled.ul`
  list-style: none;
  padding: 0;
  max-width: 600px;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  transition: 2s all ease-in-out;
  margin: 0;
  padding: 1.5rem;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 2rem;
  margin-bottom: 2rem;
  display: flex;
  background-color: rgba(255, 255, 255, 0.15);
`;

const ListName = styled.span`
  display: inline;
  font-weight: 700;
  font-size: 1.2rem;
`;

const ListLink = styled.a`
  display: inline;
  font-size: 0.9rem;
  font-weight: 700;
  text-decoration: underline;
  color: #fff;
  margin-left: 0.2rem;
  &:hover {
    color: #c83938;
  }
`;

const ListContent = styled.span`
  display: block;
  margin-top: 1rem;
`;

export default About;
