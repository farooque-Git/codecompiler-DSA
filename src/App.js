import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/pages/login/Login";
import Home from "./components/home/Home";
import Register from "./components/pages/register/Register";
import ProtectedRoute from "./ProtectedRoute";
import HomeScreen from "./components/screen/homeScreen/HomeScreen";
import CodeEditor from "./components/codeEditor/CodeEditor";
import Error from "./Error";

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        {/* <Sidebar /> */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/codeeditor" element={<CodeEditor />} />

            <Route path="/register" element={<Register />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <HomeScreen />
                </ProtectedRoute>
              }
            />
            <Route path="/*" element={<Error />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
