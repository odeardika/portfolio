import React, {useState} from 'react';
import style from './Project.module.css';
import ProjectCard from './ProjectCard';
import arrow from '../../assets/arrow.svg';
import cashirImg from './../../../public/img/project/cashir-desktop.png';
import hackerNewsImg from './../../../public/img/project/hacker-news.png';

const projectList = [{title : "Cashir Desktop Application", img : cashirImg, alt: "Cashir App", desc : "A Simple Cashir app for grocery store. This application is create using python and tkinter library. The purpose of this application is to help transaction at my store and store transaction data to be anylize for making better decision."},
                     {title : "Hacker News Preview", img : hackerNewsImg, alt: "Hacker News Preview", desc : "Website to help preview story from HackerNews Website. This website is create using NextJS and Tailwind Framework. The purpose of this website to help find an article or story from Hacker News Website which is a text only website."},
                     {title : "Wisata Finder", img : "https://raw.githubusercontent.com/odeardika/odeardika-page/main/public/assets/portfolio/wisata_finder.png", alt: "Wisata Finder", desc : "Website to help find tourist attractions. We created this application to help spread tourist attractions in Bali. I act as a backend in making this application using PHP programming language and MYSQL database"},
                     {title : "Wisata Finder", img : "https://raw.githubusercontent.com/odeardika/odeardika-page/main/public/assets/portfolio/wisata_finder.png", alt: "Wisata Finder", desc : "Website to help find tourist attractions. We created this application to help spread tourist attractions in Bali. I act as a backend in making this application using PHP programming language and MYSQL database"}]

export default function Project() {
  const [selectedProject, setSelectedProject] = useState(0)

  function handleNextProject(event){
    setSelectedProject(prevSelectedProject => {
      return (prevSelectedProject === projectList.length-1)? 0 : prevSelectedProject+1
    })
  }
  function handlePrevProject(event){
    setSelectedProject(prevSelectedProject => {
      return (prevSelectedProject === 0)? projectList.length-1 : prevSelectedProject-1
    })
  }


  

  return (
    <>
    <div className={style.project_section} id="project">
        <h2 className={style.title}>Project</h2>
        <div className={style.project}>
            <div className={style.prev} onClick={handlePrevProject}>
                <img src={arrow} alt="arrow_img" />
            </div>
            <ProjectCard props={projectList[selectedProject]}/>
            <div className={style.next} onClick={handleNextProject}>
                <img src={arrow} alt="arrow_img" />
            </div>
        </div>
    </div>
    </>
  )
}
