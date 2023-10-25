import logo from '../../assets/logo.png'
import { Link } from "react-router-dom";
import { FormEvent } from 'react';
import { Toaster, toast } from 'sonner'
import './registerpage.css'

//Components 
import InputShared from '../../Components/Shared/InputShared/InputShared';
import { ButtonForm } from '../../Components/Shared/Buttons/Buttons';

//API
import { registerMainUser } from '../../api/auth.api';

function RegisterPage() {

  const handleRegisterForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const email = (e.currentTarget.elements[1] as HTMLInputElement).value;
    const password = (e.currentTarget.elements[2] as HTMLInputElement).value;
    const passwordRepeated = (e.currentTarget.elements[3] as HTMLInputElement).value;
    if (password !== passwordRepeated) {
      toast.error('Contraseñas no coinciden')
      return
    }
    try {
      const registerApiResponse = await registerMainUser(username, email, password);
      console.log(registerApiResponse);
      toast.success('Usuario registrado correctamente, revisa tu Email')
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message)
    }
  }

  return (
    <div className='registerPageMainContainer'>
      <Toaster position="top-right" />
      <div className='registerContainer'>
        <div className='logoContainer'>
          <img src={logo} alt="logo" className='logo'/>
          <h1>AuthifyMe</h1>
        </div>
        <form className='formRegister' onSubmit={handleRegisterForm}>
          <InputShared
            name='username'
            placeholder='Ingrese su nombre de usuario'
            title='Nombre de usuario'
            type='text'
          />
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