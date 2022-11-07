// @ts-nocheck
import styled from 'styled-components';
import '@lottiefiles/lottie-player';

type Props = {
  text: string;
};

function Title(props: Props) {
  return (
    <Wrapper>
      <TitleBox>
        <Text>{props.text}</Text>
      </TitleBox>
      <LottieWrapper>
        <lottie-player
          src="https://assets7.lottiefiles.com/packages/lf20_ADqq0Z.json"
          background="transparent"
          speed="1"
          style={{ width: 150, height: 150, margin: 'auto' }}
          loop
          autoplay
        ></lottie-player>
      </LottieWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
`;

const TitleBox = styled.div`
  display: flex;
  width: 100%;
  margin: 5rem 0px;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const Text = styled.h1`
  word-break: keep-all;
  white-space: break-spaces;
  font-size: 40px;
  font-weight: 500;
  line-height: 1.2;
`;

const LottieWrapper = styled.div``;

export default Title;
