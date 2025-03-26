import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { RocketIcon } from "lucide-react"

export function CTAModal({ trigger }) {
  const [email, setEmail] = useState("")
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    // Add form submission logic here TODO
    console.log("Submitted email:", email)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || (
          <Button className="gap-2">
            <RocketIcon className="h-4 w-4" />
            Request Access
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Join the waitlist</DialogTitle>
          <DialogDescription>
            Be among the first to experience AI-powered content growth across platforms.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full gap-2">
            <RocketIcon className="h-4 w-4" />
            Join Waitlist
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
} 