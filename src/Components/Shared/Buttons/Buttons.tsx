import './buttons.css'

interface ButtonFormProps {
  buttonName: string;
  onClick?: () => void;
}

export function ButtonForm({buttonName}: ButtonFormProps) {
  return (
    <button className='buttonForm' >{buttonName}</button>
  )
}

export const ButtonConfirm = ({buttonName, onClick}:ButtonFormProps) => {
  return (
    <button className='buttonConfirm' onClick={onClick}>{buttonName}</button>
  )
}

export const ButtonCancel = ({buttonName, onClick}:ButtonFormProps) => {
  return (
    <button className='buttonCancel' onClick={onClick}>{buttonName}</button>
  )
}