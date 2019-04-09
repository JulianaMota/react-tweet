import React from "react";
export default function User(props) {
  // console.log(props);
  return (
    <header className="user">
      <img src={props.userinfo.profile_image_url} />
      <h1>@{props.userinfo.screen_name}</h1>
      <h3>{props.userinfo.location}</h3>
    </header>
  );
}
