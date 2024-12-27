import { UserProfileState } from "@/context/store/redux-store"

export const account_details_validator = (
  values: Partial<UserProfileState>
) => {
  const errors: any = {}
  if (/^\s*$/.test(values?.email as string)) {
    errors.email = "Email is Required"
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values?.email as string)
  ) {
    errors.email = "Invalid email address"
  }
  if (/^\s*$/.test(values?.fullname as string)) {
    errors.fullname = "Full Name is Required"
  }
  if (/^\s*$/.test(values?.password as string)) {
    errors.password = "Password is Required"
  }
  if (values?.confirm_password !== values?.password) {
    errors.confirm_password = "Passwords does not match"
  }
  if (/^\s*$/.test(values?.language as string)) {
    errors.language = "Language is Required"
  }
  if (/^\s*$/.test(values?.country as string)) {
    errors.country = "Country is Required"
  }
  if (/^\s*$/.test(values?.biography as string)) {
    errors.biography = "Biography is Required"
  }
  if (/^\s*$/.test(values?.phone as string)) {
    errors.phone = "Phone is Required"
  }
  if (/^\s*$/.test(values?.address as string)) {
    errors.address = "Address is Required"
  }
  if (!values?.accept_terms) {
    errors.accept_terms = "Please accept terms"
  }

  return errors
}
