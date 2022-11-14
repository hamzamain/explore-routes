import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
  const postDetails = useLoaderData();
  console.log(postDetails);
  const { title, body, userId, id } = postDetails;

  const navigator = useNavigate();

  const handlerNavigator = () => {
    navigator(`/friend/${userId}`);
  };

  return (
    <div>
      <h4> {title}</h4>
      <p>
        <small>{body}</small>
      </p>
      <button onClick={handlerNavigator}>Get the Author</button>
    </div>
  );
};

export default PostDetails;
