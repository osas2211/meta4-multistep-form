"use client"
import React, { useRef, useState } from "react"
import { PaletteIcon } from "./icons/PaletteIcon"
import { ArrowRight } from "./icons/ArrowRight"
import { CodeIcon } from "./icons/CodeIcon"
import { Button } from "./utilities/Button"
import { motion } from "motion/react"
import { InfoIcon } from "./icons/InfoIcon"
import { FormLabel, Input } from "./utilities/Input"
import { Radio, RadioGroup } from "./utilities/Radio"

export const PersonalInfo = ({
  setCurrent,
}: {
  setCurrent: React.Dispatch<React.SetStateAction<number>>
}) => {
  const scope: React.Ref<HTMLDivElement> = useRef(null)
  const onFinish = () => {
    setCurrent(1)
  }

  const professionOptions = [
    {
      icon: <PaletteIcon />,
      title: "I'm a Designer",
      options: ["UI & UX designer", "Brand designer", "3D designer"],
    },
    {
      icon: <CodeIcon />,
      title: "I'm a Developer",
      options: ["Front-end developer", "Back-end developer", "Full stack"],
    },
  ]

  const [selectedProfession, setSelectedProfession] = useState(-1)

  const variants = {
    active: {
      height: "auto",
      opacity: 1,
    },
    inactive: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.2 },
    },
  }

  return (
    <motion.div
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: "0%", opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
      transition={{ duration: 0.4, ease: "anticipate" }}
      className="overflow-x-hidden"
      ref={scope}
    >
      <h2 className="md:text-2xl text-lg font-bold md:mb-6 mb-4">
        Tell us about yourself
      </h2>
      <div>
        <p className="text-[#6B7280]">What is your profession?</p>
        <div className="my-4 md:mb-6 space-y-4">
          {professionOptions?.map((profession, index) => {
            const isActive = selectedProfession === index
            const selectProfession = () => {
              setSelectedProfession(index)
            }
            return (
              <div key={index}>
                <motion.div
                  layout
                  onClick={selectProfession}
                  className={`${
                    isActive
                      ? "border-primary !text-primary bg-[rgba(209,63,0,0.01)]"
                      : "text-[#6B7280] bg-[#F9FAFB]"
                  }  relative z-[20] rounded-md px-6 py-4 w-full flex items-center justify-between gap-4 hover:border-primary border-[2px] border-transparent transition-all cursor-pointer`}
                >
                  <div className="flex items-center gap-[10px]">
                    <div className={`${isActive ? "*:fill-primary" : ""}`}>
                      {profession.icon}
                    </div>
                    <p className="">{profession.title}</p>
                  </div>
                  <div
                    className={`${
                      isActive ? "rotate-90" : ""
                    } transition-all duration-[0.3s]`}
                  >
                    <ArrowRight
                      id="arrow-1"
                      color={isActive ? "#d13f00" : ""}
                    />
                  </div>
                </motion.div>

                <motion.div
                  variants={variants}
                  animate={isActive ? "active" : "inactive"}
                >
                  <div className="md:pt-3 pt-2">
                    <div className="flex gap-2 items-center">
                      <p>Select category</p>
                      <InfoIcon />
                    </div>
                    <div className="max-w-[592px] mx-auto pt-2 ">
                      <RadioGroup>
                        {profession?.options?.map((option, index_) => {
                          return (
                            <Radio
                              key={index_}
                              label={option}
                              name={`category-${index}`}
                              id={option}
                              value={option}
                            />
                          )
                        })}
                      </RadioGroup>
                    </div>
                  </div>
                </motion.div>
              </div>
            )
          })}
        </div>

        <Button className="w-full relative z-[20]" onClick={onFinish}>
          Next: Account Info
        </Button>
      </div>
    </motion.div>
  )
}
