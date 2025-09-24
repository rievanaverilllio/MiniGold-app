"use client"

import Link from "next/link"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

export default function SignIn() {
	const [showPassword, setShowPassword] = useState(false)
	return (
		<div className="min-h-screen flex flex-col">
			<Navbar />
			<main className="flex-1 flex items-start justify-center py-24 px-4">
				<div className="w-full max-w-md">
				<h1 className="text-center text-5xl font-serif mb-12">Sign in</h1>

				<form className="space-y-6">
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
						<div className="mt-2 text-right">
							<Link href="/forgot-password" className="text-sm text-primary underline">Forgot password?</Link>
						</div>
					</div>

					<div>
						<Button className="w-full">SIGN IN</Button>
					</div>

					<div className="flex items-center justify-between text-sm text-muted-foreground">
						<span>Don&apos;t have an account?</span>
						<Link href="/sign-up" className="text-primary underline">Sign Up</Link>
					</div>
				</form>
				</div>
			</main>
			<Footer />
		</div>
	)
}
