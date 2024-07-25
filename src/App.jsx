import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './App.css'
import Hoome from './pages/Hoome'
import ToliqMalumod from './pages/ToliqMalumod'
import MeinLeaut from './layout/MeinLeaut'
import Abaut from './pages/Abaut'
import Contact from './pages/Contact'
function App() {
  const router =createBrowserRouter([
    {
      path:'/',
      element:<MeinLeaut/>,
      children:[
        {
          path:'/',
          element:<Hoome/>
        },
        {
          path:"/abaut",
          element:<Abaut/>
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        {
          path:'/hamasi/:id',
          element:<ToliqMalumod/>
        },

      ]
    },
  ])
  return (<>
   <RouterProvider router={router}/>
  </>
  )
}

export default App
