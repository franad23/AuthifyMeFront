import logo from '../../assets/logo.png'
import { Link } from "react-router-dom";
import './registerpage.css'

//Components 
import InputShared from '../../Components/Shared/InputShared/InputShared';
import { ButtonForm } from '../../Components/Shared/Buttons/Buttons';

function RegisterPage() {
  return (
    <div className='registerPageMainContainer'>

      <div className='registerContainer'>
        <div className='logoContainer'>
          <img src={logo} alt="logo" className='logo'/>
          <h1>AuthifyMe</h1>
        </div>
        <form className='formRegister'>
          <InputShared
            name='email'
            placeholder='Ingrese su Email'
            title='Email'
            type='email'
          />
          <InputShared
            name='password'
            placeholder='***********'
            title='Contraseña'
            type='password'
          />
          <InputShared
            name='passwordRepeat'
            placeholder='***********'
            title='Repetir contraseña'
            type='password'
          />
          <ButtonForm
            buttonName='Registrarse'
          />
        </form>
        <div className='registerFooter'>
          <Link to="/login" className='toLoginLink'>¿Ya estas registrado?</Link>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage