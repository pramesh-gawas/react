import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const postReactionsElement = useRef();
  const postTagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const postReactions = postReactionsElement.current.value;
    const postTags = postTagsElement.current.value.split(" ");

    addPost(userId, postTitle, postBody, postReactions, postTags);

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    postReactionsElement.current.value = "";
    postTagsElement.current.value = "";
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userID" className="form-label">
          UserId
        </label>
        <input
          ref={userIdElement}
          type="text"
          className="form-control"
          id="userID"
          placeholder="Enter UserID"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Create Post
        </label>
        <input
          ref={postTitleElement}
          type="text"
          className="form-control"
          id="title"
          placeholder="How are you feeling today.."
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          ref={postBodyElement}
          type="text"
          className="form-control"
          id="body"
          placeholder="How are you feeling today.."
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of people reacted
        </label>
        <input
          ref={postReactionsElement}
          type="input"
          className="form-control"
          id="reactions"
          placeholder="Number of reactions.."
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hashtag here
        </label>
        <input
          ref={postTagsElement}
          type="input"
          className="form-control"
          id="tags"
          placeholder="Please enter tags using space"
          aria-describedby="emailHelp"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
