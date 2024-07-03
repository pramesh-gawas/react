import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
const PostList = () => {
  const { postList, addIntialPost } = useContext(PostListData);

  const handlePostsClick = () => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        addIntialPost(data.products);
      });
  };

  return (
    <>
      {postList.length === 0 && (
        <WelcomeMessage onGetPostsClick={handlePostsClick} />
      )}
      {postList.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </>
  );
};

export default PostList;
