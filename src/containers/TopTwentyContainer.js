import React, { Component } from 'react';
import TopTwentyDisplay from '../components/TopTwentyDisplay.js'

class TopTwentyContainer extends Component{

  constructor(props){
    super(props);
    this.state = {
      topTwenty: []
    }
  }

  componentDidMount(){
    fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
    .then(response => response.json())
    .then(json => this.setState({topTwenty: json.feed.entry}))
  }



  render(){
    return(
      <>
      <h1> The top 20 in no particular Order </h1>
      <TopTwentyDisplay topTwentySongs={this.state.topTwenty} />
      </>
    );
  }

}

export default TopTwentyContainer;
