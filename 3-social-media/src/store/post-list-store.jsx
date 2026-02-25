import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currentValuee, action) => {};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostListg] = useReducer(postListReducer, 
    Default_post_list,
  );

  const addPost = () => {};

  const dletePost = () => {};

  return (
    <PostList.Provider value={{ postList, addPost, dletePost }}>
      {children}
    </PostList.Provider>
  );
};

let Default_post_list = [
  {
    id: "1",
    title: "Going to Mumbay",
    body: "Hi friends, i am going to mumbay",
    reaction: 3,
    userId: "user-9",
    tags: ["vacation", "mumbay"],
  },
  {
    id: "2",
    title: "Going to Mumbay",
    body: "Hi friends, i am going to mumbay",
    reaction: 3,
    userId: "user-9",
    tags: ["vacation", "mumbay"],
  },
  {
    id: "3",
    title: "Going to Mumbay",
    body: "Hi friends, i am going to mumbay",
    reaction: 3,
    userId: "user-9",
    tags: ["vacation", "mumbay"],
  },
];

export default PostListProvider;
