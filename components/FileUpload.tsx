"use client"
import React from "react"
import { Button } from "./utilities/Button"
import { FormLabel, Input } from "./utilities/Input"
import { Select } from "./utilities/Select"
import { InfoIcon } from "./icons/InfoIcon"
import * as motion from "motion/react-client"

export const FileUpload = ({
  setCurrent,
}: {
  setCurrent: React.Dispatch<React.SetStateAction<number>>
}) => {
  const onFinish = () => {
    setCurrent(2)
  }
  return (
    <div className="max-w-[626px] mx-auto overflow-x-hidden">
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: "0%", opacity: 1 }}
        exit={{ x: "-100%", opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="md:text-2xl text-lg font-bold md:mb-6 mb-4 flex items-center gap-2">
          <h2>Upload a profile photo</h2>
          <InfoIcon />
        </div>
        <div>
          <div className="my-4 md:mb-6">
            <div className="grid md:grid-cols-2 gap-3 md:gap-5">
              <FormLabel label="Full Name" name="fullname">
                <Input placeholder="e.g. Bonnie Green" />
              </FormLabel>
              <FormLabel label="Email" name="email">
                <Input placeholder="name@meta4.com" type="email" />
              </FormLabel>
              <FormLabel label="Password" name="password">
                <Input placeholder="••••••••••" type="password" />
              </FormLabel>
              <FormLabel label="Confirm Password" name="confirm_password">
                <Input placeholder="••••••••••" type="password" />
              </FormLabel>

              <FormLabel label="phone" name="phone">
                <Input
                  placeholder="+ 12 345 6789"
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  required
                />
              </FormLabel>
            </div>
          </div>
          <Button className="w-full" onClick={onFinish}>
            Next: Confirmation
          </Button>
        </div>
      </motion.div>
    </div>
  )
}
