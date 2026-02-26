import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currentValue, action) => {
  let newPostList = currentValue;

  if (action.type === "DELETE_POST") {
    {
      newPostList = currentValue.filter(
        (post) => post.id !== action.payload.postId,
      );
    }
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currentValue];
  }

  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (userId, postTitle, postBody, reaction, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        userId: userId,
        title: postTitle,
        body: postBody,
        reaction: reaction,
        tags: tags,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
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
