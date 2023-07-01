import React from 'react'
import ReactDOM from 'react-dom/client'
import Posts, {loader as postLoader} from './routes/Posts.jsx' //remove loader see also Posts.jsx if no backend required
import './index.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import NewPost,{action as newPostaction} from './routes/NewPost.jsx'
import RootLayout from './routes/RootLayout.jsx'
const router=createBrowserRouter([
  {path:'/',element:<RootLayout/>,children:[
    {path:'/',element:<Posts/>,
    loader:postLoader,//can be removed if no backend needed, see also Posts.jsx
    children:[
      {path:'new-post',element:<NewPost/>,action: newPostaction}
    ]},
  
  ]}
  
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
