import logo from './logo.svg';
import './App.css';
import NewsList from "./components/NewsList";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Details from "./components/Details";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Link to='/'></Link>
          <Routes>
            <Route path='/' element={<NewsList/>}/>
            <Route path='/details/:id' element={<Details/>}/>
          </Routes>

        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
