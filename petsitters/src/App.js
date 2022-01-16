import './App.css';
import Layout from './components/layout';
import List from './components/list';        
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Detail from './components/detail';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={List}/>
          <Route path="/List" component={List}/>
          <Route path="/Detail/:id" component={Detail}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
