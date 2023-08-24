import { Draw } from "./Draw";
import { Keyboard } from "./Keyboard";

function App() {
  return (
    <div className="flex justify-around">
      <Keyboard />
      <Draw />
    </div>
  );
}

export default App;
