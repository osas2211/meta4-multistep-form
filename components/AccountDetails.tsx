"use client"
import React from "react"
import { Button } from "./utilities/Button"
import { FormLabel, Input } from "./utilities/Input"
import { Select } from "./utilities/Select"
import { InfoIcon } from "./icons/InfoIcon"
import * as motion from "motion/react-client"
import { Editor } from "@tinymce/tinymce-react"
import { Checkbox } from "./utilities/Radio"
import { Formik } from "formik"
import { useDispatch, useSelector } from "react-redux"
import {
  AppDispatch,
  RootState,
  updateProfileState,
} from "@/context/store/redux-store"
import { account_details_validator } from "@/utils/accountDetailsValidator"

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
  const userProfile = useSelector((state: RootState) => state.userProfile)

  const dispatch = useDispatch<AppDispatch>()

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
          <Formik
            initialValues={userProfile}
            validate={account_details_validator}
            onSubmit={(values, { setSubmitting }) => {
              const { confirm_password, password, ...data } = values
              setCurrent(2)
              setSubmitting(false)
              dispatch(updateProfileState(data))
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              setFieldValue,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                <div className="my-4 md:mb-6">
                  <div className="md:grid md:space-y-0 space-y-3 md:grid-cols-2 gap-3 md:gap-5">
                    <FormLabel label="Full Name" name="fullname">
                      <Input
                        placeholder="e.g. Bonnie Green"
                        name="fullname"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.fullname}
                      />
                      <small className="text-xs text-red-500">
                        {errors.fullname && touched.fullname && errors.fullname}
                      </small>
                    </FormLabel>
                    <FormLabel label="Email" name="email">
                      <Input
                        placeholder="name@meta4.com"
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                      <small className="text-xs text-red-500">
                        {errors.email && touched.email && errors.email}
                      </small>
                    </FormLabel>
                    <FormLabel label="Password" name="password">
                      <Input
                        placeholder="••••••••••"
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                      />
                      <small className="text-xs text-red-500">
                        {errors.password && touched.password && errors.password}
                      </small>
                    </FormLabel>
                    <FormLabel label="Confirm Password" name="confirm_password">
                      <Input
                        placeholder="••••••••••"
                        type="password"
                        name="confirm_password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.confirm_password}
                      />
                      <small className="text-xs text-red-500">
                        {errors.confirm_password &&
                          touched.confirm_password &&
                          errors.confirm_password}
                      </small>
                    </FormLabel>
                    <FormLabel
                      label={"Select language"}
                      icon={<InfoIcon />}
                      name="language"
                    >
                      <Select
                        options={languageOptions}
                        name="language"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.language}
                      />
                      <small className="text-xs text-red-500">
                        {errors.language && touched.language && errors.language}
                      </small>
                    </FormLabel>
                    <FormLabel label="Phone" name="phone">
                      <Input
                        placeholder="+ 12 345 6789"
                        type="tel"
                        // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        name="phone"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phone}
                      />
                      <small className="text-xs text-red-500">
                        {errors.phone && touched.phone && errors.phone}
                      </small>
                    </FormLabel>
                    <FormLabel
                      label={"Country"}
                      icon={<InfoIcon />}
                      name="country"
                    >
                      <Select
                        options={countryOptions}
                        name="country"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.country}
                      />
                      <small className="text-xs text-red-500">
                        {errors.country && touched.country && errors.country}
                      </small>
                    </FormLabel>
                    <FormLabel label="Home address" name="address">
                      <Input
                        placeholder="92 Miles Drive, Newark, NJ 0..."
                        name="address"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.address}
                      />
                      <small className="text-xs text-red-500">
                        {errors.address && touched.address && errors.address}
                      </small>
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
                          tagName="biography"
                          onChange={(e) =>
                            setFieldValue("biography", e.target.getContent())
                          }
                          onBlur={handleBlur}
                          initialValue={values.biography}
                        />
                        <small className="text-xs text-red-500">
                          {errors.biography &&
                            touched.biography &&
                            errors.biography}
                        </small>
                      </FormLabel>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-5 space-y-4">
                    <div>
                      <Checkbox
                        label={
                          <p className="text-[#6B7280]">
                            By signing up, you are creating a Meta4 account, and
                            you agree to Meta4{" "}
                            <span className="text-primary">Terms of Use</span>{" "}
                            and{" "}
                            <span className="text-primary">
                              Privacy Policy.
                            </span>
                          </p>
                        }
                        id={"terms"}
                        name="accept_terms"
                        onChange={(e) =>
                          setFieldValue("accept_terms", e.target.checked)
                        }
                        onBlur={handleBlur}
                        defaultChecked={values?.accept_terms}
                      />
                      <small className="text-xs text-red-500">
                        {errors.accept_terms &&
                          touched.accept_terms &&
                          errors.accept_terms}
                      </small>
                    </div>
                    <div>
                      <Checkbox
                        label={
                          <p className="text-[#6B7280]">
                            Please don&apos;t send me any marketing
                            communications.
                          </p>
                        }
                        id={"marketing"}
                        name="allow_email_marketing"
                        onChange={(e) =>
                          setFieldValue(
                            "allow_email_marketing",
                            e.target.checked
                          )
                        }
                        onBlur={handleBlur}
                        defaultChecked={values?.allow_email_marketing}
                      />
                    </div>
                  </div>
                </div>
                <Button className="w-full" type="submit">
                  Next: File upload
                </Button>
              </form>
            )}
          </Formik>
        </div>
      </motion.div>
    </div>
  )
}
