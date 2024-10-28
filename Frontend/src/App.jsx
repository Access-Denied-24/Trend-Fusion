import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Routes/Home';
import About from './Routes/About';
import Dashboard from './Components/Dashboard';
import Login from './Routes/Signup Pages/Login';
import ProductsList from './Routes/Products/ProductsList';
import ForgotPass from './Routes/Signup Pages/ForgotPass';
import Signup from './Routes/Signup Pages/Signup';
import Cart from './Routes/Cart';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      {/* <Loading /> */}
      <Home />
    </div>
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgotpass",
    element: <ForgotPass />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/products",
    element: <ProductsList />
  },
  {
    path: "/cart",
    element: <Cart />
  },
]);

function App(){
  return (
    <div className='App'>
      <RouterProvider router = {router} />
    </div>
  );
}

export default App;

/*
function App() {
    const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className='App'>
    {isLoading ? <Loading /> :  
      <Home />
    }
    </div>
  );
}
*/