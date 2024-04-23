import React, {useState} from 'react'
import style from './Profile.module.css'

export default function Profile() {
    const [showDetail, setShowDetail] = useState(false);
    
    function handleShowDetail(){
        setShowDetail(preShowDetail => !preShowDetail)
    }

  return (
    <>
        <div className={style.profile} id="profile">
            <article className={style.profile_article}>
                <div className={style.profile_detail}>
                    <h2><span className={style.name}>Ode Ardika</span></h2>
                    <h3><span className={style.role}>Software Developer</span>, <span className={style.role}>Machine Learning Developer</span></h3>
                    <button className={showDetail? style.more_button_hidden : style.more_button } id="profile-more" onClick={handleShowDetail}>More</button>
                    <p className={showDetail? style.extra_info : style.extra_info_hidden}>I am currently a student at Udayana University, majoring in Informatics. I am proficient in programming and currently pursuing independent studies in Website Development at Infinite Learning. I have skills and experience in developing web and desktop-based software, as well as expertise in Machine Learning model development. </p>
                    <button className={showDetail? style.show_hidden : style.hidden} id="profile-hidden" onClick={handleShowDetail}>hidden</button>
                </div>
                <div className={style.image_profile}>
                    <img src="https://odeardika.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmy_pict.d6f2961d.png&w=640&q=75" alt="Picture of OdeArdika"/>
                </div>
            </article>
        </div>
    </>
  )
}
