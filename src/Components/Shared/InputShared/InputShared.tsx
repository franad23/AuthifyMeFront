import { FormEvent, useState } from 'react';
import { Tooltip } from 'antd';
import infoLogo from '../../../assets/informacion.png'
import './inputshared.css'

interface InputSharedProps {
  title: string;
  placeholder: string;
  type: string;
  name: string;
  value?: string;
  onChangeInput?: (name: string, value: string) => void;
}

//Valitadors
import validator from '../../../helpers/inputValidators';

function InputShared({ name, onChangeInput, placeholder, title, type }: InputSharedProps) {
  const [inputError, setInputError] = useState<{ isValidated: boolean, message: string } | null>(null);
  const textTooltip = "La contraseña debe tener al menos 8 caracteres, al menos una letra mayuscula y un numero"
  const handleOnChangeInput = (e: FormEvent<HTMLInputElement>) => {
    const isValidatedValue = validator(type, e.currentTarget.value);
  
    if (typeof isValidatedValue === "boolean" && isValidatedValue === true) {
      setInputError(null);
      if (onChangeInput) {
        onChangeInput(name, e.currentTarget.value);
      }
    } else if (
      typeof isValidatedValue === "object" &&
      isValidatedValue.isValidated === false
    ) {
      setInputError(isValidatedValue);
    }
  }
  return (
    <div className='inputSharedMainContainer'>
      <div className='titleInputContainer'>
        <h4 className='titleInputShared'>{title}:</h4>
        {
          type === "password" ? 
          <Tooltip title={textTooltip}>
          <img src={infoLogo} alt="informacionLogo" className='infoLogo'/>
        </Tooltip> 
        : 
        <span> </span>
        }
        
      </div>
      <input 
        type={type} 
        name={name} 
        placeholder={placeholder} 
        onChange={handleOnChangeInput}  
        className={inputError?.isValidated === false ? 'inputShared borderError' : 'inputShared'}
      />
      <div className='errorContainer'>
        {/* <span className='errorInput'>Hola</span> */}
        {
          !inputError?.isValidated ? 
          <span className='errorInput'>{inputError?.message}</span> 
          :
          <span> </span>
        }
      </div>  
    </div>
  )
}

export default InputShared