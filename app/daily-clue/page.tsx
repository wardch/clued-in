

import { SignedIn, UserButton } from "@clerk/nextjs/app-beta"
// import { useState } from "react"
// import { UserButton } from "@clerk/nextjs"

export default function Page() {
  // const [attemptCount, setAttemptCount] = useState(0)
  
  return (
    <main className="bg-slate-100 flex min-h-screen flex-col items-center p-4 text-black">
      <div className="flex w-full flex-row-reverse">
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
      <p className="">Daily Clue</p>
      <p className="">The teacher laughs while making toast (8)</p>
      <p>Current attempt count: 0</p>
    </main>
  )
}
