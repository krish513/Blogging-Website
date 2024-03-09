import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Landing } from "./pages/Landing"
import { Signup } from "./pages/Signup"
import { Signin } from "./pages/Signin"
import { Blogs } from "./pages/Blogs"
import { Blog } from "./pages/Blog"
import { CreatePost } from "./pages/CreatePost"
import { EditBlog } from "./pages/EditBlog"
import { RecoilRoot } from "recoil"


function App() {
  
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/blogs" element={<Blogs/>}/>
            <Route path="/blog/:id" element={<Blog/>}/>
            <Route path="/create" element={<CreatePost/>}/>
            <Route path="/edit/:id" element={<EditBlog/>}/>
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  )
}

export default App
