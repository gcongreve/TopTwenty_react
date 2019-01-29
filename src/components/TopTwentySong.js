import React, { Component } from 'react';


const TopTwentySong = (props) => {
    return (
        <div className="song-div">
        <h3> Artist: {props.song['im:artist']['label']}</h3>
        <h4> Title: {props.song['im:name']['label']}</h4>
        </div>
    );
}

// class TopTwentySong extends Component {
//   render() {
//     return (
//         <div className="song-div">
//         <h3> Artist: {this.props.song['im:artist']['label']}</h3>
//         <h4> Title: {this.props.song['im:name']['label']}</h4>
//         </div>
//     );
//   }
// }

export default TopTwentySong;
