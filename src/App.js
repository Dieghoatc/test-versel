import logo from './logo.svg';
import './App.css';
import sbjs from 'sourcebuster';


function App() {

  const params = new URLSearchParams(window.location.search)

  console.log(params)

  const gaMarketingVars = {
    utmSource: params.get('utm_source')
  }
  console.log(gaMarketingVars)

  sbjs.init();
  console.log(sbjs.get)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
