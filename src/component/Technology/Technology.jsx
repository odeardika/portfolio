import React from 'react';
import style from './Technology.module.css';
import nextJS from '../../assets/tech_icon/nextjs.svg';
import expressJS from '../../assets/tech_icon/express.svg';
import reactJs from '../../assets/tech_icon/react.svg';
import tailwind from '../../assets/tech_icon/tailwindcss.svg';
import flask from '../../assets/tech_icon/flask.svg';
import tensorflow from '../../assets/tech_icon/tensorflow.svg';

const listTechnology = [{id : 1, icon : nextJS, name : "Next JS", desc : "Next.js is a React framework that enables server-side rendering, static site generation, and client-side rendering, all in one package."},
                        {id : 2, icon : expressJS, name : "Express JS", desc : "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications."},
                        {id : 3, icon : reactJs, name : "React", desc : "React is a JavaScript library for building user interfaces and allows developers to create reusable UI components that efficiently update when data changes."},
                        {id : 4, icon : tailwind, name : "Tailwind CSS", desc : "Tailwind CSS is a utility-first CSS framework that provides a set of pre-designed utility classes to quickly build custom user interfaces."},
                        {id : 5, icon : flask, name : "Flask", desc : "Flask is a lightweight and flexible Python web framework that provides tools, libraries, and patterns to build web applications quickly and efficiently."},
                        {id : 6, icon : tensorflow, name : "TensorFlow", desc : "TensorFlow is an open-source machine learning framework developed by Google for building and training deep learning models."}]

function Card({props}){
  return (
    <div className={style.card}>
      <img className={style.icon} src={props.icon} alt="" />
      <h3 className={style.tech_name}>{props.name}</h3>
      <p className={style.tech_desc}>{props.desc}</p>
    </div>
  )
}

export default function Technology() {
  return (
    <section className={style.technology} id='tech'>
      <h2 className={style.title}>Technology</h2>
      <p className={style.title_desc}>This is some technology I use for my project</p>
      <div className={style.tech_list}>
        {listTechnology.map(tech => <Card key={tech.id} props={tech}/>)}
      </div>

    </section>
  )
}
