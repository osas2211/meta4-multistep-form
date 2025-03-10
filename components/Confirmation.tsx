"use client"
import React from "react"
import { Button } from "./utilities/Button"
import * as motion from "motion/react-client"
import { InfoIcon } from "./icons/InfoIcon"
import { CodeIcon } from "./icons/CodeIcon"
import { LocationIcon } from "./icons/LocationIcon"
import { EditUserIcon } from "./icons/EditUserIcon"
import { useDispatch, useSelector } from "react-redux"
import {
  AppDispatch,
  RootState,
  updateProfileState,
} from "@/context/store/redux-store"

export const Confirmation = ({
  setCurrent,
}: {
  setCurrent: React.Dispatch<React.SetStateAction<number>>
}) => {
  const userProfile = useSelector((state: RootState) => state.userProfile)
  const dispatch = useDispatch<AppDispatch>()
  const onFinish = () => {
    setCurrent(4)
    dispatch(
      updateProfileState({
        profession: "",
        profession_title: "",
        fullname: "",
        email: "",
        password: "",
        language: "",
        phone: "",
        country: "",
        biography: "",
        address: "",
        allow_email_marketing: false,
        accept_terms: false,
        avatar: "",
      })
    )
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
                  src={userProfile?.avatar}
                  className="w-[42px] h-[42px] rounded-full object-cover"
                />
              </div>
              <div>
                <p className="font-medium">Full name</p>
                <p className="text-[#6B7280]">{userProfile?.fullname}</p>
              </div>
              <div>
                <p className="font-medium">Email</p>
                <p className="text-[#6B7280]">{userProfile?.email}</p>
              </div>
              <div className="max-w-[526px]">
                <p className="font-medium">Biography</p>
                <div
                  className="text-[#6B7280]"
                  dangerouslySetInnerHTML={{ __html: userProfile?.biography }}
                ></div>
              </div>
              <div>
                <p className="font-medium">Home Address</p>
                <p className="text-[#6B7280] max-w-[418px]">
                  {userProfile?.address}
                </p>
              </div>
              <div>
                <p className="font-medium">Country</p>
                <div className="flex gap-2 items-center">
                  <LocationIcon />
                  <p className="">{userProfile?.country}</p>
                </div>
              </div>
              <div>
                <p className="font-medium">Phone number</p>
                <p className="text-[#6B7280]">{userProfile?.phone}</p>
              </div>
              <div>
                <p className="font-medium">Profession</p>
                <div className="flex gap-2 items-center">
                  <CodeIcon />
                  <p className="">
                    {userProfile?.profession} / {userProfile?.profession_title}
                  </p>
                </div>
              </div>
              <div>
                <p className="font-medium">Language(s)</p>
                <p className="text-[#6B7280]">{userProfile?.language}</p>
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
