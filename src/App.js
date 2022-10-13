import { RouterProvider } from 'react-router-dom';
import './App.css';
import RouterConfig from './RouterConfig/RouterConfig';



function App() {
  
  return (
    <RouterProvider router={RouterConfig()}></RouterProvider>
  );
}

export default App;
