import { useContext } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import {PostList} from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost} = useContext(PostList);
  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={() => deletePost(post.id)}>
            <FaDeleteLeft />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tags) => (
          <span class="badge text-bg-primary hastag" key={tags}>{tags}</span>
        ))}
        <div class="alert alert-success mt-3 " role="alert">
          This post has been Reacted by {post.reaction}
        </div>
      </div>
    </div>
  );
};

export default Post;
