import React from 'react';
import { Col } from 'react-bootstrap';
import '../assest/Css/YoutubeAPIStyle.css';

const YoutubeVideo = ({ video }) => {
  const videoID = video.contentDetails.videoId;
  return (
    <Col>
      <section
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
        }}
      >
        <iframe
    src={'https://www.youtube.com/embed/' + videoID}
    frameBorder='0'
    allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
    allowFullScreen
    />
      </section>
    </Col>
  );
};

export default YoutubeVideo;
