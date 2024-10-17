import { Route, Routes } from 'react-router-dom'
import Home from "./views/Home.jsx"
import About from "./views/About.jsx"
import ImageCollections from './views/ImageCollections.jsx'
import Blog from './views/Blog.jsx'
import Login from './views/admin/Login.jsx'
import CreateAccount from './views/admin/CreateAccount.jsx'
import DashBoard from './views/admin/DashBoard.jsx'
import CreateBlog from './views/admin/CreateBlog.jsx'

function App() {
  return(
  <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/collections" element={<ImageCollections/>}/>
      <Route path="/blog" element={<Blog/>}/>
      
      {/* Admin Only Routes*/}
      <Route path="/create-blog" element={<CreateBlog/>}/>
      <Route path="/create-collection" element={<Blog/>}/>
      <Route path="/create-account" element={<CreateAccount/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path='/dashboard' element={<DashBoard/>}/>
    </Routes>
  </>
  )
}

export default App
