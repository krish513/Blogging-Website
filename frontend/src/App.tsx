import { BrowserRouter, Navigate, Outlet, Route, RouteProps, Routes } from "react-router-dom"
import { Landing } from "./pages/Landing"
import { Signup } from "./pages/Signup"
import { Signin } from "./pages/Signin"
import { Blogs } from "./pages/Blogs"
import { Blog } from "./pages/Blog"
import { CreatePost } from "./pages/CreatePost"
import { EditBlog } from "./pages/EditBlog"
import { RecoilRoot, useRecoilValue } from "recoil"
import { userAtom } from "./store/atom"

// ProtectedRoute component for restricted routes
// export const ProtectedRoute = ({ Component }: any) => {
//   const user = true // Assume you have a custom hook to check authentication
//   console.log("from app tsx")
//   console.log(user)

//   return user ? <Component/> : <Navigate to="/" />;
// };

const PrivateRoute = () => {
  let auth = true;

  return (
    auth ? <Outlet/> : <Navigate to= "/"/>
  )
}

function App() {
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/" element= {<Landing/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/signin" element={<Signin/>}/>
            <Route element= {<PrivateRoute/>}>
              <Route path="/blogs" element={<Blogs/>}/>
              <Route path="/create" element={<CreatePost/>}/>
              <Route path="/edit/:id" element={<EditBlog/>}/>
            </Route>
            <Route path="/blog/:id" element={<Blog/>}/>
            
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  )
}




export default App
