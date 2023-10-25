import './buttons.css'

interface ButtonFormProps {
  buttonName: string;
  onClick?: () => void;
}

export function ButtonForm({buttonName, onClick}: ButtonFormProps) {
  return (
    <button className='buttonForm'>{buttonName}</button>
  )
}