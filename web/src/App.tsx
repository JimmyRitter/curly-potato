import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes";
import AuthProvider from "./contexts/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes />
      </Router>
    </AuthProvider>
  );
}

export default App;
