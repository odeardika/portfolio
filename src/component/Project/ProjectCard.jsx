import React from 'react';
import style from './Project.module.css';

export default function ProjectCard({props}) {
  return (
    <article className={style.card}>
        <img src={props.img} alt={props.alt} className={style.img}/>
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
    </article>
  )
}
