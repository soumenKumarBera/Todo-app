import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as postListData } from "../store/post-list-store";
import WelcomeMsg from "./welecomeMsg";
import LodingSpiner from "./lodingSpiner";
const PostList = () => {
  const { postList, addInitialPost } = useContext(postListData);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);

    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((obj) => {
        addInitialPost(obj.posts);
        setFetching(false);
      });

    return () => {
      console.log("useEfect cleanup");
      controller.abort();
    };
  }, []);

  return (
    <>
      {" "}
      {fetching && <LodingSpiner />}
      {!fetching && postList.length === 0 && <WelcomeMsg />}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};
export default PostList;
