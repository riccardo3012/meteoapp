import "./App.css";
import MyFooter from "./components/MyFooter";
import MyNavbar from "./components/MyNavbar";
import MySearch from "./components/MySearch";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <MySearch />
      <MyFooter />
    </div>
  );
}

export default App;
