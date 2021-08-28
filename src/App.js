import HomePage from "./components/Homepage"
import {Switch, Route} from 'react-router-dom'
import ShopPage from "./components/Shop";
import './App.css'



function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route  path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
