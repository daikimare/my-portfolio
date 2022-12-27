import { FC } from 'react'
import { InputType } from './@types'

export const CustomInput: FC<InputType> = ({
  inputType,
  inputValue,
  className,
  label,
  register,
  required,
}) => {
  return (
    <>
      <label>{label}</label>
      <input
        className={className}
        type={inputType}
        value={inputValue}
        {...register(label, { required })}
        required
      />
    </>
  )
}

export const CustomTextField: FC = () => {
  return (
    <>
      <textarea />
    </>
  )
}
