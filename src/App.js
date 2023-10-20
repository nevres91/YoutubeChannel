import './App.css';
import Dashboard from './components/layout/Dashboard';
import Navbar from './components/layout/Navbar';
import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Landing from './components/main-page/Landing';
import { Fragment } from 'react';
import { store } from './store'
import PrivateRoute from './routing/PrivateRoute';
import Protected from './Protected';
import Bikes from './components/Bikes';
import About from './components/About';
import Order from './components/Order';
import CommonFixes from './components/CommonFixes';

function App() {

  return (
    <Provider store={store}>
      <Fragment>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Dashboard />} />
          <Route exact path='/landing' element={<Landing />} />
          <Route exact path='/bikes' element={<Bikes />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/order' element={<Order />} />
          <Route exact path='/fixes' element={<CommonFixes />} />
          <Route exact path='/protected' element={<PrivateRoute component={Protected} />} />
        </Routes>
      </Fragment>
    </Provider>
  );
}

export default App;
