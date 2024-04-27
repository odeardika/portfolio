import React from "react";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Profile from "./component/Profile/Profile";
import Project from "./component/Project/Project";
import Certificate from "./component/Certificate/Certificate";


export default function App() {
  return (
    <>
      <Header/>
      <main>
        <div className="content">
            <Profile />
            <Project/>
            <Certificate />
        </div>
        {/* <aside>
            <div className="social-media-icon">
                <ul>
                    <li className="github-icon">
                        <a href="https://github.com/odeardika">
                        <img src="assets/img/icon/github.svg" alt="github icon" srcset=""/>
                        </a>
                    </li>
                    <li className="linkedin-icon">
                        <a href="https://www.linkedin.com/in/putu-ode-irfan-ardika-178373275/">
                        <img src="assets/img/icon/linkedin.svg" alt="linkedin"/>
                        </a>
                    </li>
                    <li className="instagram-icon">
                        <a href="https://www.instagram.com/odeardika/">
                        <img src="assets/img/icon/instagram.svg" alt="instagram"/>
                        </a>
                    </li>
                </ul>   
            </div>
        </aside> */}
    </main>
    
    <Footer/>
    </>
  );
}
