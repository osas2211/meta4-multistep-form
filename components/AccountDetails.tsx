"use client"
import React from "react"
import { Button } from "./utilities/Button"
import { FormLabel, Input } from "./utilities/Input"
import { Select } from "./utilities/Select"
import { InfoIcon } from "./icons/InfoIcon"
import * as motion from "motion/react-client"
import { Editor } from "@tinymce/tinymce-react"
import { Checkbox } from "./utilities/Radio"

const languageOptions = [
  { value: "English", label: "English" },
  { value: "Igbo", label: "Igbo" },
  { value: "Yoruba", label: "Yoruba" },
  { value: "Hausa", label: "Hausa" },
  { value: "French", label: "French" },
  { value: "Spanish", label: "Spanish" },
]

const countryOptions = [
  { value: "Nigeria", label: "Nigeria" },
  { value: "USA", label: "USA" },
  { value: "Ghana", label: "Ghana" },
  { value: "Kenya", label: "Kenya" },
  { value: "England", label: "England" },
  { value: "Germany", label: "Germany" },
  { value: "Canada", label: "Canada" },
]

export const AccountDetails = ({
  setCurrent,
}: {
  setCurrent: React.Dispatch<React.SetStateAction<number>>
}) => {
  const onFinish = () => {
    setCurrent(2)
  }
  return (
    <div className="max-w-[672px] mx-auto overflow-hidden">
      <motion.div
        initial={{ y: "20px", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        exit={{ y: "20px", opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className=""
      >
        <h2 className="md:text-2xl text-lg font-bold md:mb-6 mb-4">
          Account Details
        </h2>
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
              <FormLabel
                label={"Select language"}
                icon={<InfoIcon />}
                name="language"
              >
                <Select options={languageOptions} />
              </FormLabel>
              <FormLabel label="phone" name="phone">
                <Input
                  placeholder="+ 12 345 6789"
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  required
                />
              </FormLabel>
              <FormLabel label={"Country"} icon={<InfoIcon />} name="country">
                <Select options={countryOptions} />
              </FormLabel>
              <FormLabel label="Home address" name="address">
                <Input placeholder="92 Miles Drive, Newark, NJ 0..." />
              </FormLabel>
              <div className="col-span-2 w-full">
                <FormLabel
                  label={"Tell us something interesting about you"}
                  icon={<InfoIcon />}
                  name="about"
                  className="w-full"
                >
                  <Editor
                    apiKey={process.env.NEXT_PUBLIC_TINY_MCE_API_KEY}
                    init={{
                      placeholder: "write text here..",
                      height: 256,
                      plugins:
                        "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount",
                      toolbar:
                        "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",
                    }}
                  />
                </FormLabel>
              </div>
            </div>
            <div className="mt-4 md:mt-5 space-y-4">
              <div>
                <Checkbox
                  label={
                    <p className="text-[#6B7280]">
                      By signing up, you are creating a Meta4 account, and you
                      agree to Meta4{" "}
                      <span className="text-primary">Terms of Use</span> and{" "}
                      <span className="text-primary">Privacy Policy.</span>
                    </p>
                  }
                  id={"terms"}
                />
              </div>
              <div>
                <Checkbox
                  label={
                    <p className="text-[#6B7280]">
                      Please don&apos;t send me any marketing communications.
                    </p>
                  }
                  id={"marketing"}
                />
              </div>
            </div>
          </div>
          <Button className="w-full" onClick={onFinish}>
            Next: File upload
          </Button>
        </div>
      </motion.div>
    </div>
  )
}
