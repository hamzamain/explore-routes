import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { title, body, id, userId } = post;
  const navigator = useNavigate();
  const handlerNavigator = () => {
    navigator(`/post/${id}`);
  };

  return (
    <div>
      <h4>Name: {title}</h4>
      <p>
        Id: <small>{id}</small>
      </p>
      <p>{body}</p>
      <Link to={`/post/${id}`}>visit: {id}</Link>
      <Link to={`/post/${id}`}>
        <button>Show Details</button>
      </Link>
      <button onClick={handlerNavigator}>Show Details 2</button>
    </div>
  );
};

export default Post;
