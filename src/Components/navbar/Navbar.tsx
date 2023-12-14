import './navbar.css'
import logo from "../../assets/logo.png"
import logout from "../../assets/cerrar-sesion (2).png"

//Components
import ModalAddNewProject from '../modalAddNewProject/ModalAddNewProject'


function Navbar() {
  return (
    <div className='navbarMainContainer'>
      <div className='logoContainerNavbar'>
        <img src={logo} alt="logo" className='logoNavbar'/>
        <h2>AuthifyMe</h2>
      </div>
      <div className='rightContainerNavbar'>
        <ModalAddNewProject/>
        <img src={logout} alt="logoutIcon" className='logoutIcon'/>
      </div>
    </div>
  )
}

export default Navbar
