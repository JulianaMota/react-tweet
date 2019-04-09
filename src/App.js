import React, { Component } from "react";
import TweetList from "./TweetList";

class App extends Component {
  state = {
    tweets: [],
    hastag: ""
  };
  componentDidMount() {
    // fetch("https://kea-alt-del.dk/twitter/api/?hashtag=react&count=20")
    //   .then(res => res.json())
    //   .then(data => {
    //     this.setState({
    //       tweets: data.statuses
    //     });
    //   });
  }
  hastagChange = evt => {
    console.log(evt.target.value);
    this.setState({
      hastag: evt.target.value
    });
    if (evt.target.value.length !== 0) {
      fetch(
        "https://kea-alt-del.dk/twitter/api/?hashtag=" +
          evt.target.value +
          "&count=20"
      )
        .then(res => res.json())
        .then(data => {
          this.setState({
            tweets: data.statuses
          });
        });
    }else{
      
    }
  };
  render() {
    return (
      <main>
        <h1>#TwitterFeed</h1>
        <p>Searching for #{this.state.hastag}</p>
        <input
          type="text"
          onChange={this.hastagChange}
          name="search"
          value={this.state.hastag}
        />
        <TweetList tweets={this.state.tweets} />
      </main>
    );
  }
}

export default App;
