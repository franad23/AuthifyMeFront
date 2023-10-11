import './inputshared.css'

interface InputSharedProps {
  title: string;
  placeholder: string;
  type: string;
  name: string;
  value?: string;
  onChange: (name: string, value: string) => void;
}

function InputShared({ name, onChange, placeholder, title, type }: InputSharedProps) {
  return (
    <div className='inputSharedMainContainer'>
      <h3 className='titleInputShared'>{title}:</h3>
      <input type={type} name={name} placeholder={placeholder} onChange={(e) => onChange(name, e.target.value)} className='inputShared'/>
    </div>
  )
}

export default InputShared