import './navbar.css'
import logo from "../../assets/logo.png"
import logout from "../../assets/cerrar-sesion (2).png"
import add from "../../assets/agregar.png"

function Navbar() {
  return (
    <div className='navbarMainContainer'>
      <div className='logoContainerNavbar'>
        <img src={logo} alt="logo" className='logoNavbar'/>
        <h2>AuthifyMe</h2>
      </div>
      <div className='rightContainerNavbar'>
        <img src={add} alt="addIcon" className='logoutIcon'/>
        <img src={logout} alt="logoutIcon" className='logoutIcon'/>
      </div>
    </div>
  )
}

export default Navbar