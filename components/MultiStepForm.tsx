"use client"
import React, { useState } from "react"
import { PersonalInfo } from "./PersonalInfo"
import { BadgeCheckIcon } from "./icons/BadgeCheckIcon"
import { AccountDetails } from "./AccountDetails"
import { AnimatePresence } from "motion/react"
import { FileUpload } from "./FileUpload"
import { Confirmation } from "./Confirmation"
import { Finished } from "./Finished"

export const MultiStepForm = () => {
  const [current, setCurrent] = useState(0)
  const formSteps = [
    <PersonalInfo key={0} setCurrent={setCurrent} />,
    <AccountDetails key={1} setCurrent={setCurrent} />,
    <FileUpload key={2} setCurrent={setCurrent} />,
    <Confirmation key={3} setCurrent={setCurrent} />,
    <Finished key={4} setCurrent={setCurrent} />,
  ]
  const formHeadings = [
    "Personal Info",
    "Account Info",
    "File Upload",
    "Confirmation",
  ]
  return (
    <div>
      <div className="max-w-[672px] mx-auto px-4">
        <div className="flex items-center justify-between md:gap-3 md:text-sm text-[11px] text-[#6B7280] font-medium md:mb-12 mb-7">
          {formHeadings?.map((content, index) => {
            const isActive = index <= current
            const isPrev = index < current
            return (
              <React.Fragment key={index}>
                <div
                  className={`flex items-center flex-col gap-[6px] ${
                    isActive ? "text-primary" : ""
                  }`}
                  // key={index}
                  // onClick={() => setCurrent(index)}
                >
                  <p>
                    {isPrev ? <BadgeCheckIcon /> : <span>{index + 1}</span>}
                  </p>
                  <p>{content}</p>
                </div>
                {index < formHeadings.length - 1 && (
                  <div
                    className={`md:w-16 w-[8px] h-[1px] ${
                      isPrev ? "bg-primary" : "bg-[#E5E7EB]"
                    }`}
                    // key={`${index}-line`}
                  />
                )}
              </React.Fragment>
            )
          })}
        </div>
      </div>
      <div className="overflow-x-hidden">
        <AnimatePresence initial={true}>
          <div>{formSteps[current]}</div>
        </AnimatePresence>
      </div>
    </div>
  )
}
