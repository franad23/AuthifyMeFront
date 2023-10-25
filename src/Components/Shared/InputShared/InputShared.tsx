import { FormEvent, useState } from 'react';
import './inputshared.css'

interface InputSharedProps {
  title: string;
  placeholder: string;
  type: string;
  name: string;
  value?: string;
  onChange: (name: string, value: string) => void;
}

//Valitadors
import validator from '../../../helpers/inputValidators';

function InputShared({ name, onChange, placeholder, title, type }: InputSharedProps) {
  const [inputError, setInputError] = useState<{ isValidated: boolean, message: string } | null>(null);

  const handleOnChangeInput = (e: FormEvent<HTMLInputElement>) => {
    const isValidatedValue = validator(type, e.currentTarget.value);
  
    if (typeof isValidatedValue === "boolean" && isValidatedValue === true) {
      setInputError(null);
      console.log(name, e.currentTarget.value);
    } else if (
      typeof isValidatedValue === "object" &&
      isValidatedValue.isValidated === false
    ) {
      setInputError(isValidatedValue);
    }
  }
  return (
    <div className='inputSharedMainContainer'>
      <h4 className='titleInputShared'>{title}:</h4>
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