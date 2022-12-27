import { UseFormRegister, FieldValues } from 'react-hook-form'

export type InputType = {
  className: string
  inputType: string
  inputValue: string
  label?: string
  register?: UseFormRegister<FieldValues>
  required?: boolean
}
