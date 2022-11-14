import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Products from "./components/Products/Products";
import Main from "./Layout/Main";
import Friends from "./components/Friends/Friends";
import SingleFriend from "./components/SingleFriend/SingleFriend";
import Posts from "./components/Posts/Posts";
import Post from "./components/Post/Post";
import PostDetails from "./components/PostDetails/PostDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <Home></Home> },
        { path: "/about", element: <About></About> },
        { path: "product", element: <Products></Products> },
        { path: "home", element: <Home></Home> },
        {
          path: "friends",
          loader: async () => {
            return fetch("https://jsonplaceholder.typicode.com/users");
          },
          element: <Friends></Friends>,
        },
        {
          path: "posts",
          loader: async () => {
            return fetch("https://jsonplaceholder.typicode.com/posts");
          },
          element: <Posts></Posts>,
        },
        {
          path: "friend/:friendId",
          loader: async ({ params }) => {
            console.log(params);
            return fetch(
              `https://jsonplaceholder.typicode.com/users/${params.friendId}`
            );
          },
          element: <SingleFriend></SingleFriend>,
        },
        {
          path: "post/:postId",
          loader: async ({ params }) => {
            console.log(params);
            return fetch(
              `https://jsonplaceholder.typicode.com/posts/${params.postId}`
            );
          },
          element: <PostDetails></PostDetails>,
        },
      ],
    },

    { path: "/hello", element: <div>hello world</div> },
    { path: "*", element: <p>404</p> },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
