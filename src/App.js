import './App.css';
import Dashboard from './components/layout/Dashboard';
import Navbar from './components/layout/Navbar';
import { Provider } from 'react-redux';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './components/main-page/Landing';
import { Fragment } from 'react';
import { store } from './store'
import PrivateRoute from './routing/PrivateRoute';
import Protected from './Protected';
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Dashboard />} />
            <Route exact path='/landing' element={<Landing />} />
            <Route exact path='/protected' element={<PrivateRoute component={Protected} />} />
          </Routes>
        </Fragment>
      </Router>

    </Provider>
  );
}

export default App;
