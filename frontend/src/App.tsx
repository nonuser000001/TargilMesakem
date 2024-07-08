import LoginPage from './pages/LoginPage';
import {createBrowserRouter , RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {path: '',
   element : <LoginPage/>,
   children : [
    
   ]
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
