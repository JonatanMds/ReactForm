import { InputHTMLAttributes, forwardRef } from "react"

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  helperText?: string
} 

// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({type='text',name='', helperText='', ...props}, ref)=>{
    return(
      <div>
       <input 
              className="rounded p-2 bg-[#ECECEC]"
              type={type}
              {...props}
              name={name}
              ref={ref}
        />
        {helperText.length > 0 && <p className='text-[#ba184f] text-xs mt-1'>{helperText}</p>}
        </div>
      )
  }
)