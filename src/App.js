import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
// import Footer from "./components/Footer/Footer";
// import Widgets from "./components/Widgets/Widgets";
// import Feed from "./components/Feed/Feed";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
      </div>
      {/* <Sidebar />
      <Feed />
      <Widgets />
      <Footer /> */}
      {/* Header */}
      {/* App body */}
      {/* sidebar */}
      {/* feed */}
      {/* widgets */}
    </div>
  );
}

export default App;
