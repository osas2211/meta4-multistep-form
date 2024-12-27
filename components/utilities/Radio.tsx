"use client"
import clsx from "clsx"
import React from "react"

interface props
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string
  name?: string
}

export const Radio = ({ ...props }: props) => {
  return (
    <div className="inline-flex gap-3 items-center">
      <input
        {...props}
        type="radio"
        className={clsx(
          "transition-all border-[1px] border-[#D1D5DB] appearance-none rounded-full h-4 w-4 relative checked:border-primary checked:before:bg-primary before:absolute before:top-[50%] before:left-[50%] before:w-[10px] before:h-[10px] before:bg-transparent before:rounded-full before:translate-x-[-50%] before:translate-y-[-50%]",
          props.className
        )}
        name={props?.name}
      />
      <label className="text-sm font-medium cursor-pointer" htmlFor={props?.id}>
        {props?.label}
      </label>
    </div>
  )
}

export const RadioGroup = ({ children }: { children: React.ReactNode }) => {
  return (
    <form>
      <fieldset className="flex items-center gap-2 justify-between flex-wrap">
        {children}
      </fieldset>
    </form>
  )
}
