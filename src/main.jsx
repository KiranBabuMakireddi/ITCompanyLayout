import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Github,{GithubInfoApiLoader} from './Components/Github/Github'
import User from './Components/User/User'

// const router=createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:'/',
//         element:<Home/>
//       },
//       {
//         path:'/about',
//         element:<About/>
//       },
//       {
//         path:'/contact',
//         element:<Contact/>
//       },
//       {
//         path:'/github',
//         element:<Github/>
//       }
//     ]
//   }
// ])
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='About' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='User/:Userid' element={<User/>}/>
      <Route 
      loader={GithubInfoApiLoader}
      path='github' 
      element={<Github/>}
      
      />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
