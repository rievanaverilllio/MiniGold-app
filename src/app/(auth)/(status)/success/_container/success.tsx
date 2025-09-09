"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

export default function SuccessStatus() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-24 px-4">
        <div className="w-full max-w-md text-center">
          <h1 className="text-4xl font-semibold mb-4">Success</h1>
          <p className="text-muted-foreground mb-6">Your action completed successfully. Check your email for next steps.</p>
          <Link href="/auth/sign-in">
            <Button>Back to sign in</Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
