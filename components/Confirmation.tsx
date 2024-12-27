"use client"
import React from "react"
import { Button } from "./utilities/Button"
import * as motion from "motion/react-client"
import { InfoIcon } from "./icons/InfoIcon"
import { CodeIcon } from "./icons/CodeIcon"
import { LocationIcon } from "./icons/LocationIcon"
import { EditUserIcon } from "./icons/EditUserIcon"

export const Confirmation = ({
  setCurrent,
}: {
  setCurrent: React.Dispatch<React.SetStateAction<number>>
}) => {
  const onFinish = () => {
    setCurrent(4)
  }
  return (
    <div className="max-w-[1152px] mx-auto overflow-hidden">
      <motion.div
        initial={{ y: "20px", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        exit={{ y: "20px", opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className=""
      >
        <div className="md:text-2xl text-lg font-bold md:mb-6 mb-4 flex items-center gap-2">
          <h2>Personal information</h2>
          <InfoIcon />
        </div>
        <div>
          <div className="my-4 md:mb-6">
            <div className="md:grid md:space-y-0 space-y-3 md:grid-cols-2 gap-3 md:gap-5 pb-5 md:pb-8 border-b-[1px] border-b-[#E5E7EB]">
              <div className="col-span-2">
                <img
                  src={"/next.svg"}
                  className="w-[42px] h-[42px] rounded-full object-cover"
                />
              </div>
              <div>
                <p className="font-medium">Full name</p>
                <p className="text-[#6B7280]">Bonnie Wilson</p>
              </div>
              <div>
                <p className="font-medium">Email</p>
                <p className="text-[#6B7280]">Bonnie Wilson</p>
              </div>
              <div className="max-w-[526px]">
                <p className="font-medium">Biography</p>
                <p className="text-[#6B7280]">
                  Hello, I'm Helene Engels, USA Designer, Creating things that
                  stand out, Featured by Adobe, Figma, Webflow and others, Daily
                  design tips & resources, Exploring Web3.
                </p>
              </div>
              <div>
                <p className="font-medium">Home Address</p>
                <p className="text-[#6B7280] max-w-[418px]">
                  92 Miles Drive, Newark, NJ 07103, California, United States of
                  America
                </p>
              </div>
              <div>
                <p className="font-medium">Country</p>
                <div className="flex gap-2 items-center">
                  <LocationIcon />
                  <p className="">Developer / Bonnie Wilson</p>
                </div>
              </div>
              <div>
                <p className="font-medium">Phone number</p>
                <p className="text-[#6B7280]">Bonnie Wilson</p>
              </div>
              <div>
                <p className="font-medium">Profession</p>
                <div className="flex gap-2 items-center">
                  <CodeIcon />
                  <p className="">Developer / Bonnie Wilson</p>
                </div>
              </div>
              <div>
                <p className="font-medium">Language(s)</p>
                <p className="text-[#6B7280]">Bonnie Wilson</p>
              </div>
            </div>
          </div>

          <div className="py-4 md:pb-10">
            <Button icon={<EditUserIcon />} onClick={() => setCurrent(0)}>
              Edit
            </Button>
          </div>
          <div className="max-w-[672px] mx-auto">
            <Button className="w-full" onClick={onFinish}>
              Finish
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
