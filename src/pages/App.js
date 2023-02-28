import Login from "@/pages/auth/login";
import Register from "@/pages/auth/register";
import Home from "@/pages/home";
import './App.css';

function App() {
  return (
    <div className="App">      
      <Login/>
      <Register/>
      <Home/>
    </div>
  );
}

export default App;
