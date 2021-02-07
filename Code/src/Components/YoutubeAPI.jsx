import React from 'react';
import YoutubeVideo from './YoutubeVideo';
import '../assest/Css/YoutubeAPIStyle.css';
import { Container, Row } from 'react-bootstrap';

class YoutubeAPI extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      videos: [],
    };
  }
  
  async componentDidMount() {
    const url =
      'https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails&maxResults=6&playlistId=PLNmNvM6-lo_GQa8-GvKA0m-9qqfPDKFpv&key=AIzaSyAtJhfD29_hZH256jtRy602PhKBBozo-fo';

    const response = await fetch(url);
    const data = await response.json();
    this.setState({ videos: data.items });
  }
  render() {
    const { videos } = this.state;

    const renderedVideos = videos.map((video, index) => {
      return <YoutubeVideo key={video.id} video={video} />;
    });
    return (
      <article>
        <h2 style={{ textAlign: 'center', paddingTop: '3rem' , color: '#f05f7b' , marginBottom: '2%'}}>
          Feel free to be in love with Our Cake
        </h2>
        <Container>
          <Row>{renderedVideos}</Row>
        </Container>
      </article>
    );
  }
}

export default YoutubeAPI;
