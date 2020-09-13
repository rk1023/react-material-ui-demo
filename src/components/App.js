import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './ui/Header'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './ui/Theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={()=>(<div>Home</div>)}></Route>
          <Route path='/todo' exact component={()=>(<div>ToDo</div>)}></Route>
          <Route path='/service' exact component={()=>(<div>Service</div>)}></Route>
          <Route path='/about' exact component={()=>(<div>About</div>)}></Route>
          <Route path='/contact' exact component={()=>(<div>Contact</div>)}></Route>

        </Switch>
      </Router>


    </ThemeProvider>


  );
}

export default App;
