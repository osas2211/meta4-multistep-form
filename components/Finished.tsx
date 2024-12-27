"use client"
import React from "react"
import * as motion from "motion/react-client"
import { FileCheckIcon } from "./icons/FileCheckIcon"
import { Button } from "./utilities/Button"

export const Finished = ({
  setCurrent,
}: {
  setCurrent: React.Dispatch<React.SetStateAction<number>>
}) => {
  return (
    <div className="max-w-[627px] mx-auto overflow-hidden">
      <motion.div
        initial={{ y: "20px", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        exit={{ y: "20px", opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className=""
      >
        <div className="h-[340px] w-full flex gap-4 md:gap-4 justify-center flex-col">
          <FileCheckIcon />
          <div>
            <h4 className="md:text-2xl text-lg font-semibold">Verified</h4>
            <p className="#6B7280">
              You have successfully registered your account.
            </p>
          </div>
          <Button className="w-full">Login to your account</Button>
        </div>
      </motion.div>
    </div>
  )
}
