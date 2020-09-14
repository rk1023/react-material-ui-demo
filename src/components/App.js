import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './ui/Header'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './ui/Theme'
import MediaCard from './ui/MediaCard'
import ContactCard from './ui/ContactCard'
import TodoCard from './ui/TodoCard'
import WebDevelopment from './ui/WebDevelopment'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={()=>(<div>Home</div>)}></Route>
          <Route path='/todo' exact component={TodoCard}></Route>
          <Route path='/service' exact component={()=>(<div>Service</div>)}></Route>
          <Route path='/about' exact component={MediaCard}></Route>
          <Route path='/contact' exact component={ContactCard}></Route>
          <Route path='/softwareDevelopment' exact component={()=>(<div>softwareDevelopment</div>)}></Route>
          <Route path='/webDevelopment' exact component={WebDevelopment}></Route>
          <Route path='/mobileDevelopment' exact component={()=>(<div>mobileDevelopment</div>)}></Route>

        </Switch>
      </Router>


    </ThemeProvider>


  );
}

export default App;
