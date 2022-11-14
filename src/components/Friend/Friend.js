import React from "react";
import { Link } from "react-router-dom";

const Friend = ({ friend }) => {
  const { name, email, username, id } = friend;
  return (
    <div>
      <h3>Name: {name}</h3>
      <p>Email: {email}</p>
      <p>
        <Link to={`/friend/${id}`}>
          <small>{username}</small>
        </Link>
      </p>
    </div>
  );
};

export default Friend;
