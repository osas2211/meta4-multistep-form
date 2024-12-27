"use client"
import React, { useState } from "react"
import { PersonalInfo } from "./PersonalInfo"
import { BadgeCheckIcon } from "./icons/BadgeCheckIcon"
import { AccountDetails } from "./AccountDetails"
import { AnimatePresence } from "motion/react"

export const MultiStepForm = () => {
  const [current, setCurrent] = useState(0)
  const formSteps = [
    <PersonalInfo key={0} setCurrent={setCurrent} />,
    <AccountDetails key={1} setCurrent={setCurrent} />,
  ]
  const formHeadings = [
    "Personal Information",
    "Account Info",
    "File Upload",
    "Confirmation",
  ]
  return (
    <div className="max-w-[672px] mx-auto px-4">
      <div className="flex items-center justify-between md:gap-3 md:text-sm text-[11px] text-[#6B7280] font-medium md:mb-12 mb-7">
        {formHeadings?.map((content, index) => {
          const isActive = index <= current
          const isPrev = index < current
          return (
            <React.Fragment key={index}>
              <div
                className={`flex items-center flex-col gap-[6px] cursor-pointer ${
                  isActive ? "text-primary" : ""
                }`}
                // key={index}
                onClick={() => setCurrent(index)}
              >
                <p>{isPrev ? <BadgeCheckIcon /> : <span>{index + 1}</span>}</p>
                <p>{content}</p>
              </div>
              {index < formHeadings.length - 1 && (
                <div
                  className={`md:w-16 w-[6px] h-[1px] ${
                    isPrev ? "bg-primary" : "bg-[#E5E7EB]"
                  }`}
                  // key={`${index}-line`}
                />
              )}
            </React.Fragment>
          )
        })}
      </div>

      <div className="overflow-x-hidden">
        <AnimatePresence initial={false}>
          <div>{formSteps[current]}</div>
        </AnimatePresence>
      </div>
    </div>
  )
}
