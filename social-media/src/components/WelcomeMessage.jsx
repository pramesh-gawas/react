const WelcomeMessage = ({ onGetPostsClick }) => {
  return (
    <center className="welcome">
      <h1>There are no post</h1>
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={onGetPostsClick}
      >
        Get post from sever
      </button>
    </center>
  );
};

export default WelcomeMessage;
