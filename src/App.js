import "./App.css";
import FormContact from "./FormContact";
import HomePage from "./HomePage";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
       <div className="container max-w-3xl w-full mx-auto">
       <HomePage/>
       </div>
      {/*<div className="flex items-center justify-around">
        <FormContact />
      </div>*/}
    </div>
  );
}

export default App;
