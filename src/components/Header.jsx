import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <header>
        <h1>İş Takip</h1>
        <div>
        <NavLink to={'/'}>İş Listesi</NavLink>
        <NavLink to={'/add-job'}>İş Ekle</NavLink>
        </div>
    </header>
  )
}

export default Header