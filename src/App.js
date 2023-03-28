import './App.css';
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Landing />
      </div>
    </Provider>
  );
}

export default App;
