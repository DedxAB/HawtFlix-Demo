import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { Home } from "./Pages/Home";
import Login from './Pages/Login'
import SignUp from './Pages/Signup' 
import Account from './Pages/Accout' 
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <Navbar title='HawtFlix'/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path = '/accout' element={<Account />} />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
