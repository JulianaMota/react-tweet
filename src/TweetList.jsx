import React from "react";
import Tweet from "./Tweet";

export default function TweetList(props) {
  //props.tweets
  const myTweets = props.tweets.map(onetweet => {
    return <Tweet tweet={onetweet} />;
  });
  return (
    <section className="tweetlist">
      <h1>Find Tweets by hastag</h1>
      {myTweets}
    </section>
  );
}

//callack funtion to call when created and event
