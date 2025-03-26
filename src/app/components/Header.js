"use client"

import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ArrowRight, MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { CTAModal } from './CTAModal'

export const Header = () => {
  const { theme, setTheme } = useTheme()

  return (
    <header className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="px-6 flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src="/blitz-logo.png" alt="Blitz Logo" width={32} height={32} />
          <span className="font-semibold">Blitz</span>
        </div>
        
        <div className="flex items-center gap-4">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
          {/* CTA Button */}
        <div className="flex justify-center items-center">
        <CTAModal 
          trigger={
            <Button variant="outline">
              Join Waitlist
            </Button>
          }
        />
        </div>
        </div>
      </div>
    </header>
  )
}
