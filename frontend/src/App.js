import { BrowserRouter } from "react-router-dom";
import AllPages from "./components/AllPages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AllPages />
      </BrowserRouter>
    </div>
  );
}

export default App;
