import { UserProfileState } from "@/context/store/redux-store"

export const account_details_validator = (
  values: Partial<UserProfileState>
) => {
  const errors: any = {}
  if (!values.email) {
    errors.email = "Email is Required"
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address"
  }
  if (!values.fullname) {
    errors.fullname = "Full Name is Required"
  }
  if (!values.password) {
    errors.password = "Password is Required"
  }
  if (values.confirm_password !== values.password) {
    errors.confirm_password = "Passwords does not match"
  }
  if (!values.language) {
    errors.language = "Language is Required"
  }
  if (!values.country) {
    errors.country = "Country is Required"
  }
  if (!values.biography) {
    errors.biography = "Biography is Required"
  }
  if (!values.phone) {
    errors.phone = "Phone is Required"
  }
  if (!values.address) {
    errors.address = "Address is Required"
  }
  if (!values.accept_terms) {
    errors.accept_terms = "Please accept terms"
  }

  return errors
}
