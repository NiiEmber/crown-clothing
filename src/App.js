import HomePage from "./components/Homepage"
import {Switch, Route} from 'react-router-dom'
import ShopPage from "./components/Shop";
import './App.css'
import Header from "./components/Header";



function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route  path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
