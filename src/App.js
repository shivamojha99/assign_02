import './App.css';
import Search from './Components/Search/Search';
import {Provider } from 'react-redux'
import store from './Redux/store';
import Results from './Components/Result/Results';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <h1>Search here!
      </h1>
      <Search/>
      <Results/> 
    </div>
    </Provider>
  );
}

export default App;
