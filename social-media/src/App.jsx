import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import "./App.css";
import PostList from "./components/PostList";
import PostListProvider from "./store/post-list-store";

function App() {
  const [selectedtab, setSelectedtab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar
          selectedtab={selectedtab}
          setSelectedtab={setSelectedtab}
        ></Sidebar>
        <div className="content">
          <Header></Header>
          {selectedtab === "Home" ? (
            <PostList></PostList>
          ) : (
            <CreatePost></CreatePost>
          )}
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
