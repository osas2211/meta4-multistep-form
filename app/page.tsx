"use client"
import { MultiStepForm } from "@/components/MultiStepForm"
import store from "@/context/store/redux-store"
import { Provider } from "react-redux"

export default function Home() {
  return (
    <Provider store={store}>
      <div className="py-10 md:pt-[15vh] px-4 min-h-screen text-[#111928] md:text-[16px] text-sm">
        <MultiStepForm />
      </div>
    </Provider>
  )
}
