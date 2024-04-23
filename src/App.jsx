import React from "react";


export default function App() {
  return (
    <>
      <header>
        <div classNameName="header-content">
          <h1 className="title">
            <u>Ode Ardika</u>
          </h1>
          <nav classNameName="navigation" id="navigation">
            <div className="nav-button">
              <hr className="top" />
              <hr className="mid" />
              <hr className="bottom" />
            </div>
            <ul className="navigation-list" id="navigation-list">
              <li>
                <a href="#profile">Profile</a>
              </li>
              <li>
                <a href="#project">Project</a>
              </li>
              <li>
                <a href="#achievement">Achievement</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <div className="content">
            <div className="profile" id="profile">
                <article className="profile-article">
                    <div className="profile-detail">
                        <h2><span className="name">Ode Ardika</span></h2>
                        <h3><span className="role">Software Developer</span>, <span className="role">Machine Learning Developer</span></h3>
                        <button className="more-detail" id="profile-more">More</button>
                        <p>Saya saat ini masih menjadi mahasiswa dari Universitas Udayana dengan jurusan Informatika. Programing dan menyelesaikan permasalah koding merupakan salah satu hobi saya. Saya memiliki kempuan dan pengalaman dalam pengembangan perangkat lunak berbasis web dan desktop, serta berpenganlam dalam pengembangan model <i>Machine Learning</i></p>
                        <div className="hidden" id="profile-hidden"><u>hidden</u></div>
                    </div>
                    <div className="image-profile">
                        <img src="https://odeardika.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmy_pict.d6f2961d.png&w=640&q=75" alt="Picture of OdeArdika"/>
                    </div>
                </article>
            </div>
            <div className="project" id="project">
                <h2 className="title">Project</h2>
                <article className="cashir-desktop">
                    <div className="img-section">
                        <div className="back">
                            <svg viewBox="-4.5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>arrow_right [#336]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-305.000000, -6679.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M249.365851,6538.70769 L249.365851,6538.70769 C249.770764,6539.09744 250.426289,6539.09744 250.830166,6538.70769 L259.393407,6530.44413 C260.202198,6529.66364 260.202198,6528.39747 259.393407,6527.61699 L250.768031,6519.29246 C250.367261,6518.90671 249.720021,6518.90172 249.314072,6519.28247 L249.314072,6519.28247 C248.899839,6519.67121 248.894661,6520.31179 249.302681,6520.70653 L257.196934,6528.32352 C257.601847,6528.71426 257.601847,6529.34685 257.196934,6529.73759 L249.365851,6537.29462 C248.960938,6537.68437 248.960938,6538.31795 249.365851,6538.70769" id="arrow_right-[#336]"> </path> </g> </g> </g> </g></svg>
                        </div>
                        <img id="cashir-desktop-img" src="assets\img\project\cashir-desktop\3.png" alt=""/>
                        <div className="next">
                            <svg viewBox="-4.5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>arrow_right [#336]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-305.000000, -6679.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M249.365851,6538.70769 L249.365851,6538.70769 C249.770764,6539.09744 250.426289,6539.09744 250.830166,6538.70769 L259.393407,6530.44413 C260.202198,6529.66364 260.202198,6528.39747 259.393407,6527.61699 L250.768031,6519.29246 C250.367261,6518.90671 249.720021,6518.90172 249.314072,6519.28247 L249.314072,6519.28247 C248.899839,6519.67121 248.894661,6520.31179 249.302681,6520.70653 L257.196934,6528.32352 C257.601847,6528.71426 257.601847,6529.34685 257.196934,6529.73759 L249.365851,6537.29462 C248.960938,6537.68437 248.960938,6538.31795 249.365851,6538.70769" id="arrow_right-[#336]"> </path> </g> </g> </g> </g></svg>
                        </div>
                    </div>
                    <div>
                        <h3>Cashir App for Desktop</h3>
                        <p>Aplikasi ini merupakan aplikasi kasir yang berplatform di desktop dengan menggunakan bahasa pemrograman python</p>
                    </div>
                </article>
                <article className="hacker-news">
                    <div className="img-section">
                        <div className="back">
                            <svg viewBox="-4.5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>arrow_right [#336]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-305.000000, -6679.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M249.365851,6538.70769 L249.365851,6538.70769 C249.770764,6539.09744 250.426289,6539.09744 250.830166,6538.70769 L259.393407,6530.44413 C260.202198,6529.66364 260.202198,6528.39747 259.393407,6527.61699 L250.768031,6519.29246 C250.367261,6518.90671 249.720021,6518.90172 249.314072,6519.28247 L249.314072,6519.28247 C248.899839,6519.67121 248.894661,6520.31179 249.302681,6520.70653 L257.196934,6528.32352 C257.601847,6528.71426 257.601847,6529.34685 257.196934,6529.73759 L249.365851,6537.29462 C248.960938,6537.68437 248.960938,6538.31795 249.365851,6538.70769" id="arrow_right-[#336]"> </path> </g> </g> </g> </g></svg>
                        </div>
                        <img src="assets\img\project\hacker-news\1.png" alt=""/>
                        <div className="next">
                            <svg viewBox="-4.5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>arrow_right [#336]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-305.000000, -6679.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M249.365851,6538.70769 L249.365851,6538.70769 C249.770764,6539.09744 250.426289,6539.09744 250.830166,6538.70769 L259.393407,6530.44413 C260.202198,6529.66364 260.202198,6528.39747 259.393407,6527.61699 L250.768031,6519.29246 C250.367261,6518.90671 249.720021,6518.90172 249.314072,6519.28247 L249.314072,6519.28247 C248.899839,6519.67121 248.894661,6520.31179 249.302681,6520.70653 L257.196934,6528.32352 C257.601847,6528.71426 257.601847,6529.34685 257.196934,6529.73759 L249.365851,6537.29462 C248.960938,6537.68437 248.960938,6538.31795 249.365851,6538.70769" id="arrow_right-[#336]"> </path> </g> </g> </g> </g></svg>
                        </div>
                        

                    </div>
                    <div>
                        <h3>Article Preview HN</h3>
                        <p>Aplikasi ini bertujuan memudahkan mencari artikel pada website <a href="">hacker news</a></p>
                    </div>
                </article>
            </div>
            <div className="achievement" id="achievement">
                <h2>Achievement</h2>
                <article>
                    <img src="assets\img\achievement\TensorFlow_Data_and_Deployment.jpg" alt="TensorFlow Data and Deployment"/>
                    <h3>Sertifikat TensorFlow: Data and Deployment</h3>
                </article>
                <article>
                    <img src="assets\img\achievement\bangkit.jpg" alt="Bangkit"/>
                    <h3>Sertifikat Bangkit Specializing in Machine Learning</h3>
                </article>
            </div>
        </div>
        <aside>
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
        </aside>
    </main>
    <footer>
        <div className="copyright">
            <h2>Terimakasih sudah mampir ke website ini</h2>
            <hr/>
            <p>&copy; Copyright 2024 by <span>Ode Ardika</span></p>
        </div>
    </footer>
    </>
  );
}
