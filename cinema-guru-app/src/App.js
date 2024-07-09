import './App.css';
import Input from './components/general/Input.js';

function App() {
  return (
    <div className="App">
      <Input label="label" type="text" className="class" value="value" setValue={() => { return "poopy"; }}></Input>
    </div>
  );
}

export default App;
