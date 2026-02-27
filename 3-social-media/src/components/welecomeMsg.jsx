const WelcomeMsg = ({onGetPostClick}) => {
  return (
    <center>
      <h1 className="welcomeMsg">There are no post</h1>
      <button type="button" class="btn btn-primary" onClick={onGetPostClick}>
        Get Post From Server
      </button>
    </center>
  );
};

export default WelcomeMsg;
