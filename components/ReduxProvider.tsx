"use client"
import store from "@/context/store/redux-store"
import React, { ReactNode } from "react"
import { Provider } from "react-redux"

export const ReduxProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Provider store={store}>{children}</Provider>
    </>
  )
}
