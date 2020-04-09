import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.js";
import Footer from "./components/Footer/Footer.js";
import PhotoGrid from "./components/PhotoGrid/PhotoGrid";
import Upload from "./components/Upload/Upload";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        {/* <Route exact path="/login" component={Login} /> */}
        {/* <Route exact path="register" component={Register} /> */}
        <Route exact path="/photo-grid" component={PhotoGrid} />
        {/* <Route exact path="/photo/:id" component={Photo} /> */}
        <Route exact path="/upload" component={Upload} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
