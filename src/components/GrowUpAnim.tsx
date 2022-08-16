import React, {useRef, useEffect} from 'react';
import styled from 'styled-components';
import lottie from 'lottie-web';
import animationData from '../anim/1_1.json';

function GrowUpAnim() {
	const container = useRef<any>();

	useEffect(() => {
		lottie.loadAnimation({
			container: container.current,
			renderer: 'svg',
			loop: false,
			autoplay: true,
			animationData: animationData,
		});
	}, []);

	return (
		<Wrapper>
			<Container ref={container}></Container>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	width: 100%;
`;

const Container = styled.div`
	width: 500px;
	margin: auto;
`;

export default GrowUpAnim;
