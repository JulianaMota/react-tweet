import React from "react";
import User from "./User";
export default function Tweet(props) {
  return (
    <article className="tweet">
      <User userinfo={props.tweet.user} />
      <blockquote>{props.tweet.text}</blockquote>
    </article>
  );
}
