import axios from 'axios';
import './App.css';

function App() {
  const ClickHandler=()=>{
    axios.post("enter url here", {id:"helloWorld"});
  }
  return (
    <div className="App">
      <button onClick={ClickHandler}>
        click me
      </button>

    </div>
  );
}

export default App;
