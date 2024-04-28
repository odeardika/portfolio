import React from "react";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Profile from "./component/Profile/Profile";
import Project from "./component/Project/Project";
import Certificate from "./component/Certificate/Certificate";
import SosMed from "./component/SosMed/SosMed";
import Technology from "./component/Technology/Technology";


export default function App() {
  return (
    <>
      <Header/>
      <main>
        <div className="content">
            <Profile />
            <Technology />
            <Project/>
            <Certificate />
        </div>
        <SosMed/>
    </main>
    
    <Footer/>
    </>
  );
}
