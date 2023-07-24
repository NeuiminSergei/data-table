import style from './mainInput.module.scss'

interface IInputProps {
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const MainInput = ({ placeholder, value, onChange }: IInputProps) => {

  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={style.input}
      type="text" />
  )
}