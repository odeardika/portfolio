import React from 'react';
import style from './SosMed.module.css'
import githubImg from '../../assets/icon/github.svg';
import instagramImg from '../../assets/icon/instagram.svg';
import lingkedinImg from '../../assets/icon/linkedin.svg';


export default function SosMed() {
    const listIcon = [{id : 1,img : githubImg, alt : "github", href : "https://github.com/odeardika"},
                      {id : 2,img : lingkedinImg, alt : "linkedin", href : "https://www.linkedin.com/in/putu-ode-irfan-ardika-178373275/"},
                      {id : 3,img : instagramImg, alt : "instagram", href : "https://www.instagram.com/odeardika.dev/"}]
  
    return (
    <>
    <aside className={style.sosial_media}>
        <div className={style.icon}>
            <ul>
                {listIcon.map(icon => <li key={icon.id}>
                    <a href={icon.href} target="_blank">
                        <img src={icon.img} alt={icon.alt} />
                    </a>
                </li>)}
            </ul>   
        </div>
    </aside>
    </>
  )
}
