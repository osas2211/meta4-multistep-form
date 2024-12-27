"use client"
import React, { useEffect, useRef, useState } from "react"
import { Button } from "./utilities/Button"
import { FileInput } from "./utilities/Input"
import { InfoIcon } from "./icons/InfoIcon"
import * as motion from "motion/react-client"
import { useProgress } from "@/hooks/useProgress"
import { CheckIcon } from "./icons/CheckIcon"
import { useDispatch, useSelector } from "react-redux"
import {
  AppDispatch,
  RootState,
  updateProfileState,
} from "@/context/store/redux-store"

export const FileUpload = ({
  setCurrent,
}: {
  setCurrent: React.Dispatch<React.SetStateAction<number>>
}) => {
  const scope = useRef(null)
  const [progress, playProgress] = useProgress()

  const userProfile = useSelector((state: RootState) => state.userProfile)
  const dispatch = useDispatch<AppDispatch>()
  const [isError, setIsError] = useState(false)
  const onFinish = () => {
    if (!userProfile?.avatar) {
      setIsError(true)
    } else {
      setCurrent(3)
    }
  }
  const [imageFile, setImageFile] = useState<Blob>()
  useEffect(() => {
    playProgress(0, 100)
  }, [imageFile])

  return (
    <div className="max-w-[626px] mx-auto overflow-hidden" ref={scope}>
      <motion.div
        initial={{ y: "20px", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        exit={{ y: "20px", opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className=""
      >
        <div className="md:text-2xl text-lg font-bold md:mb-6 mb-4 flex items-center gap-2">
          <h2>Upload a profile photo</h2>
          <InfoIcon />
        </div>
        <div>
          <div className="my-4 md:mb-6 pb-4 md:pb-6 border-b-[1px] border-[#E5E7EB]">
            <div className="w-full">
              <FileInput
                onChange={(e) => {
                  if (e.target.files![0]) {
                    setImageFile(e.target.files![0])
                    dispatch(
                      updateProfileState({
                        avatar: URL?.createObjectURL(e.target.files![0]),
                      })
                    )
                    setIsError(false)
                  }
                }}
                accept=".png,.svg,.jpg,.jpeg"
              />
            </div>

            <div className="pt-4 transition-all">
              {imageFile && (
                <div>
                  <div className="flex items-center gap-3 justify-between flex-wrap">
                    <div className="text-sm font-medium flex gap-3 items-center">
                      <img
                        src={URL?.createObjectURL(imageFile)}
                        className="w-[42px] h-[42px] rounded-full object-cover"
                      />
                      <div>
                        <p>{(imageFile as any)?.name}</p>
                        <p className="text-[#6B7280] font-normal text-xs">
                          {Number(imageFile.size / 1024000).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                    {progress >= 100 && <CheckIcon />}
                  </div>
                  {progress < 100 && (
                    <div className="w-full -mt-2">
                      <p className="text-end text-xs text-[#6b7280]">
                        {progress}%
                      </p>
                      <div className="mt-1 h-[6px] w-full bg-[#E5E7EB] rounded-md relative overflow-x-hidden">
                        <div
                          className="bg-primary h-full absolute top-0 left-0 rounded-md"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          <div>
            {isError && (
              <div className="flex gap-2 items-center text-sm">
                <InfoIcon color="#ef4444" />
                <p className="text-red-500 font-semibold mb-1">
                  Please upload image
                </p>
              </div>
            )}
            <Button className="w-full" onClick={onFinish}>
              Next: Confirmation
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
