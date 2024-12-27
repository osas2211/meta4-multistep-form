"use client"
import clsx from "clsx"
import React from "react"

interface props extends React.InputHTMLAttributes<HTMLInputElement> {}
interface labelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  name?: string
  label?: React.ReactNode
  icon?: React.ReactNode
}

export const Input = ({ ...props }: props) => {
  return (
    <input
      {...props}
      className={clsx(
        "bg-[#F9FAFB] border-[1px] border-[#D1D5DB] px-4 py-3 rounded-lg text-sm font-medium placeholder:text-[#6B7280] outline-none inline-block w-full focus:border-primary transition-all",
        props.className
      )}
    />
  )
}

export const FormLabel = ({ ...props }: labelProps) => {
  return (
    <div>
      <label
        {...props}
        htmlFor={props?.name || ""}
        className={clsx(
          "text-sm font-medium inline-block mb-2",
          props.className
        )}
      >
        <div className="inline-flex items-center justify-between gap-2">
          <span>{props?.label}</span>
          <span>{props?.icon}</span>
        </div>
      </label>
      <div id={props?.name}>{props.children}</div>
    </div>
  )
}
