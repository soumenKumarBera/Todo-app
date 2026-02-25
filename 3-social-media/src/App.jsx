import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";


function App() {
  const [selectedTap, setSelectedTap] = useState();

  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar
          selectedTap={selectedTap}
          setSelectedTap={setSelectedTap}
        ></Sidebar>
        <div className="content">
          <Header></Header>

          {selectedTap == "Home" ? (
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
