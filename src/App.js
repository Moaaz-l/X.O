import { click } from "@testing-library/user-event/dist/click";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="X-O"> ❌⭕ GAME
</h1>
      <div>
<button id="c1" onclick="insert(this.id)"></button>
<button id="c2" onclick="insert(this.id)"></button>
<button id="c3" onclick="insert(this.id)"></button>
  </div>
  <div>
<button id="c4" onclick="insert(this.id)"></button>
<button id="c5" onclick="insert(this.id)"></button>
<button id="c6" onclick="insert(this.id)"></button>
</div>
<div>
<button id="c7" onclick="insert(this.id)"></button>
<button id="c8" onclick="insert(this.id)"></button>
<button id="c9" onclick="insert(this.id)"></button>
</div>
    </div>
  );
}

export default App;
