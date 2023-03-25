import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home/home";
import Footer from "./components/footer/footer";
import Resume from "./components/Templates/resume";
import Details from "./components/Pages/Details/details";
import Cover from "./components/CoverLetter/cover";
import Exp from "./components/Pages/Experience/exp";
import Edu from "./components/Pages/Education/edu";
import Skills from "./components/Pages/Skills/skills";
import { store, persistor } from "./AppStore/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import FinalResume from "./components/Resume/finalResume";
import Project from "./components/Pages/Projects/project";

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" exact element={<Home />}></Route>
              <Route path="/resume" exact element={<Resume />}></Route>
              <Route path="/coverletter" exact element={<Cover />}></Route>
              <Route path="/resume/contact" exact element={<Details />}></Route>
              <Route path="/resume/exp" exact element={<Exp />}></Route>
              <Route path="/resume/edu" exact element={<Edu />}></Route>
              <Route path="/resume/proj" exact element={<Project />}></Route>
              <Route path="/resume/skill" exact element={<Skills />}></Route>
              <Route path="/auth"></Route>
              <Route
                path="/resume/finalresume"
                exact
                element={<FinalResume />}
              ></Route>
            </Routes>
            <Footer />
          </Router>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
