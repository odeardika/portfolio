import React from 'react'
import style from './Header.module.css'

export default function Header() {
    const navigation = [{id : 1, placeholder : "Profile", href : "#profile",},
                        {id : 2, placeholder : "Project", href : "#project"},
                        {id : 3, placeholder : "Achievement", href : "#achievement"}];
                        
  return (
    <header className={style.header}>
        <div className={style.header_content}>
          <h1 className={style.title}>
            <u>Ode Ardika</u>
          </h1>
          <nav classNameName="navigation" id="navigation">
            <div className={style.nav_button}>
              <hr className="top" />
              <hr className="mid" />
              <hr className="bottom" />
            </div>
            <ul className={style.navigation_list} id="navigation-list">
                {navigation.map(li => <li key={li.id}><a href={li.href}>{li.placeholder}</a></li>)}
            </ul>
          </nav>
        </div>
      </header>
  )
}
