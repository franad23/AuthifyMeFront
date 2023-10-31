import logo from '../../assets/logo.png'
import { Link, useNavigate } from "react-router-dom";
import { FormEvent } from 'react';
import { Toaster, toast } from 'sonner'
import { useAuthStore } from '../../store/auth.store';
import './loginpage.css'

//Components 
import InputShared from '../../Components/Shared/InputShared/InputShared';
import { ButtonForm } from '../../Components/Shared/Buttons/Buttons';

//API
import { loginMainUser } from '../../api/auth.api';

function LoginPage() {
  const setToken = useAuthStore(state => state.setToken);
  const setProfile = useAuthStore(state => state.setProfile);
  const navigate = useNavigate();

  const handleLoginMainUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value;
    if (!email || !password) {
      toast.error("Tienes campos sin rellenar")
    }
    try {
      const registerApiResponse = await loginMainUser(email, password);
      setToken(registerApiResponse.data.token);
      setProfile(registerApiResponse.data.profile);
      navigate("/dasboard")
    } catch (error:any) {
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
        <form className='formRegister' onSubmit={handleLoginMainUser}>
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
          <ButtonForm
            buttonName='Entrar'
          />
        </form>
        <div className='registerFooter'>
          <Link to="/login" className='toLoginLink'>¿Aun no estas registrado?</Link>
        </div>
      </div>
    </div>
  )
}

export default LoginPage