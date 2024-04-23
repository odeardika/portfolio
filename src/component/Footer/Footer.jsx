import React from 'react'
import style from './Footer.module.css'

export default function Footer() {
  return (
    <footer>
        <div className={style.copyright}>
            <h2 className={style.thankyou_text}>Thank you for stopping by this website.</h2>
            <hr/>
            <p>&copy; Copyright 2024 by <span>Ode Ardika</span></p>
        </div>
    </footer>
  )
}
