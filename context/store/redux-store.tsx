import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit"

export interface UserProfileState {
  profession: "Developer" | "Designer" | ""
  profession_title: string
  fullname: string
  email: string
  password: string
  confirm_password?: string
  language: string
  phone: string
  country: string
  biography: string
  address: string
  allow_email_marketing: boolean
  accept_terms: boolean
  avatar: string
}

// Initial State
const initialState: UserProfileState = {
  profession: "",
  profession_title: "",
  fullname: "",
  email: "",
  password: "",
  language: "English",
  phone: "",
  country: "Nigeria",
  biography: "",
  address: "",
  allow_email_marketing: false,
  accept_terms: false,
  avatar: "",
}

// Store Slice
const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    updateProfileState(
      state,
      action: PayloadAction<Partial<UserProfileState>>
    ) {
      Object.assign(state, action.payload)
    },
  },
})

// Redux store
const store = configureStore({
  reducer: {
    userProfile: userProfileSlice.reducer,
  },
})

export default store
export const { updateProfileState } = userProfileSlice.actions
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
