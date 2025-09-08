"use client"

import { useState } from "react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

export default function ForgotPassword() {
  const [email, setEmail] = useState("")
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // placeholder: in real app call API to send reset link
    setSent(true)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-start justify-center py-24 px-4">
        <div className="w-full max-w-md">
          <h1 className="text-center text-4xl font-serif mb-6">Forgot password</h1>
          <p className="text-center text-sm text-muted-foreground mb-8">
            Enter your email and we&apos;ll send you a link to reset your password.
          </p>

          {!sent ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block mb-3 text-sm text-muted-foreground">Email</label>
                <Input
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
                />
              </div>

              <div>
                <Button className="w-full" type="submit">
                  Send reset link
                </Button>
              </div>

              <div className="text-sm text-muted-foreground">
                <span>Remembered your password? </span>
                <Link href="/sign-in" className="text-primary underline">Sign in</Link>
              </div>
            </form>
          ) : (
            <div className="rounded-md border border-muted p-6 text-center">
              <h2 className="text-lg font-medium mb-2">Check your email</h2>
              <p className="text-sm text-muted-foreground mb-4">
                If an account with <strong>{email}</strong> exists, we&apos;ve sent a password reset link.
              </p>
              <Link href="/sign-in">
                <Button variant="outline">Back to sign in</Button>
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
