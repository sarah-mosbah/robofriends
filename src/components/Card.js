import React from "react";
import "tachyons";

const Card = ({ username, email }) => {
  return (
    <div className="bg-light-green dib br3 pa3 ma3 grow">
      <img alt="__robots__" src={`https://robohash.org/${username}`} />
      <div>
        <h2>{username}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
