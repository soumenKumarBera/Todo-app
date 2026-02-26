const CreatePost = () => {



  
  return (
    <form className="create-post">
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="How are you feeling today..."
        />
      </div>

       <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post content
        </label>
        <textarea
          type="text"
          rows="4"
          className="form-control"
          id="body"
          placeholder="Tell us more about it"
        />
      </div>

       <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your userId
        </label>
        <input
          type="text"
          className="form-control"
          id="userId"
          placeholder="your user id..."
        />
      </div>

       <div className="mb-3">
        <label htmlFor="reaction" className="form-label">
          number of reaction
        </label>
        <input
          type="text"
          className="form-control"
          id="reaction"
          placeholder="Howmany people react this post"
        />
      </div>
       <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hasTags here
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          placeholder="Plese enter tags using space"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default CreatePost;
