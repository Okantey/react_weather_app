import './App.css';
import Content from './Content';
import Navigation from './Navigation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <Content />
      </header>
    </div>
  );
}

export default App;
