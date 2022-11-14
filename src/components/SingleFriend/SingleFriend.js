import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleFriend = () => {
  const friends = useLoaderData();
  const { name, email, username } = friends;
  return (
    <div>
      <h1>Friend Details of {name}</h1>
      <h4>Username: {username}</h4>
      <p>Email: {email}</p>
    </div>
  );
};

export default SingleFriend;
