"use client"
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
const loadStateFromLocalStorage = (): UserProfileState => {
  if (typeof window === "undefined") {
    return {
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
    }
  }
  const savedState = localStorage?.getItem("userProfile")
  return savedState
    ? JSON.parse(savedState)
    : {
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
      }
}

const initialState: UserProfileState = loadStateFromLocalStorage()

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
  extraReducers: (builder) => {
    builder.addDefaultCase((state) => {
      if (typeof window !== "undefined") {
        localStorage?.setItem("userProfile", JSON.stringify(state))
      }
    })
  },
})

// Redux store

const store = configureStore({
  reducer: {
    userProfile: userProfileSlice.reducer,
  },
})

// Listening to store changes and save to localStorage
if (typeof window !== "undefined") {
  store.subscribe(() => {
    localStorage?.setItem(
      "userProfile",
      JSON.stringify(store.getState().userProfile)
    )
  })
}

export default store
export const { updateProfileState } = userProfileSlice.actions
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
