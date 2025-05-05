"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertCircle, Loader2, Info } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import adminCredentials from "@/data/admin-credentials.json"

interface LoginFormProps {
  onSuccess: (userData: any) => void
}

export function LoginForm({ onSuccess }: LoginFormProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [showResetRequest, setShowResetRequest] = useState(false)
  const [resetEmail, setResetEmail] = useState("")
  const [resetRequestSent, setResetRequestSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simulate network delay
    setTimeout(() => {
      // Find user with matching email
      const user = adminCredentials.find((user) => user.email === email)

      if (user && user.password === password) {
        setIsLoading(false)
        // Pass user data to parent component
        onSuccess(user)
      } else {
        setIsLoading(false)
        setError("Invalid email or password. Please try again.")
      }
    }, 1500)
  }

  const handleResetRequest = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate network delay
    setTimeout(() => {
      setIsLoading(false)
      setResetRequestSent(true)
      // In a real application, this would send an email or notification
    }, 1500)
  }

  if (showResetRequest) {
    return (
      <div className="space-y-4">
        {resetRequestSent ? (
          <Alert className="bg-green-50 border-green-200">
            <Info className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-600">
              Your password reset request has been submitted. Please contact the system administrator for verification
              and to receive your new password.
            </AlertDescription>
          </Alert>
        ) : (
          <>
            <div className="mb-4 text-sm text-muted-foreground">
              Please enter your email address. Your request will be sent to the system administrator for verification.
            </div>
            <form onSubmit={handleResetRequest} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="reset-email">Email</Label>
                <Input
                  id="reset-email"
                  type="email"
                  placeholder="your.email@trustedally.gov.bd"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  required
                />
              </div>
              <div className="flex gap-2">
                <Button type="submit" className="flex-1" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Request"
                  )}
                </Button>
                <Button type="button" variant="outline" onClick={() => setShowResetRequest(false)} disabled={isLoading}>
                  Back
                </Button>
              </div>
            </form>
          </>
        )}
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="your.email@trustedally.gov.bd"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="password">Password</Label>
        </div>
        <Input
          id="password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Signing in...
          </>
        ) : (
          "Sign in"
        )}
      </Button>

      <div className="text-center">
        <Button
          variant="link"
          size="sm"
          className="text-xs text-muted-foreground"
          onClick={() => setShowResetRequest(true)}
        >
          Forgot password?
        </Button>
      </div>
    </form>
  )
}

