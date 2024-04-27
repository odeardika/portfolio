import React from 'react';
import style from './Certificate.module.css';



export default function CertificateCard({props}) {
  return (
    <>
        <article className={style.card}>
            <img src={props.img} className={style.img} alt="" />
            <h3>{props.title}</h3>
        </article>
    </>
  )
}
