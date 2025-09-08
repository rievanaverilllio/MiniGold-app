"use client"

import Link from "next/link"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-start justify-center py-24 px-4">
        <div className="w-full max-w-md">
          <h1 className="text-center text-5xl font-serif mb-12">Create account</h1>

          <form className="space-y-6">
            <div>
              <label className="block mb-3 text-sm text-muted-foreground">Full name</label>
              <Input name="name" type="text" />
            </div>

            <div>
              <label className="block mb-3 text-sm text-muted-foreground">Email</label>
              <Input name="email" type="email" />
            </div>

            <div>
              <label className="block mb-3 text-sm text-muted-foreground">Password</label>
              <div className="relative">
                <Input name="password" type={showPassword ? "text" : "password"} />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div>
              <Button className="w-full">CREATE ACCOUNT</Button>
            </div>

            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>Already have an account?</span>
              <Link href="/sign-in" className="text-primary underline">Sign in</Link>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}
