import React from 'react';
import YouTube from 'react-youtube';

 export default class Youtube extends React.Component {
    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
  render() {
    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    return <YouTube videoId="jQlbN_H9iOM" opts={opts} onReady={this._onReady} />;
  }


}