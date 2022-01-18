import './App.css';
import Layout from './components/layout';
import List from './components/list';        
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Detail from './components/detail';
import Login from './components/login';
import Create from './components/create';
import Home from './components/home';
import Schedule from './components/schedule';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/List" component={List}/>
          <Route path="/Detail/:id" component={Detail}/>
          <Route path="/Login" component={Login}/>
          <Route path="/Create" component={Create}/>
          <Route path="/Schedule" component={Schedule}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
