"use client"
import clsx from "clsx"
import React from "react"

interface props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode
}

export const Button = ({ ...props }: props) => {
  return (
    <button
      {...props}
      className={clsx(
        "bg-primary h-[42px] flex items-center justify-center px-5 rounded-lg text-white text-sm font-medium gap-3",
        props.className
      )}
    >
      {props?.icon && <span>{props?.icon}</span>}
      <span>{props.children}</span>
    </button>
  )
}
