import { useContext, useEffect } from "react";
import Post from "./Post";
import { PostList as postListData } from "../store/post-list-store";
import WelcomeMsg from "./welecomeMsg";
const PostList = () => {
  const { postList, addInitialPost } = useContext(postListData);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((obj) => {
        console.log(obj.posts);
        addInitialPost(obj.posts);
      });
  }, []);

  return (
    <>
      {postList.length === 0 && <WelcomeMsg />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};
export default PostList;
