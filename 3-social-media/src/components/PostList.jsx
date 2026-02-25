import { useContext } from "react";
import Post from "./Post";
import { PostList as postListData } from "../store/post-list-store";
const PostList = () => {
  const { postList } = useContext(postListData);
  console.log(postList);

  return (
    <>
      {postList.map((list) => (
        <Post />
      ))}
    </>
  );
};
export default PostList;
