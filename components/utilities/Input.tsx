"use client"
import clsx from "clsx"
import React, { ReactNode } from "react"
import { UploadIcon } from "../icons/UploadIcon"

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

export const FileInput = ({ ...props }: Omit<props, "type">) => {
  return (
    <div>
      <label
        htmlFor={props?.id}
        className="h-[150px] md:h-[200px] border-[2px] border-[#E5E7EB] rounded-lg bg-[#F9FAFB] border-dashed cursor-pointer flex items-center justify-center flex-col text-center"
      >
        <UploadIcon />
        <p className="text-sm text-[#6B7280] mt-2">Drag files here to upload</p>
        <p className="text-xs text-primary underline">or browse for files</p>
        <input
          {...props}
          type="file"
          className={clsx(
            "bg-[#F9FAFB] border-[1px] border-[#D1D5DB] px-4 py-3 rounded-lg text-sm font-medium placeholder:text-[#6B7280] outline-none inline-block w-full focus:border-primary transition-all",
            props.className
          )}
          style={{ display: "none" }}
          id={props?.id}
          name={props?.id}
        />
      </label>
    </div>
  )
}
