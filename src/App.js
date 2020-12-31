import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
// import Footer from "./components/Footer/Footer";
// import Widgets from "./components/Widgets/Widgets";
import Feed from "./components/Feed/Feed";
import { selectUser } from "./features/userSlice";
import Login from "./components/Login/Login";

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
        </div>
      )}
    </div>
  );
}

export default App;
