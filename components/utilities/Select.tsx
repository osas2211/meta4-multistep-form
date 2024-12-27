"use client"
import clsx from "clsx"
import React from "react"

interface props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options?: { value: string; label: string }[]
}

export const Select = ({ ...props }: props) => {
  return (
    <div className="custom-select relative w-full">
      <select
        {...props}
        className={clsx(
          `bg-[#F9FAFB] border-[1px] border-[#D1D5DB] !px-4 py-3 rounded-lg 
        text-sm font-medium placeholder:text-[#6B7280] outline-none 
        inline-block w-full focus:border-primary transition-all 
        appearance-none cursor-pointer`,
          props.className
        )}
      >
        {props?.options?.map((_option, index) => {
          return (
            <option key={index} value={_option?.value}>
              {_option?.label}
            </option>
          )
        })}
      </select>
    </div>
  )
}
