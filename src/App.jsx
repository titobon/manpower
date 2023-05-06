import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Paginas from "./Paginas/Paginas";
import ErrorBoundary from "./Errores/ErrorBoudary";
import { selectToken } from "/src/features/TokenSlice";
import Login from "./components/Login/Login";
import { useSelector } from "react-redux";

function App() {
  const tokenredux = useSelector(selectToken);

  return (
    <>
      <ErrorBoundary>
        {tokenredux ? (
          <Router>
            <Paginas />
          </Router>
        ) : (
          <Login />
        )}
      </ErrorBoundary>
    </>
  );
}

export default App;
