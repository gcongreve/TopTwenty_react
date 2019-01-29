import React, {Component} from 'react';
import TopTwentySong from './TopTwentySong.js'


class TopTwentyDisplay extends Component {

  render() {
    const songItems = this.props.topTwentySongs.map((song, index) => {
      return (
        <TopTwentySong song={song} key={index}/>
      );
    });
    return (
      <>
        {songItems}
      </>
    );
  }

}

export default TopTwentyDisplay;
