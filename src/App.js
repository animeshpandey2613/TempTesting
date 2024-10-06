import axios from 'axios';
import './App.css';

function App() {
  const ClickHandler=()=>{
    axios.post("http://localhost:2020/retailrevolve/LoginControllerServlet", {id:"helloWorld"});
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
