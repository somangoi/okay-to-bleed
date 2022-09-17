// @ts-nocheck
import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { CircularProgress, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

type Props = {
  name: string;
  playback: number;
};

function AnimationFrame(props: Props) {
  const { t } = useTranslation('AnimationFrame');
  const [loading, setLoading] = React.useState<boolean>(true);
  const [visible, setVisible] = React.useState<boolean>(false);
  const [animationUrl, setAnimationUrl] = React.useState<string>();
  const observerRef = React.useRef<IntersectionObserver>();
  const wrapperRef = React.useRef<HTMLDivElement>();
  const videoRef = React.createRef();
  const { name, playback } = props;
  var videoElement: HTMLVideoElement;
  var animationRequest: number;

  useEffect(() => {
    observerRef.current = new IntersectionObserver(intersectionObserver);
    wrapperRef.current && observerRef.current.observe(wrapperRef.current);
  }, []);

  useEffect(() => {
    if (visible) {
      videoElement = videoRef.current;
      videoElement.addEventListener('loadedmetadata', function () {
        var virtualHeight = Math.floor(this.duration) * playback + 'px';
        wrapperRef.current.style.height = virtualHeight;
        setLoading(false);
        animationRequest = requestAnimationFrame(scrollPlay);
      });
    }
  }, [visible]);

  const intersectionObserver = (
    entries: IntersectionObserverEntry[],
    io: IntersectionObserver,
  ) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        io.unobserve(entry.target);
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  };

  function scrollPlay() {
    var frame = window.scrollY / playback;
    videoElement.currentTime = frame;
    animationRequest = requestAnimationFrame(scrollPlay);
    if (!visible) {
      cancelAnimationFrame(animationRequest);
    }
  }

  return (
    <Wrapper ref={wrapperRef} className="animation_wrapper">
      <Content>
        {loading && (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
          >
            <CircularProgress size={60} sx={{ color: '#fff' }} />
          </Box>
        )}
        {visible && (
          <Video ref={videoRef} autobuffer="autobuffer">
            <source type="video/mp4" src={'/anim/' + name + '.mp4'} />
            <source type="video/ogg" src={'/anim/' + name + '.ogg'} />
            <source type="video/webm" src={'/anim/' + name + '.webm'} />
            {t('video-format-warning')}
          </Video>
        )}
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: block;
  min-height: '100vh';
`;

const Video = styled.video`
  object-fill: contain;
  width: 100%;
  height: 100vh;
`;

const Content = styled.div`
  position: sticky;
  top: 0px;
  width: 100%;
  height: 100vh;
`;

export default React.memo(AnimationFrame);
