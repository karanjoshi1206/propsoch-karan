import "./App.css";
import BottomTab from "./components/bottomTab/bottomTab";
import AppRouter from "./router";

function App() {
  return (
    <div>
      <AppRouter />
      <BottomTab />
    </div>
  );
}

export default App;
