'use client'
import { FC, useCallback } from 'react'
import { useForm } from 'react-hook-form'

const ContactRoot: FC = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = useCallback((data) => {
    alert(JSON.stringify(data))
  }, [])
  return (
    <>
      <div>
        <h1>ContactPageRoot</h1>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                type={'text'}
                {...register('firstName', { required: true })}
              />
              <input
                type={'text'}
                {...register('lastName', { required: true })}
              />
              <input type={'submit'} value={'Submit'} />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
export default ContactRoot
