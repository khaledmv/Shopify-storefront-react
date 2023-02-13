
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Home from './pages/Home';
import ProductPage from "./pages/ProductPage";


function App() {
  return (
    <ChakraProvider>
      <p> Navbar</p>
      <Router>
        <Switch>
            <Route path="/products/:handle" >
              <ProductPage/>
            </Route>

            <Route path="/" exact>
              <Home />
            </Route>
         </Switch>
        </Router>
        <p>Footer</p>
    </ChakraProvider>
  );
}

export default App;
