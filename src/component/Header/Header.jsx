import React, {useState} from 'react'
import style from './Header.module.css'

export default function Header() {
    const navigation = [{id : 1, placeholder : "Home", href : "#home",},
                        {id : 2, placeholder : "Technology", href: "#tech"},
                        {id : 2, placeholder : "Project", href : "#project"},
                        {id : 3, placeholder : "Certificate", href : "#certificate"}];
    const [isNavOpen, setIsNavOpen] = useState(false)
    
    function handleIsNavOpen(event){
      setIsNavOpen(prevIsNavOpen => !prevIsNavOpen )
    }
    
  return (
    <header className={style.header}>
        <div className={style.header_content}>
          <h1 className={style.title}>
            <u>Ode Ardika</u>
          </h1>
          <nav className={isNavOpen? style.navigation_open : style.navigation} id="navigation">
            <div className={style.nav_button} onClick={handleIsNavOpen}>
              <hr className={style.top} />
              <hr className={style.mid} />
              <hr className={style.bottom} />
            </div>
            <ul className={isNavOpen? style.navigation_list_open : style.navigation_list} id="navigation-list">
                {navigation.map(li => <li key={li.id}><a href={li.href}>{li.placeholder}</a></li>)}
            </ul>
          </nav>
        </div>
      </header>
  )
}
