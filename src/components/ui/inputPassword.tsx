import * as React from 'react'
import { useState } from 'react'
import { Button } from './button'
import IconUI from './IconUi'
import { Input } from './input'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputPwd = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  const [showPwd, setShowPwd] = useState(false)

  const handleShowPwd = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    setShowPwd(!showPwd)
  }

  return (
    <div className='flex items-center gap-2 border bg-white rounded-md w-full'>
      <Input
        type={showPwd ? 'text' : 'password'}
        className={`border-transparent bg-transparent w-full ${className}`}
        ref={ref}
        {...props}
      />
      <Button variant='outline' className='border-transparent hover:bg-transparent' onClick={handleShowPwd}>
        <IconUI icon='eye' className='w-[18px] h-[18px]' />
      </Button>
    </div>
  )
})

InputPwd.displayName = 'InputPwd'

export default InputPwd
