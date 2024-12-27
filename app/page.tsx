import { MultiStepForm } from "@/components/MultiStepForm"
import Image from "next/image"

export default function Home() {
  return (
    <div className="py-10 md:pt-[15vh] px-4 min-h-screen text-[#111928] md:text-[16px] text-sm">
      <MultiStepForm />
    </div>
  )
}
